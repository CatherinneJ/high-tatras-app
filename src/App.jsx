import React from 'react'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Attractions  from './sections/Attractions.jsx'
import Activities from './sections/Activities.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import HeroIntro from './sections/HeroIntro.jsx'
import ScrollHome from './components/ScrollHome.jsx'



const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroIntro />
      <About />
      <Attractions />
      <Activities /> 
      <Contact />
      <Footer />

      <ScrollHome />
    
    </>
  )
}

export default App



