import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark" aria-hidden="true">
            <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pd-bg" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1e3d6b"/>
                  <stop offset="100%" stopColor="#0d1e35"/>
                </linearGradient>
                <linearGradient id="pd-gold" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f5c842"/>
                  <stop offset="100%" stopColor="#d4890a"/>
                </linearGradient>
              </defs>
              {/* Dış altıgen — altın çerçeve */}
              <polygon
                points="26,2 48,14.5 48,37.5 26,50 4,37.5 4,14.5"
                fill="url(#pd-gold)"
              />
              {/* İç altıgen — koyu zemin */}
              <polygon
                points="26,6.5 43.5,16.5 43.5,35.5 26,45.5 8.5,35.5 8.5,16.5"
                fill="url(#pd-bg)"
              />
              {/* Köşe aksanları */}
              <polygon
                points="26,6.5 43.5,16.5 43.5,35.5 26,45.5 8.5,35.5 8.5,16.5"
                fill="none"
                stroke="rgba(245,200,66,0.18)"
                strokeWidth="1"
              />
              {/* PD yazısı */}
              <text
                x="26"
                y="32"
                fontFamily="Georgia,'Times New Roman',serif"
                fontSize="16"
                fontWeight="700"
                fill="url(#pd-gold)"
                textAnchor="middle"
                letterSpacing="1.5"
              >PD</text>
              {/* Alt dekoratif çizgi */}
              <line x1="18" y1="36" x2="34" y2="36" stroke="url(#pd-gold)" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
            </svg>
          </span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Poyraz Dekorasyon</span>
            <span className="navbar__logo-sub">Tadilat &amp; Dekorasyon</span>
          </span>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`} onClick={closeMenu}>Ana Sayfa</NavLink>
          <NavLink to="/hakkimizda" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`} onClick={closeMenu}>Hakkımızda</NavLink>
          <NavLink to="/hizmetler" className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`} onClick={closeMenu}>Hizmetler</NavLink>
          <NavLink to="/iletisim" className={({ isActive }) => `navbar__link btn btn-primary navbar__cta${isActive ? ' active' : ''}`} onClick={closeMenu}>İletişim</NavLink>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menüyü aç/kapat"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
