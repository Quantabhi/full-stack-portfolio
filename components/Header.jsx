import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
          <div>
              <Image src={assets.profile_abhi } alt="" className='rounded-full w-36 border border-black '></Image>
          </div>
          <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 '>Hi I'm Abhijit Mondal <Image src={assets.verify} alt='' className='w-7' ></Image></h3>
          <h1 className='text-3xl sm:text-6xl lg:text-[48px] font-extrabold '>Full Stack Web Developer Based in Kolkata, IN</h1>
          <p className='max-w-2xl mx-auto '>
              In the era of AI and vibe coding the only real power is thinking and creativity that is what makes the difference.
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 '>
              <a href='#contact' className='px-10 py-3 border-white rounded-full bg-black flex text-white items-center gap-2 '>
                  Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'></Image></a>
              <a href="https://drive.google.com/file/d/18XZcHwNjOvSc2RXM12F4Q1bcSglXPhA3/view?usp=sharing" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-50'>resume <Image src={assets.download_icon} alt='' className='w-4'></Image></a>
          </div>
    </div>
  )
}

export default Header
