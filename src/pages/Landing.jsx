import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Shield, Zap, Target, BarChart3, Bell, Users } from 'lucide-react'
import { GlassCard, GlassPanel, Button, Badge } from '../components/ui.jsx'
import { ALL_EVENTS, STUDENT } from '../data/mockData.js'

export default function Landing() {
  const featured = ALL_EVENTS.slice(0, 4)
  return (
    <div className="min-h-screen">
      <div className="bg-aurora" /><div className="bg-grid" />
      <nav className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-sky-500 flex items-center justify-center font-bold text-lg">S</div>
          <span className="font-bold text-xl text-gradient">SkillSphere AI</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="btn btn-secondary">Sign In</Link>
          <Link to="/login" className="btn btn-primary">Get Started <ArrowRight size={16} /></Link>
        </div>
      </nav>

      <section className="container pt-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade">
            <Badge variant="purple">AI-Driven Opportunity Platform</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Understand your skills.<br />
              <span className="text-gradient">Discover your next opportunity.</span><br />
              Never miss a deadline.
            </h1>
            <p className="text-muted mt-6 text-lg max-w-xl">
              SkillSphere AI connects your professional profile intelligence with personalized workshop and hackathon recommendations, comparison tools, registration and deadline tracking.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/login" className="btn btn-primary btn-lg">Enter Student Portal <ArrowRight size={18} /></Link>
              <Link to="/admin" className="btn btn-secondary btn-lg">Admin Portal</Link>
            </div>
            <div className="flex gap-8 mt-10 text-sm">
              <div><div className="text-2xl font-bold text-gradient">12+</div><div className="text-muted">Active Workshops</div></div>
              <div><div className="text-2xl font-bold text-gradient">100+</div><div className="text-muted">Students</div></div>
              <div><div className="text-2xl font-bold text-gradient">95%</div><div className="text-muted">Match Accuracy</div></div>
            </div>
          </div>
          <div className="relative animate-float">
            <GlassPanel className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="font-semibold">Skill Analysis Preview</div>
                <Badge variant="green">Demo</Badge>
              </div>
              <div className="space-y-3">
                {['Artificial Intelligence', 'Data Science', 'Full Stack Development', 'Cybersecurity', 'Robotics'].map((d, i) => {
                  const scores = [94, 87, 79, 56, 42]
                  return (
                    <div key={d}>
                      <div className="flex justify-between text-sm mb-1"><span>{d}</span><span className="text-purple-300 font-semibold">{scores[i]}/100</span></div>
                      <div className="progress"><span style={{ width: scores[i] + '%' }} /></div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 text-xs text-muted">
                Mock profile: {STUDENT.name} · {STUDENT.degree}
              </div>
            </GlassPanel>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Everything you need to grow</h2>
        <p className="text-muted text-center mb-10">From profile intelligence to deadline tracking.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Shield, title: 'Consent-Based Profile Intel', desc: 'Connect LinkedIn, GitHub, portfolio or resume with explicit consent and review.' },
            { icon: Sparkles, title: 'AI Skill Analysis', desc: 'Transparent weighted scoring with explainable domain compatibility.' },
            { icon: Target, title: 'Smart Recommendations', desc: 'Ranked workshops with reasons and skill-gap opportunities.' },
            { icon: BarChart3, title: 'Comparison Studio', desc: 'Compare up to three events side by side.' },
            { icon: Bell, title: 'Deadline Intelligence', desc: 'Milestone tracking with reminder previews.' },
            { icon: Users, title: 'Admin Analytics', desc: 'Participation, demand and department insights.' },
          ].map(f => (
            <GlassCard key={f.title}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/30 to-sky-500/30 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-purple-300" />
              </div>
              <div className="font-semibold">{f.title}</div>
              <div className="text-sm text-muted mt-1">{f.desc}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Ongoing Workshops</h2>
          <Link to="/student/discovery" className="text-purple-300 text-sm hover:underline">View all →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map(w => (
            <GlassCard key={w.id}>
              <Badge variant="blue">{w.category}</Badge>
              <div className="font-semibold mt-2">{w.title}</div>
              <div className="text-xs text-muted mt-1">{w.difficulty} · {w.mode} · {w.duration}</div>
              <div className="mt-3">
                <div className="flex justify-between text-xs text-muted mb-1"><span>Seats</span><span>{w.registered}/{w.capacity}</span></div>
                <div className="progress"><span style={{ width: (w.registered / w.capacity * 100) + '%' }} /></div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <footer className="container py-10 text-center text-muted text-sm border-t border-white/5">
        SkillSphere AI · Frontend demonstration with mock data · v1.0
      </footer>
    </div>
  )
}