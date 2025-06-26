import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import Footer2 from './pages/Footer2/Footer2.jsx'
import AboutHome from './pages/AboutUs/AboutHome/AboutHome.jsx'
import WhatWeDo from './pages/AboutUs/WhatWeDo/WhatWeDo.jsx'
import AboutOurUni from './pages/AboutUs/AboutOurUni/AboutOurUni.jsx'
import Count from './pages/AboutUs/Count/Count.jsx'
import OurInstrutor from './pages/AboutUs/AboutOurInstructor/AboutOurInstructor.jsx'
import OurNews from './pages/AboutUs/AboutOurNews/AboutOurNews.jsx'

function About() {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>
      <main>
        <AboutHome />
        <WhatWeDo />
        <AboutOurUni />
        <Count />
        <OurInstrutor />
        <OurNews />
      </main>
      <footer>
        <Footer2 />
      </footer>
    </div>
  )
}

export default About