"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const vids = [
  {
    id: 1,
    title: "AI Assistant",
    link: "https://res.cloudinary.com/mctony17/video/upload/v1713131065/Soft-lutions/videos/eboncgfaozojks4r1upr.mp4",
  },
  {
    id: 2,
    title: "Hoodies eShop",
    link: "https://res.cloudinary.com/mctony17/video/upload/v1713131245/Soft-lutions/videos/ovsqzg7vmq5uzlxpom9z.mp4",
  },
  {
    id: 3,
    title: "Hulu Movie App",
    link: "https://res.cloudinary.com/mctony17/video/upload/v1713131041/Soft-lutions/videos/jalppkdyyedeshkalsa0.mp4",
  },
  {
    id: 4,
    title: "Online Photo Gallery",
    link: "https://res.cloudinary.com/mctony17/video/upload/v1713131038/Soft-lutions/videos/p68wwdcaatfn6jtk50xm.mp4",
  },
];
const Projects = () => {
  return (
    <div className='py-20 px-4 max-w-7xl mx-auto'>
      <h1 className='font-semibold text-3xl text-center '>CURATED PROJECTS</h1>
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
        {vids.map((vid) => (
          <div key={vid.id} className='relative w-full rounded-lg overflow-hidden border bg-gray-700 text-white pb-2 shadow-md'>
            <CldVideoPlayer
              width='1620'
              height='1080'
              src={vid.link}
              colors={{
                accent: "#ff0000",
                base: "#00ff00",
                text: "#0000ff",
              }}
              fontFace='Source Serif Pro'
              className='w-full'
            />
            <h2 className="absolute bottom-2 left-4">{vid.title}</h2>
            {/* <p>Test</p> */}
          </div>
        ))}
      </div>
      <div className='my-8 py-8 '></div>
    </div>
  );
};

export default Projects;
