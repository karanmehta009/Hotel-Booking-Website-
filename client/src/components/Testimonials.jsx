import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Anita Verma',
    role: 'Travel Blogger',
    rating: 5,
    text: 'PahadiNest is a dream! Waking up to the snow-capped Himalayas, sipping Kangra chai on the balcony — it felt like coming home to the hills. The Pahadi Dham dinner was out of this world!',
    avatar: 'AV',
  },
  {
    name: 'Rajesh Thakur',
    role: 'Business Executive',
    rating: 5,
    text: 'I\'ve stayed at many hill resorts but PahadiNest stands apart. The deodar wood interiors, the bonfire under the stars, and the staff\'s genuine Pahadi hospitality — truly world-class.',
    avatar: 'RT',
  },
  {
    name: 'Priya Sharma',
    role: 'Wedding Planner',
    rating: 5,
    text: 'We hosted our daughter\'s wedding at PahadiNest with traditional Himachali rituals. The mountain backdrop, the folk music, the Dham feast — our guests are still talking about it!',
    avatar: 'PS',
  },
  {
    name: 'Vikram Singh',
    role: 'Adventure Enthusiast',
    rating: 5,
    text: 'The guided trek through the deodar forest was magical. Came back to a hot herbal bath at the Himalayan Spa and stories around the bonfire. This is how mountains should be experienced!',
    avatar: 'VS',
  },
  {
    name: 'Meera Kapoor',
    role: 'Food Critic',
    rating: 5,
    text: 'The Pahadi Kitchen at PahadiNest serves the most authentic Siddu and Babru I\'ve ever had. Chef Raju\'s Dham thali is a culinary journey through Himachal. Absolute perfection!',
    avatar: 'MK',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label reveal">Guest Stories</span>
          <h2 className="section-title reveal reveal-delay-1">
            What Our Guests <br />Say About Us
          </h2>
        </div>
        <div className="testimonials-carousel reveal reveal-delay-2">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[active].text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{testimonials[active].avatar}</div>
              <div>
                <h4>{testimonials[active].name}</h4>
                <p>{testimonials[active].role}</p>
              </div>
            </div>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
