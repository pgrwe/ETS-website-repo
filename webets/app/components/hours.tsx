'use client'
import Text from './text'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";

export default function Hours() {
  const [text, setText] = useState("3D Printing");
  const maplink = "https://www.google.com/maps/place/Technology+Hub/@42.0879452,-75.9686934,21z/data=!4m6!3m5!1s0x89daeec7ec578bd3:0x77cf798f5a65429a!8m2!3d42.08799!4d-75.9685948!16s%2Fg%2F11c1nq96tg?entry=ttu"
  const texts = ["3D Printing", "2D/3D Design", "2D/3D Editing",
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
      grid grid-rows-6 grid-cols-2 gap-4 px-0 md:px-20 mx-2
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
          <p className='pt-4 pb-2 font-medium'>
            And More!
          </p>
          <button 
          className="group">
            <Link href={maplink}>
            <div className="drop-shadow-xl">Click here for our location!</div>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-e6palette-600"></span>
            </Link>
          </button>
          <div className='text-sm'>
            We are located on the first floor of the technology hub, walk-ins are encouraged!
          </div>
      </div>
    </div>
  )
}
