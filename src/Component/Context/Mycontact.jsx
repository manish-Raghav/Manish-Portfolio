import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'

import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/Im'
import './contact.css'
const Mycontact = () => {
  return (
    <div className='sec'>
    <section id='contact'>
<h5>Get In Touch</h5>
<h2>contact Me</h2>
<div className='container contact_container'>
 <div className='contact_options'>
 <article className='contact_option'>
 <MdOutlineEmail className='contact_option-icon'/>
  <h4> Email </h4>
  <h5>manishraghav95964@gmail.com</h5>
  <a href='mailto:dummyegaore@gmail.com' target='_blank'> Send a Mail</a>

 </article>
 <article className='contact_option'>
 <RiMessengerLine   className='contact_option-icon'/>
  <h4> Messenger</h4>
  <h5>Manish Thakur</h5>
  <a href=''   target='_blank'> Send a Massage</a>

 </article>
 <article className='contact_option'>
 <ImWhatsapp className='contact_option-icon'/>
  <h4>  WhatsApp </h4>
  <h5>7037808991</h5>
  <a href='https://api.whatsapp.com/send?phone+917037808991'  target='_blank'> Send a Massage</a>

 </article>
 </div>

 <form action=''>

  <input type='text' name='name' placeholder='your full name' required />
  <input type='email' name='email' placeholder='your Email' required />
  <textarea name='massage' rows={7} placeholder='Your Message' required />
  <button type='submit' className='btn btn-primary'> Send Massage</button>



 </form>

</div>
    </section>
    </div>
  )
}

export default Mycontact
