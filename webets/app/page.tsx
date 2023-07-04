'use client'
import './globals.css'
import { SlArrowDown } from 'react-icons/sl'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import { Island_Moments } from 'next/font/google';


export default function Home() {
  const [scroll, setScroll] = useState(0); 
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };    

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize',handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  console.log(scroll)
  return (
    <div 
    className='min-h-screen pt-8 md:pt-16 flex flex-col mx-4 justify-center 
    drop-shadow-lg text-e6palette-200 transform-none lg:transform'
    style={{
      transform: isLargeScreen ? `translateY(${scroll/2}px)` : undefined
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
      <h3 className='pt-20 md:pt-32 text-center mx-auto text-2xl/7 font-medium'>
        Binghamton University&apos;s 
        <br/>
        Premier MakerSpace.
        <p
          onClick={scrollToBottom} 
          className='md:hidden text-sm pt-12'>
          scroll for more information
          <SlArrowDown className='ml-3 inline'>
          </SlArrowDown>
        </p>
      </h3>
        <SlArrowDown
          onClick={scrollToBottom}
          size={35} 
          className={`text-e6palette-200 
          absolute bottom-0 hover:text-e6palette-800 
          md:bottom-10 w-full hidden md:flex flex-col 
          items-center justify-center`}
        />
    </div>
  )
}
