import Link from "next/link";

const NavDesktopLinks = () => {
  return (
    <div>
      <nav className='hidden md:flex items-center gap-4'>
        <Link href='/'>HOME</Link>
        <Link href='/why'>WHY</Link>
        <Link href='/projects'>PROJECTS</Link>
        <Link href='/contact-us' className='whitespace-nowrap'>
          CONTACT-US
        </Link>
        <Link href='/blog'>BLOG</Link>
      </nav>
    </div>
  );
};

export default NavDesktopLinks;
