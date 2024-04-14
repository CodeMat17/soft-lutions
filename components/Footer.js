import { MailsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className='py-8 px-4 bg-gray-800 text-gray-300'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative w-16 h-16'>
          <Image alt='footer logo' fill priority src='/logo.webp' />
        </div>
        <div>
          <div className='flex items-center justify-start gap-3'>
            <div>ask@soft-lutions.com.ng</div>
            <Button asChild size='icon'>
              <Link href='mailto:ask@soft-lutions.com.ng'>
                <MailsIcon className='text-green-500' />
              </Link>
            </Button>
         
          </div>
        </div>                       
      </div>
      <p className='text-center m-8'>
        &copy; CodeMat Soft-lutions 2024. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
