import React from 'react'
import './Contact.css'
import { TfiEmail } from 'react-icons/tfi'
import { FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fp6c146', 'template_43yv5dc', form.current, 'GqsgqRLAyOY5R8g6t')
  
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>theresechikodi2004@icloud.com</h5>
            <a href="mailto:theresechikodi20042icloud.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
          <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Therese Blessed</h5>
            <a href="https://instagram.com/_yourfavgurl22?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
          <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+237 650 956 974</h5>
            <a href="https://wa.link/xntu67" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact