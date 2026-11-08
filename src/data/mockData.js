// Single source of truth for all mock data used across SkillSphere AI.

export const STUDENT = {
  id: 'STU-2024-0142',
  name: 'Ananya Reddy',
  email: 'ananya.reddy@college.edu',
  phone: '+91 98765 43210',
  institution: 'Tech Institute of Engineering',
  degree: 'B.Tech Computer Science Engineering',
  department: 'Computer Science',
  year: 2,
  avatar: null,
  profileSources: {
    linkedin: { connected: true, lastUpdated: '2026-10-28', consent: true },
    github: { connected: true, lastUpdated: '2026-10-30', consent: true },
    portfolio: { connected: false, lastUpdated: null, consent: false },
    resume: { connected: true, lastUpdated: '2026-10-25', consent: true },
  },
  skills: [
    { name: 'Python', evidence: '3 repositories', level: 82 },
    { name: 'Java', evidence: '2 projects', level: 74 },
    { name: 'SQL', evidence: 'Data analytics mini project', level: 68 },
    { name: 'HTML/CSS', evidence: 'Portfolio site', level: 60 },
    { name: 'Git', evidence: 'Repository activity', level: 70 },
    { name: 'Machine Learning (intro)', evidence: 'AI coursework', level: 45 },
  ],
  projects: [
    { title: 'Student Management System', tech: ['Java', 'SQL'], category: 'Web', link: 'github.com/ananya/sms' },
    { title: 'Weather Forecast Application', tech: ['Python', 'APIs'], category: 'Data', link: 'github.com/ananya/weather' },
    { title: 'Data Analytics Mini Project', tech: ['Python', 'Pandas', 'SQL'], category: 'Data', link: 'github.com/ananya/analytics' },
  ],
  certifications: [
    { name: 'Python Fundamentals', issuer: 'Coursera', date: '2026-06-12' },
    { name: 'Introduction to AI', issuer: 'NPTEL', date: '2026-08-03' },
  ],
  experience: 'Student project experience; 2 academic projects in data analytics.',
  detectedDomains: ['Programming', 'Data Analytics', 'Artificial Intelligence'],
  interests: ['Machine Learning', 'Generative AI', 'Data Science'],
  lastAnalysis: '2026-10-31',
}

