import { useState, useRef, useEffect } from 'react'

const aiResponses = [
  {
    keywords: ['room', 'rooms', 'suite', 'suites', 'accommodation', 'stay'],
    response: "We offer three luxurious room types:\n\n🏠 Deluxe King ($299/night) — 45m², city views, king bed\n🌊 Executive Suite ($549/night) — 72m², ocean views, living area\n👑 Presidential Suite ($1,299/night) — 120m², panoramic views, private jacuzzi & butler\n\nWould you like to book one?"
  },
  {
    keywords: ['price', 'cost', 'rate', 'rates', 'pricing', 'how much'],
    response: "Here are our nightly rates:\n\n• Deluxe King Room: $299/night\n• Executive Suite: $549/night\n• Presidential Suite: $1,299/night\n\nAll rates include breakfast, WiFi, spa access, and welcome drinks. We also offer a Best Price Guarantee! 💎"
  },
  {
    keywords: ['book', 'booking', 'reserve', 'reservation'],
    response: "You can book directly on this page! Simply scroll to the Reservations section or click the 'Book Now' button. You'll need:\n\n✅ Your name & email\n📅 Check-in & check-out dates\n🛏️ Preferred room type\n\nFree cancellation up to 48 hours before check-in!"
  },
  {
    keywords: ['food', 'restaurant', 'dining', 'breakfast', 'dinner', 'lunch', 'eat', 'cuisine'],
    response: "Our dining experiences include:\n\n🍽️ The Golden Terrace — Michelin-starred fine dining\n🍳 Sunrise Café — Complimentary breakfast buffet (6-11 AM)\n🍸 Azure Sky Bar — Rooftop cocktails & light bites\n🍕 In-Room Dining — 24/7 available\n\nAll rooms include complimentary breakfast!"
  },
  {
    keywords: ['spa', 'wellness', 'massage', 'sauna', 'relax', 'pool', 'gym', 'fitness'],
    response: "Our wellness facilities:\n\n🧖 Serenity Spa — Full-body massages, facials, aromatherapy\n🏊 Infinity Pool — Rooftop with panoramic views\n💪 Fitness Center — 24/7 state-of-the-art equipment\n🧘 Yoga Studio — Daily morning sessions available\n🧖‍♂️ Sauna & Steam Room — Complimentary for all guests"
  },
  {
    keywords: ['check-in', 'check-out', 'checkin', 'checkout', 'time', 'arrival'],
    response: "⏰ Check-in: 3:00 PM onwards\n⏰ Check-out: 12:00 PM\n\nEarly check-in and late check-out can be arranged based on availability. Just let us know in your booking notes or contact our concierge!"
  },
  {
    keywords: ['location', 'address', 'where', 'direction', 'near', 'airport'],
    response: "📍 We're located at 42 Grand Avenue, New York City, in the heart of Manhattan.\n\n🚕 15 min from JFK Airport\n🚶 Walking distance to Central Park\n🗽 5 min from Times Square\n\nWe offer complimentary airport shuttle service for suite guests!"
  },
  {
    keywords: ['amenity', 'amenities', 'facility', 'facilities', 'wifi', 'parking'],
    response: "Every stay includes:\n\n📶 High-speed WiFi throughout\n🅿️ Valet parking available ($25/day)\n☕ Welcome drinks & treats\n🧴 Premium bath amenities (L'Occitane)\n👔 Laundry & dry cleaning service\n📺 Smart TV with streaming\n🛎️ 24/7 concierge service"
  },
  {
    keywords: ['cancel', 'cancellation', 'refund', 'policy'],
    response: "Our flexible cancellation policy:\n\n✅ Free cancellation up to 48 hours before check-in\n✅ Full refund processed within 5-7 business days\n⚠️ Cancellations within 48 hours: 1-night charge applies\n\nModifications can be made anytime via email or phone!"
  },
  {
    keywords: ['event', 'wedding', 'meeting', 'conference', 'party', 'business'],
    response: "We have stunning event spaces:\n\n💒 Grand Ballroom — Up to 500 guests (weddings & galas)\n💼 Executive Boardroom — 20-person meetings\n🎤 The Forum — 200-seat conference hall with full AV\n🎉 Sky Lounge — Intimate events with rooftop views\n\nOur events team handles everything from planning to execution!"
  },
  {
    keywords: ['pet', 'pets', 'dog', 'cat', 'animal'],
    response: "We're pet-friendly! 🐾\n\n🐕 Dogs & cats welcome (up to 25 lbs)\n🛏️ Pet beds & bowls provided\n🌳 Nearby Central Park for walks\n💰 Pet fee: $50/stay\n\nPlease mention your furry friend when booking so we can prepare!"
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'greetings'],
    response: "Hello! Welcome to The Aurelius! 🌟 I'm your AI concierge. I can help you with:\n\n🏨 Room details & pricing\n📅 Booking assistance\n🍽️ Dining recommendations\n🧖 Spa & wellness info\n📍 Local attractions\n\nWhat would you like to know?"
  },
  {
    keywords: ['thank', 'thanks', 'appreciate', 'helpful'],
    response: "You're welcome! 😊 It's my pleasure to assist. If you have any other questions about your stay at The Aurelius, just ask. We're here 24/7 to make your experience perfect! 🌟"
  },
  {
    keywords: ['attraction', 'tourist', 'sightseeing', 'visit', 'things to do', 'explore'],
    response: "Top nearby attractions:\n\n🗽 Statue of Liberty — 20 min by ferry\n🌳 Central Park — 5 min walk\n🎭 Broadway Shows — 8 min walk\n🏛️ MoMA & Met Museum — 10 min\n🛍️ 5th Avenue Shopping — 3 min walk\n🌉 Brooklyn Bridge — 15 min by car\n\nOur concierge can arrange tours & tickets for you!"
  }
]

function getAIResponse(userMessage) {
  const msg = userMessage.toLowerCase()
  for (const item of aiResponses) {
    if (item.keywords.some((kw) => msg.includes(kw))) {
      return item.response
    }
  }
  return "That's a great question! While I may not have the specific answer right now, our front desk team would be happy to help. You can reach them at:\n\n📞 +1 (234) 567-890\n✉️ stay@theaurelius.com\n\nOr try asking me about rooms, dining, spa, booking, or local attractions! 😊"
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: 'Welcome to The Aurelius! 🌟 I\'m your AI travel concierge. Ask me about rooms, dining, local attractions, or anything about your stay!', sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const handleSend = () => {
    const text = input.trim()
    if (!text) return

    setMessages((prev) => [...prev, { text, sender: 'user' }])
    setInput('')
    setIsTyping(true)

    const delay = 800 + Math.random() * 1200
    setTimeout(() => {
      setIsTyping(false)
      const response = getAIResponse(text)
      setMessages((prev) => [...prev, { text: response, sender: 'bot' }])
    }, delay)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      <button
        className={`chat-toggle${isOpen ? ' active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Travel Assistant"
      >
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
          <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
        </svg>
      </button>

      <div className={`chat-widget${isOpen ? ' open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-avatar">🤖</div>
          <div className="chat-header-info">
            <h4>Aurelius AI Concierge</h4>
            <p>Online — Ready to help</p>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="chat-msg bot typing">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask me anything about your stay..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="chat-send" onClick={handleSend} aria-label="Send message">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
          </button>
        </div>
      </div>
    </>
  )
}
