import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SUNIL KUMAR</a>

<ul className='permalinks'>
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Projects</a></li>
  <li><a href="#testimonial">Testimonials</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

<div className="footer_socials">
  <a href="https://www.facebook.com/Sunilwants?mibextid=ZbWKwL" target="_blank"><FaFacebookF/></a>
  <a href="https://instagram.com/sunilwants?igshid=MzRlODBiNWFlZA==" target="_blank"><FiInstagram/></a>
  <a href="https://x.com/SunilWants?t=AYXjFRtCQ6aCO4OHwugfuA&s=08" target="_blank"><FaXTwitter/></a>
</div>

<div className="footer_copyright">
  <small>&copy2023; Sunil. All rights reserved.</small>
</div>
    </footer>
  )
}

export default Footer