import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

const navbar = () => {

    const [menu , setMenu] = useState("/")
  return (
    <div className='nav'>
      <div className="logo">
        <img src="https://images-platform.99static.com//2CeMN8mCktTKwCiGN1a3DLEuwkE=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/139/139945/attachment_139945363" alt="" />
      </div>
      <div className="sections">
        {/* <FontAwesomeIcon icon={faBars} /> */}
        <p onClick={()=>{setMenu("Home")}}><Link to="/">Home </Link> {menu === "Home"? <span></span>:<></>} </p>
        <p onClick={()=>{setMenu("About")}}><Link to="/about">About</Link>  {menu === "About"? <span></span>:<></>}</p>
        <p onClick={()=>{setMenu("Project")}}><Link to="/project">Projects</Link>  {menu === "Project"? <span></span>:<></>} </p>
        <p onClick={()=>{setMenu("Contact")}}><Link to="/contact">Contact</Link>  {menu === "Contact"? <span></span>:<></>}</p>
      </div>

    </div>
  )
}

export default navbar
