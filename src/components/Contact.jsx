// npm i @emailjs/browser
import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('') // 'success' | 'error' | ''
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Inicializamos EmailJS con la PUBLIC KEY (opcional si también la pasás en sendForm)
  useEffect(() => {
    emailjs.init('hP34TYsN0YL1W6G2y') // <-- tu public key
  }, [])

  // Observer para animaciones de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const SERVICE_ID = 'service_1ebvrbq';
      const AUTOREPLY_TEMPLATE = 'template_1l2sne8';
      const CONTACT_TEMPLATE = 'template_bvqfvcm';
      const PUBLIC_KEY = 'hP34TYsN0YL1W6G2y';

      const formData = {
        name: formRef.current.name.value,
        email: formRef.current.email.value,
        subject: formRef.current.subject.value,
        message: formRef.current.message.value,
        time: new Date().toLocaleString()
      };


      console.log('formData', formData)

      // 1️⃣ Correo para mí
      await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE, formData, PUBLIC_KEY);

      // 2️⃣ Auto-reply para el usuario
      await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE, formData, PUBLIC_KEY);

      setSubmitStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 4000);
    }
  };


  return (
    <section id="contact" ref={sectionRef} className={`contact section ${isVisible ? 'animate' : ''}`}>
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

              <div className="contact-channels">
                <a
                  href="https://wa.me/59892117228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-link"
                >
                  <div className="channel-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 3.5H4a2.5 2.5 0 0 0-2.5 2.5v12A2.5 2.5 0 0 0 4 20.5h16a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 20 3.5z" />
                      <path d="M7 17l1-4 3 3 4-7" />
                    </svg>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">WhatsApp</span>
                    <span className="channel-value">(+598) 92 117 228</span>
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

          <div className="form-module glass-module">
            <div className="module-header">
              <h3 className="module-title">Enviar Mensaje</h3>
              <div className="module-badge">Nuevo</div>
            </div>

            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <span className="label-text">Nombre</span>
                  </label>
                  <div className="input-container">
                    {/* <- Cambié a name="name" para que coincida con tu template {{name}} */}
                    <input type="text" id="name" name="name" className="modern-input" required placeholder="Tu nombre completo" />
                    <div className="input-underline"></div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span className="label-text">Email</span>
                  </label>
                  <div className="input-container">
                    {/* Mantengo from_email porque en tu template usas {{from_email}} */}
                    <input type="email" id="email" name="email" className="modern-input" required placeholder="tu.email@ejemplo.com" />
                    <div className="input-underline"></div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <span className="label-text">Asunto</span>
                </label>
                <div className="input-container">
                  <input type="text" id="subject" name="subject" className="modern-input" required placeholder="¿De qué quieres hablar?" />
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span className="label-text">Mensaje</span>
                </label>
                <div className="input-container">
                  <textarea id="message" name="message" className="modern-textarea" rows="4" required placeholder="Cuéntame sobre tu proyecto o idea..."></textarea>
                  <div className="input-underline"></div>
                </div>
              </div>

              <button type="submit" className={`submit-button ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
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
              {submitStatus === 'error' && (
                <div className="error-message">
                  <p>Error al enviar el mensaje. Intenta nuevamente.</p>
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
