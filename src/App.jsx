import React from 'react'
import Header from './components/header/Header'
import DarkMode from './components/DarkMode'
import Nav from './components/navbar/Nav'
import About from './components/about/About'
import Experience from './components/experi/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/Test/Testimonial'
import Contect from './components/cont/Contect'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
     <DarkMode/>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contect/>
      <Footer/>
     
    
    </>
  )
}

export default App
