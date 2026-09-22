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

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08,
    })

    // Pages now render their content after an async data fetch, so
    // .animate-on-scroll elements can appear well after mount. A single
    // querySelectorAll pass would miss anything rendered later and leave
    // it permanently invisible — watch for DOM insertions and pick up new
    // elements as they appear, on top of the initial scan.
    const observeNew = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        if (!el.classList.contains('is-animated') && !el.dataset.scrollObserved) {
          el.dataset.scrollObserved = 'true'
          observer.observe(el)
        }
      })
    }

    const timer = setTimeout(observeNew, 120)
    const mutationObserver = new MutationObserver(observeNew)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(timer)
      mutationObserver.disconnect()
      observer.disconnect()
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
          <Route path="/services/:slug" exact element={<ServiceView />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/events/:slug" exact element={<EventView />} />
          <Route path="/blogs" exact element={<Blogs />} />
          <Route path="/blogs/:slug" exact element={<BlogView />} />
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
