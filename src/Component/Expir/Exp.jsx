import React from 'react'
import {HiBadgeCheck} from 'react-icons/hi'
// import {FaNode} from 'react-icons/fa'
// import {SiReact} from 'react-icons/si'

// import {IoLogoJavascript} from 'react-icons/io'
// import {IoLogoHtml5} from 'react-icons/io'
// import {IoLogoCss3} from 'react-icons/io'
// import {SiTailwindcss} from 'react-icons/si'
// //AiOutlineConsoleSql

// import {SiMongodb} from 'react-icons/si'
import './exp.css'

const Exp = () => {
  return (
    <section id='experience' className='flex flex-col items-center relative top-6' >
     <h5> What Skills I have</h5>
     <h2>My Skills</h2>
     
        <div className='flex'> 
        {/* experience_content */}
       
          <article className='experience_details'>
          <HiBadgeCheck />
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <HiBadgeCheck />
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediates</small>
          </div>
          </article>
          <article className='experience_details'>
          <HiBadgeCheck />
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Intermediates</small>
          </div>
          </article>
          <article className='experience_details'>
          <HiBadgeCheck />
          <div>
          <h4>React JS</h4>
          <small className='text-light'>experience</small>
          </div>
          </article>
          <article className='experience_details'>
          <HiBadgeCheck />
          <div>

          
          <h4>Node JS</h4>
          <small className='text-light'>experience</small>
          </div>
          </article>
          <article className='experience_details'>
          <HiBadgeCheck />
          <div>

          
          <h4>SQL</h4>
          <small className='text-light'>experience</small>
          </div>
          </article>

        

          <article className='experience_details'>
          <HiBadgeCheck />
          <div>
          <h4>AWS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <HiBadgeCheck />
          <div>
          <h4>Tailwind css  </h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
        


        </div>


        
            
            
          


      
   

    </section>
  )
}

export default Exp
