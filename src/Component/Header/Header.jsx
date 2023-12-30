import React from 'react'
import './header.css'
 
 import myimg from '../../assets/manish.jpg'


import Buttn from './Buttn'


 

const Header = () => {
  return (
   <header>

   <div className='container header_container'>
   <div className='child'>
   <h5 > -hello </h5>
   <h1>I'm Manish Raghav</h1>
   <h4 className='text-light'> Full stack Doveloper </h4>

   <Buttn />
   </div>  
    
   
   

   <div className='me'>
   <img src={myimg} alt='me'/>
   </div>
   
   {/* <a href='#contact' className='scroll_down '>Scroll Down</a> */}
   
   </div>
   



  


   </header>
  )
}

export default Header
