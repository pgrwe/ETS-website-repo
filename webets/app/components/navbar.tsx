'use client'
import Image from 'next/image';
import Link from 'next/link';
import {FaInstagram,FaBars} from 'react-icons/fa';
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import { IBM_Plex_Mono } from 'next/font/google';


const navfont = IBM_Plex_Mono({weight: '500', subsets: ['latin']})

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const navbarVariants = {
  hidden: { translateY: '-100%' },
  visible: { translateY: 0 },
};


export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.nav 
      className='p-4 md:p-6 fixed w-screen flex flex-row justify-start items-center z-40'>
      <Link href='/' className=' drop-shadow-xl'>
        <Image src='/etslogo1cut.png' width={60} height={0} alt = 'logo' className=''  />
      </Link>
      <div className='hidden ml-auto pr-6 font-display text-xl md:flex flex-row gap-16 text-e6palette-100'>
        <Link href='/about' className='drop-shadow-xl'>
          About
        </Link>
        <Link href='/services' className='drop-shadow-xl'>
          Services
        </Link>
        <Link href='/services' className='drop-shadow-xl'>
          Contact
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
    </motion.nav>
  );
}
