import React from 'react'
import Footer from "../footer/Footer";

const BataanStationList = () => {
    return (
        <>
            <section className="container pt-5 md:pt-32 mb-36 isolate overflow-hidden lg:overflow-visible">
                <div className="mx-auto flex flex-col items-start justify-start text-left mb-5 px-5 sm:py-5">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-once="true"
                        className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
                        ⸻ BATAAN STATIONS
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">Here our stations in Bataan</p>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-once="true"
                    className="mb-10 h-full w-full flex">
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">

                        {/* Orani, Bataan*/}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[15]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="/Orani_Station">
                                        <img classNames="rounded-md shadow-lg "
                                            src="/stations/orani/orani_main.jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="/Orani_Station">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                Orani Station
                                            </h5>
                                            <p>September 22, 2018</p>
                                            <hr className="my-1 text-gray-900" />
                                            <span className="text-md font-normal text-gray-800 inline-flex transition-all duration-300 group-hover:text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2 mt-1 text-gray-600 transition-all duration-300 group-hover:text-white">
                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                                </svg>
                                                Mon - Sun | 5:00 AM - 09:00 PM
                                            </span>
                                            <span className="text-md font-normal text-gray-800 inline-flex transition-all duration-300 group-hover:text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2 mt-1 text-gray-600 transition-all duration-300 group-hover:text-white">
                                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                                </svg>
                                                Orani, Bataan
                                            </span>
                                        </a>
                                        <br />
                                        <a href="/Orani_Station " className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            Visit Station
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Daang Bago, Dinalupian, Bataan */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[15]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="/Dinalupihan_Station">
                                        <img classNames="rounded-md shadow-lg "
                                            src="/stations/dinalupihan/dinalupihan_main.jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="/Dinalupihan_Station">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                Dinalupihan Station
                                            </h5>
                                            <p>June 30, 2021</p>
                                            <hr className="my-1 text-gray-900" />
                                            <span className="text-md font-normal text-gray-800 inline-flex transition-all duration-300 group-hover:text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2 mt-1 text-gray-600 transition-all duration-300 group-hover:text-white">
                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                                </svg>
                                                Mon - Sun | 5:00 AM - 09:00 PM
                                            </span>
                                            <span className="text-md font-normal text-gray-800 inline-flex transition-all duration-300 group-hover:text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2 mt-1 text-gray-600 transition-all duration-300 group-hover:text-white">
                                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                                </svg>
                                                Daang Bago, Dinalupihan, Bataan
                                            </span>
                                        </a>
                                        <br />
                                        <a href="/Dinalupihan_Station" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            Visit Station
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default BataanStationList;