import { UserContext } from '../UserContext'
import React, { useContext } from 'react'

function  About(props) {
  
  const myuser = useContext(UserContext);



  return (
    <>
    <div>About Page!</div>
    <p>My name is:{props.about} </p>
    <p>The role is: {myuser.name}</p>
    </>
  )
}

export default About