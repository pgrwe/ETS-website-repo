import React from 'react'

export default function Background() {
  return (
    <div className='main'>
        <video autoPlay loop muted playsInline className='border-y-2 border-e6palette-200 opacity-50 absolute w-full h-3/4  object-cover z-0'>
          <source src = '/etscubes.mp4' type='video/mp4'/>
        </video>
    </div>
  )
}