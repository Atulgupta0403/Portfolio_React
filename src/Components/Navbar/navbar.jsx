import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const navbar = () => {

    const [menu , setMenu] = useState("/")
  return (
    <div className='nav'>
      <div className="logo">
        {/* <img src="https://images-platform.99static.com//2CeMN8mCktTKwCiGN1a3DLEuwkE=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/139/139945/attachment_139945363" alt="" /> */}
      </div>
      <div className="sections">
        <p onClick={()=>{setMenu("Home")}}><Link to="/">Home</Link>
            <span></span>
        </p>
        <p onClick={()=>{setMenu("About")}}><Link to="/about">About</Link></p>
        <p onClick={()=>{setMenu("Project")}}><Link to="/project">Project</Link></p>
        <p onClick={()=>{setMenu("Contact")}}><Link to="/contact">Contact</Link></p>
      </div>

    </div>
  )
}

export default navbar
