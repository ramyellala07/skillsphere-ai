import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, FileText, CheckCircle2, XCircle, Shield, RefreshCw, User, Code2 } from 'lucide-react'
import { GlassCard, Button, Badge, Modal } from '../components/ui.jsx'
import { STUDENT } from '../data/mockData.js'

const sources = [
  { key: 'linkedin', name: 'LinkedIn', icon: User, desc: 'Basic profile fields via approved OAuth scopes.', color: 'blue' },
  { key: 'github', name: 'GitHub', icon: Code2, desc: 'Public repos, languages and contribution metadata.', color: 'purple' },
  { key: 'portfolio', name: 'Personal Portfolio', icon: Globe, desc: 'Parse accessible project pages you provide.', color: 'green' },
  { key: 'resume', name: 'Resume / CV', icon: FileText, desc: 'Upload a document and confirm extracted fields.', color: 'amber' },
]

export default function SocialProfile() {
  const [state, setState] = useState(STUDENT.profileSources)
  const [modal, setModal] = useState(null)
  const toggle = (key) => {
    setState(s => ({ ...s, [key]: { ...s[key], connected: !s[key].connected, lastUpdated: !s[key].connected ? '2026-11-08' : s[key].lastUpdated } }))
  }
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Social Profile Connection</h1>
        <p className="text-muted mt-1">Connect authorized sources with explicit consent. Mock/demo connections labelled clearly.</p>
      </div>
      <GlassCard className="mb-6 bg-amber-500/5 border-amber-500/20">
        <div className="flex gap-3">
          <Shield className="text-amber-300 shrink-0" />
          <div className="text-sm">
            <div className="font-semibold text-amber-300">Consent & Privacy (Demo)</div>
            <div className="text-muted mt-1">SkillSphere AI only accesses information through approved integrations or files you provide. You can review, correct, disconnect and delete data at any time. Profile connection is optional for basic event registration. <Badge variant="amber">Simulated</Badge></div>
          </div>
        </div>
      </GlassCard>

      <div className="grid md:grid-cols-2 gap-5">
        {sources.map(s => {
          const st = state[s.key]
          return (
            <GlassCard key={s.key}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center"><s.icon size={20} className="text-purple-300" /></div>
                  <div>
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-xs text-muted">{s.desc}</div>
                  </div>
                </div>
                {st.connected ? <Badge variant="green">Connected</Badge> : <Badge variant="red">Not connected</Badge>}
              </div>
              <div className="text-xs text-muted mb-4">
                Last updated: {st.lastUpdated || '—'} · Consent: {st.consent ? 'Granted' : 'Not granted'}
              </div>
              <div className="flex gap-2">
                <Button variant={st.connected ? 'secondary' : 'primary'} onClick={() => toggle(s.key)} className="flex-1">
                  {st.connected ? 'Disconnect' : 'Connect (Demo)'}
                </Button>
                {st.connected && <Button variant="ghost" onClick={() => setModal(s.key)}><RefreshCw size={16} /></Button>}
              </div>
            </GlassCard>
          )
        })}
      </div>

      <GlassCard className="mt-6">
        <div className="font-semibold mb-2">Extraction pipeline (simulated)</div>
        <div className="grid md:grid-cols-4 gap-3 text-xs">
          {['Consent & authorization', 'Data retrieval', 'Parsing & normalization', 'Student review & feature gen'].map((st, i) => (
            <div key={st} className="p-3 rounded-xl bg-white/3 border border-white/5">
              <div className="text-purple-300 font-bold mb-1">Stage {i+1}</div>
              <div>{st}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      <Modal open={!!modal} onClose={() => setModal(null)} title="Refresh source (Demo)">
        <p className="text-muted text-sm">In a real deployment this re-fetches permitted fields via OAuth. Here it simulates a refresh.</p>
        <div className="mt-4 flex justify-end"><Button onClick={() => setModal(null)}>Done</Button></div>
      </Modal>
    </div>
  )
}