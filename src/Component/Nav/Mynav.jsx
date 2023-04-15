import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Mynav = () => {
  const [my ,myset] = useState('#');

  return (
    <nav>

      <a  href='#' onClick={() => myset('#')}  className={my=== '#' ? 'active' :''}><AiOutlineHome/></a>
      <a  href='#about' onClick={() => myset('#about')} className={my=== '#about' ? 'active' :''}><AiOutlineUser /></a>
      <a  href='#experience' onClick={() => myset('#experience')} className={my=== '#experience' ? 'active' :''}><BiBook/></a>
      <a  href='#portfolio'  onClick={() => myset('#services')} className={my=== '#services' ? 'active' :''}><RiServiceLine /></a>
    
      <a  href='#contact'  onClick={() => myset('#contact')} className={my=== '#contact' ? 'active' :''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Mynav
