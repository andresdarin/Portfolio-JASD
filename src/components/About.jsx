import { useEffect, useRef, useState } from 'react'
import {
  SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs,
  SiMongodb, SiReact, SiAngular, SiJavascript, SiGit, SiHtml5
} from "react-icons/si";
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
      {icon}
      <div className="skill-icon-glow"></div>
    </div>
    <span className="skill-name">{name}</span>
  </div>
)

// Iconos SVG para las tecnologías
const techIcons = {
  typescript: <SiTypescript />,
  tailwind: <SiTailwindcss />,
  nextjs: <SiNextdotjs />,
  nodejs: <SiNodedotjs />,
  angular: <SiAngular />,
  mongodb: <SiMongodb />,
  react: <SiReact />,
  javascript: <SiJavascript />,
  git: <SiGit />,
  html5: <SiHtml5 />
};

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
    { name: 'Git', icon: techIcons.git },
    { name: 'HTML5', icon: techIcons.html5 } // 🔟 extra solo para mobile
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