export const WORKSHOPS = [
  { id: 'WS-001', title: 'Generative AI Bootcamp', category: 'AI', difficulty: 'Intermediate', mode: 'Hybrid', venue: 'Lab A + Online', organizer: 'AI Club', instructor: 'Dr. Meera Iyer', duration: '3 days', startDate: '2026-11-15', endDate: '2026-11-17', regOpen: '2026-10-20', regClose: '2026-11-10', capacity: 50, registered: 42, prerequisites: 'Python basics, Intro to ML', outcomes: ['Build LLM apps', 'Prompt engineering', 'RAG pipelines'], topics: ['LLMs', 'Prompting', 'RAG', 'Embeddings'], department: 'All', yearEligibility: [2,3,4], tags: ['AI','GenAI','LLM'] },
  { id: 'WS-002', title: 'Full Stack Development', category: 'Web', difficulty: 'Intermediate', mode: 'Offline', venue: 'CS Block', organizer: 'Coding Club', instructor: 'Prof. Arun Kumar', duration: '5 days', startDate: '2026-11-20', endDate: '2026-11-24', regOpen: '2026-10-22', regClose: '2026-11-15', capacity: 40, registered: 28, prerequisites: 'HTML/CSS, JS basics', outcomes: ['React apps', 'Node APIs', 'DB integration'], topics: ['React', 'Node', 'Express', 'MongoDB'], department: 'All', yearEligibility: [2,3,4], tags: ['Web','FullStack'] },
  { id: 'WS-003', title: 'Cybersecurity Essentials', category: 'Security', difficulty: 'Beginner', mode: 'Online', venue: 'Virtual', organizer: 'Security Cell', instructor: 'Ms. Priya Nair', duration: '2 days', startDate: '2026-11-12', endDate: '2026-11-13', regOpen: '2026-10-18', regClose: '2026-11-08', capacity: 40, registered: 35, prerequisites: 'None', outcomes: ['Network basics', 'Threats', 'Defense'], topics: ['Networking', 'OWASP', 'Crypto'], department: 'All', yearEligibility: [1,2,3,4], tags: ['Security'] },
  { id: 'WS-004', title: 'Robotics with Arduino', category: 'Robotics', difficulty: 'Beginner', mode: 'Offline', venue: 'Robotics Lab', organizer: 'Robotics Club', instructor: 'Dr. Sanjay Rao', duration: '4 days', startDate: '2026-11-25', endDate: '2026-11-28', regOpen: '2026-10-25', regClose: '2026-11-20', capacity: 30, registered: 20, prerequisites: 'Basic electronics', outcomes: ['Arduino programming', 'Sensors', 'Robot build'], topics: ['Arduino', 'Sensors', 'Motors'], department: 'All', yearEligibility: [1,2,3], tags: ['Robotics','Hardware'] },
  { id: 'WS-005', title: 'UI/UX Design Sprint', category: 'Design', difficulty: 'Beginner', mode: 'Hybrid', venue: 'Design Studio', organizer: 'Design Club', instructor: 'Ms. Kavya Menon', duration: '2 days', startDate: '2026-11-18', endDate: '2026-11-19', regOpen: '2026-10-20', regClose: '2026-11-14', capacity: 30, registered: 26, prerequisites: 'None', outcomes: ['Figma', 'User research', 'Prototyping'], topics: ['Figma', 'Wireframes', 'UX'], department: 'All', yearEligibility: [1,2,3,4], tags: ['Design','UX'] },
  { id: 'WS-006', title: 'Machine Learning Fundamentals', category: 'AI', difficulty: 'Beginner', mode: 'Online', venue: 'Virtual', organizer: 'AI Club', instructor: 'Dr. Meera Iyer', duration: '6 days', startDate: '2026-12-01', endDate: '2026-12-06', regOpen: '2026-10-28', regClose: '2026-11-25', capacity: 60, registered: 48, prerequisites: 'Python basics', outcomes: ['ML pipelines', 'Classification', 'Regression'], topics: ['Scikit-learn', 'ML', 'Data prep'], department: 'All', yearEligibility: [2,3,4], tags: ['AI','ML'] },
  { id: 'WS-007', title: 'Data Science with Python', category: 'Data', difficulty: 'Intermediate', mode: 'Online', venue: 'Virtual', organizer: 'Data Club', instructor: 'Prof. Ritu Sharma', duration: '5 days', startDate: '2026-11-28', endDate: '2026-12-02', regOpen: '2026-10-24', regClose: '2026-11-22', capacity: 45, registered: 33, prerequisites: 'Python, SQL', outcomes: ['EDA', 'Visualization', 'Modeling'], topics: ['Pandas', 'Matplotlib', 'Stats'], department: 'All', yearEligibility: [2,3,4], tags: ['Data','Python'] },
  { id: 'WS-008', title: 'Cloud Computing Basics', category: 'Cloud', difficulty: 'Beginner', mode: 'Online', venue: 'Virtual', organizer: 'Cloud Club', instructor: 'Mr. Vikram Das', duration: '3 days', startDate: '2026-12-05', endDate: '2026-12-07', regOpen: '2026-10-30', regClose: '2026-11-28', capacity: 50, registered: 19, prerequisites: 'None', outcomes: ['AWS basics', 'Deployment', 'Containers'], topics: ['AWS', 'Docker', 'CI/CD'], department: 'All', yearEligibility: [2,3,4], tags: ['Cloud'] },
  { id: 'WS-009', title: 'Blockchain Fundamentals', category: 'Web3', difficulty: 'Advanced', mode: 'Offline', venue: 'Seminar Hall', organizer: 'Web3 Club', instructor: 'Dr. Anil Gupta', duration: '2 days', startDate: '2026-12-08', endDate: '2026-12-09', regOpen: '2026-11-01', regClose: '2026-12-01', capacity: 35, registered: 12, prerequisites: 'JS, cryptography basics', outcomes: ['Smart contracts', 'Solidity', 'DApps'], topics: ['Solidity', 'Ethereum', 'Web3'], department: 'All', yearEligibility: [3,4], tags: ['Blockchain'] },
  { id: 'WS-010', title: 'Mobile App Development', category: 'Mobile', difficulty: 'Intermediate', mode: 'Offline', venue: 'Mobile Lab', organizer: 'App Club', instructor: 'Ms. Sneha Pillai', duration: '5 days', startDate: '2026-11-30', endDate: '2026-12-04', regOpen: '2026-10-26', regClose: '2026-11-24', capacity: 30, registered: 22, prerequisites: 'JS or Java', outcomes: ['Flutter apps', 'State mgmt', 'APIs'], topics: ['Flutter', 'Dart', 'Firebase'], department: 'All', yearEligibility: [2,3,4], tags: ['Mobile'] },
  { id: 'WS-011', title: 'Competitive Programming Bootcamp', category: 'DSA', difficulty: 'Intermediate', mode: 'Online', venue: 'Virtual', organizer: 'CP Club', instructor: 'Mr. Rohan Verma', duration: '4 days', startDate: '2026-12-10', endDate: '2026-12-13', regOpen: '2026-10-29', regClose: '2026-12-05', capacity: 80, registered: 61, prerequisites: 'C/C++ or Java', outcomes: ['Algorithms', 'Contest prep', 'Optimization'], topics: ['DSA', 'Graphs', 'DP'], department: 'All', yearEligibility: [1,2,3,4], tags: ['DSA','CP'] },
  { id: 'WS-012', title: 'NLP with Python', category: 'AI', difficulty: 'Advanced', mode: 'Online', venue: 'Virtual', organizer: 'AI Club', instructor: 'Dr. Meera Iyer', duration: '4 days', startDate: '2026-12-15', endDate: '2026-12-18', regOpen: '2026-11-02', regClose: '2026-12-08', capacity: 40, registered: 15, prerequisites: 'Python, ML basics', outcomes: ['Text processing', 'Transformers', 'Chatbots'], topics: ['NLP', 'Transformers', 'spaCy'], department: 'All', yearEligibility: [3,4], tags: ['AI','NLP'] },
]

