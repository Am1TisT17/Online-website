import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Categories from './pages/Categories/Categories.jsx'
import Popular from './pages/popularCourses/Popular.jsx'
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
      </main>
    </div>
  )
}

export default App
