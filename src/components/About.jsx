import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.3 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'CSS3', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 82 },
    { name: 'Three.js', level: 78 }
  ]

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="story-section">
              <h3 className="story-title">Mi Viaje Cósmico</h3>
              <p className="story-paragraph">
                Desde pequeño, siempre me fascinó la idea de explorar lo desconocido. 
                Mientras otros niños soñaban con ser astronautas, yo descubrí que podía 
                crear universos enteros con código.
              </p>
              <p className="story-paragraph">
                Mi pasión por el desarrollo frontend nació de la combinación perfecta 
                entre creatividad y lógica. Cada proyecto es una nueva galaxia por 
                explorar, donde la tecnología se encuentra con el arte.
              </p>
              <p className="story-paragraph">
                Especializado en crear experiencias web que no solo funcionan 
                perfectamente, sino que inspiran y conectan con las emociones de 
                los usuarios. Creo en el poder del diseño para transformar ideas 
                complejas en interfaces intuitivas y hermosas.
              </p>
            </div>

            <div className="philosophy-section">
              <h3 className="philosophy-title">Mi Filosofía</h3>
              <div className="philosophy-points">
                <div className="philosophy-point">
                  <div className="point-icon">🚀</div>
                  <div className="point-content">
                    <h4>Innovación Constante</h4>
                    <p>Siempre explorando nuevas tecnologías y metodologías</p>
                  </div>
                </div>
                <div className="philosophy-point">
                  <div className="point-icon">✨</div>
                  <div className="point-content">
                    <h4>Atención al Detalle</h4>
                    <p>Cada pixel cuenta en la experiencia del usuario</p>
                  </div>
                </div>
                <div className="philosophy-point">
                  <div className="point-icon">🌟</div>
                  <div className="point-content">
                    <h4>Impacto Positivo</h4>
                    <p>Crear soluciones que mejoren la vida de las personas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3 className="skills-title">Habilidades Técnicas</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cosmic-element">
              <div className="planet"></div>
              <div className="orbit">
                <div className="satellite"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About