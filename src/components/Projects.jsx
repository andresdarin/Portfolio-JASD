import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Cosmic Dashboard",
      description: "Dashboard interactivo para visualización de datos espaciales con animaciones fluidas y diseño futurista.",
      technologies: ["React", "D3.js", "CSS3", "WebGL"],
      image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Neural Network Visualizer",
      description: "Aplicación web para visualizar y entrenar redes neuronales de forma interactiva y educativa.",
      technologies: ["JavaScript", "TensorFlow.js", "Canvas API", "CSS3"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Quantum Portfolio",
      description: "Portfolio personal con efectos cuánticos y partículas interactivas que responden al movimiento del usuario.",
      technologies: ["React", "Three.js", "GSAP", "CSS3"],
      image: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Stellar Navigation",
      description: "Sistema de navegación espacial con mapas interactivos y cálculos de trayectorias en tiempo real.",
      technologies: ["Vue.js", "WebGL", "Node.js", "MongoDB"],
      image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Proyectos Estelares</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${activeProject === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveProject(index)}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects