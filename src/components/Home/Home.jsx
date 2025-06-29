import React from 'react';
import './Home.css';
import profile_image from '../../assets/profile.jpeg';
import linkedin_icon from '../../assets/linkedin.png';
import github_icon from '../../assets/github.png';



import { motion } from 'framer-motion';

const Home = () => {

  const linkedinHandler = () => {
    window.open('https://www.linkedin.com/in/neel-bhavsar-767532238/', '_blank');
  };

  const githubHandler = () => {
    window.open('https://github.com/NeelBhavsar1', '_blank');
  };

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/myportfolio/videos/homebg1.mp4" type="video/mp4" />
      </video>

      <img src={profile_image} alt="profile photo" className="profile-photo" />

      <h1>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ color: 'black' }}
        >
          I'm
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="worker">Neel Bhavsar</span>
        </motion.span>
      </h1>


      <p>
        Computer Science student @ University of Liverpool. <br /> Aspiring front-end developer.
      </p>

      <div className="social-link">
        <img src={linkedin_icon} alt="Linkedin" className="linkedin" onClick={linkedinHandler} />
        <img src={github_icon} alt="Github" className="github" onClick={githubHandler} />
      </div>
    </motion.div>
  );
};

export default Home;
