import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <WhyUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
