import './hauling.css';
import Footer from '../footer/Footer';
import React, { useState } from "react";

const Hauling = () => {
    // Modal state
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <section className="pt-0 md:pt-10 isolate overflow-hidden lg:overflow-visible">

                <div className="relative bg-white overflow-hidden">
                    {/* <!-- Background Image --> */}
                    <div className="absolute inset-0">
                        <img src="/fuel-truck bg.jpg" alt="Fuel Truck" className="w-full h-full object-cover opacity-70" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
                    </div>

                    {/* <!-- Content Container --> */}
                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between">
                        {/* <!-- Text Content --> */}
                        <div className="max-w-xl text-center lg:text-left space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-red-500 leading-tight">
                                Fuel Hauling Services
                            </h1>
                            <p className="text-xl text-gray-700 text-justify">
                                    Delivering petroleum products safely, efficiently, and on time wherever you need it around luzon.
                                With a well-maintained tankers and experienced drivers, we ensure reliable delivery every time.
                                Whether you need bulk fuel deliveries or scheduled refueling services, our team is ready to meet your operational demands.
                                Trust us to keep your business moving with dependable fuel logistics you can count on.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="/ContactUs" className="w-36 text-center rounded-md border border-red-500 px-3.5 py-2.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        {/* <!-- Optional Logo or Tagline --> */}
                        <div className="hidden lg:block">
                            <img src="/map_of_luzon.png" alt="Map of luzon" className="h-[600px] rounded-full" loading="lazy" />
                        </div>
                    </div>

                </div>

                {/* <!-- Tank Images Section --> */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-5">
                    {/* <!-- Tank 20KL --> */}
                    <div className="tankbox">
                        <p className="font-sans font-bold text-white text-xl md:text-3xl text-center bg-red-500 p-2 md:w-72 rounded-xl md:translate-y-7 md:translate-x-[170px]">20KL Fuel Tank</p>
                        <img src="/20kl_fueltank.jpg" alt="20kl Fuel Tank" className="h-full rounded-xl" loading="lazy" onClick={() => openModal("/20kl_fueltank.jpg")} />
                    </div>

                    {/* <!-- Tank 40KL --> */}
                    <div className="tankbox">
                        <p className="font-sans font-bold text-white text-xl md:text-3xl text-center bg-red-500 p-2 md:w-72 rounded-xl md:translate-y-7 md:translate-x-[170px]">40KL Fuel Tank</p>
                        <img src="/40kl_fueltank.jpg" alt="40kl Fuel Tank" className="h-full rounded-xl" loading="lazy" onClick={() => openModal("/40kl_fueltank.jpg")} />
                    </div>
                </div>

            </section>

            {/* Modal Picture 1  */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-2xl font-bold -translate-y-12 translate-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 ">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full Size"
                            className="max-w-full max-h-[65vh] rounded shadow-lg"
                        />
                    </div>
                </div>
            )}
            {/* End of Modal Picture 1 */}

            <Footer />
        </>
    )
}

export default Hauling