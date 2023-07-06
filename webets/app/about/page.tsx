'use client'
import React from 'react'
import { SlArrowDown } from 'react-icons/sl'
import handleScroll from '../utils/handleScroll';

export default function About() {
  const { scroll, isLargeScreen } = handleScroll();
  const scrollToBottom = () => {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
  <div
    className='min-h-screen text-e6palette-200 drop-shadow-lg
    text-center pt-20 text-5xl'
    style={{
      transform: isLargeScreen ? `translateY(${scroll/2}px)` : undefined
    }}
    >
    <h1 className=''>
      The ETS is student-run!
    </h1>
    <h2 className='mt-2 font-semibold'>
    - Meet Our Team -
    </h2>
    <div className='mt-32 grid mx-6 grid-flow-col 
    auto-col-max text-xl font-body mb-32'>
      <div>
        Van James Huynh (Co-Director)
      </div>
      <div>
        Damien Rode (Co-Director)
      </div>
      <div>
        Catherine Tai 
      </div>
      <div>
        Ameen Kunnathu 
      </div>
      <div>
        Joe Donaghy
      </div>
      <div>
        Winnie Yong
      </div>
      <div>
        Rachel Koppelman
      </div>
      <div>
        Jake Digiugno
      </div>
      <div>
        Sam Abramson
      </div>
      <div>
        Paul Ampadu
      </div>
    </div>
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
