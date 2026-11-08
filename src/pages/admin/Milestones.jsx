import React, { useState } from 'react'
import { Plus, Bell } from 'lucide-react'
import { GlassCard, Button, Input, Badge, Select } from '../../components/ui.jsx'
import { ALL_EVENTS, MILESTONES } from '../../data/mockData.js'

export default function Milestones() {
  const [selected, setSelected] = useState(ALL_EVENTS[0].id)
  const [ms, setMs] = useState(MILESTONES[ALL_EVENTS[0].id] || [])
  const [form, setForm] = useState({ title: '', due: '', instructions: '', link: '' })

  const changeEvent = (id) => {
    setSelected(id)
    setMs(MILESTONES[id] || [])
  }
  const add = () => {
    if (!form.title || !form.due) return
    setMs(m => [...m, { id: 'M' + (m.length + 10), ...form }])
    setForm({ title: '', due: '', instructions: '', link: '' })
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Milestone Management</h1>
        <p className="text-muted mt-1">Create submission milestones and reminder policies; notify participants on change.</p>
      </div>

      <GlassCard className="mb-6">
        <label className="text-xs text-muted mb-1 block">Select event</label>
        <Select value={selected} onChange={e => changeEvent(e.target.value)}>
          {ALL_EVENTS.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
        </Select>
      </GlassCard>

      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard>
          <div className="font-semibold mb-3">Existing milestones</div>
          <div className="space-y-3">
            {ms.length === 0 && <div className="text-muted text-sm">No milestones for this event.</div>}
            {ms.map(m => (
              <div key={m.id} className="p-3 rounded-xl bg-white/3 border border-white/5">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{m.title}</div>
                  <Badge variant="amber">Due {m.due}</Badge>
                </div>
                <div className="text-xs text-muted mt-1">{m.instructions}</div>
                {m.link && <div className="text-xs text-purple-300 mt-1">{m.link}</div>}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <div className="font-semibold mb-3">Add new milestone</div>
          <div className="space-y-3">
            <div><label className="text-xs text-muted mb-1 block">Title</label><Input value={form.title} onChange={e => setForm(f => ({...f, title: e.target.value}))} placeholder="e.g. PPT Submission" /></div>
            <div><label className="text-xs text-muted mb-1 block">Due date</label><Input type="date" value={form.due} onChange={e => setForm(f => ({...f, due: e.target.value}))} /></div>
            <div><label className="text-xs text-muted mb-1 block">Instructions</label><Input value={form.instructions} onChange={e => setForm(f => ({...f, instructions: e.target.value}))} /></div>
            <div><label className="text-xs text-muted mb-1 block">Submission link</label><Input value={form.link} onChange={e => setForm(f => ({...f, link: e.target.value}))} /></div>
            <div className="flex items-center gap-2 text-xs text-muted"><Bell size={14} /> Reminder policy: 7, 3, 1 days + deadline day (demo)</div>
            <Button onClick={add} className="w-full"><Plus size={16} /> Add Milestone</Button>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}