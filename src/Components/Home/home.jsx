import React from 'react'
import "./home.css"
import home_image from "../Assets/home-main.svg"

const home = () => {
  return (
    <div className='home'>
      <div className="home-left">
        <h1>INTRODUCTION</h1>
        <p>Hii!! My Name is <span className="design">Atul Gupta </span>, I pursuing my B.tech from <span className="design">AJAY KUMAR GARG</span> engineering college 1st year CSE branch. My is to listen song , playing Guitar and coding.. </p>
      </div>
      <div className="home-right">
        <img src={home_image} alt="" />
      </div>
      
    </div>
  )
}

export default home
