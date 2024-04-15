"use client";

import { Advent_Pro, Concert_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import { Button } from "./ui/button";

const advent_pro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const concert_one = Concert_One({
  subsets: ["latin"],
  weight: ["400"],
});

const services = [
  {
    id: 1,
    title: "AI ASSISTANT (RAG)",
    img: "/ai_assistant.webp",
    desc: "We craft smart AI assistants that understand assist ans elevate user interactions. From Chatbots to voice interfaces, we are at the forefront of AI innovation.",
  },
  {
    id: 2,
    title: "WEB SOLUTIONS",
    img: "/web_dev.webp",
    desc: "Our sleek, dynamic, responsive and SEO-friendly websites are more than just pixels. They are gateways to your brand. Let us build your online presence with creativity and precision.",
  },
];

const HeroSection = () => {
  return (
    <div className='py-6 px-4 max-w-7xl mx-auto'>
      <div className='py-6 flex flex-col md:flex-row items-center justify-around gap-6 lg:gap-0 '>
        <div className='order-last md:order-first flex flex-col gap-3 w-full '>
          <div className={concert_one.className}>
            <p className='text-5xl sm:text-6xl md:text-7xl md:max-w-4xl'>
              Welcome to Codemat So<span className='text-green-500'>ft</span>
              -lutions
            </p>
          </div>

          <p className={`text-lg text-gray-500 md:max-w-xl`}>
            At CodeMat Soft-lutions, we weave technology into elegant solutions.
            Our passion lies in creating intelligent software and dynamic
            experiences for forward-thinking companies. We are here to transform
            your digital landscape.
          </p>
          <p className={` text-gray-500 text-lg`}>
          Explore our services, read success stories, and reach out to us.
        </p>
          <div>
            <Button asChild className='bg-green-500 text-white text-md py-6'>
              <Link href='mailto:ask@soft-lutions.com.ng'>Contact us now</Link>
            </Button>
          </div>
        </div>

        <Carousel />
      </div>

      {/* Our services */}
      <div className='py-20 max-w-5xl mx-auto'>
        <h1 className='font-semibold text-3xl text-center '>OUR SERVICES</h1>

        {/* services card */}
        <div className='pt-12 flex flex-col md:flex-row gap-6 lg:gap-0 justify-cente'>
          {services.map((service) => (
            <div
              key={service.id}
              className='w-full  max-w-md mx-auto flex flex-col justify-center gap-4 border rounded-lg overflow-hidden p-5 lg:p-8 shadow-md'>
              <div className='flex flex-col justify-center items-center gap-3'>
                <div className='relative w-32 h-32 rounded-full overflow-hidden '>
                  <Image alt='' fill priority src={service.img} />
                </div>
                <h2 className='text-center text-lg md:text-xl  font-medium'>{service.title}</h2>
              </div>
              <p className="md:text-lg">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
