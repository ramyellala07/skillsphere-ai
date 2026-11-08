import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, SlidersHorizontal } from 'lucide-react'
import { GlassCard, Input, Select, Badge, Button } from '../components/ui.jsx'
import { ALL_EVENTS } from '../data/mockData.js'

export default function Discovery() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [diff, setDiff] = useState('All')
  const [mode, setMode] = useState('All')
  const cats = ['All', ...new Set(ALL_EVENTS.map(e => e.category))]
  const filtered = useMemo(() => ALL_EVENTS.filter(e => {
    if (q && !e.title.toLowerCase().includes(q.toLowerCase()) && !e.organizer.toLowerCase().includes(q.toLowerCase())) return false
    if (cat !== 'All' && e.category !== cat) return false
    if (diff !== 'All' && e.difficulty !== diff) return false
    if (mode !== 'All' && e.mode !== mode) return false
    return true
  }), [q, cat, diff, mode])

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Workshop Discovery</h1>
        <p className="text-muted mt-1">Search, filter and explore ongoing registration opportunities.</p>
      </div>
      <GlassCard className="mb-6">
        <div className="grid md:grid-cols-4 gap-3">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <Input value={q} onChange={e => setQ(e.target.value)} placeholder="Search by title or organizer..." className="pl-9" />
          </div>
          <Select value={cat} onChange={e => setCat(e.target.value)}>
            {cats.map(c => <option key={c}>{c}</option>)}
          </Select>
          <Select value={diff} onChange={e => setDiff(e.target.value)}>
            <option>All</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option>
          </Select>
          <Select value={mode} onChange={e => setMode(e.target.value)}>
            <option>All</option><option>Online</option><option>Offline</option><option>Hybrid</option>
          </Select>
        </div>
      </GlassCard>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(w => (
          <GlassCard key={w.id}>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="blue">{w.category}</Badge>
              <Badge variant={w.difficulty === 'Beginner' ? 'green' : w.difficulty === 'Intermediate' ? 'amber' : 'red'}>{w.difficulty}</Badge>
            </div>
            <div className="font-semibold mt-1">{w.title}</div>
            <div className="text-xs text-muted mt-1">{w.organizer} · {w.mode} · {w.duration}</div>
            <div className="mt-3">
              <div className="flex justify-between text-xs text-muted mb-1"><span>Seats</span><span>{w.registered}/{w.capacity}</span></div>
              <div className="progress"><span style={{ width: (w.registered / w.capacity * 100) + '%' }} /></div>
            </div>
            <div className="text-xs text-muted mt-2">Reg closes {w.regClose}</div>
            <div className="flex gap-2 mt-4">
              <Link to={`/student/event/${w.id}`} className="btn btn-secondary text-xs flex-1">Details</Link>
              <Link to={`/student/register/${w.id}`} className="btn btn-primary text-xs flex-1">Register</Link>
            </div>
          </GlassCard>
        ))}
      </div>
      {filtered.length === 0 && <div className="text-center text-muted mt-10">No events match your filters.</div>}
    </div>
  )
}