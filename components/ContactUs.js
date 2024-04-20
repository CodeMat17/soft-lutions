import { MailsIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className='py-20 px-4 max-w-7xl mx-auto'>
      <h1 className='font-semibold text-3xl text-center uppercase'>
        Contact Us
      </h1>
      <div className='flex flex-col sm:flex-row items-center justify-between mt-8 rounded-lg overflow-hidden w-full max-w-md mx-auto bg-green-100 p-8 sm:py-5 dark:bg-gray-700'>
        <div className='flex flex-col items-center justify-center gap-4 w-[100%] sm:w-[40%] '>
          {/* <p className='text-2xl'>Tel</p> */}
          <p className=''>0806 385 6120</p>
          <div className='flex items-center justify-center gap-4'>
            <Link href='tel:+2348063856120'>
              <div className='bg-green-500 text-white  dark:bg-gray-800 p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110'>
                <PhoneIcon />
              </div>
            </Link>
            <Link href='https://wa.me/2348063856120'>
              <div className='bg-green-500 text-white  dark:bg-gray-800 p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110'>
                <FaWhatsapp className='w-6 h-6' />
              </div>
            </Link>
          </div>
        </div>

        <div className='w-32 h-0.5 sm:w-0.5 sm:h-32 bg-gray-500 border my-4'></div>

        <div className='flex flex-col items-center justify-center gap-4 w-[100%] sm:w-[60%] '>
          {/* <p className='text-2xl'>Email</p> */}
          <p className=''>ask@soft-lutions.com.ng</p>
          <Link href='mailto:ask@soft-lutions.com.ng'>
            <div className='bg-green-500 text-white dark:bg-gray-800 p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110'>
              <MailsIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
