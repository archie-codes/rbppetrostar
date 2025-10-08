import React from 'react'
import Footer from '../footer/Footer'
import "./Fuels.css"

const Fuels = () => {
    return (
        <>  
        <section className="container pt-5 md:pt-32 mb-36 isolate overflow-hidden lg:overflow-visible">
            <div className="mx-auto flex flex-col items-start justify-start text-left mb-5 px-5 sm:py-5">
                <h1
                    data-aos="fade-right"
                    data-aos-duration="300"
                    data-aos-once="true"
                    className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
                    ⸻ FUEL PRODUCTS
                </h1>
            </div>

            <div className="mb-10 h-full w-full flex items-center justify-center">
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">

                    {/* News Card 1 */}
                    <div className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1 ">
                        <span className="absolute top-2 left-2 z-0 h-1 w-1 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[180] -translate-y-4 -translate-x-4">
                        </span>
                        <span className="absolute hidden top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                            </svg>
                        </span>
                        <div className="flex items-center justify-center h-52 w-80 cursor-pointer overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 ">
                            <img src="/fuelpump/yellowfuelpump.png" className="h-60 absolute -translate-x-11 rotate-5 group-hover:rotate-12 duration-500 group-hover:-translate-y-2" alt="" />
                            <h1 className="relative font-sans font-extrabold text-4xl text-shadow-lg text-yellow-400 text-center inline-block align-middle translate-x-10 transition-all duration-300 group-hover:text-white tracking-wide">MEGA <br /> DIESEL</h1>
                        </div>
                    </div>

                    {/* News Card 2 */}
                    <div className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1 ">
                        <span className="absolute top-2 left-2 z-0 h-1 w-1 rounded-full bg-green-700 transition-all duration-300 group-hover:scale-[180] -translate-y-4 -translate-x-4">
                        </span>
                        <span className="absolute hidden top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                            </svg>
                        </span>
                        <div className="flex items-center justify-center h-52 w-80 cursor-pointer overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 ">
                            <img src="/fuelpump/greenfuelpump.png" className="h-60 absolute -translate-x-11 rotate-5 group-hover:rotate-12 duration-500 group-hover:-translate-y-2" alt="" />
                            <h1 className="relative font-sans font-extrabold text-4xl text-shadow-lg text-green-700 text-center inline-block align-middle translate-x-10 transition-all duration-300 group-hover:text-white">DYNA <br /> UNLEADED</h1>
                        </div>
                    </div>

                    {/* News Card 3 */}
                    <div className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1 ">
                        <span className="absolute top-2 left-2 z-0 h-1 w-1 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[180] -translate-y-4 -translate-x-4">
                        </span>
                        <span className="absolute hidden top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                            </svg>
                        </span>
                        <div className="flex items-center justify-center h-52 w-80 cursor-pointer overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 ">
                            <img src="/fuelpump/redfuelpump.png" className="h-60 absolute -translate-x-11 rotate-5 group-hover:rotate-12 duration-500 group-hover:-translate-y-2" alt="" />
                            <h1 className="relative font-sans font-extrabold text-4xl text-shadow-lg text-red-700 text-center inline-block align-middle translate-x-10 transition-all duration-300 group-hover:text-white">POWER <br /> PREMIUM</h1>
                        </div>
                    </div>

                    {/* News Card 4 */}
                    

                </div>
            </div>
        </section>
        <Footer />
        </>
        
    )
}

export default Fuels