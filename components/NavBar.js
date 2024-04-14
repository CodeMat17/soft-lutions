import Image from "next/image";
import NavDesktopLinks from "./NavDesktopLinks";
import NavMobileLinks from "./NavMobileLinks";
import { ThemeToggle } from "./ThemeToggle";

const NavBar = () => {
  return (
    <header className='w-full max-w-7xl mx-auto p-4 sticky top-0 z-50 bg-white opacity-95 dark:bg-gray-950'>
      <nav className='flex items-center justify-between'>
        <div className=''>
          <div className='relative w-[60px] h-[60px]'>
            <Image alt='logo' priority fill src='/logo.webp' />
          </div>
          {/* <div className=''>
            <p className='text-lg'>CodeMat</p>
            <p className='text-xl'>So<span className='text-green-500'>ft</span>-lutions</p>
          </div> */}
        </div>
        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <NavDesktopLinks />
          <NavMobileLinks />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
