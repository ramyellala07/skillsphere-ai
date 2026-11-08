import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, MapPin, Users, Clock, Award, BookOpen, CheckCircle2 } from 'lucide-react'
import { GlassCard, Badge, Button, ProgressBar } from '../components/ui.jsx'
import { ALL_EVENTS, MILESTONES, computeCompatibility, isRegistered } from '../data/mockData.js'

export default function EventDetails() {
  const { id } = useParams()
  const ev = ALL_EVENTS.find(e => e.id === id)
  if (!ev) return <div className="text-muted">Event not found.</div>
  const ms = MILESTONES[id] || []
  const score = computeCompatibility(ev)
  const regd = isRegistered(id)
  return (
    <div>
      <Link to="/student/discovery" className="text-purple-300 text-sm hover:underline">← Back to discovery</Link>
      <div className="mt-4 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <GlassCard>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="blue">{ev.category}</Badge>
              <Badge variant={ev.difficulty === 'Beginner' ? 'green' : ev.difficulty === 'Intermediate' ? 'amber' : 'red'}>{ev.difficulty}</Badge>
              <Badge variant="purple">{ev.mode}</Badge>
            </div>
            <h1 className="text-3xl font-bold mt-2">{ev.title}</h1>
            <p className="text-muted mt-2">Organized by {ev.organizer} · Instructor: {ev.instructor}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-5 text-sm">
              <div className="flex items-center gap-2"><Calendar size={16} className="text-purple-300" /> {ev.startDate} → {ev.endDate}</div>
              <div className="flex items-center gap-2"><Clock size={16} className="text-purple-300" /> {ev.duration}</div>
              <div className="flex items-center gap-2"><MapPin size={16} className="text-purple-300" /> {ev.venue}</div>
              <div className="flex items-center gap-2"><Users size={16} className="text-purple-300" /> {ev.registered}/{ev.capacity} registered</div>
            </div>
            <div className="mt-4">
              <div className="text-xs text-muted mb-1">Seat availability</div>
              <ProgressBar value={ev.registered} max={ev.capacity} />
            </div>
          </GlassCard>

          <GlassCard>
            <div className="font-semibold mb-2 flex items-center gap-2"><BookOpen size={18} className="text-purple-300" /> Topics & Learning Outcomes</div>
            <div className="flex flex-wrap gap-2 mb-3">{ev.topics.map(t => <Badge key={t} variant="blue">{t}</Badge>)}</div>
            <ul className="space-y-1 text-sm">{ev.outcomes.map(o => <li key={o} className="flex gap-2"><CheckCircle2 size={14} className="text-green-400 mt-0.5" /> {o}</li>)}</ul>
          </GlassCard>

          <GlassCard>
            <div className="font-semibold mb-2">Prerequisites</div>
            <p className="text-sm text-muted">{ev.prerequisites}</p>
            <div className="mt-4 font-semibold mb-2">Registration window</div>
            <p className="text-sm text-muted">Opens {ev.regOpen} · Closes {ev.regClose}</p>
          </GlassCard>

          {ms.length > 0 && (
            <GlassCard>
              <div className="font-semibold mb-3">Submission Milestones</div>
              <div className="space-y-3">
                {ms.map(m => (
                  <div key={m.id} className="p-3 rounded-xl bg-white/3 border border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{m.title}</div>
                      <Badge variant="amber">Due {m.due}</Badge>
                    </div>
                    <div className="text-xs text-muted mt-1">{m.instructions}</div>
                    {m.link && <a href={m.link} target="_blank" rel="noreferrer" className="text-purple-300 text-xs hover:underline mt-1 inline-block">Submission link →</a>}
                  </div>
                ))}
              </div>
            </GlassCard>
          )}
        </div>

        <div className="space-y-6">
          <GlassCard>
            <div className="font-semibold mb-2 flex items-center gap-2"><Award size={18} className="text-purple-300" /> Profile Compatibility</div>
            <div className="text-4xl font-bold text-gradient mb-1">{score}/100</div>
            <div className="text-xs text-muted mb-3">Demo score based on your profile</div>
            <ProgressBar value={score} max={100} />
            <div className="text-sm text-muted mt-3">
              {score >= 80 ? 'Strong match for your demonstrated skills.' : score >= 60 ? 'Good next-step learning opportunity.' : 'Beginner-friendly; builds new domain knowledge.'}
            </div>
          </GlassCard>

          <GlassCard>
            {regd ? (
              <div>
                <div className="text-green-400 font-semibold mb-2">You are registered ✓</div>
                <Link to={`/student/ticket/${id}`} className="btn btn-primary w-full">View Ticket</Link>
              </div>
            ) : (
              <div className="space-y-2">
                <Link to={`/student/register/${id}`} className="btn btn-primary w-full">Register Now</Link>
                <Link to="/student/compare" className="btn btn-secondary w-full">Add to Compare</Link>
              </div>
            )}
          </GlassCard>

          <GlassCard>
            <div className="font-semibold mb-2">Eligibility</div>
            <div className="text-sm text-muted">Year: {ev.yearEligibility.join(', ')}</div>
            <div className="text-sm text-muted">Department: {ev.department}</div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}