import React from 'react'
import HomePage from './Home.jsx'
import AboutPage from './About.jsx'
import ContactPage from './Contact.jsx'
import CoursesPage from './Courses.jsx'
import InstructorPage from './pages/Instructors/InstructorPage/InstructorPage.jsx'
import CourseDetails from './pages/Courses/CourseDetails/CourseDetails'
import InstructorProfile from './pages/Instructors/InstructorProfile/InstructorProfile.jsx'
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
      <Route path="/instructor" element={<InstructorPage   />} />
      <Route path="/instructors/:id" element={<InstructorProfile />} />
    </Routes>
  )
}

export default App