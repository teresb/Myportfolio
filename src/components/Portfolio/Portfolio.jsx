import React, { useEffect,useState} from 'react'
import axios from 'axios'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
]

const Portfolio = () => {
  const [data, setData]=useState([]);
  useEffect(()=>{
    axios.get("https://nice-erin-starfish-cap.cyclic.app/api/portfolio").then(response=>{
      const formattedData=response.data.data.map(item=>({
        id:item._id,
        image: item.image,
        title: item.title,
        github: item.github,
        demo: item.demo
      }));
      setData(formattedData)
    }).catch(error=>{
      console.log("Error fetching Portfolio Data:",error);
    })
  })
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {
      data.map(({id, image, title, github, demo}) => {
        return (
          <article key = {id} className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={image} alt={title} />
          </div>
           <h3>{title}</h3>
           <div className="portfolio__item-cta">
             <a href= {github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
             <a href= {demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
           </div>
      </article>
        )
      })
    }
    </div>
    </section>
  )
}

export default Portfolio