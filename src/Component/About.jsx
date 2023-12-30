import React from 'react'
import './about.css'
import myimage from '../assets/profile1.jpg'  
import {SiLeetcode} from 'react-icons/si'
import {AiOutlineFolderAdd} from 'react-icons/ai'
import {SiCodechef} from 'react-icons/si'

const About = () => {
  return (
    <section id='about' className='relative top-5'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>
     <div className='container about_container'>
    <div className='about_me'>
    <div className='about_me-image'>
    <img src={myimage} alt='mymage'  />

    </div>
  </div>

   <div className='about_content'>
    <div className='about_cards'>
    <article className='about_card'>
     <SiLeetcode className='about_icon relative left-7' />
    <h5>Leetcode</h5>
    <small>300 Problem Solved</small>
   </article>
   <article className='about_card'>
     <AiOutlineFolderAdd className='text-3xl about_icon relative left-7' />
    <h5>Projects</h5>
    <small>5 project</small>
   </article> 
   <article className='about_card'>
     <SiCodechef className='about_icon text-3xl relative left-7' />
    <h5 className=''>CP</h5>
    <small>3* CodeChef
        1624 rank</small>
   </article>
    </div>
     <p>I am a versatile full-stack developer specializing in building robust
      and scalable applications using React.js for the frontend and Node.js for 
      the backend. With a strong foundation in both client-side and server-side development,
      I bring expertise in crafting seamless user interfaces and designing efficient,
      high-performing APIs. My experience includes leveraging React.js to create engaging
      and responsive UIs while harnessing the power of Node.js to architect and deploy 
      server-side solutions.    </p>
  
  <a href="#contact"  className='btn btn-primary' >Lert's Talk</a>
   
    </div>
     </div>

    </section>
  )
}

export default About
