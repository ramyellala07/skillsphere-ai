import React, { useState } from 'react'
import { GlassCard, StatCard } from '../../components/ui.jsx'
import { DEPT_STATS } from '../../data/mockData.js'

export default function Departments() {
  const [a, setA] = useState('Computer Science')
  const [b, setB] = useState('Information Technology')
  const depts = Object.keys(DEPT_STATS)
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Department Intelligence</h1>
        <p className="text-muted mt-1">Department-wise registrations, popular categories, participation by year.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {depts.map(d => (
          <StatCard key={d} label={d} value={DEPT_STATS[d].registrations} hint={`Top: ${DEPT_STATS[d].topCategory} · ${DEPT_STATS[d].students} students`} color="purple" />
        ))}
      </div>

      <GlassCard>
        <div className="font-semibold mb-3">Compare two departments</div>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <select value={a} onChange={e => setA(e.target.value)} className="input">{depts.map(d => <option key={d}>{d}</option>)}</select>
          <select value={b} onChange={e => setB(e.target.value)} className="input">{depts.map(d => <option key={d}>{d}</option>)}</select>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[a, b].map(d => (
            <div key={d} className="p-4 rounded-xl bg-white/3 border border-white/5">
              <div className="font-semibold">{d}</div>
              <div className="text-sm text-muted mt-2">Students: {DEPT_STATS[d].students}</div>
              <div className="text-sm text-muted">Registrations: {DEPT_STATS[d].registrations}</div>
              <div className="text-sm text-muted">Rate: {Math.round(DEPT_STATS[d].registrations / DEPT_STATS[d].students * 100)}%</div>
              <div className="text-sm text-muted">Top category: {DEPT_STATS[d].topCategory}</div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}