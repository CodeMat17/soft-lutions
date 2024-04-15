import Image from "next/image";

const whys = [
  {
    id: 1,
    img: "/service-247.svg",
    title: "24/7 Online Presence",
    body: "A website for yourself or business means your clients or customers can always find and contact you 24/7 even after your business hours.",
  },
  {
    id: 2,
    img: "/growth.svg",
    title: "Market Expansion",
    body: "A website that is accessible to users in any part of the world gives you or your business the geographical barrier break through to excel.",
  },
  {
    id: 3,
    img: "/marketing.svg",
    title: "Advertising",
    body: "A website like ours with perfect Search Engine Optimization, SEO, increases the awareness and visibility of your goods or services to a wide range of clients a million times faster than with the traditional offline advertising methods.",
  },
  {
    id: 4,
    img: "/competition.svg",
    title: "Competition",
    body: "If you do not have a website for your goods or services, it is likely that your competitor does, that means you are missing out on gaining new customers and your competitor with more customers will definitely gain more than you do in the business.",
  },
  {
    id: 5,
    img: "/consulting.svg",
    title: "Interaction",
    body: "A perfect website like ours makes interaction with clients very easy. In business, clients questions and quick replies are essential. This encourages good customer relations in the long run and the positive feedbacks can be uploaded as testimonials which may attract more customers to you.",
  },
  {
    id: 6,
    img: "/data-trends.svg",
    title: "Growth Opportunity",
    body: "Websites present great platforms for potential clients and investors to be referred to. It showcases biography, about you or business, what you or your business has achieved and what can still be achieved in the future.",
  },
];

const Why = () => {
  return (
    <div className='py-20 px-4 max-w-7xl mx-auto'>
      <h1 className='font-semibold text-3xl text-center '>STILL UNDER CONSTRUCTION. PLZ CHECK AGAIN.</h1>
      <p className='text-center'>Why you need a website</p>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
        {whys.map((why) => (
          <div
            key={why.id}
            className='flex flex-col sm:flex-ro gap-3 sm:gap-1 bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow-md max-w-xl mx-auto'>
            <div className='flex flex-col sm:flex-row items-center sm:gap-3'>
              <div className='relative w-[132px] h-[132px] lg:w-[129px] lg:h-[129px] xl:w-[135px] xl:h-[135px] shrink-0'>
                <Image alt='service 24/7' fill priority src={why.img} />
              </div>
              <p className='text-center text-lg sm:text-left font-medium uppercase'>
                {why.title}
              </p>
            </div>
            <div className='space-y-2'>
              {/* <p className='text-center text-lg sm:text-left font-medium uppercase'>
                {why.title} old
              </p> */}
              <p className='text-center sm:text-left font-light '>{why.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
