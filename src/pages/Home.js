import React from 'react'
import Navbar from './components/Navbar';
import Body from './components/Body';
import Login from './components/login';
import Profile from './components/Profile';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Body />
        <Login />
    </div>
  )
}


export default Home
