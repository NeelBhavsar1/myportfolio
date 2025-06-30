import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import email_icon from '../../assets/email.png';
import location_icon from '../../assets/location.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm('service_qd3b9gt', 'template_jpn4ofp', form.current, '0qQ5o_piEZGIuGvMp')
      .then((result) => {
          console.log('Message sent successfully:', result.text);
          toast.success("Message sent successfully!")
          form.current.reset(); 
      }, (error) => {
          console.error('Failed to send message:', error.text);
          toast.error("Failed to send message, try again later.")
      });
  };

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

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-item">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-item">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-item">
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" placeholder="Write your message here" rows="5" required />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
/>
    </div>
  );
};

export default Contact;
