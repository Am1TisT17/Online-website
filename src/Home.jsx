import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import HomeSection from './pages/Home/Home.jsx'
import Categories from './pages/Categories/Categories.jsx'
import Popular from './pages/popularCourses/Popular.jsx'
import Why from './pages/WhyChooseUs/Why.jsx'
import AreYouReady from './pages/AreYouReady/AreYouReady.jsx'
import OurInstuctor from './pages/OurInstructor/OurInstructor.jsx'
import OurTrustedPartners from './pages/OurTrustedPartners/OurTrustedPartners.jsx'
import OurStudentsTestimonials from './pages/OurStudentsTestimonials/OurStudentsTestimonials.jsx'
import Footer from './pages/Footer/Footer.jsx'

function HomePage() {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>
      <main>
        <HomeSection />
        <Categories />
        <Popular />
        <Why />
        <AreYouReady />
        <OurInstuctor />
        <OurTrustedPartners />
        <OurStudentsTestimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default HomePage