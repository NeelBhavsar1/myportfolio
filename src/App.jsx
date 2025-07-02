import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './Projects/Projects'
import Achievements from './components/Achievements/Achievements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div  id="home">
      <NavBar />

      <section>
        <Home />
      </section>
      
      <motion.section 
      id="about"
      initial={{opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration:0.8,
        ease:'backInOut'
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      >
        <About />
      </motion.section>
      
      <motion.section id="projects"
      initial={{
        opacity:0,
        x:-100,
      }}
      whileInView={{
        opacity:1,
        x: 0,
      }}
      transition={{
        duration:1,
      }}
      viewport={{
        once:true,
        amount:0.3,
      }}
      >
        <Projects />
      </motion.section>
      
      <motion.section 
      id="achievements"
      initial={{
        x:100,
        opacity:0,
      }}
      whileInView={{
        x:0,
        opacity:1,
      }}
      transition={{
        duration:1,
      }}
      viewport={{
        once:true,
        amount:0.3,
      }}
      >
        <Achievements />
      </motion.section>
      
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