import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './Projects/Projects'
import Achievements from './components/Achievements/Achievements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div  id="home">
      <NavBar />

      <section>
        <Home />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="achievements">
        <Achievements />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <section>
        <Footer />
      </section>
      
    </div>
  )
}

export default App