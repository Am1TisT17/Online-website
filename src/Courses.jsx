import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import Footer2 from './pages/Footer2/Footer2.jsx'
import CoursesHome from './pages/Courses/CoursesHome/CoursesHome.jsx'
import CoursesList from './pages/Courses/CoursesList/CoursesList.jsx'

function CoursesPage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <CoursesHome />
        <CoursesList />
      </main>
      <footer>
        <Footer2 />
      </footer>
    </div>
  )
}

export default CoursesPage