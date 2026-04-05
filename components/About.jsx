import React from 'react'


const About = () => {
  return (
    <div id='about'>    
      <div  className="maindiv bg-background-light  text-slate-800 dark:text-slate-200 transition-colors duration-300 min-h-screen flex flex-col ">
        
        <main className="grow flex items-center px-8 md:px-12 ">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start">
            <section className="space-y-8">
                 <h2 className="montserrat font-display text-4xl md:text-3xl text-slate-400">
                Bio
              </h2>
              <div className="space-y-6 font-feature-advanced">
                <p className="font-sans text-lg leading-relaxed text-slate-600">
                  27 years old working as a Wealth Manager.Making the impossible possible by transitioning from sales to Software Enginner. Focused on  build real products, smart systems and maybe one day create something as impactful as a great tech company.
                </p>
                <p className="leading-relaxed text-slate-600 font-bold italic">
                  Currently based in Kolkata,India.
                </p>
              </div>
            </section>
            <section className="space-y-8">
              <h2 className="montserrat font-display text-4xl md:text-3xl text-slate-400">
                Personal Story
              </h2>
              <div className="space-y-6">
                <p className="font-sans text-lg leading-relaxed text-slate-600 ">
                  I started my career in the financial field. I am working as a Wealth Manager. where I helped people  solve there financial problems.Deep inside me  I knew I wanted more. I wanted to build things, not just sell or advise.I started with Python and slowly moved into web-development . Learning while working a full-time job was not easy, but I stayed consistent.My long-term dream is to shift my career from investment advisory to software engineer. 
                </p>
              </div>
            </section>
            <section className="space-y-8">
              <h2 className="montserrat font-display text-4xl md:text-3xl text-slate-400">
                Connect
              </h2>
              <div className="space-y-6">
                <p className="font-sans text-lg leading-relaxed text-slate-600">
                  For business inquiries or just a
                  friendly hello email me at <br className="hidden lg:block" />
                  <a
                    className="text-slate-900 hover:opacity-70 underline underline-offset-4 decoration-slate-300 transition-all font-medium sm:flex"
                    href="mailto:hello@portfolio.design"
                  >
                    abhijitmondal012@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default About
