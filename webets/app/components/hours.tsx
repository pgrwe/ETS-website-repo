import React from 'react'

export default function Hours() {
  return (
    <div className='bg-e6palette-700 drop-shadow-sm text-3xl text-e6palette-600 md:text-4xl min-h-screen h-full'>
      <div className=' flex pt-16 justify-center text-6xl font-bold text-e6palette-500'>
      Hours
      </div> 
      <div className='drop-shadow-sm font-medium items-center justify-items-center z-10 py-12  
      grid grid-rows-6 grid-cols-2 gap-4 px-0 md:px-20
      '> 
        Monday:
        <div className=''>   
          10am - 6pm
        </div>
        Tuesday:
        <div>
          10am - 6pm
        </div>
        Wednesday:
        <div>
          10am - 6pm
        </div>
        Thursday:
        <div>
          10am - 6pm
        </div>
        Friday:
        <div>
          11am - 5pm
        </div>
        Weekends
        <div>
          Closed
        </div>
      </div>
      <div className='relative leading-relaxed tracking-wide text-center'>
        <h1>We offer: </h1>  
          <p className='text-lg md:text-3xl md:mx-16 font-medium'>
            | 3D Printing | 2D and 3D Editing and Design | 3D Scanning | Virtual Reality | Photo/Video Editing | CNC | Cricut |
          </p>
          <p className='font-medium'>
            And More!
          </p>
      </div>
    </div>
  )
}
