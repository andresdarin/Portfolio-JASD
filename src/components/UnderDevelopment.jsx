import { useEffect, useState } from 'react'
import './UnderDevelopment.css'

const UnderDevelopment = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 0 : prev + 1))
        }, 100)

        return () => clearInterval(interval)
    }, [])

    const goBack = () => {
        window.history.back()
    }

    const handleNotify = () => {
        window.open('mailto:tu@email.com?subject=Notificación de Proyecto Listo', '_blank')
    }

    return (
        <section className="under-development section">
            <div className="under-development-background">
                <div
                    className="under-development-gradient"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
                    }}
                />
            </div>

            {/* Floating elements */}
            <div className="floating-elements">
                <div className="element element-1"></div>
                <div className="element element-2"></div>
                <div className="element element-3"></div>
                <div className="element element-4"></div>
                <div className="element element-5"></div>
            </div>

            <div className="container">
                <div className="under-development-content">
                    {/* Developer character */}
                    <div className="developer-character">
                        <div className="laptop">
                            <div className="laptop-screen">
                                <div className="code-symbol">{'</>'}</div>
                            </div>
                            <div className="laptop-base"></div>
                        </div>

                        <div className="developer-silhouette">
                            <div className="developer-head"></div>
                        </div>

                        {/* Floating code symbols */}
                        <div className="code-float code-float-1">{'{'}</div>
                        <div className="code-float code-float-2">{'}'}</div>
                        <div className="code-float code-float-3">{'</>'}</div>
                    </div>

                    {/* Title */}
                    <h1 className="under-development-title">
                        <span className="title-line">En</span>
                        <span className="title-line accent">Desarrollo</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="under-development-subtitle">
                        Este proyecto está siendo creado con mucho cariño y dedicación.
                        <br />
                        <span className="accent-text">¡Pronto estará listo para sorprenderte!</span>
                    </p>

                    {/* Progress bar */}
                    <div className="progress-section">
                        <div className="progress-header">
                            <span>Progreso</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="progress-shine"></div>
                            </div>
                        </div>
                    </div>

                    {/* Status indicators */}
                    <div className="status-grid">
                        <div className="status-item">
                            <div className="status-dot status-done"></div>
                            <div className="status-label">Diseño</div>
                        </div>
                        <div className="status-item">
                            <div className="status-dot status-progress"></div>
                            <div className="status-label">Backend</div>
                        </div>
                        <div className="status-item">
                            <div className="status-dot status-progress"></div>
                            <div className="status-label">Frontend</div>
                        </div>
                        <div className="status-item">
                            <div className="status-dot status-pending"></div>
                            <div className="status-label">Testing</div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="under-development-buttons">
                        <button className="btn btn-primary" onClick={goBack}>
                            ← Volver a Proyectos
                        </button>
                        <button className="btn btn-secondary" onClick={handleNotify}>
                            Notificarme cuando esté listo
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    )
}

export default UnderDevelopment