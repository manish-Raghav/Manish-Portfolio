import React from 'react'
import cv from '../../assets/Manish_laresume.pdf'
import './header.css'
const Buttn = () => {
  return (
    <div className='cta'>
     <a href={cv} download className='btn'>Download CV</a>
     <a href='#contact' className='btn btn-primary'>Call Me</a>

   </div>
  )
}

export default Buttn
