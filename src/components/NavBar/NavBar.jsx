import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './NavBar.css';
import logo_icon from '../../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import lenis from '../../lenis';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const connectHandler = () => {
    window.open('https://www.linkedin.com/in/neel-bhavsar-767532238/', '_blank');
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);


  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      lenis.scrollTo(section, {offset: -90});
    }
    closeMenu();
  };

  const links = [
    { label: 'Home', target: '#home' },
    { label: 'About', target: '#about' },
    { label: 'Projects', target: '#projects' },
    { label: 'Achievements', target: '#achievements' },
    { label: 'Contact', target: '#contact' },
  ];

  return (
    <motion.div
      className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="logo">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
            <img src={logo_icon} alt="logo" />
          </a>
        </div>

        <div className="navlinks">
          <ul>
            {links.map(({ label, target }) => (
              <li key={target}>
                <a href={target} onClick={(e) => scrollToSection(e, target)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="connect">
          <motion.button 
            onClick={connectHandler}
            whileTap={{ scale: 0.95, rotate: -5 }}
          >
            <p>Connect</p>
          </motion.button>
        </div>

        <div className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            {links.map(({ label, target }) => (
              <li key={target}>
                <a href={target} onClick={(e) => scrollToSection(e, target)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default NavBar;
