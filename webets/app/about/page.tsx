import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function About() {
  return (
    <div className='min-h-screen pt-16 flex flex-col mx-4 justify-center 
    drop-shadow-lg text-e6palette-200'>
        About
      <FaChevronDown size={35} className='fixed bottom-0 w-full flex flex-col items-center justify-center animate-bounce'/>
    </div>
  )
}
