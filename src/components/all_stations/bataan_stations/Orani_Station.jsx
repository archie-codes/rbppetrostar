import React, { useState } from "react";
import Footer from '../../footer/Footer'
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import CountUp from "react-countup";
import './Bataan_Stations.css';
import Slider from "react-slick";


const Orani_Station = () => {
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

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };


    return (
        <>
            <section className="container pt-5 md:pt-32 isolate overflow-hidden lg:overflow-visible">
                <div className="mx-auto flex flex-col items-start justify-start text-left px-5 sm:py-5">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-once="true"
                        className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
                        ⸻ ORANI STATION
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 p-5">
                    {/* Station Picture */}
                    <div className="sm:col-span-2 p-0">
                        <img classNames="object-cover" src="/stations/orani/orani_main.jpg" loading="lazy" />

                        {/* Price Update */}
                        <div className="container hidden md:grid grid-cols-3 mx-auto gap-2 -translate-y-4 md:-translate-y-10">

                            {/* Diesel */}
                            <div className="fuelbox grid grid-cols-2 items-center justify-center shadow-lg">
                                <div className="col-span-1 row-span-2 place-self-center">
                                    <BsFillFuelPumpDieselFill className="text-4xl text-yellow-400" />
                                </div>
                                <div className="">
                                    <h1 className="text-xs font-black font-sans text-yellow-400 sm:text-xs md:text-md lg:text-3xl">
                                        DIESEL
                                    </h1>
                                </div>
                                <div className="">
                                    <p className="font-semibold text-black/70 sm:text-xs md:text-2xl">₱ <CountUp start={100} end={51} suffix=".45" duration={5.75} /></p>
                                </div>
                            </div>

                            {/* Unleaded */}
                            <div className="fuelbox grid grid-cols-2 items-center justify-center shadow-lg">
                                <div className="col-span-1 row-span-2 place-self-center">
                                    <BsFillFuelPumpDieselFill className="text-4xl text-green-700" />
                                </div>
                                <div className="">
                                    <h1 className="text-xs font-black font-sans text-green-700 sm:text-xs md:text-md lg:text-3xl">
                                        UNLEADED
                                    </h1>
                                </div>
                                <div className="">
                                    <p className="font-semibold text-black/70 sm:text-xs md:text-2xl">₱ <CountUp start={100} end={52} suffix=".00" duration={5.75} /></p>
                                </div>
                            </div>

                            {/* Premium */}
                            <div className="fuelbox grid grid-cols-2 items-center justify-center shadow-lg">
                                <div className="col-span-1 row-span-2 place-self-center">
                                    <BsFillFuelPumpDieselFill className="text-4xl text-red-600" />
                                </div>
                                <div className="">
                                    <h1 className="text-xs font-black font-sans text-red-600 sm:text-xs md:text-md lg:text-3xl">
                                        PREMIUM
                                    </h1>
                                </div>
                                <div className="">
                                    <p className="font-semibold text-black/70 sm:text-xs md:text-2xl">₱ <CountUp start={100} end={53} suffix=".00" duration={5.75} /></p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Map */}
                    <div className="sm:col-start-3 p-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.8992335059659!2d120.52257176953479!3d14.800712295714412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339669d49674f56d%3A0x61241be9fcb6fb0c!2sRBP%20Petrostar%20Fuels%20(Orani)!5e1!3m2!1sen!2sph!4v1747295772776!5m2!1sen!2sph"
                            width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    {/* Description */}
                    <div className="row-start-2 md:col-span-2 md:col-start-1 md:row-start-2 p-0">
                        <h1 className="flex items-center gap-2 tracking-tight text-gray-700 font-semibold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            Description
                        </h1>

                        <ul role="list" className="text-xl list-disc mt-1 ml-10 text-gray-700">
                            <li>Fuel Products Available: Diesel, Unleaded and Premium</li>
                            <li>Value Card Rewards Redemption, (Mon - Sun, 5:00 AM - 9:00 PM)</li>
                            <li>Male & Female Comfort Rooms</li>
                            <li>Pay Parking</li>
                            <li>Air & Water Services</li>
                            <li>Cash and Cashless Accepted</li>
                        </ul>

                        <hr className="my-5" />

                        {/* Lot For Lease Section */}
                        <p className="flex items-center gap-2 tracking-tight text-gray-700 font-semibold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z" />
                                <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z" />
                            </svg>
                            Lot For Lease
                        </p>


                        <ul className="gap-10 text-xl mt-1 ml-10 text-gray-700 pb-5">
                            <li>Convinience Stall : 126.46 sqm</li>
                            {/* <li>Proposed Commercial Establishment : 2,765 sqm</li> */}
                        </ul>

                        <p className="flex items-center gap-2 tracking-tight text-gray-700 font-semibold text-xl mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                                <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
                            </svg>
                            Actual Footage
                        </p>

                        {/* Picture Slides */}
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div>
                                    <img src="/stations/orani/lot_for_lease/top_view.jpg" alt="Lot Area" className="w-80 md:w-[300px] h-auto mt-2 cursor-pointer rounded-lg"
                                        onClick={() => openModal("/stations/orani/lot_for_lease/top_view.jpg")} />
                                </div>
                                <div>
                                    <img src="/stations/orani/lot_for_lease/inside_view.jpg" alt="Lot Area" className="w-80 md:w-[300px] h-auto mt-2 cursor-pointer rounded-lg"
                                        onClick={() => openModal("/stations/orani/lot_for_lease/inside_view.jpg")} />
                                </div>
                                <div>
                                    <img src="/stations/orani/lot_for_lease/inside_side_view.jpg" alt="Lot Area" className="w-80 md:w-[300px] h-auto mt-2 cursor-pointer rounded-lg"
                                        onClick={() => openModal("/stations/orani/lot_for_lease/inside_side_view.jpg")} />
                                </div>
                            </Slider>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="row-start-4 md:col-start-3 md:row-start-2 p-0">
                        <h2 className='flex items-center gap-2 tracking-tight text-gray-700 font-semibold text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                            Location
                        </h2>
                        <p className='text-xl pl-8 text-gray-700'>Orani, Bataan</p>
                    </div>
                </div>
            </section>

            {/* Modal Picture 1  */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-2xl font-bold -translate-y-1 translate-x-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
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

export default Orani_Station