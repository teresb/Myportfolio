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
            <h3>UI/UX DESIGN</h3>
          </div>

          <ul className='service__list'>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I focus on creating designs that prioritize the needs and goals of the end-users.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I am constantly exploring new design trends and technologies to create unique and engaging user experiences.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I pay close attention to every aspect of the design, from the layout to the typography, to ensure that it is visually appealing and user-friendly.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p> I work closely with cross-functional teams, such as developers and product managers, to deliver exceptional user experiences that meet the needs of all stakeholders.</p>
            </li>
          </ul>
        </article>
        { /*END OF DESIGN*/ }

        <article className='service'>
          <div className='service__head'>
            <h3>PROGRAMMING</h3>
          </div>

          <ul className='service__list'>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I enjoy tackling complex problems and using my technical skills to develop innovative solutions.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I pay close attention to every detail in my code, ensuring that it is efficient, clean, and maintainable.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p> I am constantly expanding my knowledge and keeping up-to-date with the latest programming languages, frameworks, and best practices.</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>I work well in teams, communicating effectively with other programmers and stakeholders to deliver high-quality software products.</p>
            </li>
          </ul>
        </article>
        { /*END OF PROGRAMMING*/ }
      </div>
    </section>
  )
}

export default Services