import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import "./BannerDetails.css"


const BannerDetails = ({ reverse }) => {
    return (
        <section className='pt-5 px-5 sm:px-10'>
            <div className='container flex flex-col md:flex-col items-center justify-center py-10 md:h[500px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                    {/* Text Container */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="400"
                        data-aos-once="true"
                        className={`flex flex-col items-start gap-4 text-center md:items-start p-4 md:p-8 md:text-left
                        ${reverse ? "md:order-last" : ""}`}>
                        <h1 className='font-sans font-semibold text-red-600 text-xl md:text-2xl justify-center text-center sm:text-center sm:justify-center'>
                            ⸻ ABOUT US
                        </h1>
                        <h2 className="font-sans font-semibold text-black/80 text-2xl md:text-4xl">RBP Petrostar Inc.</h2>
                        <p className='pb-2 text-lg font-light md:text-xl text-justify text-black/80'>
                            Founded in 2004, the company began as a small-scale dealer of petroleum products. Its initial operations supported clients with a fleet of approximately fifty (50) service vehicles during the 2004 local elections. Within six months, the business achieved significant growth, expanding its client network and reaching a distribution capacity of up to 500,000 liters of gasoline and diesel per week.                        </p>
                        <a href='/AboutUs'
                            className="inline-flex items-center justify-center bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded">
                            READ MORE
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 pl-1">
                                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                            </svg>
                        </a>
                    </div>

                    {/* Image Container */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="400"
                        data-aos-once="true"
                        className={reverse ? "order-1 w-full relative mx-auto h-auto overflow-hidden rounded-lg shadow-2xl" : ""}
                    >
                        <img
                            src="/Station.jpg"
                            alt="not found"
                            className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerDetails