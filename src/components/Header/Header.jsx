import React from 'react'
import './Header.css'
import './CTA'
import CTA from './CTA'
import me from '../../assets/me.png'
import Headersocial from './Headersocial'
export const Header = () => {
return ( <header> <div className='container header__container'> 
<h5>Hello I'm</h5> 
<h1>Therese Blessed</h1> 
<h5 className='text-light'>Software Engineer </h5> 
<CTA/>
<Headersocial/>
<div className='my_image'> <img src={me} alt='myself'/>
</div> <a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header> ) }
export default Header;