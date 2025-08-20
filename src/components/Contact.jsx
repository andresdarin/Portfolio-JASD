import { useState } from 'react'
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
      }, 3000)
    }, 2000)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Conectemos en el Cosmos</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-title">¿Listo para crear algo extraordinario?</h3>
              <p className="info-description">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                Si tienes un proyecto en mente o simplemente quieres charlar
                sobre tecnología, no dudes en contactarme.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h4>Email</h4>
                    <p>ardenridsdev@gmail.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💼</div>
                  <div className="method-content">
                    <h4>LinkedIn</h4>
                    <p>www.linkedin.com/in/juanandressilvadarin</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">🐙</div>
                  <div className="method-content">
                    <h4>GitHub</h4>
                    <p>github.com/andresdarin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cosmic-decoration">
              <div className="floating-particle particle-1"></div>
              <div className="floating-particle particle-2"></div>
              <div className="floating-particle particle-3"></div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="submit-loading">
                    <span className="loading-spinner"></span>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  ✨ ¡Mensaje enviado con éxito! Te responderé pronto.
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