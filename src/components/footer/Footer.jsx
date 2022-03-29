import React from 'react'
import './footer.css'
import {FiMessageCircle} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {GrReactjs} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MrFlik</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://vc.com"><FiMessageCircle /></a>
        <a href="https://github.com"><BsGithub /></a>
        <a href="https://ru.reactjs.org/"><GrReactjs /></a>
      </div>

    </footer>
  )
}

export default Footer