import { useState } from 'react'

export default function Booking() {
  const [showToast, setShowToast] = useState(false)
  const [form, setForm] = useState({
    fullName: '', email: '', checkIn: '', checkOut: '', guests: '', roomType: '', specialReq: ''
  })

  const today = new Date().toISOString().split('T')[0]

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (name === 'checkIn' && form.checkOut && form.checkOut <= value) {
      setForm((prev) => ({ ...prev, checkOut: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.fullName || !form.email || !form.checkIn || !form.checkOut || !form.guests || !form.roomType) return
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
    setForm({ fullName: '', email: '', checkIn: '', checkOut: '', guests: '', roomType: '', specialReq: '' })
  }

  const perks = [
    { icon: '✅', title: 'Free Cancellation', desc: 'Cancel up to 48 hours before check-in' },
    { icon: '💎', title: 'Best Price Guarantee', desc: 'We match or beat any competitor price' },
    { icon: '🎁', title: 'Pahadi Welcome Kit', desc: 'Complimentary Himachali cap & local delicacies' },
  ]

  return (
    <section className="booking" id="booking">
      <div className="container">
        <div className="booking-wrapper">
          <div className="booking-info">
            <span className="section-label reveal">Reservations</span>
            <h2 className="section-title reveal reveal-delay-1">Book Your <br />Pahadi Getaway</h2>
            <p className="section-desc reveal reveal-delay-2">
              Secure your Himachali mountain experience. Fill in your details and let us prepare everything for your arrival in the hills.
            </p>
            <div className="booking-perks reveal reveal-delay-3">
              {perks.map((p, i) => (
                <div className="booking-perk" key={i}>
                  <div className="booking-perk-icon">{p.icon}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="booking-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Ravi Sharma" value={form.fullName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="ravi@example.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="checkIn">Check-in Date</label>
                <input type="date" id="checkIn" name="checkIn" min={today} value={form.checkIn} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="checkOut">Check-out Date</label>
                <input type="date" id="checkOut" name="checkOut" min={form.checkIn || today} value={form.checkOut} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select id="guests" name="guests" value={form.guests} onChange={handleChange} required>
                  <option value="">Select guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="roomType">Room Type</label>
                <select id="roomType" name="roomType" value={form.roomType} onChange={handleChange} required>
                  <option value="">Select room</option>
                  <option value="heritage">Pahadi Heritage — ₹4,999/night</option>
                  <option value="devdar">Devdar Suite — ₹8,499/night</option>
                  <option value="royal">Shimla Royal Suite — ₹18,999/night</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="specialReq">Special Requests (Optional)</label>
              <input type="text" id="specialReq" name="specialReq" placeholder="Bonfire setup, trekking guide, extra blankets..." value={form.specialReq} onChange={handleChange} />
            </div>
            <button type="submit" className="btn-primary">
              Confirm Reservation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      <div className={`booking-toast${showToast ? ' show' : ''}`}>
        <div className="toast-icon">✓</div>
        <div>
          <p>Reservation Confirmed!</p>
          <span>We've sent a confirmation to your email. See you in the mountains! 🏔️</span>
        </div>
      </div>
    </section>
  )
}
