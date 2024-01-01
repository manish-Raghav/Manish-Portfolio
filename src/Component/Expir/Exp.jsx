import React from 'react'
import {HiBadgeCheck} from 'react-icons/hi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'

import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

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
     
        <div class='ab'> 
        {/* experience_content */}
       

          <div class ='cd1' >
        <article className='experience_details '>
        <FontAwesomeIcon icon={faJava} />
          <div>
          <h4>Java</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>


       
             

          <article className='experience_details'>
          <FontAwesomeIcon icon={faHtml5}  />
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>


          <article className='experience_details'>
          <FontAwesomeIcon icon={ faCss3 } />
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediates</small>
          </div>
          </article>


          <article className='experience_details'>
          <FontAwesomeIcon icon={faJs} />
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Intermediates</small>
          </div>
          </article>



          <article className='experience_details'>
          <FontAwesomeIcon icon={faReact} />
          <div>
          <h4>React JS</h4>
          <small className='text-light'>Experience</small>
          </div>
          </article>

          </div>


          <div   class ='cd2' > 

          <article className='experience_details'>
          <FontAwesomeIcon icon={faNodeJs } />
          <div>

          
          <h4>Node JS</h4>
          <small className='text-light'>Experience</small>
          </div>



          </article>



          <article className='experience_details'>
          <FontAwesomeIcon icon={faCode } />
          <div>

          
          <h4>SQL</h4>
          <small className='text-light'>Experience</small>
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
          <h4>NoSQL</h4>
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

        </div>


        
            
            
          


      
   

    </section>
  )
}

export default Exp
