import { useEffect, useRef, useState } from 'react'
import './Footer.css'

// Hook personalizado para animaciones de intersección
const useIntersectionAnimation = (threshold = 0.3) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            { threshold }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [threshold])

    return [ref, isVisible]
}

// Componente para elemento cósmico del footer
const FooterCosmicElement = () => (
    <div className="footer-cosmic-element">
        <div className="footer-planet">
            <div className="footer-planet-ring"></div>
        </div>
        <div className="footer-orbit footer-primary-orbit">
            <div className="footer-satellite footer-primary-satellite"></div>
        </div>
        <div className="footer-orbit footer-secondary-orbit">
            <div className="footer-satellite footer-secondary-satellite"></div>
        </div>
        <div className="footer-floating-particles">
            {[...Array(4)].map((_, i) => (
                <div key={i} className={`footer-particle footer-particle-${i + 1}`}></div>
            ))}
        </div>
    </div>
)

// Componente para links sociales
const SocialLink = ({ href, icon, name, delay = 0 }) => (
    <a
        href={href}
        className="social-link"
        style={{ animationDelay: `${delay}ms` }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
    >
        <div className="social-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {icon}
            </svg>
            <div className="social-icon-glow"></div>
        </div>
        <span className="social-name">{name}</span>
    </a>
)

// Componente para links de navegación
const NavLink = ({ href, text, delay = 0 }) => (
    <a
        href={href}
        className="nav-link"
        style={{ animationDelay: `${delay}ms` }}
    >
        {text}
        <div className="nav-link-underline"></div>
    </a>
)

// Iconos SVG para redes sociales
const socialIcons = {
    github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
    email: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
}

// Componente principal Footer
const Footer = () => {
    const [footerRef, isVisible] = useIntersectionAnimation(0.2)
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { href: "https://github.com/andresdarin", icon: socialIcons.github, name: "GitHub" },
        { href: "https://www.linkedin.com/in/juanandressilvadarin", icon: socialIcons.linkedin, name: "LinkedIn" },
        {
            href: "https://wa.me/59892117228",
            icon: (
                <path d="M16.88 14.45c-.25-.12-1.48-.73-1.71-.82-.23-.1-.39-.12-.56.12-.17.25-.66.82-.81.99-.15.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.38-1.73-.14-.25-.02-.38.1-.5.1-.1.23-.26.34-.39.11-.13.15-.22.23-.37.08-.14.04-.26-.02-.37-.07-.12-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43-.14-.01-.3-.01-.46-.01s-.37.06-.56.26c-.19.2-.73.71-.73 1.74s.75 2.02.86 2.17c.12.15 1.48 2.25 3.6 3.15.5.22.88.35 1.18.45.5.16.95.14 1.31.08.4-.06 1.23-.5 1.4-.98.16-.48.16-.89.11-.97-.06-.09-.23-.14-.48-.25z" />
            ),
            name: "WhatsApp"
        },
    ]

    const navLinks = [
        { href: "#home", text: "Inicio" },
        { href: "#about", text: "Sobre Mí" },
        { href: "#projects", text: "Proyectos" },
        { href: "#contact", text: "Contacto" }
    ]

    return (
        <footer
            className={`footer ${isVisible ? 'animate' : ''}`}
            ref={footerRef}
        >
            {/* Fondo de estrellas */}
            <div className="footer-stars-background">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className={`footer-star footer-star-${(i % 3) + 1}`}></div>

                ))}
            </div>
            {/* Call to Action */}
            <div className="footer-cta">
                <div className="cta-content">
                    <h3 className="cta-title">¿Listo para crear algo increíble?</h3>
                    <p className="cta-text">
                        Trabajemos juntos para convertir tu visión en una experiencia digital memorable.
                    </p>
                    <FooterCosmicElement />
                    <a href="#contact" className="cta-button">
                        <span>Hablemos</span>
                        <div className="button-glow"></div>
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="footer-divider"></div>
            <div className="footer-container">
                <div className="footer-content">
                    {/* Sección principal */}
                    <div className="footer-main">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img
                                    src="/public/image.png"
                                    alt="JASD Logo"
                                    className="logo-image-footer"
                                />
                                <div className="logo-glow"></div>
                                {/* Copyright */}
                                <div className="footer-bottom">
                                    <div className="footer-tech-badge">
                                        <span className="tech-text">&copy; {currentYear} JASD. Todos los derechos reservados.</span>
                                        <div className="tech-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navegación rápida */}
                        <div className="footer-nav">
                            <h4 className="footer-section-title">Navegación</h4>
                            <div className="footer-nav-links">
                                {navLinks.map((link, index) => (
                                    <NavLink
                                        key={link.href}
                                        {...link}
                                        delay={index * 100}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Conecta conmigo */}
                        <div className="footer-social">
                            <h4 className="footer-section-title">Conecta Conmigo</h4>
                            <div className="footer-social-links">
                                {socialLinks.map((social, index) => (
                                    <SocialLink
                                        key={social.name}
                                        {...social}
                                        delay={index * 150}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay gradient */}
            <div className="footer-overlay"></div>
        </footer>
    )
}

export default Footer