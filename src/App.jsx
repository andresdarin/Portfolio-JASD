import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import StarField from './components/StarField'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'
import UnderDevelopment from './components/UnderDevelopment'
import { useLoader } from './hooks/useLoader'
import { useActiveSection } from './hooks/useActiveSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const loading = useLoader(2000)
  const activeSection = useActiveSection(['home', 'projects', 'about', 'contact'])

  if (loading) return <Loader />

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal - página completa */}
          <Route path="/" element={
            <>
              <StarField />
              <Header activeSection={activeSection} />
              <main>
                <Hero />
                <Projects />
                <About />
                <Contact />
                <Footer />
              </main>
              <ScrollToTop />
            </>
          } />

          {/* Ruta para proyectos en desarrollo */}
          <Route path="/under-development" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App