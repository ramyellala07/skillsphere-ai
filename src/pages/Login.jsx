import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GlassCard, Button, Input, Badge } from '../components/ui.jsx'
import { STUDENT } from '../data/mockData.js'

export default function Login() {
  const nav = useNavigate()
  const [mode, setMode] = useState('student')
  const [email, setEmail] = useState('ananya.reddy@college.edu')
  const [password, setPassword] = useState('demo1234')
  const submit = (e) => {
    e.preventDefault()
    if (mode === 'admin') nav('/admin')
    else nav('/student/dashboard')
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-aurora" /><div className="bg-grid" />
      <GlassCard className="w-full max-w-md p-8">
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center font-bold text-2xl mb-3">S</div>
          <h1 className="text-2xl font-bold text-gradient">Welcome to SkillSphere AI</h1>
          <p className="text-muted text-sm mt-1">Demo authentication — no real credentials required</p>
        </div>
        <div className="flex gap-2 mb-6">
          <button onClick={() => setMode('student')} className={`flex-1 py-2 rounded-xl text-sm font-medium transition ${mode === 'student' ? 'bg-purple-500/20 text-white border border-purple-500/30' : 'text-muted hover:bg-white/5'}`}>Student</button>
          <button onClick={() => setMode('admin')} className={`flex-1 py-2 rounded-xl text-sm font-medium transition ${mode === 'admin' ? 'bg-sky-500/20 text-white border border-sky-500/30' : 'text-muted hover:bg-white/5'}`}>Admin</button>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-xs text-muted mb-1 block">Email</label>
            <Input value={email} onChange={e => setEmail(e.target.value)} type="email" />
          </div>
          <div>
            <label className="text-xs text-muted mb-1 block">Password</label>
            <Input value={password} onChange={e => setPassword(e.target.value)} type="password" />
          </div>
          <Button type="submit" className="w-full">Sign In as {mode === 'admin' ? 'Admin' : 'Student'}</Button>
        </form>
        <div className="mt-4 text-xs text-muted text-center">
          Demo account: {STUDENT.email} · password: demo1234
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-purple-300 text-sm hover:underline">← Back to landing</Link>
        </div>
      </GlassCard>
    </div>
  )
}