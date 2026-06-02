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
          <span className="navbar__logo-name">Poyraz Dekorasyon</span>
          <span className="navbar__logo-sub">Tadilat &amp; Dekorasyon</span>
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
