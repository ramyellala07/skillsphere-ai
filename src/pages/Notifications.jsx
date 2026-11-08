import React, { useState } from 'react'
import { Bell, Mail, MessageSquare, Smartphone } from 'lucide-react'
import { GlassCard, Badge, Button } from '../components/ui.jsx'
import { NOTIFICATIONS } from '../data/mockData.js'

export default function Notifications() {
  const [items, setItems] = useState(NOTIFICATIONS)
  const [tab, setTab] = useState('all')
  const markRead = (id) => setItems(it => it.map(n => n.id === id ? { ...n, read: true } : n))
  const markAll = () => setItems(it => it.map(n => ({ ...n, read: true })))
  const filtered = items.filter(n => tab === 'all' || (tab === 'unread' && !n.read) || n.channel === tab)

  const iconFor = (c) => ({ email: Mail, sms: MessageSquare, 'in-app': Bell, push: Smartphone }[c] || Bell)

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notification Center</h1>
          <p className="text-muted mt-1">In-app feed, email/SMS previews, reminder history. <Badge variant="amber">Simulated delivery</Badge></p>
        </div>
        <Button variant="secondary" onClick={markAll}>Mark all read</Button>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {['all', 'unread', 'in-app', 'email', 'sms'].map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 rounded-xl text-sm capitalize ${tab === t ? 'bg-purple-500/20 text-white border border-purple-500/30' : 'bg-white/5 text-muted hover:text-white'}`}>{t}</button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map(n => {
          const Icon = iconFor(n.channel)
          return (
            <GlassCard key={n.id} className={`flex gap-4 ${n.read ? 'opacity-70' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-purple-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{n.title}</div>
                  <Badge variant={n.channel === 'email' ? 'blue' : n.channel === 'sms' ? 'amber' : 'purple'}>{n.channel}</Badge>
                </div>
                <div className="text-sm text-muted mt-1">{n.body}</div>
                <div className="text-xs text-muted mt-2">{new Date(n.time).toLocaleString()}</div>
              </div>
              {!n.read && <button onClick={() => markRead(n.id)} className="text-purple-300 text-xs hover:underline self-start">Mark read</button>}
            </GlassCard>
          )
        })}
      </div>
    </div>
  )
}