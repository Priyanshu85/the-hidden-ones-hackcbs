import React from 'react'

//Components
import Head from "../../Components/Home/Head/Head"
import Navbar from '../../Components/Common/Navbar/Navbar'
import Footer from '../../Components/Common/Footer/Footer'
import Testimonials from '../../Components/Home/Testimonials/Testimonials'
export default function Home() {
  return (
    <>
    <Navbar />
    <Head />
    <Footer />
    <Testimonials />
    </>
  )
}
