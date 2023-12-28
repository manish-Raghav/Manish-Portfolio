import React from 'react'
import im1 from '../../assets/port1.png'
import im2 from '../../assets/port2.jpg'
import im4 from '../../assets/port3.jpg'
import im3 from '../../assets/sweet.png'
import './service.css'

const Service = () => {
  return (
    <section id='portfolio' className='relative bottom-72' >
     <h5>My Recent work</h5>
     <h2>Projects</h2>
     <div className='container portfolio_container'>
     <article className='portfolio_item'>
     <div className='portfolio_item-image'>
      <img className='bg-cover' src={im1} alt='im1' />
      </div>
      <h3>My_Movies</h3>
      <div className='portfolio_item-cta'>
      <a href='https://github.com/manish-Raghav'  className='btn' target='blank'>Github</a>
     <a href='https://my-movies123.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
     

     </article>

     <article className='portfolio_item'>
     <div className='portfolio_item-image'>
      <img src={im2} alt='im2' />
      </div>
      <h3>Youtube_clone</h3>
      <div className='portfolio_item-cta'>
      <a href='https://github.com/manish-Raghav'  className='btn' target='blank'>Github</a>
     <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>

     </article>
     <article className='portfolio_item'>
     <div className='portfolio_item-image'>
      <img src={im3} alt='im3' className='bg-cover w-96 ' />
      </div>
      <h3>Om_Sweet</h3>
      <div className='portfolio_item-cta'>
      <a href='https://github.com/manish-Raghav'  className='btn' target='blank'>Github</a>
     <a href='https://roaring-meerkat-37f07b.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
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
