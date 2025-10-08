import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import './heroCarousel.css'

const heroCarousel = () => {
    return (
        <>
            <img loading="lazy" src="/fuelpump.png" className="fuelPump lg:h-56 -translate-y-1" alt="" />
            <Carousel className='sm:pt-10' swipeable autoPlay infiniteLoop showThumbs={false} showIndicators={false} showStatus={false} interval={10000} transitionTime={500}>
                <div>
                    <div className="relative flex flex-col bg-slate-200 px-5 pt-5 sm:pt-5 lg:pt-10 lg:flex-col lg:pb-0 ">
                        <div
                            data-aos="fade-left"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-0 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                            <svg
                                className="absolute left-0 hidden h-full text-slate-200 transform -translate-x-1/2 lg:block"
                                viewBox="0 0 100 100"
                                fill="currentColor"
                                preserveAspectRatio="none slice"
                            >
                                <path d="M50 0H100L50 100H0L50 0Z" />
                            </svg>
                            <div
                                className="md:h-96 lg:h-full">
                                <video src="/edited_drone_shot1.mp4"
                                    autoPlay="{true}" loop muted
                                    className="object-cover flex items-center justify-center h-56 w-full overflow-hidden rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full ">
                                </video>
                            </div>
                        </div>
                        <div className="relative flex flex-col w-full max-w-xl mx-auto md:px-0 lg:px-1 lg:max-w-screen-xl text-center lg:text-left">
                            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5"
                                data-aos="fade-right"
                                data-aos-duration="400"
                                data-aos-once="true"
                            >

                                <h2 className="pt-5 sm:pt-0 mb-5 text-xs font-sans font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    <span className="text-4xl sm:text-5xl">Fuel Your</span>
                                    <br />
                                    <span className="text-4xl sm:text-5xl bg-gradient-to-r from-red-600 via-blue-600 to-red-400 text-transparent bg-clip-text bg-300% animate-gradient"> Journey</span>
                                    <span className="text-4xl sm:text-5xl"> Forward!{' '}</span>
                                </h2>
                                <p className="pr-5 mb-5 text-base text-gray-700 md:text-xl">
                                    Empower yourself with the fuel you need to reach your destination.
                                </p>
                                <div className="flex justify-center md:justify-center lg:justify-start">
                                    <a
                                        href="/ContactUs"
                                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-300 focus:shadow-outline focus:outline-none"
                                    >
                                        CONTACT US
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 pl-1">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative flex flex-col bg-slate-200 px-5 pt-5 sm:pt-5 lg:pt-10 lg:flex-col lg:pb-0 ">
                        <div
                            data-aos="fade-left"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-0 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                            <svg
                                className="absolute left-0 hidden h-full text-slate-200 transform -translate-x-1/2 lg:block"
                                viewBox="0 0 100 100"
                                fill="currentColor"
                                preserveAspectRatio="none slice"
                            >
                                <path d="M50 0H100L50 100H0L50 0Z" />
                            </svg>
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                                src="/stall_for_lease.png"
                                alt="Station"
                            />
                        </div>
                        <div className="relative flex flex-col w-full max-w-xl mx-auto md:px-0 lg:px-1 lg:max-w-screen-xl text-center lg:text-left">
                            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5"
                                data-aos="fade-right"
                                data-aos-duration="400"
                                data-aos-once="true"
                            >
                                <h2 className="pt-5 sm:pt-0 mb-5 text-xs font-sans font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    <span className="text-4xl sm:text-5xl bg-gradient-to-r from-red-600 via-blue-600 to-red-400 text-transparent bg-clip-text bg-300% animate-gradient">
                                        Commercial Stalls
                                    </span>
                                    <br />
                                    <span className="text-4xl sm:text-5xl"> For Lease </span>
                                    {/* <br />
                                    <span className="text-4xl sm:text-5xl bg-gradient-to-r from-red-600 via-blue-600 to-red-400 text-transparent bg-clip-text bg-300% animate-gradient"> Now</span>
                                    <span className="text-4xl sm:text-5xl"> Open!{' '}</span> */}
                                </h2>
                                <p className="pr-5 mb-5 text-base text-gray-700 md:text-xl">
                                    {/* Another RBP Station successfully open and ready to fuel your journey. */}
                                    Prime location. Clean, secure, and accessible. Perfect for your business.
                                </p>
                                <div className="flex justify-center md:justify-center lg:justify-start">
                                    <a
                                        href="/InquireforSpace"
                                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-300 focus:shadow-outline focus:outline-none"
                                    >
                                        INQUIRE NOW
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 pl-1">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative flex flex-col bg-slate-200 px-5 pt-5 sm:pt-5 lg:pt-10 lg:flex-col lg:pb-0 ">
                        <div
                            data-aos="fade-left"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-0 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                            <svg
                                className="absolute left-0 hidden h-full text-slate-200 transform -translate-x-1/2 lg:block"
                                viewBox="0 0 100 100"
                                fill="currentColor"
                                preserveAspectRatio="none slice"
                            >
                                <path d="M50 0H100L50 100H0L50 0Z" />
                            </svg>
                            <div
                                className="md:h-96 lg:h-full">
                                <img
                                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                                    src="/promotevaluecard.jpg"
                                    alt="holdingvaluecard"
                                />
                            </div>
                        </div>
                        <div className="relative flex flex-col w-full max-w-xl mx-auto md:px-0 lg:px-1 lg:max-w-screen-xl text-center lg:text-left">
                            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5"
                                data-aos="fade-right"
                                data-aos-duration="400"
                                data-aos-once="true"
                            >
                                <h2 className="pt-5 sm:pt-0 mb-5 text-xs font-sans font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    <span className="text-4xl sm:text-5xl">
                                        <span className="text-4xl sm:text-5xl bg-gradient-to-r from-red-600 via-blue-600 to-red-400 text-transparent bg-clip-text bg-300% animate-gradient"> RBP Petrostar</span>
                                        <br />
                                        Value Card</span>
                                </h2>
                                <p className="pr-5 mb-5 text-base text-gray-700 md:text-xl">
                                    Fuel Rewards: Visit our station near you and join our loyalty program today!
                                </p>
                                <div className="flex justify-center md:justify-center lg:justify-start">
                                    <a
                                        href="/ValueCardRegistration"
                                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-300 focus:shadow-outline focus:outline-none"
                                    >
                                        LEARN MORE
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 pl-1">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>

    )
}

export default heroCarousel