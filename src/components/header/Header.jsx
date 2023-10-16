import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/ss.png'
import HeaderSocial from './HeaderSocial'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Header = () => {
  const [text] = useTypewriter ({
    words:['Fontend Developer',
            "Web Developer",
            "Coder",
            "Java With DSA"
              ],
              loop:{},
              typeSpeed:180,
              delaySpeed:50
  })
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Sunil Kumar</h1>
            <h5 className='text-light'>I am a <samp className='role'>{text}</samp>
            <span><Cursor className="role" cursorStyle="|"/></span>
            </h5>
            <CTA/>
            <HeaderSocial/>

            <div className="me">
                <img src={ME} alt="" />
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default Header