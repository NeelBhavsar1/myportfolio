import React from 'react';
import { motion } from 'framer-motion';           
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';

import chatapp_icon from '../assets/chatapp.png';
import reflexzone_icon from '../assets/reflex.png';
import hackathon_icon from '../assets/placeholder.png';
import weatherapp_icon from '../assets/weather.png';
import hashing_icon from '../assets/hashing.png';
import otherprojects_icon from '../assets/github.png';
import cryptoapp_icon from '../assets/crypto.png'
import crimsonaiapp_icon from '../assets/crimsonai.png'

import { cardvar, containervar } from '../anims';   

const Projects = () => {
  const projects = [
    {
      name: "CrimsonAI",
      desc: "AI SaaS app built with the PERN stack, featuring Clerk auth, Framer Motion UI, and real-time AI-powered functionality.",
      link: "https://www.linkedin.com/in/neel-bhavsar-767532238/",
      photo: crimsonaiapp_icon,
    },
    {
      name: "Chat App",
      desc: "A real-time chat app built with React and Firebase, featuring authentication, dynamic chat rooms, and instant messaging.",
      link: "https://github.com/NeelBhavsar1/chatapp",
      photo: chatapp_icon,
    },
    {
      name: "ReflexZone",
      desc: "A React-based aim trainer with game modes like precision shooting and reaction time tests.",
      link: "https://github.com/NeelBhavsar1/reflexzone",
      photo: reflexzone_icon,
    },
    {
      name: "CryptoSentry",
      desc: "A modern crypto tracking dashboard built with React. It features real-time coin data, search functionality, interactive charts, animations.",
      link: "https://github.com/NeelBhavsar1/cryptosentry",
      photo: cryptoapp_icon,
    },
    {
      name: "Computer Vision & GAI",
      desc: "Hackathon MVP using computer vision and generative AI to enhance art engagement.",
      link: "https://github.com/NeelBhavsar1/BME-Hackathon-SmartMuseum/tree/main",
      photo: hackathon_icon,
    },
    {
      name: "Other Projects",
      desc: "Explore more of my work on GitHub!",
      link: "https://github.com/NeelBhavsar1",
      photo: otherprojects_icon,
    },
  ];

  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <motion.div
        className="projects-grid"
        variants={containervar}         
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map(({ name, desc, link, photo }) => (
          <motion.div
            key={name}
            variants={cardvar}           
          >
            <ProjectCard
              name={name}
              desc={desc}
              link={link}
              photo={photo}
              data lenus
              data-lenis-scroll
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
