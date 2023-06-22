import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function Background() {
  return (
    <div className='main'>
        <video preload='' autoPlay loop muted playsInline 
        className='
        opacity-50 fixed bg-fixed w-full h-screen object-cover z-0'
        >
          <source src = '/etscubes.mp4' type='video/mp4'/>
        </video>
      <FaChevronDown size={25} className='text-e6palette-200 absolute bottom-0 md:bottom-10 w-full flex flex-col items-center animate-bounce'/>
    </div>
  )
}
