import React from 'react'
import './Contact.css'
import email_icon from '../../assets/email.png'
import location_icon from '../../assets/location.png'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="header-greet">
        <h2>Get in Touch</h2>
      </div>

      <div className="separator">
        <div className="info-container">
          <h2>Let's talk</h2>
          <p>
            Feel free to reach out for collaborations, questions, or just to connect. I'm always open to new opportunities and conversations!
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <img src={email_icon} alt="email icon" />
              <p>neelbhavsarr1@gmail.com</p>
            </div>
            <div className="contact-item">
              <img src={location_icon} alt="location icon" />
              <p>Sheffield / Liverpool</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <div className="form-item">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>

          <div className="form-item">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>

          <div className="form-item">
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" placeholder="Write your message here" rows="5" />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
