import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection'
import Overview from '@/components/Overview';
import Projects from '@/components/Projects';
import Testimonial from '@/components/Testimonial';
import WhyUs from '@/components/WhyUs';
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <WhyUs />
      {/* <Overview /> */}
   <Testimonial />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home