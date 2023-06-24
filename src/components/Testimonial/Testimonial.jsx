/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect,useState} from 'react'
import axios from 'axios'
import './testimonial.css'

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper style
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {
  const [data, setData]=useState([]);
  useEffect(()=>{
    axios.get("https://nice-erin-starfish-cap.cyclic.app/api/testimonials").then(response=>{
      const formattedData=response.data.data.map(item=>({
        id:item._id,
        avatar: item.avatar,
        name: item.name,
        review: item.review,
      }));
      setData(formattedData)
    }).catch(error=>{
      console.log("Error fetching Portfolio Data:",error);
    })
  })
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