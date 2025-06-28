import React from 'react'
import './ProjectCard.css'
import github_icon from '../../assets/github.png'

const ProjectCard = ({ name, desc, photo, link }) => {

  const handleLink = () => {
    window.open(link, '_blank')
  }

  return (
    <div className="projectCard-container">
        <img src={photo} alt="project photo" className='project-img' />
        <h2>{name}</h2>
        <p>{desc}</p>
        <div className="button-link">
          <img src={github_icon} alt="github icon" className='github-photo'/>
          <button onClick={handleLink}>View on Github</button>
        </div>


    </div>
  )
}

export default ProjectCard