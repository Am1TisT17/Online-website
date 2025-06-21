import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import Footer from './pages/Footer/Footer.jsx'
import AboutHome from './pages/AboutUs/AboutHome/AboutHome.jsx'
import WhatWeDo from './pages/AboutUs/WhatWeDo/WhatWeDo.jsx'
import AboutOurUni from './pages/AboutUs/AboutOurUni/AboutOurUni.jsx'
import Count from './pages/AboutUs/Count/Count.jsx'
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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About