'use client'
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa'

export default function Background() {
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
  return (
    <div className='main'>
      <video 
        preload='' 
        autoPlay 
        loop 
        muted 
        playsInline 
        className='opacity-50 fixed w-full h-screen object-cover z-0'
        style={{
          transform: `translateY(-${scroll / 2}px)`
        }}
      >
        <source src='/etscubes.mp4' type='video/mp4'/>
      </video>
    </div>
  );
}

