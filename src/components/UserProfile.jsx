import React from 'react'
import { UserContext } from '../UserContext'
import { useContext } from 'react'



function UserProfile() {
    //create Variable
    const user = useContext(UserContext)
    
  return (
    <div>
        <h2>UserProfile Page</h2>
        <p>Name: {user.name}</p>
        <p>Role: {user.role}</p>
       
    </div>
  )
}

export default UserProfile