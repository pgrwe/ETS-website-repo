import './globals.css'
import { FaVectorSquare } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='min-h-screen pt-16 flex flex-col mx-4 justify-center 
    drop-shadow-lg text-e6palette-200'
    >
      <h2 className='text-2xl self-center'>Welcome to the...</h2>
        <h1 className='pt-2 font-semibold self-center
        transition-all duration-300
        text-[3.3rem]/tight md:text-[4.0rem]'
        >
          <FaVectorSquare size={35} className='animate-pulse hidden lg:inline relative object-fill pb-1 mr-4'/>
          Emerging 
          Technology 
          Studio
          <FaVectorSquare size={35} className='animate-pulse relative object-fill inline pb-1 ml-4'/>
       </h1>
      <h3 className='pt-32 text-center mx-auto text-2xl/7 font-medium'>
        Binghamton University&apos;s 
        <br/>
        Premier MakerSpace.
      </h3>
    </div>
  )
}
