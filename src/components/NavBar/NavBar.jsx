import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';  // import motion
import './NavBar.css';
import logo_icon from '../../assets/logo.png';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const connectHandler = () => {
    window.open('https://www.linkedin.com/in/neel-bhavsar-767532238/', '_blank');
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -30 }}  
      animate={{ opacity: 1, y: 0 }}         
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="logo">
          <img src={logo_icon} alt="logo" />
        </div>
        <div className="navlinks">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="connect">
          <button onClick={connectHandler}>Connect with me!</button>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
