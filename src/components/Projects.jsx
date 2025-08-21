import { useState, useEffect, useRef } from 'react';
import './Projects.css';

// Hook personalizado para animaciones de intersección
const useIntersectionAnimation = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [sectionRef, isVisible] = useIntersectionAnimation(0.2);

  const projects = [
    {
      id: 1,
      title: "Rifacil",
      description: "Plataforma de rifas en línea con sistema de pagos integrado y gestión de sorteos. Interfaz intuitiva y segura para creadores y participantes.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "AhorrApp",
      description: "Aplicación móvil para gestión de finanzas personales con seguimiento de gastos, metas de ahorro y reportes visuales interactivos.",
      technologies: ["React Native", "Firebase", "Chart.js", "CSS3"],
      image: "https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Cozy Cups",
      description: "E-commerce especializado en tés y cafés premium con sistema de recomendaciones y suscripciones personalizadas.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Tienda Virtual",
      description: "Solución completa de comercio electrónico con panel de administración, múltiples métodos de pago y gestión de inventario.",
      technologies: ["React", "Express", "MongoDB", "PayPal API"],
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 5,
      title: "ToDo List",
      description: "Aplicación de productividad con funciones avanzadas: categorías, recordatorios, colaboración y sincronización multiplataforma.",
      technologies: ["JavaScript", "Firebase", "CSS3", "PWA"],
      image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Landing Page ProRoller",
      description: "Landing page moderna para empresa de rodillos industriales con diseño responsivo, animaciones y formularios interactivos.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      image: "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    }
  ];

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className={`projects section ${isVisible ? 'animate' : ''}`}
      ref={sectionRef}
    >
      {/* Fondo de estrellas */}
      <div className="projects-stars-background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`project-star project-star-${(i % 3) + 1}`}></div>
        ))}
      </div>

      <div className="container">
        <h2 className="section-title">Proyectos</h2>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${activeProject === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveProject(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demo} className="project-link">
                      <span>Demo</span>
                    </a>
                    <a href={project.github} className="project-link">
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-glow"></div>
              <div className="project-orbits">
                <div className="project-orbit project-orbit-1"></div>
                <div className="project-orbit project-orbit-2"></div>
                <div className="project-satellite"></div>
              </div>
            </div>
          ))}
        </div>

        {!showAllProjects && projects.length > 3 && (
          <div className="projects-more">
            <button className="more-projects-btn" onClick={toggleShowAllProjects}>
              <span>Ver Más Proyectos</span>
              <div className="button-glow"></div>
              <div className="button-orbits">
                <div className="button-orbit"></div>
                <div className="button-satellite"></div>
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;