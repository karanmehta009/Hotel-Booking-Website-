export default function About() {
  const features = [
    { icon: '🍲', title: 'Pahadi Cuisine', desc: 'Authentic Himachali Dham feast' },
    { icon: '🧖', title: 'Mountain Spa', desc: 'Herbal wellness with local herbs' },
    { icon: '🏔️', title: 'Trekking Trails', desc: 'Guided Himalayan treks' },
    { icon: '🔥', title: 'Bonfire Nights', desc: 'Stargazing under the Milky Way' },
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal">
            <img src="/images/about-lobby.png" alt="Mountain hotel lobby with wooden interiors" />
            <div className="about-image-badge">
              <div className="badge-icon">🏆</div>
              <div className="badge-text">
                <h4>Award Winning</h4>
                <p>Best Hill Resort 2025</p>
              </div>
            </div>
          </div>
          <div className="about-text">
            <span className="section-label reveal">About Our Resort</span>
            <h2 className="section-title reveal reveal-delay-1">
              A Legacy of Pahadi <br />Warmth & Heritage
            </h2>
            <p className="section-desc reveal reveal-delay-2">
              Nestled in the heart of Himachal Pradesh, our resort carries the spirit of the mountains. From the handcrafted deodar interiors to the aroma of freshly brewed Kangra chai, every detail reflects the rich Pahadi culture and the warmth of our hills.
            </p>
            <div className="about-features reveal reveal-delay-3">
              {features.map((f, i) => (
                <div className="about-feature" key={i}>
                  <div className="about-feature-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#services" className="btn-primary btn-shimmer reveal reveal-delay-4">
              Discover More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
