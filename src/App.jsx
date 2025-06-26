import React from 'react'
import HomePage from './Home.jsx'
import AboutPage from './About.jsx'
import ContactPage from './Contact.jsx'
import CoursesPage from './Courses.jsx'
import CourseDetails from './pages/Courses/CourseDetails/CourseDetails'
import { Routes, Route } from 'react-router-dom'
import './style/style.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage   />} />
      <Route path="/courses" element={<CoursesPage   />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
    </Routes>
  )
}

export default App