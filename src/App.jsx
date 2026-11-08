import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { StudentLayout, AdminLayout } from './components/ui.jsx'

import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import SocialProfile from './pages/SocialProfile.jsx'
import Profile from './pages/Profile.jsx'
import Skills from './pages/Skills.jsx'
import Recommendations from './pages/Recommendations.jsx'
import Discovery from './pages/Discovery.jsx'
import EventDetails from './pages/EventDetails.jsx'
import Compare from './pages/Compare.jsx'
import SkillBot from './pages/SkillBot.jsx'
import Registration from './pages/Registration.jsx'
import Ticket from './pages/Ticket.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Deadlines from './pages/Deadlines.jsx'
import Notifications from './pages/Notifications.jsx'
import Reminders from './pages/Reminders.jsx'

import AdminHome from './pages/admin/CommandCenter.jsx'
import AdminEvents from './pages/admin/EventManagement.jsx'
import AdminMilestones from './pages/admin/Milestones.jsx'
import AdminAnalytics from './pages/admin/Analytics.jsx'
import AdminDepartments from './pages/admin/Departments.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      <Route path="/student" element={<StudentLayout><Dashboard /></StudentLayout>} />
      <Route path="/student/dashboard" element={<StudentLayout><Dashboard /></StudentLayout>} />
      <Route path="/student/discovery" element={<StudentLayout><Discovery /></StudentLayout>} />
      <Route path="/student/event/:id" element={<StudentLayout><EventDetails /></StudentLayout>} />
      <Route path="/student/recommendations" element={<StudentLayout><Recommendations /></StudentLayout>} />
      <Route path="/student/compare" element={<StudentLayout><Compare /></StudentLayout>} />
      <Route path="/student/profile" element={<StudentLayout><Profile /></StudentLayout>} />
      <Route path="/student/profile-connect" element={<StudentLayout><SocialProfile /></StudentLayout>} />
      <Route path="/student/skills" element={<StudentLayout><Skills /></StudentLayout>} />
      <Route path="/student/skillbot" element={<StudentLayout><SkillBot /></StudentLayout>} />
      <Route path="/student/register/:id" element={<StudentLayout><Registration /></StudentLayout>} />
      <Route path="/student/ticket/:id" element={<StudentLayout><Ticket /></StudentLayout>} />
      <Route path="/student/deadlines" element={<StudentLayout><Deadlines /></StudentLayout>} />
      <Route path="/student/notifications" element={<StudentLayout><Notifications /></StudentLayout>} />
      <Route path="/student/reminders" element={<StudentLayout><Reminders /></StudentLayout>} />

      <Route path="/admin" element={<AdminLayout><AdminHome /></AdminLayout>} />
      <Route path="/admin/events" element={<AdminLayout><AdminEvents /></AdminLayout>} />
      <Route path="/admin/milestones" element={<AdminLayout><AdminMilestones /></AdminLayout>} />
      <Route path="/admin/analytics" element={<AdminLayout><AdminAnalytics /></AdminLayout>} />
      <Route path="/admin/departments" element={<AdminLayout><AdminDepartments /></AdminLayout>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}