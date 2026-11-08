import React, { useState } from 'react'
import { Calendar, CheckCircle2, Clock, AlertTriangle } from 'lucide-react'
import { GlassCard, Badge, Button } from '../components/ui.jsx'
import { deadlineTasks, markTaskComplete, daysUntil } from '../data/mockData.js'

export default function Deadlines() {
  const [filter, setFilter] = useState('all')
  const [tasks, setTasks] = useState(deadlineTasks())
  const refresh = () => setTasks(deadlineTasks())
  const complete = (id) => { markTaskComplete(id); refresh() }

  const filtered = tasks.filter(t => {
    if (filter === 'pending') return !t.completed
    if (filter === 'completed') return t.completed
    if (filter === 'overdue') return !t.completed && daysUntil(t.due) < 0
    return true
  })

  const sections = {
    'Overdue': filtered.filter(t => !t.completed && daysUntil(t.due) < 0),
    'Due Soon (≤3 days)': filtered.filter(t => !t.completed && daysUntil(t.due) >= 0 && daysUntil(t.due) <= 3),
    'Upcoming': filtered.filter(t => !t.completed && daysUntil(t.due) > 3),
    'Completed': filtered.filter(t => t.completed),
  }

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Deadlines</h1>
          <p className="text-muted mt-1">Milestone timeline, countdowns, submission links and status.</p>
        </div>
        <div className="flex gap-2">
          {['all', 'pending', 'overdue', 'completed'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-xl text-sm capitalize ${filter === f ? 'bg-purple-500/20 text-white border border-purple-500/30' : 'bg-white/5 text-muted hover:text-white'}`}>{f}</button>
          ))}
        </div>
      </div>

      {Object.entries(sections).map(([title, items]) => items.length > 0 && (
        <div key={title} className="mb-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            {title === 'Overdue' && <AlertTriangle size={18} className="text-red-400" />}
            {title === 'Completed' && <CheckCircle2 size={18} className="text-green-400" />}
            {title !== 'Overdue' && title !== 'Completed' && <Clock size={18} className="text-amber-400" />}
            {title} <Badge variant="blue">{items.length}</Badge>
          </h2>
          <div className="space-y-3">
            {items.map(t => (
              <GlassCard key={t.id} className="flex flex-col md:flex-row md:items-center gap-4">
                <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0 ${t.completed ? 'bg-green-500/20 text-green-300' : daysUntil(t.due) < 0 ? 'bg-red-500/20 text-red-300' : 'bg-amber-500/20 text-amber-300'}`}>
                  <span className="text-lg font-bold">{t.completed ? '✓' : Math.abs(daysUntil(t.due))}</span>
                  <span className="text-[10px]">{t.completed ? 'done' : daysUntil(t.due) < 0 ? 'overdue' : 'days'}</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{t.title}</div>
                  <div className="text-sm text-muted">{t.eventTitle}</div>
                  <div className="text-xs text-muted mt-1">{t.instructions}</div>
                  <div className="text-xs text-muted mt-1">Due: {t.due}</div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  {t.link && <a href={t.link} target="_blank" rel="noreferrer" className="btn btn-secondary text-xs">Submit</a>}
                  {!t.completed && <Button variant="primary" onClick={() => complete(t.id)} className="text-xs">Mark complete</Button>}
                  {t.completed && <Badge variant="green">Completed</Badge>}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && <div className="text-center text-muted mt-10">No tasks in this filter.</div>}
    </div>
  )
}