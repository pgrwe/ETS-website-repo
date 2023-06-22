'use client'
import Text from './text'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion";

export default function Hours() {
  const [text, setText] = useState("3D Printing");
  const texts = ["3D Printing", "2D/3D Editing & Design", 
  "3D Scanning", "Virtual Reality", "Photo/Video Editing",
  "CNC", "Cricut"];


  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 2000); // Change text every 2 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div 
    className='bg-e6palette-700 drop-shadow-sm text-3xl text-e6palette-600 md:text-4xl min-h-screen'>
      <h1 className=' flex pt-16 justify-center text-6xl font-bold text-e6palette-500'>
      Hours
      </h1> 
      <motion.ul 
      initial = {{opacity:0}}
      whileInView={{opacity:1}}
      className='drop-shadow-sm font-medium 
      items-center justify-items-center z-10 py-12  
      grid grid-rows-6 grid-cols-2 gap-4 px-0 md:px-20
      '
      transition={{duration: 1}}
      > 
        Monday:
        <li className=''>   
          10am - 6pm
        </li>
        Tuesday:
        <li>
          10am - 6pm
        </li>
        Wednesday:
        <li>
          11am - 6pm
        </li>
        Thursday:
        <li>
          10am - 6pm
        </li>
        Friday:
        <li>
          11am - 5pm
        </li>
        Weekends:
        <li>
          Closed
        </li>
      </motion.ul>
      <div className='relative leading-relaxed tracking-wide text-center'>
        <h1>We offer: </h1>  
          <AnimatePresence>
            <Text text={text} />
          </AnimatePresence>
          <p className='font-medium'>
            And More!
          </p>
      </div>
    </div>
  )
}
