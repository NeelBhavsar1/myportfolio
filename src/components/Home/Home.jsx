import React from 'react';
import './Home.css';
import profile_image from '../../assets/profile.jpeg';
import linkedin_icon from '../../assets/linkedin.png';
import github_icon from '../../assets/github.png';
import { motion } from 'framer-motion';
import Balatro from '../Balatro/Balatro';

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
      <Balatro
        isRotate={false}
        mouseInteraction={false}
        pixelFilter={2000}
        color1="#ffffff"
        color2="#d4d4d4"
        color3="#f0f0f0"
        contrast={2.8}
        lighting={0.2}
      />

      <img src={profile_image} alt="profile photo" className="profile-photo" />

      <h1>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ color: 'black' }}
        >
          I'm&nbsp;
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="worker"> Neel Bhavsar</span>
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
