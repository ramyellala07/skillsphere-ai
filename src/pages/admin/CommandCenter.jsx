import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Calendar, TrendingUp, Activity, Sparkles } from 'lucide-react'
import { GlassCard, StatCard, Badge } from '../../components/ui.jsx'
import { ALL_EVENTS, DEPT_STATS, STUDENT } from '../../data/mockData.js'
import { getRegistrations } from '../../data/mockData.js'

export default function CommandCenter() {
  const regs = getRegistrations()
  const totalStudents = Object.values(DEPT_STATS).reduce((a,b) => a + b.students, 0)
  const totalRegs = Object.values(DEPT_STATS).reduce((a,b) => a + b.registrations, 0)
  const occupancy = Math.round(ALL_EVENTS.reduce((a,e) => a + e.registered/e.capacity, 0) / ALL_EVENTS.length * 100)
  const insights = [
    'AI workshops have the highest current demand in this sample.',
    'Robotics registrations are increasing compared with the previous mock event.',
    'Beginner workshops show higher occupancy.',
  ]
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Admin AI Command Center</h1>
        <p className="text-muted mt-1">Registrations, demand, occupancy and AI insight cards (simulated).</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Students" value={totalStudents} icon={Users} color="purple" />
        <StatCard label="Active Events" value={ALL_EVENTS.length} icon={Calendar} color="blue" />
        <StatCard label="Registrations" value={totalRegs + regs.length} icon={TrendingUp} color="green" />
        <StatCard label="Avg Occupancy" value={occupancy + '%'} icon={Activity} color="amber" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <GlassCard>
            <div className="font-semibold mb-3">Registration activity (simulated)</div>
            <div className="flex items-end gap-2 h-40">
              {[40, 55, 48, 70, 62, 80, 75, 90, 85, 95, 88, 100].map((v, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-purple-500 to-sky-500 rounded-t-lg opacity-80" style={{ height: v + '%' }} />
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted mt-2"><span>Jan</span><span>Dec</span></div>
          </GlassCard>

          <GlassCard>
            <div className="font-semibold mb-3">Popular categories</div>
            <div className="space-y-3">
              {['AI', 'Web', 'Data', 'Security', 'Robotics', 'Design'].map(c => {
                const cnt = ALL_EVENTS.filter(e => e.category === c).reduce((a, e) => a + e.registered, 0)
                const max = 200
                return (
                  <div key={c}>
                    <div className="flex justify-between text-sm mb-1"><span>{c}</span><span className="text-muted">{cnt}</span></div>
                    <div className="progress"><span style={{ width: (cnt / max * 100) + '%' }} /></div>
                  </div>
                )
              })}
            </div>
          </GlassCard>
        </div>

        <div className="space-y-6">
          <GlassCard>
            <div className="font-semibold mb-3 flex items-center gap-2"><Sparkles size={18} className="text-purple-300" /> AI Insight Cards</div>
            <div className="space-y-3">
              {insights.map((ins, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/3 border border-white/5 text-sm">{ins}</div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="font-semibold mb-3">Upcoming events</div>
            <div className="space-y-2">
              {ALL_EVENTS.slice(0, 5).map(e => (
                <div key={e.id} className="flex items-center justify-between text-sm p-2 rounded-lg bg-white/3">
                  <span className="truncate">{e.title}</span>
                  <Badge variant="blue">{e.registered}/{e.capacity}</Badge>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}