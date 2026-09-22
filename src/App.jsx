import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import FooterSection from './components/FooterSection'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceView from './pages/ServiceView'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import EventView from './pages/EventView'
import Blogs from './pages/Blogs'
import BlogView from './pages/BlogView'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import SparkleCursor from './components/SparkleCursor'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

function ScrollAnimationObserver() {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo(0, 0)

    let observer = null

    const initObserver = () => {
      const observerCallback = (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const animClass = el.dataset.animate || 'animate__fadeInUp'
            el.classList.add('animate__animated', animClass)
            el.classList.add('is-animated')
            obs.unobserve(el)
          }
        })
      }

      observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      })

      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => {
        if (!el.classList.contains('is-animated')) {
          observer.observe(el)
        }
      })
    }

    const timer = setTimeout(initObserver, 120)

    return () => {
      clearTimeout(timer)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [location.pathname])

  return null
}

function App() {
  return (
    <>
      <Router>
        <SparkleCursor />
        <ScrollAnimationObserver />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/service-view" exact element={<ServiceView />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/event-view" exact element={<EventView />} />
          <Route path="/blogs" exact element={<Blogs />} />
          <Route path="/blog-view" exact element={<BlogView />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/privacy" exact element={<Privacy />} />
          <Route path="/terms" exact element={<Terms />} />
        </Routes>
        <FooterSection />
      </Router>
    </>
  )
}

export default App
