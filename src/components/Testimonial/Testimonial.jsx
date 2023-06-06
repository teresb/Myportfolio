/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/Marion.png'
import AVTR2 from '../../assets/Sandra.png'
import AVTR3 from '../../assets/Stersy.png'
import AVTR4 from '../../assets/Sharlynn.png'

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper style
import 'swiper/css';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    name: 'Shizzy Marion',
    review: 'Therese developed a custom web application for my business, exceeding my expectations. She communicated clearly and professionally, delivering a high-quality product on time and within budget. I highly recommend Therese.'
  },
  {
    avatar: AVTR2,
    name: 'Marie Sandra',
    review:'Therese was an invaluable asset to our software development project, constantly pushing the boundaries of what was possible. She is a skilled programmer and excellent collaborator. I highly recommend her.'
  },
  {
    avatar: AVTR3,
    name: 'Stersy Fongu',
    review: 'Therese created a stunning and user-friendly UI/UX design that exceeded my expectations. She was communicative and professional throughout the project. shes good.'
  },
  {
    avatar: AVTR4,
    name:'Sharlynn Acha',
    review: 'Therese did an outstanding job on our UI/UX design project, improving the user experience of our product. She is a skilled designer and great collaborator. I highly recommend her ,shes the best.'
  }
  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" // install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation>
        {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials