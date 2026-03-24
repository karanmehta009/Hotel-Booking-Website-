import { useState, useEffect, useRef } from 'react'

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Hero() {
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.pageYOffset * 0.15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img
          src="/images/hero.png"
          alt="Himalayan mountain resort surrounded by deodar forests"
          style={{ transform: `scale(1.05) translateY(${parallaxY}px)` }}
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }} />
        ))}
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-label fade-in-up" style={{ animationDelay: '0.2s' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Premium Pahadi Hospitality
          </div>
          <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.4s' }}>
            Where the Himalayas Meet <span className="highlight">Pahadi Warmth</span>
          </h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.6s' }}>
            Discover a mountain sanctuary nestled among deodar forests and snow-capped peaks. Experience authentic Himachali hospitality with every sunrise over the valley.
          </p>
          <div className="hero-buttons fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a href="#booking" className="btn-primary btn-shimmer" onClick={(e) => scrollTo(e, '#booking')}>
              Reserve Your Stay
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#rooms" className="btn-outline" onClick={(e) => scrollTo(e, '#rooms')}>Explore Rooms</a>
          </div>
          <div className="hero-stats fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="hero-stat">
              <h3><AnimatedCounter end={50} suffix="+" /></h3>
              <p>Mountain Rooms</p>
            </div>
            <div className="hero-stat">
              <h3><AnimatedCounter end={4} suffix=".9★" /></h3>
              <p>Guest Rating</p>
            </div>
            <div className="hero-stat">
              <h3><AnimatedCounter end={15} suffix="+" /></h3>
              <p>Years in Hills</p>
            </div>
            <div className="hero-stat">
              <h3><AnimatedCounter end={20} suffix="K+" /></h3>
              <p>Happy Guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
