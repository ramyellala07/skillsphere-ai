import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import { GlassCard, Badge, Button, ProgressBar } from '../components/ui.jsx'
import { recommendEvents, computeCompatibility, STUDENT } from '../data/mockData.js'

const TYPE_LABEL = (score) => score >= 90 ? 'Strong profile match' : score >= 75 ? 'Next-step learning' : score >= 60 ? 'Skill-gap opportunity' : 'Beginner-friendly option'

export default function Recommendations() {
  const [profile, setProfile] = useState('default')
  const recs = recommendEvents()
  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">AI Workshop Recommendations</h1>
          <p className="text-muted mt-1">Ranked by transparent demo score (40% relevance + 25% gap + 20% readiness + 15% preference). <Badge variant="amber">Demo score</Badge></p>
        </div>
        <select value={profile} onChange={e => setProfile(e.target.value)} className="input w-auto">
          <option value="default">Ananya Reddy (default)</option>
          <option value="beginner">Beginner profile (simulated)</option>
        </select>
      </div>

      <div className="space-y-4">
        {recs.map((r, idx) => (
          <GlassCard key={r.id} className="animate-fade">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col items-center justify-center md:w-24">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-sky-500/30 flex flex-col items-center justify-center border border-purple-500/30">
                  <span className="text-2xl font-bold text-gradient">{r.score}</span>
                  <span className="text-[10px] text-muted">/100</span>
                </div>
                <Badge variant="purple" className="mt-2">{TYPE_LABEL(r.score)}</Badge>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">{r.title}</h3>
                  <Badge variant="blue">{r.category}</Badge>
                </div>
                <div className="text-sm text-muted">{r.difficulty} · {r.mode} · {r.duration} · {r.organizer}</div>
                <div className="mt-3 text-sm">
                  <span className="text-purple-300 font-medium">Why recommended: </span>
                  {r.category === 'AI' && 'Python projects and AI coursework align with this workshop.'}
                  {r.category === 'Data' && 'Data-analysis project and SQL experience are relevant.'}
                  {r.category === 'Web' && 'Web technologies and programming projects provide a foundation.'}
                  {r.category !== 'AI' && r.category !== 'Data' && r.category !== 'Web' && 'Some transferable programming knowledge; domain-specific evidence is limited.'}
                </div>
                <div className="mt-2 text-xs text-muted">Skills you may learn: {r.outcomes.join(', ')}</div>
                <div className="mt-2 text-xs text-muted">Prerequisites: {r.prerequisites} · Seats: {r.registered}/{r.capacity}</div>
              </div>
              <div className="flex flex-col gap-2 md:w-40">
                <Link to={`/student/event/${r.id}`} className="btn btn-secondary text-sm">View details</Link>
                <Link to="/student/compare" className="btn btn-ghost text-sm">Compare</Link>
                <Link to={`/student/register/${r.id}`} className="btn btn-primary text-sm">Register</Link>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}