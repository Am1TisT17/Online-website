import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import Home from './pages/home/home.jsx'
import './style/style.scss'

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
