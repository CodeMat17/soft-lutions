import {
  GoalIcon,
  HeartHandshakeIcon,
  LampDeskIcon,
  Router,
  SparkleIcon,
} from "lucide-react";

const whys = [
  {
    id: 1,
    title: "EXPERTISE",
    img: "/ai_assistant.webp",
    icon: "SparkleIcon",
    desc: "Our seasoned team brings expertise in AI, web development,anddesign.",
  },
  {
    id: 2,
    title: "INNOVATION",
    img: "/web_dev.webp",
    desc: "We thrive on innovation, pushing boundaries to deliver exceptional solutions.",
  },
  {
    id: 3,
    title: "CLIENT-CENTRIC APPROACH",
    img: "/web_dev.webp",
    desc: "Your success is our mission. Let us create something extraordinary together.",
  },
  {
    id: 4,
    title: "RESULTS-DRIVEN",
    img: "/web_dev.webp",
    desc: "we measure success by the impact our solutions create for your business.",
  },
  {
    id: 5,
    title: "CONTINUOUS LEARNING",
    img: "/web_dev.webp",
    desc: "Technology evolves, and so do we. We stay ahead of the curves.",
  },
];

const WhyUs = () => {
  return (
    <div className='py-20 px-5 max-w-7xl mx-auto'>
      <h1 className='font-semibold text-3xl text-center '>WHY CHOOSE US?</h1>

      {/* services card */}
      <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {whys.map((why) => (
          <div
            key={why.id}
            className='w-full max-w-md mx-auto flex flex-col justify-center gap-4 border rounded-lg overflow-hidden px-4 py-5 sm:p-5 lg:p-8 shadow-md dark:shadow-zinc-800'>
            <div className='flex items-center gap-3'>
              {why.id === 1 && <SparkleIcon className='text-green-500' />}
              {why.id === 2 && <LampDeskIcon className='text-green-500' />}
              {why.id === 3 && (
                <HeartHandshakeIcon className='text-green-500' />
              )}
              {why.id === 4 && <GoalIcon className='text-green-500' />}
              {why.id === 5 && <Router className='text-green-500' />}
              <h2 className=' sm:text-lg md:text-xl  font-medium'>
                {why.title}
              </h2>
            </div>

            <p className='md:text-lg'>{why.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
