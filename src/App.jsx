import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import Home from './pages/home/home.jsx'
import Categories from './pages/Categories/Categories.jsx'
import Popular from './pages/PopularCourses/Popular.jsx'
import Why from './pages/WhyChooseUs/Why.jsx'
import AreYouReady from './pages/AreYouReady/AreYouReady.jsx'
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
      </main>
    </div>
  )
}

export default App
