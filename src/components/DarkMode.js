import React, { useEffect, useState } from 'react'
import './DarkMode.css'
import MOON from './../assets/moon.png'
import LIGH from './../assets/sun.png'

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light-theme");
    const [imgSrc, setImgSrc] = useState(LIGH); 

    const Darktheme = () => {
      if(theme==="dark-theme"){
          document.getElementById('theme');
          setTimeout(() => {
              setTheme("light-theme");
              setImgSrc(LIGH); // set image source for light theme
              document.getElementById('theme');
          }, 700);
      }else{
          document.getElementById('theme');
          setTimeout(() => {
              setTheme("dark-theme");
              setImgSrc(MOON); // set image source for dark theme
              document.getElementById('theme');
          }, 700);
      }
  };


    useEffect(() => {
        document.body.className= theme;
        localStorage.setItem("theme",theme)
    },
    [theme]);

    return (
        <>
        <div className='Dark'><img src={imgSrc} id='theme' onClick={() => Darktheme() } alt="Dark Mode" /></div>

        </>
    )
}

export default DarkMode;