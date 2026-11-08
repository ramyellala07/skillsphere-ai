import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Calendar, Bell, Target, BookOpen, TrendingUp, Clock } from 'lucide-react'
import { GlassCard, StatCard, Button, Badge, ProgressBar } from '../components/ui.jsx'
import { STUDENT, ALL_EVENTS, getRegistrations, recommendEvents, deadlineTasks, daysUntil } from '../data/mockData.js'

export default function Dashboard() {
  const regs = getRegistrations()
  const recs = recommendEvents().slice(0, 3)
  const tasks = deadlineTasks()
  const upcoming = tasks.filter(t => !t.completed).sort((a,b) => new Date(a.due) - new Date(b.due)).slice(0, 4)
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Welcome back, <span className="text-gradient">{STUDENT.name}</span></h1>
        <p className="text-muted mt-1">Here's your learning overview and upcoming activity.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Registered Events" value={regs.length} hint="Active registrations" icon={BookOpen} color="purple" />
        <StatCard label="Saved / Shortlisted" value={3} hint="Opportunities" icon={Target} color="blue" />
        <StatCard label="Pending Deadlines" value={upcoming.length} hint="Needs attention" icon={Clock} color="amber" />
        <StatCard label="Profile Score" value="87%" hint="Skill coverage" icon={Sparkles} color="green" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold flex items-center gap-2"><Sparkles size={18} className="text-purple-300" /> Top Recommendations</div>
              <Link to="/student/recommendations" className="text-purple-300 text-sm hover:underline">See all</Link>
            </div>
            <div className="space-y-3">
              {recs.map(r => (
                <div key={r.id} className="flex items-center gap-4 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-purple-500/30 transition">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-sky-500/30 flex items-center justify-center font-bold text-purple-300">{r.score}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{r.title}</div>
                    <div className="text-xs text-muted">{r.category} · {r.difficulty} · {r.mode}</div>
                  </div>
                  <Link to={`/student/event/${r.id}`} className="btn btn-secondary text-xs py-1.5 px-3">View</Link>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold flex items-center gap-2"><Calendar size={18} className="text-sky-300" /> Upcoming Milestones</div>
              <Link to="/student/deadlines" className="text-purple-300 text-sm hover:underline">Open tracker</Link>
            </div>
            {upcoming.length === 0 && <div className="text-muted text-sm">No pending milestones. Register for an event to get started.</div>}
            <div className="space-y-3">
              {upcoming.map(t => (
                <div key={t.id} className="flex items-center gap-4 p-3 rounded-xl bg-white/3 border border-white/5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${daysUntil(t.due) <= 2 ? 'bg-red-500/20 text-red-300' : 'bg-amber-500/20 text-amber-300'}`}>
                    {daysUntil(t.due)}d
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{t.title}</div>
                    <div className="text-xs text-muted">{t.eventTitle} · due {t.due}</div>
                  </div>
                  <Badge variant={daysUntil(t.due) <= 2 ? 'red' : 'amber'}>{daysUntil(t.due) <= 0 ? 'Overdue' : 'Due soon'}</Badge>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="space-y-6">
          <GlassCard>
            <div className="font-semibold mb-3 flex items-center gap-2"><Target size={18} className="text-purple-300" /> Profile Status</div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm"><span className="text-muted">Connected sources</span><span>3 / 4</span></div>
              <ProgressBar value={3} max={4} label="Profile completeness" />
              <div className="text-xs text-muted">Last analysis: {STUDENT.lastAnalysis}</div>
              <Link to="/student/profile-connect" className="btn btn-secondary w-full text-sm">Manage connections</Link>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="font-semibold mb-3 flex items-center gap-2"><TrendingUp size={18} className="text-sky-300" /> Learning Path</div>
            <div className="text-sm text-muted">Based on your profile, recommended next steps:</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-purple-300">→</span> Machine Learning Fundamentals</li>
              <li className="flex gap-2"><span className="text-purple-300">→</span> Generative AI Bootcamp</li>
              <li className="flex gap-2"><span className="text-purple-300">→</span> Data Science with Python</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <div className="font-semibold mb-2 flex items-center gap-2"><Bell size={18} className="text-amber-300" /> Notifications</div>
            <div className="text-sm text-muted">2 unread notifications</div>
            <Link to="/student/notifications" className="btn btn-ghost text-sm mt-2">Open center</Link>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}