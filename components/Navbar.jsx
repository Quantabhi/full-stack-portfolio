'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useRef } from 'react'



const Navbar = () => {
    
    const sideMenuRef = useRef()
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
     const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }   
  return (
      <div>
          <div className='fixed  top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
              <Image src={assets.header_bg_color} alt='' className='w-full' ></Image>
          </div>

          <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50`}>
              <a href="#top">
                  <Image src={assets.abhi_img} alt='logo' className='w-30 cursor-pointer mr-14'/>
              </a>

              <ul className='hidden md:flex items-center gap-8 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 '>
                <li><a className='nav-link' href="#top"     data-text="Home">     <span>Emoh</span></a></li>
                 <li><a className='nav-link' href="#about"   data-text="About me"> <span>me Tuoba</span></a></li>
                <li><a className='nav-link' href="#abilities" data-text="Abilities"><span>seitilibA</span></a></li>
                <li><a className='nav-link' href="#work"    data-text="Work">     <span>krow</span></a></li>
                <li><a className='nav-link' href="#contact" data-text="Contact">  <span>tcatnoc</span></a></li>
              </ul>

              <div className='flex items-center gap-4'>
                  
                  {/* <button>
                      <Image src={assets.moon_icon} alt='' className='w-6'></Image>
                  </button> */}
                  <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-6'>Contact <Image src={assets.arrow_icon} alt='arrow image' className='w-3 animate-bounce'></Image> </a>
                  <button className='block md:hidden ml-3' onClick={openMenu}>
                      <Image src={assets.menu_black} alt='' className='w-6' ></Image>
                  </button>

            </div>

              <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50  transition duration-500 '>
                  <div className='absolute right-6 top-6' onClick={closeMenu}>
                      <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                  </div>
                   <li><a onClick={closeMenu}  href="#top">Home</a></li>
                  <li><a  onClick={closeMenu} href="#about">About me</a></li>
                  <li><a  onClick={closeMenu} href="#abilities">Abilities</a></li>
                  <li><a  onClick={closeMenu} href="#work">Work</a></li>
                  <li><a  onClick={closeMenu} href="#contact">Contact</a></li>
              </ul>

      </nav>
    </div>
  )
}

export default Navbar
