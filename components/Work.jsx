"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

function Work() {
  const containerRef = useRef(null)

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Adjust based on your card width
  const CARD_WIDTH = 400
  const GAP = 32
  const totalCards = 3

  const totalDistance = (totalCards - 1) * (CARD_WIDTH + GAP)

  // Scroll → horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

  return (
    <div id="work" className="w-full py-20">

      {/* Heading */}
      <div className="px-[12%]">
        <h2 className="text-center text-5xl"> My Current Works</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Currently building full stack web applications using Next.js and React,
          focusing on responsive design, performance, and modern UI/UX.
        </p>
      </div>

      {/* Scroll Section */}
      <div ref={containerRef} className="h-[300vh] relative">

        {/* Sticky Wrapper */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">

          {/* Animated Row */}
          <motion.div
            style={{ x }}
            className="flex gap-8 pl-4 md:pl-[12%] will-change-transform"
          >

            {/* Card 1 */}
            <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all w-[350px]">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-[#111418] text-lg font-bold font-mono">
                    Sign-Up Page
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 uppercase">
                    Web Architecture
                  </p>
                </div>
                <a className="text-gray-400 hover:text-black transition-colors"
                  href="https://github.com/Quantabhi/SingUp-page">
                  <span className="material-symbols-outlined text-[24px]">
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
                      A modern sign-up page with form validation and responsive design.
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

            {/* Card 2 */}
            <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all w-[350px]">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-[#111418] text-lg font-bold font-mono">
                    GSAP Animation
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 uppercase">
                    Web Animation
                  </p>
                </div>
                <a className="text-gray-400 hover:text-black transition-colors"
                  href="https://github.com/Quantabhi/Abhijit-GSAP">
                  <span className="material-symbols-outlined text-[24px]">
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusantium deserunt
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

            {/* Card 3 */}
            <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all w-[350px]">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-[#111418] text-lg font-bold font-mono">
                    Portfolio built with Next.js
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 uppercase">
                    Web Application Architecture.
                  </p>
                </div>
                <a className="text-gray-400 hover:text-black transition-colors"
                  href="https://github.com/Quantabhi/Abhijit-portfolio-Next.JS">
                  <span className="material-symbols-outlined text-[24px]">
                    code
                  </span>
                </a>
              </div>

              <div className="px-6 py-4 flex-1">
                <div className="flex flex-col gap-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                      <span>JavaScript</span>
                      <span>2%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[2%] bg-gray-300 group-hover:bg-black transition-all"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                      <span>CSS</span>
                      <span>2%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[2%] bg-gray-300 group-hover:bg-black transition-all"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                      <span>TypeScript</span>
                      <span>96%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[96%] bg-gray-300 group-hover:bg-black transition-all"></div>
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
                      A modern sign-up page with form validation and responsive design.
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
            {/* card 3 */}
            <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all w-[350px]">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-[#111418] text-lg font-bold font-mono">
                       Weather App
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 uppercase">
                    FULL STACK
                  </p>
                </div>
                <a className="text-gray-400 hover:text-black transition-colors"
                  href="https://github.com/Quantabhi/Weather-app">
                  <span className="material-symbols-outlined text-[24px]">
                    code
                  </span>
                </a>
              </div>

              <div className="px-6 py-4 flex-1">
                <div className="flex flex-col gap-4">
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
                      <span>CSS</span>
                      <span>23%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[23%] bg-gray-300 group-hover:bg-black transition-all"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                      <span>JavaScript</span>
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
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
               Full Stack
                </span>
                <span className="material-symbols-outlined text-gray-300">
                  trending_up
                </span>
              </div>
            </div>

            {/* card 4  */}
            <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black transition-all w-[350px]">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-[#111418] text-lg font-bold font-mono">
                     Video Background Landing Page
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 uppercase">
                    Web Animation
                  </p>
                </div>
                <a className="text-gray-400 hover:text-black transition-colors"
                  href="https://github.com/Quantabhi/video-background-landing-page">
                  <span className="material-symbols-outlined text-[24px]">
                    code
                  </span>
                </a>
              </div>

              <div className="px-6 py-4 flex-1">
                <div className="flex flex-col gap-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                      <span>HTML</span>
                      <span>54%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[54%] bg-gray-300 group-hover:bg-black transition-all"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                      <span>CSS</span>
                      <span>46%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[46%] bg-gray-300 group-hover:bg-black transition-all"></div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-gray-600 font-bold uppercase">
                      <span>JavaScript</span>
                      <span>2%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[2%] bg-gray-300 group-hover:bg-black transition-all"></div>
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
                      This is a simple demo landing page project where I learned how to use a fullscreen video background with clean and attractive UI elements.
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Work