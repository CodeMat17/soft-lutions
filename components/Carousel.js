"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/hero-img-0.webp",
  "/hero-img-1.webp",
  "/hero-img-2.webp",
  "/hero-img-3.webp",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

    return (
      <div className='w-full max-w-[410px]  flex items-center justify-center backdrop-blur-xl bg-gradient-to-tr from-green-500 via-amber-500 to-[#734ca2] p-1 rounded-full '>
        <div className='relative w-full max-w-[410px]  aspect-square rounded-full overflow-hidden shadow-2xl'>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              priority
              // width={64}
              // height={64}
              fill
              alt={`Image ${index + 1}`}
              className={`transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0 "
              }`}
            />
          ))}
        </div>
      </div>
    );
};

export default Carousel;
