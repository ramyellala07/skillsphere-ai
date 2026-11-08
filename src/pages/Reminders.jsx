import React, { useState } from 'react'
import { Mail, MessageSquare, Bell, Smartphone, Save } from 'lucide-react'
import { GlassCard, Button, Input, Badge } from '../components/ui.jsx'
import { REMINDER_PREFS_DEFAULT, saveState, loadState } from '../data/mockData.js'

export default function Reminders() {
  const [prefs, setPrefs] = useState(loadState().reminderPrefs || REMINDER_PREFS_DEFAULT)
  const [saved, setSaved] = useState(false)
  const save = () => { saveState({ reminderPrefs: prefs }); setSaved(true); setTimeout(() => setSaved(false), 2000) }
  const toggle = (k) => setPrefs(p => ({ ...p, [k]: !p[k] }))
  const toggleInterval = (v) => setPrefs(p => ({ ...p, intervals: p.intervals.includes(v) ? p.intervals.filter(x => x !== v) : [...p.intervals, v].sort((a,b)=>b-a) }))

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Reminder Settings</h1>
        <p className="text-muted mt-1">Email/mobile preferences, reminder intervals, quiet hours and consent controls.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard>
          <div className="font-semibold mb-4">Channels</div>
          {[
            { key: 'email', label: 'Email', icon: Mail, field: 'emailAddr' },
            { key: 'sms', label: 'SMS', icon: MessageSquare, field: 'phone' },
            { key: 'inApp', label: 'In-app', icon: Bell, field: null },
            { key: 'push', label: 'Browser push', icon: Smartphone, field: null },
          ].map(c => (
            <div key={c.key} className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/5 mb-2">
              <div className="flex items-center gap-3">
                <c.icon size={18} className="text-purple-300" />
                <div>
                  <div className="font-medium">{c.label}</div>
                  {c.field && <input value={prefs[c.field]} onChange={e => setPrefs(p => ({...p, [c.field]: e.target.value}))} className="input mt-1 text-xs" />}
                </div>
              </div>
              <button onClick={() => toggle(c.key)} className={`w-11 h-6 rounded-full transition relative ${prefs[c.key] ? 'bg-purple-500' : 'bg-white/10'}`}>
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition ${prefs[c.key] ? 'left-5' : 'left-0.5'}`} />
              </button>
            </div>
          ))}
        </GlassCard>

        <GlassCard>
          <div className="font-semibold mb-4">Reminder intervals (days before deadline)</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {[7, 3, 1, 0].map(v => (
              <button key={v} onClick={() => toggleInterval(v)} className={`px-4 py-2 rounded-xl text-sm ${prefs.intervals.includes(v) ? 'bg-purple-500/20 text-white border border-purple-500/30' : 'bg-white/5 text-muted'}`}>
                {v === 0 ? 'Deadline day' : `${v} days`}
              </button>
            ))}
          </div>
          <div className="font-semibold mb-2">Quiet hours</div>
          <div className="flex gap-3">
            <div className="flex-1"><label className="text-xs text-muted mb-1 block">Start</label><Input type="time" value={prefs.quietHours.start} onChange={e => setPrefs(p => ({...p, quietHours: {...p.quietHours, start: e.target.value}}))} /></div>
            <div className="flex-1"><label className="text-xs text-muted mb-1 block">End</label><Input type="time" value={prefs.quietHours.end} onChange={e => setPrefs(p => ({...p, quietHours: {...p.quietHours, end: e.target.value}}))} /></div>
          </div>
          <div className="mt-4 text-xs text-muted">Real delivery requires backend service, queue and provider integration. This demo persists preferences locally.</div>
          <Button onClick={save} className="mt-4 w-full"><Save size={16} /> {saved ? 'Saved!' : 'Save preferences'}</Button>
        </GlassCard>
      </div>
    </div>
  )
}