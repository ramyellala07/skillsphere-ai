import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { GitCompare, Sparkles } from 'lucide-react'
import { GlassCard, Button, Badge, ProgressBar } from '../components/ui.jsx'
import { ALL_EVENTS, computeCompatibility, MILESTONES } from '../data/mockData.js'

export default function Compare() {
  const [selected, setSelected] = useState([])
  const toggle = (id) => {
    setSelected(s => s.includes(id) ? s.filter(x => x !== id) : (s.length < 3 ? [...s, id] : s))
  }
  const selEvents = useMemo(() => selected.map(id => ALL_EVENTS.find(e => e.id === id)).filter(Boolean), [selected])
  const helpText = selEvents.length >= 2
    ? `${selEvents.sort((a,b) => computeCompatibility(b)-computeCompatibility(a))[0].title} is the strongest match for your profile. ${selEvents[1].title} may be a useful alternative. Check prerequisites and schedule before deciding.`
    : 'Select at least two events to get a comparison summary.'

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Workshop Comparison Studio</h1>
        <p className="text-muted mt-1">Select up to three opportunities and compare side by side. <Badge variant="amber">Demo</Badge></p>
      </div>

      <GlassCard className="mb-6">
        <div className="font-semibold mb-3">Select events to compare ({selected.length}/3)</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
          {ALL_EVENTS.map(e => (
            <label key={e.id} className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer border ${selected.includes(e.id) ? 'border-purple-500/50 bg-purple-500/10' : 'border-white/5 hover:bg-white/3'}`}>
              <input type="checkbox" checked={selected.includes(e.id)} onChange={() => toggle(e.id)} className="accent-purple-500" />
              <span className="text-sm truncate">{e.title}</span>
            </label>
          ))}
        </div>
      </GlassCard>

      {selEvents.length >= 2 && (
        <>
          <GlassCard className="mb-6 overflow-x-auto">
            <table className="table min-w-[700px]">
              <thead>
                <tr>
                  <th>Dimension</th>
                  {selEvents.map(e => <th key={e.id}>{e.title}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Category', e => e.category],
                  ['Difficulty', e => e.difficulty],
                  ['Mode / Venue', e => `${e.mode} · ${e.venue}`],
                  ['Duration', e => e.duration],
                  ['Schedule', e => `${e.startDate} → ${e.endDate}`],
                  ['Organizer', e => e.organizer],
                  ['Instructor', e => e.instructor],
                  ['Prerequisites', e => e.prerequisites],
                  ['Availability', e => `${e.registered}/${e.capacity} seats`],
                  ['Profile Compatibility', e => `${computeCompatibility(e)}/100`],
                  ['Milestones', e => (MILESTONES?.[e.id] || []).length + ' tasks'],
                ].map(([label, fn]) => (
                  <tr key={label}>
                    <td className="font-medium text-purple-300">{label}</td>
                    {selEvents.map(e => <td key={e.id}>{fn(e)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-2 mb-2 font-semibold"><Sparkles size={18} className="text-purple-300" /> Help Me Choose (Demo)</div>
            <p className="text-sm text-muted">{helpText}</p>
            <div className="flex gap-3 mt-4">
              {selEvents.map(e => (
                <Link key={e.id} to={`/student/register/${e.id}`} className="btn btn-primary text-sm">Register for {e.title.split(' ')[0]}</Link>
              ))}
            </div>
          </GlassCard>
        </>
      )}
    </div>
  )
}

