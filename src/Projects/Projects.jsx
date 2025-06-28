import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard/ProjectCard'

import chatapp_icon from '../assets/chatapp.png'
import reflexzone_icon from '../assets/reflex.png'
import hackathon_icon from '../assets/placeholder.png'
import weatherapp_icon from '../assets/weather.png'
import todolist_icon from '../assets/todo.png'
import hashing_icon from '../assets/hashing.png'
import formerweb_icon from '../assets/former.png'
import otherprojects_icon from '../assets/github.png'


const Projects = () => {
  return (
    <div className="projects-info">
        <h1>Projects</h1>
        <div className="projects-grid">
            <ProjectCard name="Chat App" desc="A real-time chat app built with React and Firebase, featuring email/password authentication, dynamic chat rooms, and instant messaging via Firebase’s real-time database. It offers a clean, responsive UI for seamless and secure user communication." link="https://github.com/NeelBhavsar1/chatapp" photo={chatapp_icon}/>
            <ProjectCard name="ReflexZone" desc="Developed ReflexZone, a React-based web application designed to help users enhance aim accuracy through multiple game modes, including precision shooting and reaction time tests." link="https://github.com/NeelBhavsar1/reflexzone" photo={reflexzone_icon}/>
            <ProjectCard name="Computer Vision & GAI" desc="BME x UOL Hackathon MVP using computer vision and generative AI to track user movements and deliver dynamic prompts about viewed art pieces." link="https://github.com/NeelBhavsar1/BME-Hackathon-SmartMuseum/tree/main" photo={hackathon_icon}/>
            <ProjectCard name="Weather App" desc="A simple React weather app that fetches and displays current weather data for any city using the OpenWeatherMap API. Built with Vite and focused on learning API integration and React state management." link="https://github.com/NeelBhavsar1/react-weatherapplication" photo={weatherapp_icon}/>
            <ProjectCard name="To do List" desc="Built a React-based To-Do List app featuring task creation, deletion, and reordering using React Hooks. Focused on clean state management and a simple, user-friendly interface. A great project to practice core React concepts and improve front-end skills." link="https://github.com/NeelBhavsar1/react-todo-app" photo={todolist_icon}/>
            <ProjectCard name="Java Hashing GUI" desc="A user-friendly Java Swing application for hashing passwords using algorithms like SHA-256 and MD5. It features an interactive GUI with options to select algorithms, convert passwords to hashes, clear inputs, and access help and credit information." link="https://github.com/NeelBhavsar1/GUI--hashing-algorithms" photo={hashing_icon}/>
            <ProjectCard name="Former portfolio website" desc="Created a portfolio website during summer 2025 to showcase all of my achievements and projects, a website created using HTML, CSS, & JS." link="https://github.com/NeelBhavsar1?tab=repositories" photo={formerweb_icon}/>
            <ProjectCard name="Other Projects" desc="Feel free to check out my other work!" link="https://github.com/NeelBhavsar1/chatapp" photo={otherprojects_icon}/>
        </div>

    </div>
  )
}

export default Projects