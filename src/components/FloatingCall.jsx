import { useNavigate } from 'react-router-dom'

export default function FloatingCall() {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/iletisim')
  }

  return (
    <a
      href="/iletisim"
      onClick={handleClick}
      className="floating-call"
      aria-label="Hemen Arayın"
    >
      <span className="floating-call__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
        </svg>
      </span>
      <span className="floating-call__label">HEMEN ARAYIN</span>
      <span className="floating-call__pulse" />
    </a>
  )
}
