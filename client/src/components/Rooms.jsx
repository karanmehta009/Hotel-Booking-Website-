const rooms = [
  {
    name: 'Pahadi Heritage Room',
    image: '/images/room-deluxe.png',
    badge: 'Popular',
    desc: 'Experience traditional Himachali warmth with handcrafted wooden interiors, valley views, and cozy Kullu blankets.',
    amenities: ['👤 2 Guests', '📐 45 m²', '🏔️ Valley View', '📶 Free WiFi'],
    price: '₹4,999',
  },
  {
    name: 'Devdar Suite',
    image: '/images/room-suite.png',
    badge: 'Best Value',
    desc: 'A spacious deodar-wood suite with a private balcony overlooking the pine forests, fireplace, and traditional Pahadi decor.',
    amenities: ['👤 3 Guests', '📐 72 m²', '🌲 Forest View', '🔥 Fireplace'],
    price: '₹8,499',
  },
  {
    name: 'Shimla Royal Suite',
    image: '/images/room-presidential.png',
    badge: 'Premium',
    desc: 'The pinnacle of Pahadi luxury — panoramic Himalayan views, private jacuzzi, personal butler, and heritage furnishings.',
    amenities: ['👤 4 Guests', '📐 120 m²', '🏔️ Himalayan View', '🛁 Jacuzzi'],
    price: '₹18,999',
  },
]

export default function Rooms() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="rooms" id="rooms">
      <div className="container">
        <div className="rooms-header">
          <span className="section-label reveal">Our Rooms & Suites</span>
          <h2 className="section-title reveal reveal-delay-1">
            Handcrafted Pahadi Retreats for <br />Every Kind of Escape
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            Each room is a masterpiece of Himachali craftsmanship, blending mountain charm with modern comfort for a stay that feels truly extraordinary.
          </p>
        </div>
        <div className="rooms-grid">
          {rooms.map((room, i) => (
            <div className={`room-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
              <div className="room-card-image">
                <img src={room.image} alt={room.name} />
                <span className="room-card-badge">{room.badge}</span>
              </div>
              <div className="room-card-body">
                <h3>{room.name}</h3>
                <p className="room-desc">{room.desc}</p>
                <div className="room-amenities">
                  {room.amenities.map((a, j) => (
                    <span className="room-amenity" key={j}>{a}</span>
                  ))}
                </div>
                <div className="room-card-footer">
                  <div className="room-price">{room.price} <span>/ night</span></div>
                  <a href="#booking" className="btn-primary" onClick={(e) => scrollTo(e, '#booking')}>Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