export const HACKATHONS = [
  { id: 'HK-001', title: 'InnovateX Hackathon', category: 'Hackathon', difficulty: 'Intermediate', mode: 'Hybrid', venue: 'Main Auditorium', organizer: 'Innovation Cell', instructor: 'Multiple mentors', duration: '48 hours', startDate: '2026-11-09', endDate: '2026-11-11', regOpen: '2026-10-15', regClose: '2026-11-05', capacity: 120, registered: 96, prerequisites: 'Team of 3-4', outcomes: ['Prototype', 'Pitch', 'Prizes'], topics: ['AI', 'Web', 'IoT'], department: 'All', yearEligibility: [2,3,4], tags: ['Hackathon'] },
  { id: 'HK-002', title: 'CodeSprint 24', category: 'Hackathon', difficulty: 'Advanced', mode: 'Online', venue: 'Virtual', organizer: 'CP Club', instructor: 'Multiple mentors', duration: '24 hours', startDate: '2026-12-12', endDate: '2026-12-13', regOpen: '2026-11-10', regClose: '2026-12-05', capacity: 200, registered: 140, prerequisites: 'Solo or team', outcomes: ['Algorithmic solutions'], topics: ['DSA', 'Algorithms'], department: 'All', yearEligibility: [1,2,3,4], tags: ['Hackathon','CP'] },
  { id: 'HK-003', title: 'Designathon 2026', category: 'Hackathon', difficulty: 'Beginner', mode: 'Offline', venue: 'Design Studio', organizer: 'Design Club', duration: '12 hours', startDate: '2026-11-22', endDate: '2026-11-22', regOpen: '2026-10-28', regClose: '2026-11-18', capacity: 60, registered: 44, prerequisites: 'None', outcomes: ['UI prototype', 'Pitch'], topics: ['Design', 'UX'], department: 'All', yearEligibility: [1,2,3,4], tags: ['Hackathon','Design'] },
]

export const ALL_EVENTS = [...WORKSHOPS, ...HACKATHONS]

