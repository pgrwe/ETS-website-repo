'use client'
import Image from 'next/image';
import Link from 'next/link';
import {FaInstagram,FaBars} from 'react-icons/fa';
import {motion ,useScroll, useTransform} from 'framer-motion';
import { useState, useEffect } from 'react';
import { IBM_Plex_Mono } from 'next/font/google';


// const navfont = IBM_Plex_Mono({weight: '500', subsets: ['latin']})



export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  let {scrollYProgress} = useScroll();
  let ytransform = useTransform(scrollYProgress, [0,1], ['0%','100%']);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav 
      className='p-4 md:p-6 fixed w-screen flex flex-row justify-start items-center z-40'>
      <Link href='/' className='drop-shadow-xl'>
        <Image src='/etslogo1cut.png' width={60} height={0} alt = 'logo' className='hover:scale-95 transition-all duration-430'  />
      </Link>

      <div className='hidden ml-auto pr-6 font-display text-xl md:flex flex-row gap-16 text-e6palette-800'>

        <Link href='/about' className="group">
          <div className="drop-shadow-xl">About</div>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-e6palette-800"></span>
        </Link>

        <Link href='/about' className="group">
          <div className="drop-shadow-xl">Services</div>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-e6palette-800"></span>
        </Link>

        <Link href='/about' className="group">
          <div className="drop-shadow-xl">Contact</div>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-e6palette-800"></span>
        </Link>
      </div>
      {/* <div className='flex flex-row md:hidden ml-auto'>
        <Link href='/'>
          Drop
        </Link>
        <Link href='/'>
        </Link>
        <Link href='/'>
        </Link>
        <Link href='/'>
        </Link>
      </div> */}
    </nav>
  );
}
