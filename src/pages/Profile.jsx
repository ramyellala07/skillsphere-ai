import React, { useState } from 'react'
import { Edit3, Save, Trash2, Plus } from 'lucide-react'
import { GlassCard, Button, Badge, Input } from '../components/ui.jsx'
import { STUDENT } from '../data/mockData.js'

export default function Profile() {
  const [editing, setEditing] = useState(false)
  const [skills, setSkills] = useState(STUDENT.skills)
  const [removed, setRemoved] = useState([])
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Student Profile Intelligence</h1>
          <p className="text-muted mt-1">Consolidated learning identity with evidence and freshness. <Badge variant="amber">Mock data</Badge></p>
        </div>
        <Button variant={editing ? 'primary' : 'secondary'} onClick={() => setEditing(!editing)}>
          {editing ? <><Save size={16} /> Save</> : <><Edit3 size={16} /> Edit</>}
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-1">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center text-2xl font-bold">{STUDENT.name[0]}</div>
            <div>
              <div className="font-bold text-lg">{STUDENT.name}</div>
              <div className="text-sm text-muted">{STUDENT.degree}</div>
              <div className="text-xs text-muted">{STUDENT.institution}</div>
            </div>
          </div>
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted">Department</span><span>{STUDENT.department}</span></div>
            <div className="flex justify-between"><span className="text-muted">Year</span><span>{STUDENT.year}</span></div>
            <div className="flex justify-between"><span className="text-muted">ID</span><span>{STUDENT.id}</span></div>
            <div className="flex justify-between"><span className="text-muted">Last analysis</span><span>{STUDENT.lastAnalysis}</span></div>
          </div>
        </GlassCard>

        <div className="lg:col-span-2 space-y-6">
          <GlassCard>
            <div className="font-semibold mb-3">Technical Skills & Evidence</div>
            <div className="space-y-3">
              {skills.filter(s => !removed.includes(s.name)).map(s => (
                <div key={s.name} className="flex items-center gap-4 p-3 rounded-xl bg-white/3 border border-white/5">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1"><span className="font-medium">{s.name}</span><span className="text-muted text-xs">{s.evidence}</span></div>
                    <div className="progress"><span style={{ width: s.level + '%' }} /></div>
                  </div>
                  {editing && (
                    <button onClick={() => setRemoved(r => [...r, s.name])} className="btn btn-ghost p-1 text-red-300"><Trash2 size={16} /></button>
                  )}
                </div>
              ))}
              {editing && (
                <button className="btn btn-secondary w-full text-sm"><Plus size={16} /> Add skill</button>
              )}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="font-semibold mb-3">Projects</div>
            <div className="space-y-3">
              {STUDENT.projects.map(p => (
                <div key={p.title} className="p-3 rounded-xl bg-white/3 border border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{p.title}</div>
                    <Badge variant="blue">{p.category}</Badge>
                  </div>
                  <div className="text-xs text-muted mt-1">{p.tech.join(', ')} · {p.link}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard>
              <div className="font-semibold mb-3">Certifications</div>
              {STUDENT.certifications.map(c => (
                <div key={c.name} className="p-2 text-sm">
                  <div className="font-medium">{c.name}</div>
                  <div className="text-xs text-muted">{c.issuer} · {c.date}</div>
                </div>
              ))}
            </GlassCard>
            <GlassCard>
              <div className="font-semibold mb-3">Detected Domains</div>
              <div className="flex flex-wrap gap-2">
                {STUDENT.detectedDomains.map(d => <Badge key={d} variant="purple">{d}</Badge>)}
              </div>
              <div className="mt-4 text-xs text-muted">Interest signals: {STUDENT.interests.join(', ')}</div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}