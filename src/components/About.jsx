import { useEffect, useRef, useState } from 'react'
import './About.css'

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

// Componente para el elemento cósmico animado
const CosmicElement = () => (
  <div className="cosmic-element">
    <div className="planet">
      <div className="planet-ring"></div>
    </div>
    <div className="orbit primary-orbit">
      <div className="satellite primary-satellite"></div>
    </div>
    <div className="orbit secondary-orbit">
      <div className="satellite secondary-satellite"></div>
    </div>
    <div className="floating-particles">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`particle particle-${i + 1}`}></div>
      ))}
    </div>
  </div>
)

// Componente para puntos de filosofía
const PhilosophyPoint = ({ icon, title, description, delay = 0 }) => (
  <div
    className="philosophy-point"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="point-icon">
      <span className="icon-symbol">{icon}</span>
      <div className="icon-glow"></div>
    </div>
    <div className="point-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
)

// Componente para skills con iconos
const SkillCard = ({ name, icon, delay = 0 }) => (
  <div
    className="skill-card"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="skill-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        {icon}
      </svg>
      <div className="skill-icon-glow"></div>
    </div>
    <span className="skill-name">{name}</span>
  </div>
)

// Iconos SVG para las tecnologías (9 tecnologías)
const techIcons = {
  typescript: <path d="M3 3h18v18H3zm9 9V8m0 4h4m-4 0v4" />,
  tailwind: <path d="M12 6C9.33 8.67 7.5 10.5 7.5 12.75c0 1.13.38 2.13 1.13 3C9.75 16.5 11 17 12.5 17c3-.5 4.5-2.5 4.5-5.25C17 9.5 15.17 7.67 12 6z M6 12c2.67-2.67 4.5-4.5 6.75-4.5 1.13 0 2.13.38 3 1.13.75 1.13 1.25 2.38 1.25 3.87 0 3-2 4.5-4.75 4.5C9.5 17 7.67 15.17 6 12z" />,
  nextjs: <path d="M12 2l10 6-10 10L2 8l10-6z M12 7l-7 5h14l-7-5z M5 12h14" />,
  nodejs: <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 18l7-4V8l-7-4-7 4v8l7 4z" />,
  angular: <path d="M12 2l10 4v4l-10 12L2 10V6l10-4zm0 4L6 16h12L12 6z M12 8l3 6H9l3-6z" />,
  mongodb: <path d="M12 2C8.14 2 5 4.58 5 8c0 5.25 7 13 7 13s7-7.75 7-13c0-3.42-3.14-6-7-6z M12 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />,
  react: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0v8m-8-4h16" />,
  javascript: <path d="M3 3h18v18H3zM12 12v6m0-6l-4 4m4-4l4 4" />,
  git: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
}

// Componente principal About
const About = () => {
  const [aboutRef, isVisible] = useIntersectionAnimation(0.3)

  const skills = [
    { name: 'TypeScript', icon: techIcons.typescript },
    { name: 'React', icon: techIcons.react },
    { name: 'Next.js', icon: techIcons.nextjs },
    { name: 'Tailwind', icon: techIcons.tailwind },
    { name: 'Angular', icon: techIcons.angular },
    { name: 'Node.js', icon: techIcons.nodejs },
    { name: 'MongoDB', icon: techIcons.mongodb },
    { name: 'JavaScript', icon: techIcons.javascript },
    { name: 'Git', icon: techIcons.git }
  ]

  const philosophyPoints = [
    {
      icon: '⚡',
      title: 'Simplicidad como ética',
      description: 'Menos es más. Soluciones claras que resuelven problemas reales'
    },
    {
      icon: '🎯',
      title: 'Producto como compromiso',
      description: 'Cada entrega es una promesa cumplida con calidad y propósito'
    },
    {
      icon: '🌟',
      title: 'Impacto como resultado',
      description: 'El éxito se mide en valor real generado para usuarios y negocio'
    }
  ]

  return (
    <section
      id="about"
      className={`about section ${isVisible ? 'animate' : ''}`}
      ref={aboutRef}
    >
      {/* Fondo de estrellas animado */}
      <div className="stars-background">
        {[...Array(50)].map((_, i) => (
          <div key={i} className={`star star-${(i % 3) + 1}`}></div>
        ))}
      </div>

      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Sobre Mí</span>
          <div className="title-underline"></div>
        </h2>

        <div className="about-content">
          <div className="about-text">
            <div className="story-section">
              <h3 className="story-title">De idea a producción</h3>
              <div className="story-paragraphs">
                <p className="story-paragraph">
                  Soy Analista de Sistemas y Desarrollador Frontend/Fullstack, especializado en convertir ideas en productos web completos. Diseño y construyo sitios end-to-end: prototipo, frontend, backend, arquitectura y despliegue, cuidando rendimiento, accesibilidad y experiencia de usuario en cada paso.
                </p>
                <p className="story-paragraph">
                  Trabajo con un enfoque práctico: prototipado rápido, desarrollo de interfaces reutilizables, APIs y lógica de backend. Prioritizo código limpio, entregas funcionales tempranas y soluciones fáciles de mantener para poder iterar con resultados reales.
                </p>
                <p className="story-paragraph">
                  Ofrezco además rediseños estratégicos y gestión de hosting/despliegues para que el proyecto no solo se lance, sino que funcione y escale. Si querés transformar una idea en un producto que genere impacto, puedo llevarlo de la mano desde el brief hasta la producción.
                </p>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3 className="skills-title">Stack Tecnológico</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  {...skill}
                  delay={isVisible ? index * 100 : 0}
                />
              ))}
            </div>
          </div>
        </div>

        <CosmicElement />
      </div>
    </section>
  )
}

export default About