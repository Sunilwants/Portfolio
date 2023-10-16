import React from 'react'
import './Contect.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_67bw5ri', 'template_afnuudc', form.current, 'rAohUltRZ1W7ffvVJ')

    e.target.reset()
  };
  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
             <MdOutlineEmail className='contact_option-icon'/>
             <h4>Email</h4>
             <h5>sunilwants99@gmail.com</h5>
             <a href="mailto:sunilwants99@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
             <RiMessengerLine className='contact_option-icon'/>
             <h4>Messenger</h4>
             <h5>Sunil Kumart</h5>
             <a href="https://m.me/Sunilwants" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
             <BsWhatsapp className='contact_option-icon'/>
             <h4>WhatsApp</h4>
             <h5>+91 6204196175</h5>
             <a href="https://api.whatsapp.com/send?phone=+916204196175&text=Hello Sunil" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of Contact Form */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your mail' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
       </div>
    </section>
  )
}

export default Contact