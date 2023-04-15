import React from 'react'
import {HiBadgeCheck} from 'react-icons/hi'
import './exp.css'

const Exp = () => {
  return (
    <section id='experience'>
     <h5> What Skils I have</h5>
     <h2>My Skils</h2>
     <div className='container experience_container'>
      <div className='experienc_frontend'>
       <h3>Web Development</h3>
        <div className='experience_content'>
       
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
        </div>
      </div>



        <div className='experience_backend'>
        
           <h3>Mobile Development</h3>
           <div className='experience_content'>
           
          <article className='experience_details'>
          <HiBadgeCheck />
          <div>
          <h4>Android</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <HiBadgeCheck />
          <div>
          <h4>Java</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience_details'>
          <HiBadgeCheck />
          <div>
          <h4>Kotlin</h4>
          <small className='text-light'>Intermediates</small>
          </div>
          </article>
          </div>

  </div>

     </div>

   

    </section>
  )
}

export default Exp
