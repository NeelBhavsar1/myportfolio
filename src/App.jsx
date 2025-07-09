import React, { useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './Projects/Projects'
import Achievements from './components/Achievements/Achievements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'


const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

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
      
      <section id="projects">
        <Projects />
      </section>
      
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