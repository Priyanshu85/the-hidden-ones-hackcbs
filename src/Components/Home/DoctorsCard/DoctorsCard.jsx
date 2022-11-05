import React from 'react'
import { TestimonialsData } from '../../../Data/Testimonials/TestimonialsData';
import Cards from '../../Cards/Cards';
const DoctorsCard = () => {
  return (
    <div>
      {
        TestimonialsData.map(({item}) => {
          return (
            <Cards props= {item} key={item.id}/>
          )
        })
      }
    </div>
  )
}

export default DoctorsCard