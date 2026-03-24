const services = [
  {
    icon: '🧖',
    title: 'Himalayan Spa',
    desc: 'Rejuvenate with traditional Pahadi herbal treatments, hot stone therapy, and aromatherapy using locally sourced mountain herbs and essential oils.',
    image: '/images/amenity-spa.png',
  },
  {
    icon: '🍲',
    title: 'Pahadi Kitchen',
    desc: 'Savor authentic Himachali Dham, Siddu, Babru, and seasonal dishes crafted by local chefs using organic mountain produce and age-old recipes.',
    image: '/images/room-suite.png',
  },
  {
    icon: '🏔️',
    title: 'Guided Mountain Treks',
    desc: 'Explore hidden trails through deodar forests, alpine meadows, and ancient temples with experienced local Pahadi guides who know every peak.',
    image: '/images/hero.png',
  },
  {
    icon: '🔥',
    title: 'Bonfire & Stargazing',
    desc: 'Gather around a crackling bonfire under the Milky Way, wrapped in Kullu shawls, with hot Kangra chai and folk stories of the hills.',
    image: '/images/room-deluxe.png',
  },
  {
    icon: '🎵',
    title: 'Pahadi Folk Evenings',
    desc: 'Experience the soul of Himachal with live Nati dance performances, traditional Pahadi music, and cultural evenings celebrating the mountain heritage.',
    image: '/images/room-presidential.png',
  },
  {
    icon: '🚗',
    title: '24/7 Mountain Concierge',
    desc: 'From airport transfers to curated Kullu-Manali day trips, temple visits, and paragliding bookings — our team ensures a seamless Pahadi experience.',
    image: '/images/about-lobby.png',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label reveal">Mountain Experiences</span>
          <h2 className="section-title reveal reveal-delay-1">
            Curated Pahadi Adventures <br />& Authentic Experiences
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            Every detail has been thoughtfully designed to immerse you in the authentic Himachali way of life.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`service-card reveal reveal-delay-${(i % 4) + 1}`} key={i}>
              <div className="service-card-image">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-content">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
