import React from 'react'
import '../style.css'
import { Link, NavLink} from 'react-router-dom'

function navbar() {
  const myStyle = {
    color: 'White',
    backgroundColor: 'red',
    padding: '10px'
  }

  return (

    <>
       <nav className='myStyle' style={myStyle}>
           <h1>Incubatore Hub</h1>
           <ul>

             <li><a href='/'>Home</a></li>
             <li><a href='/about'>About</a></li>
             <li><Link to='/'>Home</Link></li>
             <li><Link to='/about'>About</Link></li>

             <li><NavLink to='/contact' className={({isActive})=> isActive ? 'active-link': ' '}>ContactUs</NavLink></li>
          

           </ul>
        </nav>

    </>

  )
}

export default navbar