import React from "react";
import "./tesimonial.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";


// import Swiper core and required modules
import {Pagination} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'; // Use 'swiper/swiper-bundle.css' for the bundled version of Swiper


const data = [
  {
      avatar: AVTR1,
      name: 'Sachin Kumawat',
      review: 'The web development service by Sunil Kumar is top-notch! He is highly skilled, professional, and efficient. He was able to deliver the project on time and exceeded our expectations. I highly recommend him for any web development needs.'
  },
   {
      avatar: AVTR2,
      name: "Sandeep Mahawar",
      review: 'I highly recommend Sunil Kumar for all your UI design and wireframing needs. He is incredibly talented and has a keen eye for detail. He has been able to bring our vision to life with ease and has exceeded our expectations. He is a true professional and we look forward to working with him again in the future.'
   },
   {
      avatar: AVTR3,
      name: "Pradeep Choudhary",
      review: 'The web development service by Sunil Kumar is top-notch! He is highly skilled, professional, and efficient. He was able to deliver the project on time and exceeded our expectations. I highly recommend him for any web development needs.'


  },
   {
      avatar: AVTR4,
      name: "Rajveer Kumawat",
      review: 'I highly recommend Sunil Kumar for all your UI design and wireframing needs. He is incredibly talented and has a keen eye for detail. He has been able to bring our vision to life with ease and has exceeded our expectations. He is a true professional and we look forward to working with him again in the future.'
  },
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testinomials</h2>

      <Swiper className="container testimonials_container"  
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      Pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide article key={index} className="testinomial">
        <div className="client_avatar">
             <img src={avatar} alt=""/>
        </div>
          <h5 className="client_name">{name}</h5>
          <small className="client_review">
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;