export const MILESTONES = {
  'HK-001': [
    { id: 'M1', title: 'PPT Submission', due: '2026-11-06', instructions: 'Submit your team PPT (max 10 slides) via the portal link.', link: 'https://submit.example.com/ppt' },
    { id: 'M2', title: 'GitHub Repository Link', due: '2026-11-08', instructions: 'Push code to a public repo and paste the link.', link: 'https://submit.example.com/repo' },
    { id: 'M3', title: 'Prototype Submission', due: '2026-11-10', instructions: 'Upload a working prototype or demo video.', link: 'https://submit.example.com/proto' },
    { id: 'M4', title: 'Final Presentation', due: '2026-11-11', instructions: 'Present in Main Auditorium, 10 min + Q&A.', link: '' },
  ],
  'WS-001': [
    { id: 'M5', title: 'Pre-work / Installation Checklist', due: '2026-11-14', instructions: 'Install Python, VS Code and required libs before day 1.', link: 'https://setup.example.com' },
  ],
  'WS-006': [
    { id: 'M6', title: 'Pre-work / Installation Checklist', due: '2026-11-30', instructions: 'Complete the starter notebook before the session.', link: 'https://setup.example.com/ml' },
  ],
}

export const NN_DOMAINS = [
  { domain: 'Artificial Intelligence', score: 94, reason: 'Python projects and AI coursework align with introductory AI workshops.' },
  { domain: 'Data Science', score: 87, reason: 'Data-analysis project and SQL experience are relevant.' },
  { domain: 'Full Stack Development', score: 79, reason: 'Web technologies and programming projects provide a foundation.' },
  { domain: 'Cybersecurity', score: 56, reason: 'Some transferable programming knowledge; domain-specific evidence is limited.' },
  { domain: 'Robotics', score: 42, reason: 'Few relevant embedded or hardware project signals in this sample.' },
]

export const NOTIFICATIONS = [
  { id: 'N1', type: 'reminder', title: 'InnovateX — PPT submission due tomorrow', body: 'Your PPT submission for InnovateX Hackathon is due on 6 Nov. Status: Pending.', time: '2026-11-05T09:00:00', read: false, channel: 'in-app' },
  { id: 'N2', type: 'email', title: 'Email preview: Registration confirmed', body: 'Subject: Registration confirmed — Generative AI Bootcamp. Your seat is reserved.', time: '2026-10-30T14:20:00', read: true, channel: 'email' },
  { id: 'N3', type: 'sms', title: 'SMS preview: Deadline reminder', body: 'SkillSphere: InnovateX PPT due 6 Nov. Submit before deadline.', time: '2026-11-04T18:00:00', read: true, channel: 'sms' },
  { id: 'N4', type: 'system', title: 'Profile analysis updated', body: 'Your skill analysis was refreshed on 31 Oct.', time: '2026-10-31T10:00:00', read: false, channel: 'in-app' },
]

export const DEPARTMENTS = ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Civil']
export const DEPT_STATS = {
  'Computer Science': { students: 420, registrations: 312, topCategory: 'AI' },
  'Information Technology': { students: 280, registrations: 198, topCategory: 'Web' },
  'Electronics': { students: 210, registrations: 96, topCategory: 'Robotics' },
  'Mechanical': { students: 180, registrations: 44, topCategory: 'Design' },
  'Civil': { students: 150, registrations: 28, topCategory: 'Cloud' },
}

export const HISTORICAL_EVENTS = [
  { name: 'AI Summit 2025', category: 'AI', capacity: 60, registered: 58, department: 'Computer Science' },
  { name: 'Web Dev Bootcamp 2025', category: 'Web', capacity: 40, registered: 36, department: 'Information Technology' },
  { name: 'Cyber Camp 2025', category: 'Security', capacity: 30, registered: 24, department: 'Electronics' },
]

export const FEEDBACK = [
  { event: 'Generative AI Bootcamp', student: 'Rahul S.', rating: 5, text: 'Excellent hands-on sessions.' },
  { event: 'Full Stack Development', student: 'Priya K.', rating: 4, text: 'Good pace, more backend please.' },
]

export const REMINDER_PREFS_DEFAULT = {
  email: true, sms: false, inApp: true, push: false,
  intervals: [7, 3, 1, 0],
  quietHours: { start: '22:00', end: '07:00' },
  emailAddr: 'ananya.reddy@college.edu',
  phone: '+91 98765 43210',
}

