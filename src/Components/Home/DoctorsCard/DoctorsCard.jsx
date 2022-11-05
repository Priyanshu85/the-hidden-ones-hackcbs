import React from 'react'
import { TestimonialsData } from '../../Data/Testimonials/TestimonialsData'
import Cards from '../Cards/Cards'
const DoctorsCard = () => {
  return (
    <div>
      {
        TestimonialsData.map((item, index) => {
          return (
            <Cards props= {item} key={index}/>
          )
        })
      }
    </div>
  )
}

export default DoctorsCard