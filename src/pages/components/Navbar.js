import React from 'react'
import './Navbar.css'
import logo from '../../images/catimg.png'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav>
        <div className = "logo-container">
            <img src={logo} alt="Cat Image" style={{ width: '150px', height: '100px' }}></img>
            <h1>ThriveThreads</h1>
        </div>
        <div>
            <ul id = "navbar">
              
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <a href = "index.html">Explore</a>
                </li>
                <li>
                    <Link to="/thread">Threads</Link>
                </li>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                   
                
            </ul>
       
        </div>
    </nav>
   
  )
}

export default Navbar
