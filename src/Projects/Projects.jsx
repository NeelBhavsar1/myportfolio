import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';

import chatapp_icon from '../assets/chatapp.png';
import reflexzone_icon from '../assets/reflex.png';
import hackathon_icon from '../assets/placeholder.png';
import weatherapp_icon from '../assets/weather.png';
import hashing_icon from '../assets/hashing.png';
import otherprojects_icon from '../assets/github.png';

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-grid">
        <ProjectCard
          name="Chat App"
          desc="A real-time chat app built with React and Firebase, featuring authentication, dynamic chat rooms, and instant messaging."
          link="https://github.com/NeelBhavsar1/chatapp"
          photo={chatapp_icon}
        />
        <ProjectCard
          name="ReflexZone"
          desc="A React-based aim trainer with game modes like precision shooting and reaction time tests."
          link="https://github.com/NeelBhavsar1/reflexzone"
          photo={reflexzone_icon}
        />
        <ProjectCard
          name="Computer Vision & GAI"
          desc="Hackathon MVP using computer vision and generative AI to enhance art engagement."
          link="https://github.com/NeelBhavsar1/BME-Hackathon-SmartMuseum/tree/main"
          photo={hackathon_icon}
        />
        <ProjectCard
          name="Weather App"
          desc="Weather app built with React and OpenWeatherMap API, focused on clean API handling and state."
          link="https://github.com/NeelBhavsar1/react-weatherapplication"
          photo={weatherapp_icon}
        />
        <ProjectCard
          name="Java Hashing GUI"
          desc="Java Swing GUI for hashing passwords using SHA-256 and MD5 with user-friendly controls."
          link="https://github.com/NeelBhavsar1/GUI--hashing-algorithms"
          photo={hashing_icon}
        />
        <ProjectCard
          name="Other Projects"
          desc="Explore more of my work on GitHub!"
          link="https://github.com/NeelBhavsar1"
          photo={otherprojects_icon}
        />
      </div>
    </div>
  );
};

export default Projects;
