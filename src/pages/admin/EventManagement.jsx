import React, { useState } from 'react'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'
import { GlassCard, Button, Badge, Input, Select, Modal } from '../../components/ui.jsx'
import { ALL_EVENTS } from '../../data/mockData.js'

export default function EventManagement() {
  const [events, setEvents] = useState(ALL_EVENTS)
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({ title: '', category: 'AI', difficulty: 'Beginner', mode: 'Online', capacity: 30 })

  const add = () => {
    if (!form.title) return
    const e = { ...form, id: 'WS-' + (events.length + 1).toString().padStart(3, '0'), registered: 0, organizer: 'Admin', instructor: 'TBD', duration: '2 days', startDate: '2026-12-20', endDate: '2026-12-21', regOpen: '2026-11-08', regClose: '2026-12-15', venue: 'TBD', prerequisites: 'None', outcomes: [], topics: [], department: 'All', yearEligibility: [1,2,3,4], tags: [] }
    setEvents(ev => [...ev, e])
    setModal(false)
    setForm({ title: '', category: 'AI', difficulty: 'Beginner', mode: 'Online', capacity: 30 })
  }

  const remove = (id) => setEvents(ev => ev.filter(e => e.id !== id))

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Workshop & Event Management</h1>
          <p className="text-muted mt-1">Create, edit, publish, pause and close workshops.</p>
        </div>
        <Button onClick={() => setModal(true)}><Plus size={16} /> New Event</Button>
      </div>

      <GlassCard className="overflow-x-auto">
        <table className="table min-w-[900px]">
          <thead>
            <tr>
              <th>Title</th><th>Category</th><th>Difficulty</th><th>Mode</th><th>Capacity</th><th>Registered</th><th>Reg Closes</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(e => (
              <tr key={e.id}>
                <td className="font-medium">{e.title}</td>
                <td><Badge variant="blue">{e.category}</Badge></td>
                <td>{e.difficulty}</td>
                <td>{e.mode}</td>
                <td>{e.capacity}</td>
                <td>{e.registered}</td>
                <td className="text-xs text-muted">{e.regClose}</td>
                <td>
                  <div className="flex gap-1">
                    <button className="btn btn-ghost p-1"><Edit size={14} /></button>
                    <button onClick={() => remove(e.id)} className="btn btn-ghost p-1 text-red-300"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>

      <Modal open={modal} onClose={() => setModal(false)} title="Create New Event">
        <div className="space-y-3">
          <div><label className="text-xs text-muted mb-1 block">Title</label><Input value={form.title} onChange={e => setForm(f => ({...f, title: e.target.value}))} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="text-xs text-muted mb-1 block">Category</label>
              <Select value={form.category} onChange={e => setForm(f => ({...f, category: e.target.value}))}>
                {['AI','Web','Data','Security','Robotics','Design','Cloud','Web3','Mobile','DSA'].map(c => <option key={c}>{c}</option>)}
              </Select></div>
            <div><label className="text-xs text-muted mb-1 block">Difficulty</label>
              <Select value={form.difficulty} onChange={e => setForm(f => ({...f, difficulty: e.target.value}))}>
                <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
              </Select></div>
            <div><label className="text-xs text-muted mb-1 block">Mode</label>
              <Select value={form.mode} onChange={e => setForm(f => ({...f, mode: e.target.value}))}>
                <option>Online</option><option>Offline</option><option>Hybrid</option>
              </Select></div>
            <div><label className="text-xs text-muted mb-1 block">Capacity</label><Input type="number" value={form.capacity} onChange={e => setForm(f => ({...f, capacity: +e.target.value}))} /></div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setModal(false)}>Cancel</Button>
            <Button onClick={add}>Create</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}