import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceView from './pages/ServiceView'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import EventView from './pages/EventView'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/services" exact element={<Services/>}/>
        <Route path="/service-view" exact element={<ServiceView/>}/>
        <Route path="/gallery" exact element={<Gallery/>}/>
        <Route path="/events" exact element={<Events/>}/>
        <Route path="/event-view" exact element={<EventView/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
