import React from 'react'
import './header.css'
 
 import myimg from '../../assets/manish.png'
import Buttn from './Buttn'
import Socials from './Socials'

 

const Header = () => {
  return (
   <header>

   <div className='container header_container'>  
   <h5>Hello I'm</h5>
   <h1>Manish Raghav</h1>
   <h5 className='text-light'> Fullstack Developer </h5>
    <Buttn />
    <Socials />

   <div className='me'>
   <img src={myimg} alt='me'/>
   </div>
   
   <a href='#contact' className='scroll_down'>Scroll Down</a>
   
   </div>

   </header>
  )
}

export default Header
