import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/Im'
import {FaInstagramSquare} from 'react-icons/Fa'

const Mynav = () => {
  const [my ,myset] = useState('#');

  return (
    <nav class="nav">
      <div class="child1">
        <h3> <span class="a">M</span>anish <span class="b">R</span>aghav</h3>
      </div>
    {/* AiOutlineHome
    <AiOutlineUser />
    <BiBook/>
    <RiServiceLine />
    <BiMessageSquareDetail /> */}
          <div class= "child2">
          <a  href='#' onClick={() => myset('#')}  className={my=== '#' ? 'active' :''}>Home</a>
      <a  href='#about' onClick={() => myset('#about')} className={my=== '#about' ? 'active' :''}>About</a>
      <a  href='#experience' onClick={() => myset('#experience')} className={my=== '#experience' ? 'active' :''}>Skills</a>
      <a  href='#portfolio'  onClick={() => myset('#services')} className={my=== '#services' ? 'active' :''}>Projects</a>
    
      <a  href='#contact'  onClick={() => myset('#contact')} className={my=== '#contact' ? 'active' :''}>Contact</a>
          </div>



          <div class ="child3">
       
    
    <a href='www.linkedin.com/in/manishraghav'  target='_blank'><BsLinkedin/></a>
   
 
 <a href='https://github.com/manish-Raghav?tab=repositories' target='_blank'> <ImGithub/></a>
 <a href='https://instagram.com' target='_blank'> <FaInstagramSquare /></a>

</div>
     
    </nav>
  )
}

export default Mynav
