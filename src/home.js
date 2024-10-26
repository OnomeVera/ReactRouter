import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import About from './components/About'
import Settings from './components/Settings'
import UserProfile from './components/UserProfile'
import { Link, Outlet } from 'react-router-dom'


function home() {
  return (
    <div>

        <h1>Welcome to our Home Page</h1>
        <p>This is thr Home Page of our React App</p>
        <Link to='Settings'>Settings</Link>
        <Link to='UserProfile'>UserProfile</Link>


        <Outlet/>
    </div>
  )
}

export default home