import { useState } from 'react'
import React from "react"   

import Header from './Component/Header/Header'

import About from './Component/About'
import Exp from './Component/Expir/Exp'
import Service from './Component/Services/Service'

import Testimonial from './Component/Testi/Testimonial'

import Mynav from './Component/Nav/Mynav'
import Mycontact from './Component/Context/Mycontact'
import Educ from './Component/Education/Educ'
    






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Mynav />
     <About />
     
     <Exp />
     <Service/>
     
     <Mycontact />
    </>
  )
}

export default App
