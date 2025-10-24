// import React, { useState } from "react";

// const Space = () => {
//     // Modal state
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedImage, setSelectedImage] = useState(null);

//     const openModal = (imgSrc) => {
//         setSelectedImage(imgSrc);
//         setIsOpen(true);
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//         setSelectedImage(null);
//     };

//     // Slider settings
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 5000,
//         autoplaySpeed: 1000,
//         cssEase: "linear"
//     };

//     return (
//         <>
//             <section className='bg-parallax bg-cover pt-5 px-5 sm:px-10'>
//                 <div className='container flex flex-col items-center justify-center py-10 md:h[500px]'>
//                     <div className='grid grid-cols-1 md:grid-cols-2 gap-40 items-center'>
//                         {/* Text Container */}
//                         <div
//                             data-aos="fade-left"
//                             data-aos-duration="400"
//                             data-aos-once="true"
//                             className="flex flex-col gap-4 text-center justify-center items-center md:items-start md:p-8 md:text-left">
//                             <h1 className='font-sans font-bold text-red-600 text-xl md:text-3xl justify-center text-center sm:text-center sm:justify-center'>
//                                 NEED SPACES FOR YOUR BUSINESS?
//                             </h1>
//                             <h2 className="font-sans font-light mt-2 text-black/80 text-2xl md:text-2xl">
//                                 Inquire today about our available retail spaces.
//                             </h2>
//                             <div className="mt-5 items-center justify-center">
//                                 <a href="/InquireforSpace" className="rounded-md border border-red-500 px-3.5 py-2.5 mt-5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white hover:border-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
//                                     CONTACT US
//                                 </a>
//                             </div>
//                         </div>

//                         {/* Image Container */}
//                         <div
//                             data-aos="fade-right"
//                             data-aos-duration="400"
//                             data-aos-once="true"
//                             className="order-1 w-full relative mx-auto h-auto overflow-hidden rounded-lg shadow-2xl"
//                         >
//                             <img
//                                 src="/stall_for_lease.png"
//                                 alt="not found"
//                                 className="w-full h-96 relative z-0 transition-all duration-300 hover:scale-110"
//                                 onClick={() => openModal("/stall_for_lease.png")}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Modal Picture 1  */}
//             {isOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//                     <div className="relative">
//                         <button
//                             onClick={closeModal}
//                             className="absolute top-2 right-2 text-white text-2xl font-bold -translate-y-1 translate-x-1"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
//                                 <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                         <img
//                             src={selectedImage}
//                             alt="Full Size"
//                             className="max-w-full max-h-[65vh] rounded shadow-lg "
//                         />
//                     </div>
//                 </div>
//             )}
//             {/* End of Modal Picture 1 */}
//         </>
//     )
// }

// export default Space

import { useState } from "react"
import { X } from "lucide-react"

export default function SpaceSection() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc)
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
        setSelectedImage(null)
    }

    return (
        <>
            {/* Section Background */}
            <section className="relative bg-gradient-to-br from-stone-50 to-stone-100 overflow-hidden">
                {/* Subtle Amber Blurs */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Text Section */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="600"
                            data-aos-once="true"
                            className="flex flex-col gap-6 order-2 lg:order-1"
                        >
                            <div className="space-y-2">
                                <p className="text-2xl font-semibold tracking-widest text-red-600 uppercase">
                                    ⸻ Premium Retail Spaces
                                </p>
                                <h1 className="font-sans text-4xl md:text-5xl lg:text-5xl font-semibold text-stone-800 leading-tight">
                                    Elevate Your Business
                                </h1>
                            </div>

                            <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                                Discover thoughtfully designed retail spaces that inspire growth and success.
                                Our premium locations offer the perfect environment for your brand to thrive.
                            </p>

                            <div className="pt-4">
                                <a
                                    href="/InquireforSpace"
                                    className="inline-flex items-center justify-center px-8 py-3.5 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl"
                                >
                                    INQUIRE NOW
                                    <svg
                                        className="w-5 h-5 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        {/* Image Container */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="order-1 w-full relative mx-auto h-auto overflow-hidden rounded-lg shadow-2xl"
                        >
                            <img
                                src="/stall_for_lease.png"
                                alt="not found"
                                className="w-full h-96 relative z-0 transition-all duration-300 hover:scale-110"
                                onClick={() => openModal("/stall_for_lease.png")}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                            aria-label="Close modal"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <img
                            src={selectedImage || ""}
                            alt="Full size retail space"
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
