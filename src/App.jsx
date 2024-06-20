import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from "./Components/Home/home"
import About from "./Components/About/about"
import Navbar from './Components/Navbar/navbar'
import Contact from "./Components/Contact/contact"
import Project from "./Components/Project/project"

import {BrowserRouter , Route , Routes} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Project' element={<Project/>} />
      <Route path='/Contact' element={<Contact/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
