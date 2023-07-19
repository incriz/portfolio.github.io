import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__fronted">
          <h3>Fronted Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'  />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Exeprienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'  />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'  />
              <div>
                <h4>Typescript</h4>
                <small className='text-light'>basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'  />
              <div>
                <h4>C++</h4>
                <small className='text-light'>basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'  />
              <div>
                <h4>C#</h4>
                <small className='text-light'>basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'  />
              <div>
                <h4>Python</h4>
                <small className='text-light'>basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'  />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>basic</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience