import React from 'react'

export default function Background() {
  return (
    <div className='main'>
        <video preload='' autoPlay loop muted playsInline 
        className='
        opacity-50 fixed w-full h-full object-cover z-0'
        >
          <source src = '/etscubes.mp4' type='video/mp4'/>
        </video>
    </div>
  )
}
