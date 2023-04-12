import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import nav from './Component/Nav/nav'
import About from './Component/About'
import Exp from './Component/Expir/Exp'
import Service from './Component/Services/Service'
import Portfolio from './Component/Portfolio/Portfolio'
import Testimonial from './Component/Testi/Testimonial'
import contact from './Component/Context/contact'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <nav />
     <About />
     <Exp />
     <Service/>
     <Portfolio />
     <Testimonial/>
     <contact/>
    </ >
  )
}

export default App
