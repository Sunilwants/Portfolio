import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header_social'>
    <a href="https://www.linkedin.com/in/sunilwants?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/Sunilwants" target="_blank"><FaGithub/></a>
    <a href="https://instagram.com/sunilwants?igshid=MzRlODBiNWFlZA==" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial;