"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MailsIcon, PhoneIcon } from "lucide-react";
import { Advent_Pro, Concert_One } from "next/font/google";
import Image from "next/image";
import Carousel from "./Carousel";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";


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
      {/* <p className='text-center text-sm bg-green-100 text-green-600 px-6 py-1.5 rounded-md'>
        The website is currently under reconstruction. We will be done in a few
        days time.
      </p> */}
      <div className='py-12 flex flex-col md:flex-row items-center justify-around gap-6 lg:gap-0 '>
        <div className='order-last md:order-first flex flex-col gap-5 w-full max-w-xl'>
          <div className={concert_one.className}>
            <p className='text-5xl md:text-6xl'>
              Welcome to CodeMat So<span className='text-green-500'>ft</span>
              -lutions
            </p>
          </div>

          <p className={`text-lg sm:text-xl text-gray-500 md:max-w-xl`}>
            At CodeMat Soft-lutions, we weave technology into elegant solutions.
            Our passion lies in creating intelligent software and dynamic
            experiences for forward-thinking companies. We are here to transform
            your digital landscape.
          </p>
          <p className={` text-gray-500 text-lg`}>
            Explore our services, read success stories, and reach out to us.
          </p>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='bg-green-500 text-white text-md py-6 dark:hover:bg-green-700'>
                  Contact us now
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='ml-4'>
                <DropdownMenuGroup className='flex items-center gap-4'>
                  <Link href='tel:+2348063856120'>
                    <DropdownMenuItem>
                      <PhoneIcon className='mr-2 h-5 w-5 text-green-500' />
                      {/* <span>Profile</span> */}
                    </DropdownMenuItem>
                  </Link>
                  <Link href='https://wa.me/2348063856120'>
                    <DropdownMenuItem>
                      <FaWhatsapp className='mr-2 h-6 w-6 text-green-500' />
                      {/* <span>WhatsApp</span> */}
                    </DropdownMenuItem>
                  </Link>
                  <Link href='mailto:ask@soft-lutions.com.ng'>
                    <DropdownMenuItem>
                      <MailsIcon className='mr-2 h-5 w-5 text-green-500' />
                      {/* <span>Email</span> */}
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
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
              className='w-full  max-w-md mx-auto flex flex-col justify-center gap-4 rounded-lg overflow-hidden p-5 lg:p-8 border shadow-md dark:shadow-lg dark:shadow-zinc-800'>
              <div className='flex flex-col justify-center items-center gap-3'>
                <div className='relative w-32 h-32 rounded-full overflow-hidden '>
                  <Image alt='' fill priority src={service.img} />
                </div>
                <h2 className='text-center text-lg md:text-xl  font-medium'>
                  {service.title}
                </h2>
              </div>
              <p className='md:text-lg'>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
