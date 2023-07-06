'use client'
import './globals.css'
import handleScroll from './utils/handleScroll';
import { SlArrowDown } from 'react-icons/sl';
import { Icon } from '@iconify/react';


export default function Home() {
  const { scroll, isLargeScreen } = handleScroll();
  const scrollToBottom = () => {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <div 
    className='min-h-screen pt-2 flex flex-col mx-4 justify-center 
    drop-shadow-lg text-e6palette-200'
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
        <div className='inline text-custom-300'> Binghamton University&apos;s </div>
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
