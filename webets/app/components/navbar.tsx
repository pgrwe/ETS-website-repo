'use client'
import Image from 'next/image';
import Link from 'next/link';
import {FaInstagram,FaBars} from 'react-icons/fa';
import styles from '../../styles';
import {navVariants} from '../../styles/motion';
import {motion} from 'framer-motion';
import {useState} from 'react';


export default function NavBar() {
  const [is_open, nav_is_open] = useState(false);

  return (
    <motion.nav 
    variants={navVariants} 
    initial='hidden'
    whileInView='show'
    className={'${styles.xPaddings} relative'}>
      {/* Desktop Navigation */}
      <section className='hidden sm:block'>
        <div className='flex relative mx-auto justify-between p-5'>
          <button className='rounded-2xl bg-e6palette-100'>
            <Link href='/'>
              <Image src='/etslogo1.png' width={165} height={200} alt = 'logo' className=''  />
            </Link>
          </button>
        </div>
      </section>
      {/* Mobile Navigation */}
      <section className='sm:hidden px-2 pt-3 pb-1'>
          <button className='p 2w-16 h-12 rounded-xl bg-e6palette-100'>
            <Link href='/'>
              <Image src='/etslogo1cut.png' width={70} height={100} alt = 'logo' className='p-2'  />
            </Link>
          </button>
      </section>
    </motion.nav>
  )
}
