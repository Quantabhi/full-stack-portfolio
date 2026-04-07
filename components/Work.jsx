import React from 'react'



function Work() {
  return (
    <div id='work' className='w-full px-[12%] py-10 scale-mt-20' >
          <h2 className='text-center text-5xl'> My Current Works</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 '>Currently building full stack web applications using Next.js and React, focusing on responsive design, performance, and modern UI/UX. Actively improving backend skills, deploying projects on Vercel, and exploring animations with Framer Motion.</p>

          <div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Card 1  */}
          <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#111418] text-lg font-bold font-mono">
                  Sign-Up Page
                </h3>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-tighte">
                  Web Architecture
                </p>
              </div>
              <a
                className="text-gray-400 hover:text-black transition-colors"
                href="https://github.com/Quantabhi/SingUp-page"
              >
                <span className="material-symbols-outlined text-[24px] hover:text-black">
                  code
                </span>
              </a>
            </div>
            <div className="px-6 py-4 flex-1">
              <div className="flex flex-col gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                    <span>HTML</span>
                    <span>40%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-gray-300 group-hover:bg-black transition-all"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                    <span>CSS</span>
                    <span>35%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[35%] bg-gray-300 group-hover:bg-black transition-all"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                    <span>JavaScript</span>
                    <span>25%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[25%] bg-gray-300 group-hover:bg-black transition-all"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex gap-1.5 mb-2">
                  <div className="size-2 rounded-full bg-gray-300"></div>
                  <div className="size-2 rounded-full bg-gray-400"></div>
                  <div className="size-2 rounded-full bg-gray-500"></div>
                </div>
                <div className="font-mono text-[10px] text-gray-600">
                  <p>
                    A modern sign-up page with form validation and responsive
                    design.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 flex justify-between items-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                Web Development
              </span>
              <span className="material-symbols-outlined text-gray-300">
                trending_up
              </span>
            </div>
          </div>

          {/* Card 2 - Portfolio Website */}
          <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#111418] text-lg font-bold font-mono">
                  Portfolio Website
                </h3>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-tighte">
                  Full Stack
                </p>
              </div>
              <a
                className="text-gray-400 hover:text-black transition-colors"
                href="https://github.com/Quantabhi/abhijit-portfolio"
              >
                <span className="material-symbols-outlined text-[24px] hover:text-black">
                  code
                </span>
              </a>
            </div>
            <div className="px-6 py-4 flex-1">
              <div className="flex flex-col gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                    <span>HTML</span>
                    <span>50%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[50%] bg-gray-300 group-hover:bg-black transition-all"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                    <span>CSS</span>
                    <span>30%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[30%] bg-gray-300 group-hover:bg-black transition-all"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                    <span>JavaScript</span>
                    <span>20%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[20%] bg-gray-300 group-hover:bg-black transition-all"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex gap-1.5 mb-2">
                  <div className="size-2 rounded-full bg-gray-300"></div>
                  <div className="size-2 rounded-full bg-gray-400"></div>
                  <div className="size-2 rounded-full bg-gray-500"></div>
                </div>
                <div className="font-mono text-[10px] text-gray-600">
                  <p>
                    Personal portfolio showcasing projects with smooth
                    animations and transitions.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 flex justify-between items-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                Frontend
              </span>
              <span className="material-symbols-outlined text-gray-300">
                trending_up
              </span>
            </div>
          </div>

          {/* Card 3 - E-commerce App */}
          <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all">
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="text-[#111418] text-lg font-bold font-mono">
                  Weather App
                </h3>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-tighte">
                  FULL STACK
                </p>
              </div>
              <a
                className="text-gray-400 hover:text-black transition-colors"
                href="https://github.com/Quantabhi/Weather-app"
              >
                <span className="material-symbols-outlined text-[24px] hover:text-black">
                  code
                </span>
              </a>
            </div>
            <div className="px-6 py-4 flex-1">
              <div className="flex flex-col gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                    <span>CSS</span>
                    <span>23%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[23%] bg-gray-300 group-hover:bg-black transition-all"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                    <span>HTML</span>
                    <span>19%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[19%] bg-gray-300 group-hover:bg-black transition-all"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                    <span>JacaScript</span>
                    <span>58%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[58%] bg-gray-300 group-hover:bg-black transition-all"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex gap-1.5 mb-2">
                  <div className="size-2 rounded-full bg-gray-300"></div>
                  <div className="size-2 rounded-full bg-gray-400"></div>
                  <div className="size-2 rounded-full bg-gray-500"></div>
                </div>
                <div className="font-mono text-[10px] text-gray-600">
                  <p>
                    A simple and responsive weather application built using the
                    OpenWeather API.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 flex justify-between items-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                Full Stack
              </span>
              <span className="material-symbols-outlined text-gray-300">
                trending_up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Work
