import React from 'react'

const ValueCard = () => {
    return (
        <>
            <div 
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="true"
            className="bg-white mt-0 sm:my-16">
                <div className="container mx-auto pb-0 sm:px-6 sm:py-0 ">
                    <div className="relative isolate overflow-hidden px-6 pt-16 pb-9 sm:pb-0 shadow-xl sm:rounded-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-28 lg:text-left">
                            <h1 className="pb-10 text-left md:text-left font-semibold tracking-tight text-balance text-red-500 text-xl sm:text-2xl">⸻ RBP VALUE CARD </h1>
                            <h2 className="text-3xl font-semibold tracking-tight text-balance text-black/80 sm:text-2xl">
                                Amazing Prizes Await. Your Points Journey Starts Now!
                            </h2>
                            <p className="mt-6 text-lg/8 text-pretty text-justify text-black/70 sm:text-lg">
                                Go to the nearest station in your area and get value card or you can register here. The more you fill gas, the more you earn points!<br /><br />
                            </p>
                            <div className="mt-10 flex  items-center justify-center gap-x-6 lg:justify-start">
                                <a href="/VCardFormRegistration" className="w-36 text-center rounded-md bg-white border border-red-500 px-3.5 py-2.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                    REGISTER
                                </a>
                                <a href="/ValueCardRegistration" className=" font-semibold text-red-500">
                                    LEARN MORE <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative hidden lg:block h-96 sm:h-80 mt-0 lg:mt-8">
                            <img
                                alt="App screenshot"
                                src="/valuecard_2.png"
                                width={1824}
                                height={1080}
                                className="mt-32 rounded-lg shadow-md rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-auto w-80 object-cover hover:scale-125 transform origin-bottom"
                            />
                            <img
                                alt="App screenshot"
                                src="/valuecard_1.png"
                                width={1824}
                                height={1080}
                                className="mt-32 rounded-xl shadow-md -rotate-6 hover:rotate-0 duration-500 -translate-y-[380px] translate-x-[250px] hover:-translate-y-[400px] h-auto w-80 object-cover hover:scale-125 transform origin-bottom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ValueCard;