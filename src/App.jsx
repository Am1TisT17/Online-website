import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import Home from './pages/home/home.jsx'
import Categories from './pages/Categories/Categories.jsx'
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
      </main>
    </div>
  )
}

export default App
