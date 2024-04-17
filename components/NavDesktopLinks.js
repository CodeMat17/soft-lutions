import Link from "next/link";

const NavDesktopLinks = () => {
  return (
    <div>
      <nav className='hidden md:flex items-center gap-4'>
        <Link href='/'>HOME</Link>

        <Link href='/why'>WHY</Link>
        <Link href='/'>FEATURES</Link>
        <Link href='/'>PROJECTS</Link>
        <Link href='/' className='whitespace-nowrap'>
          CONTACT-US
        </Link>
        <Link href='/'>BLOG</Link>
      </nav>
    </div>
  );
};

export default NavDesktopLinks;
