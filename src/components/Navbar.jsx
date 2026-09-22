import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './style/style.css'
import logoFallback from '../assets/magician-logo.png'
import { api } from '../lib/api'

// Default nav links match the site's fixed routes; only used until the fetch
// resolves so the menu never flashes empty.
const DEFAULT_NAV_LINKS = [
  { path: '/', label: 'HOME', end: true },
  { path: '/about', label: 'ABOUT' },
  { path: '/services', label: 'SERVICES' },
  { path: '/gallery', label: 'GALLERY' },
  { path: '/events', label: 'EVENTS' },
  { path: '/blogs', label: 'BLOGS' },
  { path: '/contact', label: 'CONTACT US' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showItems, setShowItems] = useState(false)
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)
  const location = useLocation()

  const [navLinks, setNavLinks] = useState(DEFAULT_NAV_LINKS)
  const [settings, setSettings] = useState({
    logoUrl: logoFallback,
    phonePrimary: '+919372074683',
    youtubeUrl: 'https://youtube.com',
    instagramUrl: 'https://instagram.com',
    emailPrimary: 'contact@magicianrajesh.com',
  })

  useEffect(() => {
    api
      .site()
      .then((data) => {
        if (data.navLinks?.length) {
          setNavLinks(data.navLinks.map((l) => ({ path: l.path, label: l.label, end: l.path === '/' })))
        }
        setSettings((s) => ({ ...s, ...data.settings, logoUrl: data.settings.logoUrl || logoFallback }))
      })
      .catch(() => {})
  }, [])

  // Close menu when route changes
  useEffect(() => {
    closeMobileMenu()
  }, [location])

  // Prevent background scroll when mobile nav is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Sparkle Animation Effect when Mobile Nav Panel opens
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setShowItems(false)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      return
    }

    setShowItems(false)
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas dimensions
    const width = (canvas.width = window.innerWidth)
    const height = (canvas.height = window.innerHeight)

    const colors = [
      '#E5BA5A', // Gold
      '#FFD700', // Bright Gold
      '#FFFFFF', // White
      '#FFF099', // Pale Gold
      '#C77DFF', // Mystic Purple
      '#4ECCA3', // Mystic Emerald
      '#FF6B6B', // Ruby
    ]

    const sparkles = []
    const intensity = 28

    const addSparkle = (xPos, yPos, count = 1) => {
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 2.8 + 1.2
        const opacity = 1
        const dispersingSpeed = Math.random() * 0.02 + 0.012
        const dispersingDirection = (Math.random() - 0.5) * 3.5
        const velocityY = (Math.random() - 0.3) * 2.5
        const color = colors[Math.floor(Math.random() * colors.length)]
        sparkles.push({
          xPos: xPos + (Math.random() * intensity - intensity * 0.5),
          yPos: yPos + (Math.random() * intensity - intensity * 0.5),
          radius,
          opacity,
          dispersingSpeed,
          dispersingDirection,
          velocityY,
          color,
        })
      }
    }

    const startTime = performance.now()
    const sweepDuration = 750 // 750ms zig-zag duration
    let itemsRevealed = false

    const animate = (currentTime) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / sweepDuration, 1)

      // Animate zig-zag wand trail across the screen
      if (progress < 1) {
        // Zig-zag path from top to bottom with 4 sweeping waves
        const currentY = 100 + progress * (height - 200)
        const currentX =
          width / 2 + Math.sin(progress * Math.PI * 5) * (width * 0.38)

        // Add bursts of sparkles along the magical path
        addSparkle(currentX, currentY, 4)
      } else if (!itemsRevealed) {
        itemsRevealed = true
        setShowItems(true)
      }

      // Render and update each sparkle
      let sparkleAmount = sparkles.length
      while (sparkleAmount--) {
        const sparkle = sparkles[sparkleAmount]
        if (sparkle.opacity <= 0) {
          sparkles.splice(sparkleAmount, 1)
        } else {
          sparkle.yPos += sparkle.velocityY + 0.8 // slight gravity
          sparkle.xPos += sparkle.dispersingDirection
          sparkle.opacity -= sparkle.dispersingSpeed

          ctx.globalAlpha = Math.max(0, sparkle.opacity)
          ctx.beginPath()
          ctx.arc(
            sparkle.xPos,
            sparkle.yPos,
            sparkle.radius,
            0,
            2 * Math.PI,
            false
          )
          ctx.fillStyle = '#FFFFFF'
          ctx.fill()
          ctx.lineWidth = 1.2
          ctx.strokeStyle = sparkle.color
          ctx.stroke()

          // Draw small 4-point star for larger sparkles
          if (sparkle.radius > 2.2 && sparkle.opacity > 0.4) {
            ctx.strokeStyle = sparkle.color
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(sparkle.xPos - sparkle.radius * 2, sparkle.yPos)
            ctx.lineTo(sparkle.xPos + sparkle.radius * 2, sparkle.yPos)
            ctx.moveTo(sparkle.xPos, sparkle.yPos - sparkle.radius * 2)
            ctx.lineTo(sparkle.xPos, sparkle.yPos + sparkle.radius * 2)
            ctx.stroke()
          }

          ctx.globalAlpha = 1
        }
      }

      // Continue animation while sparkles exist or during sweep
      if (progress < 1 || sparkles.length > 0) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    // Interactive sparkle on touch / mouse move inside opened panel
    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      const clientX = event.clientX || (event.touches && event.touches[0]?.clientX)
      const clientY = event.clientY || (event.touches && event.touches[0]?.clientY)
      if (clientX !== undefined && clientY !== undefined) {
        const x = clientX - rect.left
        const y = clientY - rect.top
        addSparkle(x, y, 3)
      }
    }

    canvas.addEventListener('mousemove', handlePointerMove)
    canvas.addEventListener('touchmove', handlePointerMove, { passive: true })

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      canvas.removeEventListener('mousemove', handlePointerMove)
      canvas.removeEventListener('touchmove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="navbar-header">
      <div className="navbar-top">
        {/* Left: Social Media (Desktop) */}
        <div className="nav-social-section">
          <span className="nav-section-title">Follow us on Social Media</span>
          <div className="nav-social-icons">
            <a
              href={settings.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="YouTube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href={`mailto:${settings.emailPrimary}`}
              className="social-icon-btn"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href={settings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Center/Left: Logo */}
        <div className="nav-logo-section">
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src={settings.logoUrl}
              alt="Rajesh Kumar - Techno Magician / Illusionist / Mentalist"
              className="nav-logo-img"
            />
          </Link>
        </div>

        {/* Right: Contact Booking (Desktop) */}
        <div className="nav-contact-section">
          <span className="nav-section-title">Contact For Booking</span>
          <div className="nav-phone-wrap">
            <a href={`tel:${settings.phonePrimary}`} className="phone-icon-btn" aria-label="Call">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href={`tel:${settings.phonePrimary}`} className="nav-phone-number">
              {settings.phonePrimary}
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="nav-hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Desktop Bottom: Navigation Links */}
      <nav className="navbar-bottom">
        <div className="nav-divider-container">
          <ul className="nav-links-list">
            {navLinks.map((link, idx) => (
              <li key={link.path} className="nav-link-wrapper">
                <NavLink
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive ? 'nav-item-link active' : 'nav-item-link'
                  }
                >
                  {link.label}
                </NavLink>
                {idx < navLinks.length - 1 && (
                  <span className="nav-separator" aria-hidden="true">
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Full-Screen Mobile & Portrait Tablet Navigation Panel */}
      <div
        className={`mobile-nav-panel ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Canvas for magical zig-zag sparkle animation */}
        <canvas ref={canvasRef} className="sparkles-canvas" />

        {/* Panel Header with Logo on Left and Close Button on Right */}
        <div className="mobile-panel-header">
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src={settings.logoUrl}
              alt="Rajesh Kumar Magician"
              className="mobile-panel-logo"
            />
          </Link>
          <button
            className="mobile-panel-close-btn"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Nav items container that appears after sparkle animation */}
        <div className={`mobile-panel-body ${showItems ? 'revealed' : ''}`}>
          <ul className="mobile-nav-menu">
            {navLinks.map((link, idx) => (
              <li
                key={link.path}
                className="mobile-nav-item"
                style={{
                  animationDelay: showItems ? `${idx * 0.08}s` : '0s',
                }}
              >
                <NavLink
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive
                      ? 'mobile-nav-link active'
                      : 'mobile-nav-link'
                  }
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social & Contact info inside mobile panel */}
          <div
            className="mobile-panel-footer"
            style={{
              animationDelay: showItems
                ? `${navLinks.length * 0.08 + 0.1}s`
                : '0s',
            }}
          >
            <div className="mobile-panel-contact">
              <span className="mobile-footer-title">Contact For Booking</span>
              <a href={`tel:${settings.phonePrimary}`} className="mobile-phone-link">
                <i className="fa-solid fa-phone"></i> {settings.phonePrimary}
              </a>
            </div>

            <div className="mobile-panel-social">
              <span className="mobile-footer-title">Follow us on Social Media</span>
              <div className="mobile-social-icons">
                <a
                  href={settings.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  href={`mailto:${settings.emailPrimary}`}
                  className="social-icon-btn"
                  aria-label="Email"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar