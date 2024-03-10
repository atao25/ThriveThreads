import React from 'react'
import './Navbar.css'
import logo from '../../images/catimg.png'


const Navbar = () => {
  return (
    <nav>
        <div className = "logo-container">
            <img src={logo} alt="Cat Image" style={{ width: '100px', height: '100px' }}></img>
            <span>ThriveThreads</span>
        </div>
        <div>
            <ul id = "navbar">
              
                <li>
                    <a href = "index.html">Home</a>
                </li>
                <li>
                    <a href = "index.html">Explore</a>
                </li>
                <li>
                    <a href = "index.html">Threads</a>
                </li>
                <li>
                    <a href = "index.html">Login</a>
                </li>
                   
                
            </ul>
       
        </div>
    </nav>
   
  )
}

export default Navbar
