import React from 'react'
import HomePage from './Home.jsx'
import AboutPage from './About.jsx'
import { Routes, Route } from 'react-router-dom'
import './style/style.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App
