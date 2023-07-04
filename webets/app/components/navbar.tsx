'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


export default function NavBar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav 
      className = 
      {`p-4 ${menu ? 'bg-custom-200 border-b-[1px] border-e6palette-200' : 'bg-transparent'} 
      fixed w-screen flex 
      flex-row justify-start items-center z-40`}
      >
      <Link href='/' className='drop-shadow-xl'>
        <Image src='/etslogo1cut.png' width={60} height={0} alt = 'logo' className='hover:scale-95 transition-all duration-430'  />
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden ml-auto pr-6 font-display text-xl md:flex flex-row gap-16 text-e6palette-800'>
        <DropdownMenu.Root onOpenChange={setMenu}>
          <DropdownMenu.Trigger className="drop-shadow-xl group">
            Services
            <FaChevronDown size={14} className={`${menu ? 'rotate-180' : 'rotate-0'} inline ml-2 transition-all duration-200`}/>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-e6palette-800"></span>
          </DropdownMenu.Trigger>
          <AnimatePresence>
          {menu && (
            <DropdownMenu.Portal forceMount>
              <DropdownMenu.Content className='bg-neutral-900 pt-12 
              w-screen text-e6palette-200 text-xl h-screen 
              grid grid-cols-2 text-center px-4'
              asChild
              >
              <motion.div
              initial = {{ opacity: 0 }}
              animate = {{ opacity: 1 }}
              exit={{ opacity: 0}}
              >
                <DropdownMenu.Item className='w-full h-full' >3D Printing
                </DropdownMenu.Item>
                <DropdownMenu.Item className='w-full h-full' >3D Modelling</DropdownMenu.Item> 
                <DropdownMenu.Item className='w-full h-full' >Photo/Video Editing</DropdownMenu.Item>
                <DropdownMenu.Item className='w-full h-full' >2D Design</DropdownMenu.Item>
              </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
          </AnimatePresence>
        </DropdownMenu.Root>

        <Link href='/about' className="group">
          <div className="drop-shadow-xl">About</div>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-e6palette-800"></span>
        </Link>
        <Link href='/about' className="group">
          <div className="drop-shadow-xl">Contact</div>
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-e6palette-800"></span>
        </Link>

        </div>
    </nav>
  );
}