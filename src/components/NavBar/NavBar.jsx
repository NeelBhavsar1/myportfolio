import React from 'react'
import './NavBar.css'
import logo_icon from '../../assets/logo.png'

const NavBar = () => {

    const connectHandler = () => {
        window.open('https://www.linkedin.com/in/neel-bhavsar-767532238/', '_blank')
    }

  return (
    <div className="container">
        <div className="logo">
            <img src={logo_icon} alt="logo" />
        </div>
        <div className="navlinks">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Achievements</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="connect">
            <button onClick={connectHandler}>Connect with me!</button>
        </div>
    </div>
  )
}

export default NavBar