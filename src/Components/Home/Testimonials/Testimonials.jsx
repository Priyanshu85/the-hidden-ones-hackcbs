import React from 'react'
// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { TestimonialsData } from '../../../Data/Testimonials/TestimonialsData';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";


const Testimonials = () => {
  return (
    <div>
      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

      {TestimonialsData.map((item,index)=> {
        <SwiperSlide>
          <p>{item.text}</p>
        </SwiperSlide>
      })}
      </Swiper>
    </>
    </div>
  )
}

export default Testimonials