import React from 'react'
import { BarChart3, TrendingUp } from 'lucide-react'
import { GlassCard, StatCard } from '../../components/ui.jsx'
import { ALL_EVENTS, DEPT_STATS } from '../../data/mockData.js'

export default function Analytics() {
  const occupancy = Math.round(ALL_EVENTS.reduce((a,e) => a + e.registered/e.capacity, 0) / ALL_EVENTS.length * 100)
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Workshop Demand & Popularity Analytics</h1>
        <p className="text-muted mt-1">Mock historical registrations, current registrations, projected seats (simulated).</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Events" value={ALL_EVENTS.length} icon={BarChart3} color="purple" />
        <StatCard label="Total Capacity" value={ALL_EVENTS.reduce((a,e)=>a+e.capacity,0)} icon={TrendingUp} color="blue" />
        <StatCard label="Total Registered" value={ALL_EVENTS.reduce((a,e)=>a+e.registered,0)} icon={TrendingUp} color="green" />
        <StatCard label="Avg Occupancy" value={occupancy + '%'} icon={BarChart3} color="amber" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard>
          <div className="font-semibold mb-3">Demand by event (registrations)</div>
          <div className="space-y-2">
            {[...ALL_EVENTS].sort((a,b) => b.registered - a.registered).map(e => (
              <div key={e.id}>
                <div className="flex justify-between text-sm mb-1"><span className="truncate">{e.title}</span><span className="text-muted">{e.registered}/{e.capacity}</span></div>
                <div className="progress"><span style={{ width: (e.registered / e.capacity * 100) + '%' }} /></div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <div className="font-semibold mb-3">Forecast (simulated)</div>
          <div className="text-xs text-muted mb-3">Projected registrations for next 30 days based on mock trend. Labelled as simulated.</div>
          <div className="flex items-end gap-2 h-44">
            {[30, 42, 38, 55, 60, 58, 72, 68, 75, 80, 78, 85].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-gradient-to-t from-purple-500/60 to-sky-500/60 rounded-t-lg" style={{ height: v + '%' }} />
                <span className="text-[9px] text-muted">W{i+1}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}