// Storage helpers
const KEY = 'skillsphere_state_v1'
export function loadState() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} }
}
export function saveState(patch) {
  const cur = loadState()
  localStorage.setItem(KEY, JSON.stringify({ ...cur, ...patch }))
}
export function getRegistrations() { return loadState().registrations || [] }
export function addRegistration(reg) {
  const regs = getRegistrations()
  if (regs.some(r => r.studentId === reg.studentId && r.eventId === reg.eventId)) return { ok: false, reason: 'duplicate' }
  const ev = ALL_EVENTS.find(e => e.id === reg.eventId)
  if (!ev) return { ok: false, reason: 'notfound' }
  if (ev.registered >= ev.capacity) return { ok: false, reason: 'full' }
  ev.registered += 1
  const ticketId = 'TKT-' + Math.random().toString(36).slice(2, 8).toUpperCase()
  const r = { ...reg, ticketId, registeredAt: new Date().toISOString(), status: 'confirmed' }
  saveState({ registrations: [...regs, r] })
  return { ok: true, registration: r }
}
export function isRegistered(eventId) {
  return getRegistrations().some(r => r.studentId === STUDENT.id && r.eventId === eventId)
}
export function getTicket(eventId) {
  return getRegistrations().find(r => r.studentId === STUDENT.id && r.eventId === eventId)
}

export function computeCompatibility(event, profile = STUDENT) {
  // transparent weighted demo score
  const skills = profile.skills.map(s => s.name.toLowerCase())
  const domains = profile.detectedDomains.map(d => d.toLowerCase())
  let relevance = 0
  const evTags = [...(event.tags || []), event.category].map(t => t.toLowerCase())
  evTags.forEach(t => {
    if (skills.some(s => s.includes(t) || t.includes(s))) relevance += 18
    if (domains.some(d => d.includes(t) || t.includes(d))) relevance += 12
  })
  relevance = Math.min(60, relevance)
  // learning gap value: higher if domain not strongly evidenced
  const domainMatch = NN_DOMAINS.find(d => d.domain.toLowerCase().includes(event.category.toLowerCase()) || event.category.toLowerCase().includes(d.domain.toLowerCase().split(' ')[0]))
  const gap = domainMatch ? Math.max(0, 100 - domainMatch.score) / 100 * 25 : 12
  // prerequisite readiness
  const prereq = (event.prerequisites || '').toLowerCase()
  let ready = 15
  if (prereq.includes('python') && skills.includes('python')) ready += 5
  if (prereq.includes('sql') && skills.includes('sql')) ready += 5
  if (prereq === 'none') ready = 20
  const pref = profile.interests.some(i => event.category.toLowerCase().includes(i.toLowerCase().split(' ')[0])) ? 15 : 8
  const total = Math.round(Math.min(99, relevance + gap + ready + pref))
  return total
}

export function recommendEvents(profile = STUDENT) {
  return ALL_EVENTS
    .filter(e => new Date(e.regClose) >= new Date('2026-11-01'))
    .map(e => ({ ...e, score: computeCompatibility(e, profile) }))
    .sort((a, b) => b.score - a.score)
}

export function registeredEvents() {
  const regs = getRegistrations()
  return regs.map(r => {
    const ev = ALL_EVENTS.find(e => e.id === r.eventId)
    return { ...r, event: ev }
  })
}

export function deadlineTasks() {
  const regs = getRegistrations()
  const tasks = []
  regs.forEach(r => {
    const ms = MILESTONES[r.eventId] || []
    ms.forEach(m => {
      tasks.push({ ...m, eventId: r.eventId, eventTitle: ALL_EVENTS.find(e => e.id === r.eventId)?.title, registrationId: r.ticketId, completed: (loadState().completedTasks || []).includes(m.id) })
    })
  })
  return tasks
}

export function markTaskComplete(id) {
  const cur = loadState().completedTasks || []
  if (cur.includes(id)) return
  saveState({ completedTasks: [...cur, id] })
}

export function daysUntil(dateStr) {
  const now = new Date('2026-11-08')
  const d = new Date(dateStr)
  const diff = Math.ceil((d - now) / (1000*60*60*24))
  return diff
}

// Replay persisted registrations into mock event counts so seat numbers
// stay consistent across reloads (single source of truth).
try {
  const persisted = (loadState().registrations || [])
  const counted = new Set()
  persisted.forEach(r => {
    const key = r.studentId + '::' + r.eventId
    if (counted.has(key)) return
    counted.add(key)
    const ev = ALL_EVENTS.find(e => e.id === r.eventId)
    if (ev) ev.registered = Math.min(ev.capacity, ev.registered + 1)
  })
} catch (e) { /* ignore */ }