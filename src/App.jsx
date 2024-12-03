// import { useState } from 'react'
import React from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Headlinecards from './Components/Headlinecards'
import Foods from './Components/Foods'
import Category from './Components/Category'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Headlinecards/>
        <Foods/>
        <Category/>
       
      </div>
      
    </>
  )
}

export default App
