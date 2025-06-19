import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import HomeSection from './pages/Home/Home.jsx'
import Footer from './pages/Footer/Footer.jsx'
import AboutUs from './pages/AboutUs/AboutHome/AboutUs.jsx'
import './style/style.scss'

function About () {
  return (
    <div className="about">
      <header>
        <Navbar />
      </header>
      <main>
        <HomeSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About
