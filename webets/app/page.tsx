'use client'
import './globals.css'
import { SlArrowDown } from 'react-icons/sl'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'


export default function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToBottom = () => {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div 
    className='min-h-screen pt-16 flex flex-col mx-4 justify-center 
    drop-shadow-lg text-e6palette-200'
    style={{
      transform: `translateY(${scroll/2}px)`
    }}
    >
      <h2 className='text-2xl self-center'>Welcome to the...</h2>
        <h1 
        className='pt-2 font-semibold self-center 
        text-[3.3rem]/tight md:text-[4.0rem]'
        >
          Emerging 
          Technology 
          Studio
          <Icon icon = 'mdi:printer-3d' className='animate-pulse relative object-fill inline pb-1 ml-4'/>
       </h1>
      <h3 className='pt-32 text-center mx-auto text-2xl/7 font-medium'>
        Binghamton University&apos;s 
        <br/>
        Premier MakerSpace.
      </h3>
        <SlArrowDown
          onClick={scrollToBottom}
          size={35} 
          className={`text-e6palette-200 
          absolute bottom-0 hover:text-e6palette-800 
          md:bottom-10 w-full flex flex-col 
          items-center`}
        />
    </div>
  )
}
