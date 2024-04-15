"use client";

import { Advent_Pro, Concert_One } from "next/font/google";
import Carousel from "./Carousel";
import { Button } from "./ui/button";
import Link from "next/link";

const advent_pro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const concert_one = Concert_One({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection = () => {
  return (
    <div className='py-6 px-4 flex flex-col md:flex-row items-center justify-around gap-6 lg:gap-0 max-w-7xl mx-auto'>
      <div className='order-last md:order-first flex flex-col gap-3 w-full '>
        <div className={concert_one.className}>
          <p className='text-5xl sm:text-6xl md:text-7xl md:max-w-4xl'>
            Codemat So<span className='text-green-500'>ft</span>-lutions
          </p>
        </div>

        <p className={`text-lg text-gray-500 md:max-w-xl`}>
          We develop <strong>AI Assistant</strong> , sleek, intuitive, dynamic
          and responsive <strong>websites</strong> and other software solutions.
          With our products, our clients are always happy with seamless business
          flow.
        </p>
        <p className={`${advent_pro.className} text-gray-500 text-lg`}>
          Come experience SATISFACTION with our software solutions.
        </p>
        <div>
          <Button masChild className='bg-green-500 text-white text-md'>
          <Link href='mailto:ask@soft-lutions.com.ng'>Contact us now</Link>  
          </Button>
        </div>
      </div>

      <Carousel />
    </div>
  );
};

export default HeroSection;
