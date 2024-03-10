import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <a>
            <img src="/Users/allisontao/cmdf/src/images/circle.jpg"></img>
        </a>
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
                <a>
                    <img src="/Users/allisontao/cmdf/src/images/profile.jpeg"></img>
                </a>
                
            </ul>
       
        </div>
    </nav>
   
  )
}

export default Navbar
