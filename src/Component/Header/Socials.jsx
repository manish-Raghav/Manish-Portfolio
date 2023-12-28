import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/Im'
import {FaInstagramSquare} from 'react-icons/Fa'
import './header.css'

const Socials = () => {
  return (
    <div className='header-socials'>
    <div className='hover:bg-green-600'>
    <a href='https://linkedin.com'  target='_blank'><BsLinkedin/></a>
    </div>
 
 <a href='https://github.com' target='_blank'> <ImGithub/></a>
 <a href='https://instagram.com' target='_blank'> <FaInstagramSquare /></a>

</div>
  )     
}

export default Socials
