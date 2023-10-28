import React from 'react'
import im1 from '../../assets/port1.jpg'
import im2 from '../../assets/port2.jpg'
import im3 from '../../assets/port3.jpg'
import im4 from '../../assets/port4.jpg'
import './service.css'

const Service = () => {
  return (
    <section id='portfolio' >
     <h5>My Recent work</h5>
     <h2>Projects</h2>
     <div className='container portfolio_container'>
     <article className='portfolio_item'>
     <div className='portfolio_item-image'>
      <img src={im1} alt='im1' />
      </div>
      <h3>My_Movies</h3>
      <div className='portfolio_item-cta'>
      <a href='https://github.com/manish-Raghav'  className='btn' target='blank'>Github</a>
     <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
     

     </article>

     <article className='portfolio_item'>
     <div className='portfolio_item-image'>
      <img src={im2} alt='im2' />
      </div>
      <h3>our_Tube</h3>
      <div className='portfolio_item-cta'>
      <a href='https://github.com/manish-Raghav'  className='btn' target='blank'>Github</a>
     <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>

     </article>
     <article className='portfolio_item'>
     <div className='portfolio_item-image'>
      <img src={im3} alt='im3' />
      </div>
      <h3>Timer</h3>
      <div className='portfolio_item-cta'>
      <a href='https://github.com/manish-Raghav'  className='btn' target='blank'>Github</a>
     <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>

     </article>
     <article className='portfolio_item'>
     <div className='portfolio_item-image'>
      <img src={im4} alt='im4' />
      </div>
      <h3>RoomSearch</h3>
      <div className='portfolio_item-cta'>
      <a href='https://github.com/manish-Raghav'  className='btn' target='blank'>Github</a>
     
      </div>

     </article>

     <article className='portfolio_item'>
     <div className='portfolio_item-image'>
      <img src={im4} alt='im4' />
      </div>
      <h3>Silent_Hours</h3>
      <div className='portfolio_item-cta'>
      <a href='https://github.com/manish-Raghav'  className='btn' target='blank'>Github</a>
     
      </div>

     </article>


     </div>
    
    </section>    
  )
}

export default Service
