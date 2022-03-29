import React from 'react'
import './portfolio.css'
import IMG1 from '../../assects/my_portfolio1.jpg'
import IMG2 from '../../assects/my_portfolio2.jpg'
import IMG3 from '../../assects/my_portfolio3.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'New Year',
    github: 'https://github.com',
    demo: 'https://incriz.github.io/NewYear.github.io-/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'World of parquets',
    github: 'https://github.com',
    demo: 'https://incriz.github.io/layout.github.io/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Roll-Shop',
    github: 'https://github.com',
    demo: 'https://incriz.github.io/roll-shop/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__items">
                <div className="portfolio__item-image">
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__items-cta">
                  <a href={github} className='btn'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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