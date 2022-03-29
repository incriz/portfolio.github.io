import React from 'react'
import './about.css'
import ME from '../../assects/me_about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
      

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>1 Year working</small>
          </article>

          <article className="about__card">
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>3 Worldwide</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className='about__icon' />
            <h5>Project</h5>
            <small>6 Completed</small>
          </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequatur. Sapiente repellendus magni eveniet ratione maxime magnam corporis dignissimos totam omnis libero, ab illo earum autem perferendis recusandae beatae quisquam.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
      

    </section>
  )
}

export default About