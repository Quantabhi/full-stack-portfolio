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
    <p>© 2026 Abhijit. All rights reserved</p>
    
          <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            
            {/* Github */}
        <li>
  <a 
    target='_blank' 
    rel="noopener noreferrer"
    href="https://github.com/Quantabhi"
  >
    <svg
      className="w-6 h-6 text-gray-800 hover:text-gray-400 transition"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.486 2 12.02c0 4.427 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.034 1.532 1.034.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.276.098-2.66 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.384.202 2.406.1 2.66.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.694-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.025 10.025 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  </a>
</li>

            {/* Instagram */}
            <li>
              <a 
                target='_blank' 
                rel="noopener noreferrer"
                href="https://www.instagram.com/mondalabhi23"
              >
                <svg
                  className="w-6 h-6 text-pink-500  hover:text-gray-400 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5ZM12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5Zm0 1.5A3 3 0 1 1 12 15a3 3 0 0 1 0-6Zm4.75-2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            {/* Twitter */}
            <li>
              <a 
                target='_blank' 
                rel="noopener noreferrer"
                href="https://x.com/abhijitmondal22"
              >
                <svg
                  className="w-6 h-6 text-blue-500 animate-[pulse_1.5s_infinite] [@keyframes_pulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.2);opacity:0.7}100%{transform:scale(1);opacity:1}}]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

          </ul>
  </div>
</div>
    </div>
  )
}

export default Footer
