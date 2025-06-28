import React from 'react'
import './Home.css'
import profile_image from '../../assets/profile.jpeg'
import linkedin_icon from '../../assets/linkedin.png'
import github_icon from '../../assets/github.png'
import backgroundvideo from '../../assets/homebg1.mp4'

const Home = () => {

  const linkedinHandler = () => {
    window.open('https://www.linkedin.com/in/neel-bhavsar-767532238/', '_blank')
  }

  const githubHandler = () => {
    window.open('https://github.com/NeelBhavsar1', '_blank')
  }

  return (
    <div className="home-container">
        <video
        className='background-video'
        autoPlay
        loop
        muted
        playsInline
        >
          <source src={backgroundvideo} type='video/mp4'/>

        </video>

        <img src={profile_image} alt="profile photo" className='profile-photo'/>
        <h1>I'm <span>Neel Bhavsar</span></h1>
        <p>Computer Science student @ University of Liverpool. <br /> Aspiring front-end developer.
        </p>
        <div className="social-link">
            <img src={linkedin_icon} alt="Linkedin" className='linkedin' onClick={linkedinHandler}/>
            <img src={github_icon} alt="Github" className='github' onClick={githubHandler}/>
        </div>
    </div>
  )
}

export default Home