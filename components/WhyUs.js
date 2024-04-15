import { HeartHandshakeIcon, LampDeskIcon, SparkleIcon } from "lucide-react";

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
            className='w-full max-w-md mx-auto flex flex-col justify-center gap-4 border rounded-lg overflow-hidden px-4 py-5 sm:p-5 lg:p-8 shadow-md'>
            <div className='flex items-center gap-3'>
              {why.id === 1 && <SparkleIcon />}
              {why.id === 2 && <LampDeskIcon />}
              {why.id === 3 && <HeartHandshakeIcon />}
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
