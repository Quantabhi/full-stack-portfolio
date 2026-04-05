import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Abilities = () => {
  return (
    <div id='abilities' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center text-5xl'>Abilities</h4> 
          
          <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
    
          <div className='w-64 sm:w-80 rounded-3xl max-w-none' >
              <Image src={assets.ab_img} alt='user' className='w-full rounded-3xl' ></Image>
        </div>
              <div className='flex-1'>
                  <p className='mb-10 max-w-2xl font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum eum veritatis deserunt. Cum exercitationem odio ratione, dolor quae voluptatum adipisci quas debitis veniam doloremque quibusdam vitae est reiciendis aliquid?</p>
                  <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w- 2xl'>
                      {infoList.map(({ icon, iconDark, title, description }, index) => (
                          <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                          hover:bg-gray-50 hover:translate-y-1 duration-500'
                              key={index}>
                              <Image src={icon} alt={title} className='w-7'/>
                              <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                              <p className='text-gray-700 font-semibold'>{ description}</p>
                          </li>
                      ))}
                  </ul>
                  <h4 className='my-6 text-xl text-gray-700 underline' >Tools I use </h4>
                  <ul className='flex items-center gap-3 sm:gap-5' > 
                      {toolsData.map((tool, index) => (
                          <li className='flex items-center justify-center w-12 sm:w-10 aspect-square border rounded-lg cursor-pointer hover:bg-gray-50 hover:translate-y-1 duration-500'
                              key={index}>
                              <Image  src={tool} alt='Tool' className='w-5  ' />
                          </li>
                      ))}
                  </ul>
              </div>
            </div>
      </div>
      

      
  )
}

export default Abilities
