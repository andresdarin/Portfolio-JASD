import { useState, useRef, useEffect } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Observer para animaciones de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setSubmitStatus('')
      }, 4000)
    }, 2000)
  }

  return (
    <section id="contact" ref={sectionRef} className={`contact section ${isVisible ? 'animate' : ''}`}>
      {/* Elementos de fondo modernos */}
      <div className="contact-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-gradient">Conectemos</span>
            <span className="title-subtitle">Hablemos sobre tu próximo proyecto</span>
          </h2>
        </div>

        <div className="contact-content">
          {/* Tarjeta de información */}
          <div className="info-module glass-module">
            <div className="module-header">
              <h3 className="module-title">Contacto Directo</h3>
              <div className="module-decoration">
                <div className="decoration-dot"></div>
                <div className="decoration-dot"></div>
                <div className="decoration-dot"></div>
              </div>
            </div>

            <div className="info-content">
              <p className="info-description">
                Estoy disponible para nuevos proyectos, colaboraciones o simplemente para conversar sobre tecnología y desarrollo.
              </p>

              <div className="contact-channels">
                <a href="mailto:ardenridsdev@gmail.com" className="channel-link">
                  <div className="channel-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Email</span>
                    <span className="channel-value">ardenridsdev@gmail.com</span>
                  </div>
                  <div className="channel-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/juanandressilvadarin" target="_blank" rel="noopener noreferrer" className="channel-link">
                  <div className="channel-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">LinkedIn</span>
                    <span className="channel-value">/juanandressilvadarin</span>
                  </div>
                  <div className="channel-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                <a href="https://github.com/andresdarin" target="_blank" rel="noopener noreferrer" className="channel-link">
                  <div className="channel-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">GitHub</span>
                    <span className="channel-value">@andresdarin</span>
                  </div>
                  <div className="channel-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="module-footer">
              <div className="availability">
                <div className="availability-dot"></div>
                <span>Disponible para nuevos proyectos</span>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="form-module glass-module">
            <div className="module-header">
              <h3 className="module-title">Enviar Mensaje</h3>
              <div className="module-badge">Nuevo</div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <span className="label-text">Nombre</span>
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="modern-input"
                      required
                      placeholder="Tu nombre completo"
                    />
                    <div className="input-underline"></div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span className="label-text">Email</span>
                  </label>
                  <div className="input-container">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="modern-input"
                      required
                      placeholder="tu.email@ejemplo.com"
                    />
                    <div className="input-underline"></div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <span className="label-text">Asunto</span>
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="modern-input"
                    required
                    placeholder="¿De qué quieres hablar?"
                  />
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span className="label-text">Mensaje</span>
                </label>
                <div className="input-container">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="modern-textarea"
                    rows="4"
                    required
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  ></textarea>
                  <div className="input-underline"></div>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                <span className="button-content">
                  {isSubmitting ? (
                    <>
                      <span className="button-loader"></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </span>
                <span className="button-background"></span>
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22,4 12,14.01 9,11.01" />
                    </svg>
                  </div>
                  <div className="success-content">
                    <h4>¡Mensaje enviado!</h4>
                    <p>Te responderé en menos de 24 horas.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact