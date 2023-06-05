import React from 'react'
import './Contact.css'
import { TfiEmail } from 'react-icons/tfi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zw79eef', 'template_v2zk59f', form.current, 's9LVVssyQ-S_QYygN')
  
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
          <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Lily Rich</h5>
            <a href="https://m.me/Lily Rich" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
          <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+237 650 956 974</h5>
            <a href="https://wa.me/message/CK6QHV5DUBM3H1" target='_blank' rel='noreferrer'>Send a message</a>
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