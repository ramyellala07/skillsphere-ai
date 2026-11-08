# SkillSphere AI — Student Opportunity Dashboard

A frontend-first academic prototype implementing the SkillSphere AI concept
with a sophisticated glassmorphism interface.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

Production build:

```bash
npm run build
npm run preview
```

## Features

- Landing, Student Login/Signup (demo auth)
- Social Profile Connection (LinkedIn/GitHub/Portfolio/Resume) with consent messaging
- Student Profile Intelligence (skills, projects, certifications, evidence)
- Neural Network Skill Prediction (animated viz + domain scores + skill gaps, labelled simulated)
- AI Workshop Recommendations (transparent weighted demo score + explanations)
- Workshop Discovery (search + filters)
- Workshop Details (topics, prerequisites, milestones, compatibility)
- Workshop Comparison Studio (up to 3, side-by-side + Help Me Choose)
- SkillBot AI Assistant (demo, suggested prompts, keyword responses)
- Multi-step Registration + Digital Ticket (QR-style visual, labelled decorative)
- Student Dashboard
- My Deadlines (timeline, countdowns, submission links, status)
- Notification Center (in-app/email/SMS previews)
- Reminder Settings (channels, intervals, quiet hours)
- Admin Portal: Command Center, Event Management, Milestones, Analytics, Department Intelligence

## Design

Glassmorphism: soft aurora gradient background, frosted-glass panels, subtle shadows,
blurred backgrounds, blue-purple accents, rounded panels, consistent typography.

## Data

Single mock data source (`src/data/mockData.js`). Registrations and preferences
persist in localStorage. All AI outputs are labelled as simulations per the
project proposal's responsible-design guidance.

## Note

Frontend-only demonstration. Real LinkedIn/GitHub extraction, LLM inference,
trained neural network, email/SMS delivery and predictive analytics are future scope.