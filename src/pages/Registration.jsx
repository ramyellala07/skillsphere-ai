import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { GlassCard, Button, Input, Badge, Modal } from '../components/ui.jsx'
import { ALL_EVENTS, STUDENT, addRegistration, isRegistered } from '../data/mockData.js'

export default function Registration() {
  const { id } = useParams()
  const nav = useNavigate()
  const ev = ALL_EVENTS.find(e => e.id === id)
  const [step, setStep] = useState(1)
  const [details, setDetails] = useState({ name: STUDENT.name, email: STUDENT.email, phone: STUDENT.phone, dept: STUDENT.department, year: STUDENT.year })
  const [consent, setConsent] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  if (!ev) return <div className="text-muted">Event not found.</div>
  if (isRegistered(id)) {
    return (
      <div>
        <GlassCard className="text-center py-12">
          <CheckCircle2 className="mx-auto text-green-400 mb-3" size={40} />
          <div className="font-semibold text-lg">Already registered</div>
          <div className="text-muted text-sm mt-1">You have an active registration for {ev.title}.</div>
          <Link to={`/student/ticket/${id}`} className="btn btn-primary mt-4">View Ticket</Link>
        </GlassCard>
      </div>
    )
  }

  const confirm = () => {
    if (!consent) { setError('Please accept event communication consent.'); return }
    const r = addRegistration({ studentId: STUDENT.id, eventId: id, details })
    if (!r.ok) {
      setError(r.reason === 'full' ? 'Event is full.' : r.reason === 'duplicate' ? 'Duplicate registration.' : 'Registration failed.')
      return
    }
    setResult(r.registration)
    setStep(4)
  }

  return (
    <div>
      <Link to={`/student/event/${id}`} className="text-purple-300 text-sm hover:underline">← Back to event</Link>
      <div className="mt-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Registration</h1>
        <p className="text-muted mb-6">{ev.title}</p>

        <div className="flex gap-2 mb-6">
          {['Details', 'Review', 'Confirm'].map((s, i) => (
            <div key={s} className={`flex-1 text-center py-2 rounded-xl text-sm ${step >= i+1 ? 'bg-purple-500/20 text-white border border-purple-500/30' : 'bg-white/5 text-muted'}`}>{i+1}. {s}</div>
          ))}
        </div>

        <GlassCard>
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <div><label className="text-xs text-muted mb-1 block">Name</label><Input value={details.name} onChange={e => setDetails(d => ({...d, name: e.target.value}))} /></div>
                <div><label className="text-xs text-muted mb-1 block">Email</label><Input value={details.email} onChange={e => setDetails(d => ({...d, email: e.target.value}))} /></div>
                <div><label className="text-xs text-muted mb-1 block">Phone</label><Input value={details.phone} onChange={e => setDetails(d => ({...d, phone: e.target.value}))} /></div>
                <div><label className="text-xs text-muted mb-1 block">Department</label><Input value={details.dept} onChange={e => setDetails(d => ({...d, dept: e.target.value}))} /></div>
              </div>
              <div className="flex justify-end"><Button onClick={() => setStep(2)}>Next →</Button></div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/3 border border-white/5 text-sm space-y-2">
                <div><span className="text-muted">Event:</span> {ev.title}</div>
                <div><span className="text-muted">Date:</span> {ev.startDate} → {ev.endDate}</div>
                <div><span className="text-muted">Mode:</span> {ev.mode} · {ev.venue}</div>
                <div><span className="text-muted">Seats available:</span> {ev.capacity - ev.registered}</div>
                <div><span className="text-muted">Student:</span> {details.name} · {details.email}</div>
              </div>
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1 accent-purple-500" />
                <span>I consent to receive event communications and reminders for this event.</span>
              </label>
              {error && <div className="text-red-300 text-sm">{error}</div>}
              <div className="flex justify-between">
                <Button variant="secondary" onClick={() => setStep(1)}>← Back</Button>
                <Button onClick={confirm}>Confirm Registration</Button>
              </div>
            </div>
          )}
          {step === 4 && result && (
            <div className="text-center py-6">
              <CheckCircle2 className="mx-auto text-green-400 mb-3" size={48} />
              <div className="font-semibold text-lg">Registration confirmed!</div>
              <div className="text-muted text-sm mt-1">Ticket ID: {result.ticketId}</div>
              <div className="flex gap-3 justify-center mt-4">
                <Link to={`/student/ticket/${id}`} className="btn btn-primary">View Ticket</Link>
                <Link to="/student/deadlines" className="btn btn-secondary">My Deadlines</Link>
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  )
}