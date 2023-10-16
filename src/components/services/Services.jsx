import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>HTML5/CSS Development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Custom Web App Development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Fully Responsiveness.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Developer handoff.</p>
            </li>
            
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Custom Backend Development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Backend API Management.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Enterprise Backend Services.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list-icon'/>
              <p>New Route for Innovation.</p>
            </li> */}
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Application Admin Backend.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list-icon'/>
              <p>Data Storage Backend Apps.</p>
            </li> */}
            
          </ul> 
        </article>
        {/* End of WebDevelopment */}
        <article className='service'>
          <div className="service_head">
            <h3>DataBase knowledge</h3>
          </div>
          <ul className='service_list'>
          <li>
              <BiCheck className='service_list-icon'/>
              <p>Achieve data mastery.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Advance automation.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Prototyping & testing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Managed Data Services.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list-icon'/>
              <p>Consultative Services.</p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services