import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png' 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-logo-info">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Computer Science student & aspiring full-stack developer, building clean and modern web applications.
          </p>
        </div>

        <div className="footer-trademark">
          <p>© 2025 Neel Bhavsar. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
