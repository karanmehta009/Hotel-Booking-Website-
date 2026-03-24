import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Rooms from './components/Rooms'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    // Observe all reveal elements — use a small delay to catch dynamically rendered elements
    const observeAll = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }
    observeAll()
    // Re-observe after a short delay for any elements rendered after initial mount
    const timer = setTimeout(observeAll, 200)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Rooms />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
      <ChatBot />
    </>
  )
}

export default App
