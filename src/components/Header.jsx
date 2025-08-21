import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: 'home', label: 'Inicio', icon: '' },
    { id: 'about', label: 'Sobre mí', icon: '' },
    { id: 'projects', label: 'Proyectos', icon: '' },
    { id: 'contact', label: 'Contacto', icon: '' }
  ]

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo con imagen */}
          <div className="logo" onClick={() => scrollToSection('home')}>
            <div className="logo-container">
              <img
                src="/src/assets/jasd_white.png"
                alt="JASD Logo"
                className="logo-image"
              />
              <div className="logo-glow"></div>
            </div>
          </div>

          {/* Navegación */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-background"></div>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                <div className="nav-indicator"></div>
              </button>
            ))}

            {/* Partículas decorativas en el menú móvil */}
            <div className="nav-particles">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`nav-particle nav-particle-${i + 1}`}></div>
              ))}
            </div>
          </nav>

          {/* Botón del menú hamburguesa mejorado */}
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="hamburger-container">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
            <div className="menu-toggle-glow"></div>
          </button>
        </div>
      </div>

      {/* Estrellas de fondo en el header */}
      <div className="header-stars">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`header-star header-star-${(i % 3) + 1}`}></div>
        ))}
      </div>
    </header>
  )
}

export default Header