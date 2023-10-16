import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Image2.png'
import IMG2 from '../../assets/certi.png'
import IMG3 from '../../assets/certi1.png'




const Portfolio = () => {
  return (
  <section id='portfolio'>
       <h5>My Works</h5>
       <h2>Projects & Cretificate</h2>
     <div className="container project_container">
     
      <article  className='project_item'>
           <div className="project_item-image">
            <img src={IMG1} alt="" />
           </div>
             <h3>It's a Project that replicates the core functionalities of Amazon.com</h3>
             <div className="project_item-cta">
             <a href="https://www.github.com/" className='btn' target="_blank">GitHub</a>
             <a href="https://www.dribble.com/" className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
            <img src={IMG2} alt="" />
           </div>
             <h3>Training Certificate of C(Language) Organized by MySirG.com</h3>
             <div className="project_item-cta">
             <a href={IMG2} className='btn' >View Certifacte</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
            <img src={IMG3} alt="" />
           </div>
             <h3>An online non credit course authorized by IBM & offered by Coursera.</h3>
             <div className="project_item-cta">
             <a href={IMG3} className='btn' >View Certifacte</a>
             </div>
      </article>
       </div> 
   </section>
  )
}

export default Portfolio