import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User } from 'lucide-react'
import { GlassCard, Button, Badge } from '../components/ui.jsx'
import { STUDENT, ALL_EVENTS, MILESTONES, deadlineTasks } from '../data/mockData.js'

const SUGGESTED = [
  'Which ongoing workshop best matches my Python projects?',
  'What will I learn in the Generative AI Bootcamp?',
  'Compare the AI and Data Science workshops.',
  'Is this workshop suitable for a beginner?',
  'What should I learn before attending this hackathon?',
  'Which upcoming submission deadline should I focus on?',
  'Suggest a learning path after completing this workshop.',
]

function respond(q) {
  const lq = q.toLowerCase()
  if (lq.includes('python') && lq.includes('match')) return `Based on your profile, "Machine Learning Fundamentals" and "Generative AI Bootcamp" are the strongest matches. Your Python projects and AI coursework align well. (Demo assistant, grounded in mock data.)`
  if (lq.includes('generative ai bootcamp') && lq.includes('learn')) return `In the Generative AI Bootcamp you'll learn: Build LLM apps, Prompt engineering, RAG pipelines. Topics include LLMs, Prompting, RAG, Embeddings. Prerequisites: Python basics, Intro to ML.`
  if (lq.includes('compare') && lq.includes('ai') && lq.includes('data')) return `Generative AI is the strongest match for your Python and AI coursework. Data Science may be a useful alternative if you want to strengthen analytics. Check prerequisites and schedule before deciding.`
  if (lq.includes('beginner')) return `Beginner-friendly options in the catalogue include Cybersecurity Essentials, UI/UX Design Sprint, Cloud Computing Basics and Robotics with Arduino. They have accessible prerequisites.`
  if (lq.includes('before') && lq.includes('hackathon')) return `For InnovateX Hackathon, recommended prep: Python/JS basics, a team of 3-4, and reviewing the PPT and GitHub submission guidelines. Milestones: PPT (6 Nov), Repo (8 Nov), Prototype (10 Nov), Final (11 Nov).`
  if (lq.includes('deadline')) return `Your next upcoming deadline: ${deadlineTasks().filter(t=>!t.completed)[0]?.title || 'none'} due ${deadlineTasks().filter(t=>!t.completed)[0]?.due || '—'}. Focus on submitting before the due date.`
  if (lq.includes('learning path')) return `Suggested path: Machine Learning Fundamentals → Generative AI Bootcamp → NLP with Python. This builds on your Python and AI coursework.`
  return `I can help with workshop details, comparisons, prerequisites and deadlines. Try one of the suggested questions below. (Demo assistant — labels itself as simulated; a real LLM would use retrieval from trusted records.)`
}

export default function SkillBot() {
  const [msgs, setMsgs] = useState([{ role: 'bot', text: 'Hi! I\'m SkillBot, your workshop assistant (demo). Ask me about events, comparisons or deadlines.' }])
  const [input, setInput] = useState('')
  const endRef = useRef(null)
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

  const send = (text) => {
    const q = (text || input).trim()
    if (!q) return
    setMsgs(m => [...m, { role: 'user', text: q }])
    setInput('')
    setTimeout(() => setMsgs(m => [...m, { role: 'bot', text: respond(q) }]), 400)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">SkillBot AI Assistant</h1>
        <p className="text-muted mt-1">Workshop Q&A, comparison help and learning-path guidance. <Badge variant="amber">Demo assistant</Badge></p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GlassCard className="flex flex-col h-[560px]">
            <div className="flex-1 overflow-y-auto space-y-3 p-2">
              {msgs.map((m, i) => (
                <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
                  {m.role === 'bot' && <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center shrink-0"><Bot size={16} /></div>}
                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-purple-500/20 border border-purple-500/30' : 'bg-white/5 border border-white/10'}`}>{m.text}</div>
                  {m.role === 'user' && <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0"><User size={16} /></div>}
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="flex gap-2 pt-3 border-t border-white/10">
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask about workshops..." className="input flex-1" />
              <Button onClick={() => send()}><Send size={16} /></Button>
            </div>
          </GlassCard>
        </div>
        <div>
          <GlassCard>
            <div className="font-semibold mb-3">Suggested questions</div>
            <div className="space-y-2">
              {SUGGESTED.map(s => (
                <button key={s} onClick={() => send(s)} className="w-full text-left text-sm p-2.5 rounded-xl bg-white/3 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 transition">{s}</button>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}