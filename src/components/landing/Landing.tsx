import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import ServicesSection from './Service/Service'
import PortfolioSection from './Portfolio/Portfolio'
import TestimonialSection from './Testimonial/Testimonial'
import Certification from './Certificate/certificate'
// import Banner from './Banner/Banner'

const Landing = () => {
  return (
    <div>
      <Hero/>
      <About/>
      {/* <Banner/> */}
      <ServicesSection/>
      <PortfolioSection/>
      <TestimonialSection/>
      <Certification/>
    </div>
  )
}

export default Landing
