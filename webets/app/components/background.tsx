'use client'
import React, { useState, useEffect } from 'react';

export default function Background() {
  const [scroll, setScroll] = useState(0);;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    }; 

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
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
          transform: isLargeScreen ? `translateY(-${scroll / 2}px)` : undefined
        }}
      >
        <source src='/etscubes.mp4' type='video/mp4'/>
      </video>
    </div>
  );
}

