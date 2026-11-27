import { useCallback, useEffect, useRef, useState } from 'react'
import { GraduationCap, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from '../common/ThemeToggle.jsx'

function Navbar() {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const firstNavLinkRef = useRef(null)
  const menuToggleRef = useRef(null)
  const sectionLink = (section) =>
    pathname === '/' ? `#${section}` : `/#${section}`
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)

    if (menuToggleRef.current?.getClientRects().length) {
      menuToggleRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    firstNavLinkRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeMenu, isMenuOpen])

  return (
    <header className="landing-navbar">
      <Link className="landing-brand" to="/" aria-label="Student Portfolio Builder home" onClick={closeMenu}>
        <span className="landing-brand__icon" aria-hidden="true">
          <GraduationCap size={22} />
        </span>
        <span className="landing-brand__name">
          Student <strong>Portfolio Builder</strong>
        </span>
      </Link>

      <nav
        className={`landing-nav${isMenuOpen ? ' is-open' : ''}`}
        id="landing-navigation"
        aria-label="Main navigation"
      >
        <NavLink end onClick={closeMenu} ref={firstNavLinkRef} to="/">Home</NavLink>
        <Link onClick={closeMenu} to={sectionLink('features')}>Features</Link>
        <Link onClick={closeMenu} to={sectionLink('templates')}>Templates</Link>
        <Link onClick={closeMenu} to={sectionLink('about')}>About</Link>
        <Link className="landing-nav__login" onClick={closeMenu} to="/login">Login</Link>
        <Link className="landing-nav__cta" onClick={closeMenu} to="/register">
          Get Started
        </Link>
      </nav>

      <div className="landing-navbar__tools">
        <ThemeToggle />
        <button
          aria-controls="landing-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="landing-menu-toggle"
          onClick={() => (isMenuOpen ? closeMenu() : setIsMenuOpen(true))}
          ref={menuToggleRef}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
