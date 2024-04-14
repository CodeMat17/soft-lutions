import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection'
import Overview from '@/components/Overview';
import Projects from '@/components/Projects';
import Why from '@/components/Why';
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <Overview />
      <Why />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home