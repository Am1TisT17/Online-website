import React from 'react'
import Navbar from './pages/Navbar/Navbar.jsx'
import Footer2 from './pages/Footer2/Footer2.jsx'
import Contact from './pages/Contacts/Contacts.jsx'
import ContactHome from './pages/Contacts/ContactHome/ContactHome.jsx'

function ContactPage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <ContactHome />
        <Contact />
      </main>
      <footer>
        <Footer2 />
      </footer>
    </div>
  )
}

export default ContactPage