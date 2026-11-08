import React from 'react'
import { GitBranch, Brain, AlertTriangle } from 'lucide-react'
import { GlassCard, PageHeader, Badge, ProgressBar } from '../components/ui.jsx'
import { NN_DOMAINS, STUDENT } from '../data/mockData.js'

export default function Skills() {
  return (
    <div>
      <PageHeader title="Neural Network Skill Prediction" subtitle="Input feature summary, animated network visualization, predicted learning domains and skill-gap indicators. Mock/simulated outputs." />
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard>
          <div className="font-semibold mb-3 flex items-center gap-2"><GitBranch size={18} className="text-purple-300" /> Network Visualization (Simulated)</div>
          <svg viewBox="0 0 400 260" className="w-full h-64">
            {/* input nodes */}
            {[0,1,2,3,4].map(i => (
              <g key={'in'+i}>
                <circle cx={40} cy={30+i*48} r={12} fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" className="nn-node animate-pulse-glow" />
                <text x={40} y={30+i*48+4} textAnchor="middle" fontSize="9" fill="#c4b5fd">{['Py','Java','SQL','Git','AI'][i]}</text>
              </g>
            ))}
            {/* hidden */}
            {[0,1,2].map(i => (
              <g key={'hid'+i}>
                <circle cx={200} cy={50+i*80} r={14} fill="rgba(56,189,248,0.25)" stroke="#38bdf8" className="nn-node" />
              </g>
            ))}
            {/* output */}
            {NN_DOMAINS.map((d, i) => (
              <g key={'out'+i}>
                <circle cx={360} cy={20+i*50} r={11} fill="rgba(192,132,252,0.3)" stroke="#c084fc" className="nn-node" />
                <text x={360} y={20+i*50+3} textAnchor="middle" fontSize="8" fill="#e9d5ff">{d.score}</text>
              </g>
            ))}
            {/* lines input->hidden */}
            {[0,1,2,3,4].flatMap(i => [0,1,2].map(j => (
              <line key={`l${i}${j}`} x1={52} y1={30+i*48} x2={186} y2={50+j*80} className="nn-line" />
            )))}
            {/* hidden->output */}
            {[0,1,2].flatMap(i => NN_DOMAINS.map((d, j) => (
              <line key={`h${i}${j}`} x1={214} y1={50+i*80} x2={348} y2={20+j*50} className="nn-line" />
            )))}
          </svg>
          <div className="text-xs text-muted mt-2">Visual simulation only. A real neural network requires defined dataset, feature engineering, training/validation, evaluation and inference pipeline.</div>
        </GlassCard>

        <GlassCard>
          <div className="font-semibold mb-3 flex items-center gap-2"><Brain size={18} className="text-sky-300" /> Predicted Learning Domains</div>
          <div className="space-y-4">
            {NN_DOMAINS.map(d => (
              <div key={d.domain}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{d.domain}</span>
                  <span className="text-purple-300 font-semibold">{d.score}/100</span>
                </div>
                <ProgressBar value={d.score} max={100} />
                <div className="text-xs text-muted mt-1">{d.reason}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard className="mt-6">
        <div className="font-semibold mb-3 flex items-center gap-2"><AlertTriangle size={18} className="text-amber-300" /> Skill-Gap Indicators (missing evidence, not proof of absence)</div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { gap: 'Machine Learning fundamentals not yet evidenced', status: 'gap' },
            { gap: 'No prior GitHub project in NLP detected', status: 'gap' },
            { gap: 'Cybersecurity domain-specific evidence limited', status: 'partial' },
          ].map(g => (
            <div key={g.gap} className="p-3 rounded-xl bg-white/3 border border-white/5">
              <Badge variant={g.status === 'gap' ? 'amber' : 'blue'}>{g.status}</Badge>
              <div className="text-sm mt-2">{g.gap}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mt-6">
        <div className="font-semibold mb-2">Input Feature Summary</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          {['Python evidence', 'Java evidence', 'Web project evidence', 'Data analysis evidence', 'AI coursework', 'Repository activity', 'Certification indicators', 'Experience signals'].map(f => (
            <div key={f} className="p-2 rounded-lg bg-white/3 border border-white/5 flex items-center justify-between">
              <span>{f}</span><span className="text-purple-300">✓</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}