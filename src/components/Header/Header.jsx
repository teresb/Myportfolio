import React from 'react'
import './Header.css'
import CTA from './CTA'
import me  from '../../assets/me.png'
import HeaderSocials from './Headersocial'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Therese Blessed</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />  
        <HeaderSocials />    
        <div className='my_image'>
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
export default Header