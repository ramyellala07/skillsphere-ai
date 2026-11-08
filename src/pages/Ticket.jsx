import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Download, QrCode } from 'lucide-react'
import { GlassCard, Button, Badge } from '../components/ui.jsx'
import { ALL_EVENTS, STUDENT, getTicket } from '../data/mockData.js'

function PseudoQR({ seed }) {
  const cells = []
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  for (let r = 0; r < 13; r++) {
    for (let c = 0; c < 13; c++) {
      const v = (h ^ (r * 37 + c * 79)) % 3
      if (v !== 0) cells.push({ r, c })
    }
  }
  return (
    <svg viewBox="0 0 130 130" className="w-40 h-40">
      <rect width="130" height="130" fill="white" rx="8" />
      {cells.map((cell, i) => (
        <rect key={i} x={cell.c * 10 + 0} y={cell.r * 10 + 0} width="10" height="10" fill="#0b1020" />
      ))}
      {/* finder patterns */}
      {[[0,0],[0,100],[100,0]].map(([x,y],i) => (
        <g key={i}>
          <rect x={x} y={y} width="30" height="30" fill="#0b1020" />
          <rect x={x+5} y={y+5} width="20" height="20" fill="white" />
          <rect x={x+10} y={y+10} width="10" height="10" fill="#0b1020" />
        </g>
      ))}
    </svg>
  )
}

export default function Ticket() {
  const { id } = useParams()
  const ev = ALL_EVENTS.find(e => e.id === id)
  const ticket = getTicket(id)
  if (!ev || !ticket) return (
    <div>
      <GlassCard className="text-center py-12">
        <div className="text-muted">No registration found for this event.</div>
        <Link to="/student/discovery" className="btn btn-primary mt-4">Browse events</Link>
      </GlassCard>
    </div>
  )
  return (
    <div>
      <Link to="/student/dashboard" className="text-purple-300 text-sm hover:underline">← Dashboard</Link>
      <div className="mt-4 max-w-md mx-auto">
        <GlassCard className="text-center">
          <Badge variant="green">Confirmed</Badge>
          <h2 className="text-xl font-bold mt-2">{ev.title}</h2>
          <p className="text-muted text-sm">{ev.organizer}</p>
          <div className="my-6 flex justify-center">
            <PseudoQR seed={ticket.ticketId} />
          </div>
          <div className="text-xs text-muted mb-4">Decorative QR-style visual (not a scannable credential in demo)</div>
          <div className="grid grid-cols-2 gap-3 text-sm text-left">
            <div className="p-2 rounded-lg bg-white/3"><div className="text-muted text-xs">Ticket ID</div><div className="font-mono">{ticket.ticketId}</div></div>
            <div className="p-2 rounded-lg bg-white/3"><div className="text-muted text-xs">Student</div><div>{STUDENT.name}</div></div>
            <div className="p-2 rounded-lg bg-white/3"><div className="text-muted text-xs">Date</div><div>{ev.startDate}</div></div>
            <div className="p-2 rounded-lg bg-white/3"><div className="text-muted text-xs">Mode</div><div>{ev.mode}</div></div>
            <div className="p-2 rounded-lg bg-white/3 col-span-2"><div className="text-muted text-xs">Venue</div><div>{ev.venue}</div></div>
          </div>
          <div className="mt-4 text-xs text-muted">Registered at {new Date(ticket.registeredAt).toLocaleString()}</div>
          <Button variant="secondary" className="mt-4 w-full"><Download size={16} /> Download (demo)</Button>
        </GlassCard>
      </div>
    </div>
  )
}