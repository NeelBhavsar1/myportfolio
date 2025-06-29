import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './NavBar.css';
import logo_icon from '../../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi'; 

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

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
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>

        <div className="connect">
          <button onClick={connectHandler}>Connect with me!</button>
        </div>

        <div className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default NavBar;
