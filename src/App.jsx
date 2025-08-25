import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import StarField from './components/StarField'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [loading, setLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Loader: se desactiva después de 2s
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Resetear overflow cuando el loader termina
  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = '' // vuelve a usar tu CSS
    } else {
      document.body.style.overflow = 'hidden' // opcional: bloquear scroll mientras carga
    }
  }, [loading])

  // Scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Mostrar flecha si el scroll es mayor a 300px
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div id="loading-screen">
        <img src="/image.png" alt="JASD Logo" className="loading-logo" />
      </div>
    )
  }

  return (
    <div className="App">
      <StarField />
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>

      {/* Flecha scroll-to-top */}
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </div>
  )
}

export default App
