import { useState } from 'react'

const images = [
  { src: '/images/about-lobby.png', title: 'Deodar Wood Lobby', category: 'Interior' },
  { src: '/images/room-deluxe.png', title: 'Pahadi Heritage Room', category: 'Rooms' },
  { src: '/images/amenity-spa.png', title: 'Himalayan Herbal Spa', category: 'Wellness' },
  { src: '/images/room-suite.png', title: 'Devdar Suite', category: 'Rooms' },
  { src: '/images/hero.png', title: 'Mountain Sunrise View', category: 'Exterior' },
  { src: '/images/room-presidential.png', title: 'Shimla Royal Suite', category: 'Rooms' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((lightbox - 1 + images.length) % images.length)
  const next = () => setLightbox((lightbox + 1) % images.length)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label reveal">Photo Gallery</span>
          <h2 className="section-title reveal reveal-delay-1">A Glimpse Into <br />PahadiNest</h2>
          <p className="section-desc reveal reveal-delay-2">
            Explore the mountain beauty and Himachali charm that awaits you at every corner.
          </p>
        </div>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              className={`gallery-item reveal reveal-delay-${(i % 4) + 1}`}
              key={i}
              onClick={() => openLightbox(i)}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="gallery-category">{img.category}</span>
                <h4>{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <button className="lightbox-nav lightbox-prev" onClick={prev}>‹</button>
            <img src={images[lightbox].src} alt={images[lightbox].title} />
            <button className="lightbox-nav lightbox-next" onClick={next}>›</button>
            <div className="lightbox-caption">
              <span>{images[lightbox].category}</span>
              <h4>{images[lightbox].title}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
