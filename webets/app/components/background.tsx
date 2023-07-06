import React from 'react';

export default function Background() {
  return (
    <div className='main'>
      <video 
        preload='' 
        autoPlay 
        loop 
        muted 
        playsInline 
        className='opacity-30 fixed h-screen w-screen object-cover z-0'
      >
        <source src='/etscubes.mp4' type='video/mp4'/>
      </video>
    </div>
  );
}

