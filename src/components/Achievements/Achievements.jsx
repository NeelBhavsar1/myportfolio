import React from 'react'
import './Achievements.css'
import hackathon_photo from '../../assets/hackphoto.png'
import publichealth_photo from '../../assets/publicphoto.jpg'
import rep_icon from '../../assets/UOL.jpg'



const Achievements = () => {
  return (
    <div className='achievements-container'>
      <h1>Achievements</h1>
      <div className="item-grid">
        <div className="item">
          <img src={hackathon_photo} alt="hackathon cert" />
          <p>BME x UOL Hackathon 2025</p>
        </div>
        <div className="item">
          <img src={publichealth_photo} alt="public health cert" />
          <p>LCR x UOL Public Health 2025</p>
        </div>
        <div className="item">
          <img src={rep_icon} alt="public health cert" />
          <p>UOL CS Course Rep</p>
        </div>
      </div>

    </div>
  )
}

export default Achievements