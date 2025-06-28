import React from 'react'
import './About.css'
import html_icon from '../../assets/sk1.png'
import css_icon from '../../assets/sk2.png'
import js_icon from '../../assets/sk3.png'
import java_icon from '../../assets/sk4.png'
import python_icon from '../../assets/sk5.png'
import haskell_icon from '../../assets/sk6.png'
import intel_icon from '../../assets/sk7.png'
import react_icon from '../../assets/sk8.png'
import git_icon from '../../assets/sk9.png'
import npm_icon from '../../assets/npm.png'
import GitHubCalendar from 'react-github-calendar';

const About = () => {
  return (
    <div className="about-container">
        <div className="info-text">
             <h1>About me</h1>
             <p>Hi! I’m a first-year Computer Science student at the University of Liverpool, passionate about coding and technology. I’m actively diving into front-end development, learning the ins and outs of creating engaging and user-friendly web experiences. My goal is to become a full-stack developer, mastering both front-end and back-end technologies to build complete, efficient applications. Alongside my studies, I enjoy exploring new programming languages and frameworks, working on personal projects, and continuously improving my skills. I’m excited to grow as a developer and contribute to innovative tech solutions.</p>
             <div className="skills-header">
                <p className='info'>Skills</p>
             </div>
        </div>

       <div className="skills-container">
        <div className="skills-item">
            <img src={html_icon} alt="skill-image" />
            <p>HTML5</p>
        </div>
        <div className="skills-item">
            <img src={css_icon} alt="skill-image" />
            <p>CSS3</p>
        </div>
        <div className="skills-item">
            <img src={js_icon} alt="skill-image" />
            <p>JavaScript</p>
        </div>
        <div className="skills-item">
            <img src={python_icon} alt="skill-image" />
            <p>Python</p>
        </div>
        <div className="skills-item">
            <img src={haskell_icon} alt="skill-image" />
            <p>Haskell</p>
        </div>
        <div className="skills-item">
            <img src={intel_icon} alt="skill-image" />
            <p>Intel x86 Assembly Language</p>
        </div>
        <div className="skills-item">
            <img src={react_icon} alt="skill-image" />
            <p>React JS</p>
        </div>
        <div className="skills-item">
            <img src={git_icon} alt="skill-image" />
            <p>Git</p>
        </div>
        <div className="skills-item">
            <img src={npm_icon} alt="skill-image" />
            <p>Npm</p>
        </div>
       </div>

       <div className="githubinfo-container">
        <p>Days I code</p>
        <GitHubCalendar username="NeelBhavsar1" className='github'/>
       </div>
    </div>
  )
}

export default About





