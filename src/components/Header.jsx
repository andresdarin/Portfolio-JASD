import { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio', icon: '' },
    { id: 'about', label: 'Sobre mí', icon: '' },
    { id: 'projects', label: 'Proyectos', icon: '' },
    { id: 'contact', label: 'Contacto', icon: '' },
  ];

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.header') && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Evitar scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Logo según tamaño de pantalla
  const logoSrc = isMobile ? '/Jasd-round2.png' : '/image.png';

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo" onClick={() => scrollToSection('home')}>
              <div className="logo-container">
                <img src={logoSrc} alt="JASD Logo" className="logo-image" />
                <div className="logo-glow"></div>
              </div>
            </div>

            <nav className="nav">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              ))}
            </nav>

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

        <div className="header-stars">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`header-star header-star-${(i % 3) + 1}`}></div>
          ))}
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <h2 className="mobile-menu-title">Nav</h2>
          </div>

          <nav className="mobile-menu-nav">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-label">{item.label}</span>
              </button>
            ))}

            <div className="mobile-menu-particles">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="mobile-particle"></div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
