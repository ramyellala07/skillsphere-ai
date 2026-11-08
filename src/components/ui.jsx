import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Home, Search, BarChart3, Calendar, MessageCircle, User, Settings, Shield, Bell, LogOut, Menu, X, Sparkles } from 'lucide-react'

export function GlassCard({ children, className = '', hover = true, ...rest }) {
  return (
    <div className={`glass-card p-5 ${hover ? '' : 'hover:transform-none'} ${className}`} {...rest}>
      {children}
    </div>
  )
}

export function GlassPanel({ children, className = '' }) {
  return <div className={`glass p-6 ${className}`}>{children}</div>
}

export function PageHeader({ title, subtitle, action }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 animate-fade">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gradient leading-tight">{title}</h1>
        {subtitle && <p className="text-muted mt-2 max-w-2xl">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

export function StatCard({ label, value, hint, icon: Icon, color = 'purple' }) {
  const colors = {
    purple: 'from-purple-500/20 to-purple-500/5 text-purple-300',
    blue: 'from-sky-500/20 to-sky-500/5 text-sky-300',
    green: 'from-emerald-500/20 to-emerald-500/5 text-emerald-300',
    amber: 'from-amber-500/20 to-amber-500/5 text-amber-300',
  }
  return (
    <GlassCard>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
          <div className="text-3xl font-bold mt-2">{value}</div>
          {hint && <div className="text-xs text-muted mt-1">{hint}</div>}
        </div>
        {Icon && (
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center`}>
            <Icon size={20} />
          </div>
        )}
      </div>
    </GlassCard>
  )
}

export function Badge({ children, variant = 'purple' }) {
  const map = { purple: 'badge-purple', blue: 'badge-blue', green: 'badge-green', amber: 'badge-amber', red: 'badge-red' }
  return <span className={`badge ${map[variant]}`}>{children}</span>
}

export function Button({ children, variant = 'primary', className = '', ...rest }) {
  const v = { primary: 'btn-primary', secondary: 'btn-secondary', ghost: 'btn-ghost', danger: 'btn-danger' }[variant]
  return <button className={`btn ${v} ${className}`} {...rest}>{children}</button>
}

export function Input({ className = '', ...rest }) {
  return <input className={`input ${className}`} {...rest} />
}

export function Select({ className = '', children, ...rest }) {
  return <select className={`input ${className}`} {...rest}>{children}</select>
}

export function ProgressBar({ value, max = 100, label }) {
  const pct = Math.round((value / max) * 100)
  return (
    <div>
      {label && <div className="flex justify-between text-xs text-muted mb-1"><span>{label}</span><span>{pct}%</span></div>}
      <div className="progress"><span style={{ width: pct + '%' }} /></div>
    </div>
  )
}

export function Modal({ open, onClose, title, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="glass-strong relative z-10 w-full max-w-lg p-6 animate-fade" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gradient">{title}</h3>
          <button onClick={onClose} className="btn btn-ghost p-1"><X size={18} /></button>
        </div>
        {children}
      </div>
    </div>
  )
}

export function EmptyState({ title, hint }) {
  return (
    <GlassCard className="text-center py-12">
      <Sparkles className="mx-auto text-purple-300 mb-3" size={32} />
      <div className="font-semibold">{title}</div>
      {hint && <div className="text-sm text-muted mt-1">{hint}</div>}
    </GlassCard>
  )
}

// Layouts
export function StudentLayout({ children }) {
  const loc = useLocation()
  const nav = [
    { to: '/student/dashboard', label: 'Dashboard', icon: Home },
    { to: '/student/discovery', label: 'Discovery', icon: Search },
    { to: '/student/recommendations', label: 'AI Recommendations', icon: Sparkles },
    { to: '/student/compare', label: 'Compare', icon: BarChart3 },
    { to: '/student/profile', label: 'My Profile', icon: User },
    { to: '/student/skills', label: 'Skill Analysis', icon: BarChart3 },
    { to: '/student/deadlines', label: 'My Deadlines', icon: Calendar },
    { to: '/student/notifications', label: 'Notifications', icon: Bell },
    { to: '/student/skillbot', label: 'SkillBot', icon: MessageCircle },
    { to: '/student/reminders', label: 'Reminder Settings', icon: Settings },
  ]
  return (
    <div className="min-h-screen flex">
      <aside className="hidden lg:flex flex-col w-64 glass m-4 mr-0 p-4 sticky top-4 h-[calc(100vh-2rem)]">
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center font-bold">S</div>
          <div>
            <div className="font-bold text-gradient">SkillSphere</div>
            <div className="text-[10px] text-muted">AI Platform</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
          {nav.map(n => {
            const active = loc.pathname === n.to
            return (
              <Link key={n.to} to={n.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition ${active ? 'bg-purple-500/20 text-white border border-purple-500/30' : 'text-muted hover:text-white hover:bg-white/5'}`}>
                <n.icon size={18} /> {n.label}
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-white/10 pt-3 mt-3">
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted hover:text-white hover:bg-white/5">
            <LogOut size={18} /> Sign out
          </Link>
          <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted hover:text-white hover:bg-white/5">
            <Shield size={18} /> Admin Portal
          </Link>
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-4 md:p-6 lg:p-8">{children}</main>
    </div>
  )
}

export function AdminLayout({ children }) {
  const loc = useLocation()
  const nav = [
    { to: '/admin', label: 'Command Center', icon: Home },
    { to: '/admin/events', label: 'Event Management', icon: Calendar },
    { to: '/admin/milestones', label: 'Milestones', icon: Settings },
    { to: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
    { to: '/admin/departments', label: 'Department Intel', icon: User },
  ]
  return (
    <div className="min-h-screen flex">
      <aside className="hidden lg:flex flex-col w-64 glass m-4 mr-0 p-4 sticky top-4 h-[calc(100vh-2rem)]">
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center font-bold">A</div>
          <div>
            <div className="font-bold text-gradient">Admin Portal</div>
            <div className="text-[10px] text-muted">SkillSphere AI</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {nav.map(n => {
            const active = loc.pathname === n.to
            return (
              <Link key={n.to} to={n.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition ${active ? 'bg-sky-500/20 text-white border border-sky-500/30' : 'text-muted hover:text-white hover:bg-white/5'}`}>
                <n.icon size={18} /> {n.label}
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-white/10 pt-3 mt-3">
          <Link to="/student/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted hover:text-white hover:bg-white/5">
            <Home size={18} /> Student Portal
          </Link>
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-4 md:p-6 lg:p-8">{children}</main>
    </div>
  )
}

export function TopBar({ title }) {
  return (
    <div className="flex items-center justify-between mb-6 lg:hidden">
      <div className="font-bold text-gradient text-xl">SkillSphere AI</div>
      <Link to="/" className="btn btn-secondary btn-sm">Home</Link>
    </div>
  )
}