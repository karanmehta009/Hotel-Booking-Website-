import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo">Pahadi<span>Nest</span></a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#about" onClick={(e) => scrollTo(e, '#about')}>About</a></li>
          <li><a href="#rooms" onClick={(e) => scrollTo(e, '#rooms')}>Rooms</a></li>
          <li><a href="#booking" onClick={(e) => scrollTo(e, '#booking')}>Reservations</a></li>
          <li><a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact</a></li>
          <li><a href="#booking" className="btn-primary" onClick={(e) => scrollTo(e, '#booking')}>Book Now</a></li>
        </ul>
        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
