import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
          <div className='text-center'>
              <Image src={assets.logotwo} alt='' className='w-36 mx-auto mb-2' />

              <div className='w-max flex items-center gap-2 mx-auto'>
                  <Image src={assets.mail_icon} alt='' className='w-6' />
                  abhijitmondal012@gmail.com
            </div>
          </div>
         <div className='py-6'>
  <div className='text-center sm:flex items-center justify-between border-t border-gray-400 max-w-5xl mx-auto pt-6'>
    <p>2026 Abhijit. All rights reserved</p>
    <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
      <li><a target='_blank' className='hover:text-gray-300' href="https://www.google.com">Github</a></li>
      <li><a target='_blank' className='hover:text-gray-300' href="https://www.google.com">Instagram</a></li>
      <li><a target='_blank' className='hover:text-gray-300' href="https://www.google.com">X</a></li>
      <li><a target='_blank' className='hover:text-gray-300' href="https://www.google.com">Linkdin</a></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Footer
