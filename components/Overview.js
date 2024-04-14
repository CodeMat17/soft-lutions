import Image from "next/image";

const Overview = () => {
  return (
    <div className='py-20 px-5 max-w-7xl mx-auto'>
      <h1 className='font-semibold text-3xl text-center '>OVERVIEW</h1>
      <div className='mt-8 flex flex-col md:flex-row items-center justify-center gap-8'>
        <p className='md:max-w-md '>
          Marketing has gone digital. Now you can reach millions of your
          targeted clients world wide within seconds. Our business at CODEMAT
          SOFT-LUTIONS is to help you create solutions that will bring your
          businesses to life satisfactorily. We pay 100% attention to SEO to
          ensure that your goods or services are visible to potential clients,
          investors, etc. We guarantee you of increased website traffic with our
          proven strategies and heart-to-heart customer-client conversations.
        </p>
        <div className='relative w-[280px] aspect-square rounded-full overflow-hidden'>
          <Image alt='overview image' fill priority src='/overview.webp' />
        </div>
      </div>
    </div>
  );
};

export default Overview;
