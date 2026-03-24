export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo">Pahadi<span>Nest</span></a>
            <p>A mountain sanctuary where Himachali warmth meets nature's grandeur. Experience the spirit of Pahadi hospitality.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Twitter">𝕏</a>
              <a href="#" className="footer-social" aria-label="Instagram">📷</a>
              <a href="#" className="footer-social" aria-label="LinkedIn">in</a>
              <a href="#" className="footer-social" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#about" onClick={(e) => scrollTo(e, '#about')}>About Us</a>
            <a href="#rooms" onClick={(e) => scrollTo(e, '#rooms')}>Rooms & Suites</a>
            <a href="#booking" onClick={(e) => scrollTo(e, '#booking')}>Reservations</a>
            <a href="#">Gallery</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-col">
            <h4>Experiences</h4>
            <a href="#">Pahadi Kitchen</a>
            <a href="#">Himalayan Spa</a>
            <a href="#">Trekking & Adventures</a>
            <a href="#">Temple Tours</a>
            <a href="#">Bonfire Evenings</a>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <a href="#">📍 Near Mall Road, Shimla, HP</a>
            <a href="tel:+911234567890">📞 +91 12345 67890</a>
            <a href="mailto:stay@pahadinest.com">✉️ stay@pahadinest.com</a>
            <a href="#">🕐 24/7 Front Desk</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 PahadiNest. All rights reserved. Crafted with ❤️ in Himachal.</p>
        </div>
      </div>
    </footer>
  )
}
