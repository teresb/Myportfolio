import React from 'react'
import './services.css'
import { MdOutlineLibraryAddCheck } from 'react-icons/md'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I build websites that are both beautiful and functional.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I'm a web developer who loves to create user-friendly experiences.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I'm passionate about using technology to solve problems.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I'm a detail-oriented web developer who takes pride in my work.</p>
            </li>
          </ul>
        </article>
        { /*END OF WEB DEVELOPMENT*/ }

        
      </div>
    </section>
  )
}

export default Services