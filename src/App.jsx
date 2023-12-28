import { useState } from 'react'


import Header from './Component/Header/Header'

import About from './Component/About'
import Exp from './Component/Expir/Exp'
import Service from './Component/Services/Service'



import Mynav from './Component/Nav/Mynav'
import Mycontact from './Component/Context/Mycontact'
import Educ from './Component/Education/Educ'

    






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Mynav />
     <Header />
     
     <About />
     <Exp />
     <Educ />
    
     <Service/>
     
   
     
     <Mycontact />
    </>
  )
}

export default App
