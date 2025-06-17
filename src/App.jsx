import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Categories from './pages/Categories/Categories.jsx'
import Popular from './pages/popularCourses/Popular.jsx'
import Why from './pages/WhyChooseUs/Why.jsx'
import AreYouReady from './pages/AreYouReady/AreYouReady.jsx'
import OurInstuctor from './pages/OurInstructor/OurInstructor.jsx'
import OurTrustedPartners from './pages/OurTrustedPartners/OurTrustedPartners.jsx'
import OurStudentsTestimonials from './pages/OurStudentsTestimonials/OurStudentsTestimonials.jsx'
import Footer from './pages/Footer/Foote.jsx'
import './style/style.scss'

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <Categories />
        <Popular />
        <Why />
        <AreYouReady />
        <OurInstuctor />
        <OurTrustedPartners />
        <OurStudentsTestimonials />
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App
