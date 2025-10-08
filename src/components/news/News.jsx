import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import SimpleParallax from "simple-parallax-js";
import './news.css'


const News = ({ reverse }) => {
  return (
    <>
      <section className='bg-center bg-cover bg-no-repeat bg-slate-50 flex items-center justify-center pt-0 px-5 sm:px-5 sm:py-0'>
        <div className='container flex flex-col md:flex-col items-center justify-center py-10 md:h[500px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
            {/* Text Container */}
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-center md:items-start p-4 md:p-8 md:text-left
                        ${reverse ? "md:order-last" : ""}`}>
              <h1 className='font-sans font-semibold text-red-600 text-xl sm:text-2xl'>
                ⸻ NEWS AND UPDATES
              </h1>
              <p className='font-sans font-semibold text-black/80 text-2xl md:text-4xl justify-start text-left '><span className=''>RBP Petrostar Inc.</span> Relief Operations</p>


              <p className='pb-2 text-lg md:text-xl font-light text-justify text-black'>
                RBP Petrostar Inc. stands with communities in times of need. Our relief operations aim to provide essential support and comfort to those affected by calamities. Together, we strive to bring hope and healing wherever it is needed most.
              </p>
              <a href='/PayangaReliefOperation'
                className="inline-flex items-center justify-center bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded">
                VISIT NEWS
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 pl-1">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            {/* Image Container */}
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1 " : "w-full relative mx-auto h-auto overflow-hidden rounded-lg shadow-md"}
            >
              <img
                src="/news.png"
                alt="not found"
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default News