"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlignRight,
  GlobeLockIcon,
  NotebookTabsIcon,
  RssIcon,
  ShapesIcon,
  ShrinkIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const NavMobileLinks = () => {
  return (
    <nav className='md:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='rounded-lg overflow-hidden'>
            <AlignRight />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 mr-2'>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator /> */}
          <DropdownMenuGroup className='flex flex-col gap-4 py-4 px-1'>
            <Link href='/'>
              <DropdownMenuItem className='text-lg'>
                <ShrinkIcon className='mr-3 h-5 w-5' />
                <span>HOME</span>
              </DropdownMenuItem>
            </Link>

            <Link href='/why'>
              <DropdownMenuItem className='text-lg'>
                <ShapesIcon className='mr-3 h-5 w-5' />
                <span>WHY</span>
              </DropdownMenuItem>
            </Link>

            <Link href='/projects'>
              <DropdownMenuItem className='text-lg'>
                <GlobeLockIcon className='mr-3 h-5 w-5' />
                <span>PROJECTS</span>
              </DropdownMenuItem>
            </Link>

            <Link href='/contact-us'>
              <DropdownMenuItem className='text-lg'>
                <NotebookTabsIcon className='mr-3 h-5 w-5' />
                <span>CONTACT-US</span>
              </DropdownMenuItem>
            </Link>

            <Link href='/blog'>
              <DropdownMenuItem className='text-lg'>
                <RssIcon className='mr-3 h-5 w-5' />
                <span>BLOG</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <nav className='md:hidden items-center gap-4'>
        <Link href='/'>HOME</Link>
        <Link href='/'>OVERVIEW</Link>
        <Link href='/'>FEATURES</Link>
        <Link href='/'>PROJECTS</Link>
        <Link href='/' className='whitespace-nowrap'>
          CONTACT-US
        </Link>
        <Link href='/'>BLOG</Link>
      </nav> */}
    </nav>
  );
};

export default NavMobileLinks;
