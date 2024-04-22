import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";

// export const metadata = {
//   title: 'HOME'
// }

const Home = () => {
  return (
    <div className='min-h-[73vh]'>
      <HeroSection />
      <WhyUs />
      <Testimonial />
      <ContactUs />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
