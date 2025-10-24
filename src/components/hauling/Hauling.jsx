// import './hauling.css';
// import Footer from '../footer/Footer';
// import React, { useState } from "react";

// const Hauling = () => {
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

//     return (
//         <>
//             <section className="pt-0 md:pt-10 isolate overflow-hidden lg:overflow-visible">

//                 <div className="relative bg-white overflow-hidden">
//                     {/* <!-- Background Image --> */}
//                     <div className="absolute inset-0">
//                         <img src="/fuel-truck bg.jpg" alt="Fuel Truck" className="w-full h-full object-cover opacity-70" />
//                         <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
//                     </div>

//                     {/* <!-- Content Container --> */}
//                     <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between">
//                         {/* <!-- Text Content --> */}
//                         <div className="max-w-xl text-center lg:text-left space-y-6">
//                             <h1 className="text-4xl md:text-5xl font-bold text-red-500 leading-tight">
//                                 Fuel Hauling Services
//                             </h1>
//                             <p className="text-xl text-gray-700 text-justify">
//                                     Delivering petroleum products safely, efficiently, and on time wherever you need it around luzon.
//                                 With a well-maintained tankers and experienced drivers, we ensure reliable delivery every time.
//                                 Whether you need bulk fuel deliveries or scheduled refueling services, our team is ready to meet your operational demands.
//                                 Trust us to keep your business moving with dependable fuel logistics you can count on.
//                             </p>
//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <a href="/ContactUs" className="w-36 text-center rounded-md border border-red-500 px-3.5 py-2.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
//                                     Contact Us
//                                 </a>
//                             </div>
//                         </div>

//                         {/* <!-- Optional Logo or Tagline --> */}
//                         <div className="hidden lg:block">
//                             <img src="/map_of_luzon.png" alt="Map of luzon" className="h-[600px] rounded-full" loading="lazy" />
//                         </div>
//                     </div>

//                 </div>

//                 {/* <!-- Tank Images Section --> */}
//                 <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-5">
//                     {/* <!-- Tank 20KL --> */}
//                     <div className="tankbox">
//                         <p className="font-sans font-bold text-white text-xl md:text-3xl text-center bg-red-500 p-2 md:w-72 rounded-xl md:translate-y-7 md:translate-x-[170px]">20KL Fuel Tank</p>
//                         <img src="/20kl_fueltank.jpg" alt="20kl Fuel Tank" className="h-full rounded-xl" loading="lazy" onClick={() => openModal("/20kl_fueltank.jpg")} />
//                     </div>

//                     {/* <!-- Tank 40KL --> */}
//                     <div className="tankbox">
//                         <p className="font-sans font-bold text-white text-xl md:text-3xl text-center bg-red-500 p-2 md:w-72 rounded-xl md:translate-y-7 md:translate-x-[170px]">40KL Fuel Tank</p>
//                         <img src="/40kl_fueltank.jpg" alt="40kl Fuel Tank" className="h-full rounded-xl" loading="lazy" onClick={() => openModal("/40kl_fueltank.jpg")} />
//                     </div>
//                 </div>

//             </section>

//             {/* Modal Picture 1  */}
//             {isOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//                     <div className="relative">
//                         <button
//                             onClick={closeModal}
//                             className="absolute top-2 right-2 text-white text-2xl font-bold -translate-y-12 translate-x-1">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 ">
//                                 <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                         <img
//                             src={selectedImage}
//                             alt="Full Size"
//                             className="max-w-full max-h-[65vh] rounded shadow-lg"
//                         />
//                     </div>
//                 </div>
//             )}
//             {/* End of Modal Picture 1 */}

//             <Footer />
//         </>
//     )
// }

// export default Hauling









// import React, { useState } from "react";
// import { X } from "lucide-react";
// import Footer from '../footer/Footer';

// export default function HaulingPage() {
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

//     return (
//         <div className="min-h-screen bg-gray-50 text-gray-900">
//             {/* Hero Section */}
//             <section className="relative min-h-[85vh] flex items-center overflow-hidden">
//                 {/* Background Image with Overlay */}
//                 <div className="absolute inset-0 z-0">
//                     <img
//                         src="/fuel-truck bg.jpg"
//                         alt="Fuel Truck Background"
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         {/* Text Content */}
//                         <div className="space-y-8 text-white">
//                             <div className="space-y-4">
//                                 <p className="text-sm font-medium tracking-wider text-gray-300 uppercase">
//                                     Professional Logistics
//                                 </p>
//                                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
//                                     Fuel Hauling Services
//                                 </h1>
//                             </div>

//                             <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
//                                 Delivering petroleum products safely, efficiently, and on time
//                                 wherever you need it around Luzon. With well-maintained tankers
//                                 and experienced drivers, we ensure reliable delivery every time.
//                             </p>

//                             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                                 <a
//                                     href="/ContactUs"
//                                     className="bg-red-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition"
//                                 >
//                                     Contact Us
//                                 </a>
//                                 <button className="border border-white/70 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-white/10 transition">
//                                     Learn More
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Map Visual */}
//                         <div className="hidden lg:flex justify-center items-center">
//                             <div className="relative">
//                                 <div className="absolute inset-0 bg-red-400/10 blur-3xl rounded-full" />
//                                 <img
//                                     src="/map_of_luzon.png"
//                                     alt="Service Coverage - Luzon"
//                                     className="relative h-[500px] w-auto object-contain drop-shadow-2xl"
//                                     loading="lazy"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Fleet Section */}
//             <section className="py-20 lg:py-32 bg-gray-100">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
//                     <div className="text-center mb-16 space-y-4">
//                         <p className="text-sm font-medium tracking-wider text-gray-500 uppercase">
//                             Our Fleet
//                         </p>
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
//                             Professional Grade Equipment
//                         </h2>
//                         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                             State-of-the-art fuel tankers designed for safety and efficiency
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//                         {/* 20KL Tank */}
//                         <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
//                             <div className="aspect-[4/3] overflow-hidden bg-gray-200">
//                                 <img
//                                     src="/20kl_fueltank.jpg"
//                                     alt="20KL Fuel Tank"
//                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
//                                     loading="lazy"
//                                     onClick={() => openModal("/20kl_fueltank.jpg")}
//                                 />
//                             </div>
//                             <div className="p-6 space-y-2">
//                                 <h3 className="text-2xl font-bold text-gray-800">
//                                     20KL Fuel Tank
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     Ideal for medium-scale deliveries with enhanced maneuverability
//                                 </p>
//                             </div>
//                         </div>

//                         {/* 40KL Tank */}
//                         <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
//                             <div className="aspect-[4/3] overflow-hidden bg-gray-200">
//                                 <img
//                                     src="/40kl_fueltank.jpg"
//                                     alt="40KL Fuel Tank"
//                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
//                                     loading="lazy"
//                                     onClick={() => openModal("/40kl_fueltank.jpg")}
//                                 />
//                             </div>
//                             <div className="p-6 space-y-2">
//                                 <h3 className="text-2xl font-bold text-gray-800">
//                                     40KL Fuel Tank
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     High-capacity solution for large-scale bulk fuel deliveries
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Trust Section */}
//             <section className="py-20 lg:py-32 bg-white">
//                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
//                     <div className="grid lg:grid-cols-3 gap-12 text-center lg:text-left">
//                         <div className="space-y-4">
//                             <div className="text-5xl font-bold text-red-600">24/7</div>
//                             <h3 className="text-xl font-semibold text-gray-900">
//                                 Available Service
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 Round-the-clock operations to meet your fuel delivery needs
//                                 anytime
//                             </p>
//                         </div>

//                         <div className="space-y-4">
//                             <div className="text-5xl font-bold text-red-600">100%</div>
//                             <h3 className="text-xl font-semibold text-gray-900">
//                                 Safety Compliant
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 All vehicles meet strict safety standards and regulations
//                             </p>
//                         </div>

//                         <div className="space-y-4">
//                             <div className="text-5xl font-bold text-red-600">10+</div>
//                             <h3 className="text-xl font-semibold text-gray-900">
//                                 Years Experience
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 Trusted expertise in petroleum logistics across Luzon
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Modal */}
//             {isOpen && selectedImage && (
//                 <div
//                     className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
//                     onClick={closeModal}
//                 >
//                     <div className="relative max-w-7xl w-full">
//                         <button
//                             onClick={closeModal}
//                             className="absolute -top-12 right-0 text-white hover:text-white/70 transition-colors"
//                             aria-label="Close modal"
//                         >
//                             <X className="w-8 h-8" />
//                         </button>
//                         <img
//                             src={selectedImage || "/placeholder.svg"}
//                             alt="Full Size View"
//                             className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
//                             onClick={(e) => e.stopPropagation()}
//                         />
//                     </div>
//                 </div>
//             )}
//             <Footer />
//         </div>
//     );
// }








import React, { useState } from "react";
import { X } from "lucide-react";
import Footer from '../footer/Footer';

export default function HaulingPage() {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
        setSelectedImage(null);
    };

    const openLearnMore = () => setIsLearnMoreOpen(true);
    const closeLearnMore = () => setIsLearnMoreOpen(false);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/fuel-truck bg.jpg"
                        alt="Fuel Truck Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 text-white">
                            <div className="space-y-4">
                                <p className="text-sm font-medium tracking-wider text-gray-300 uppercase">
                                    Professional Logistics
                                </p>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                                    Fuel Hauling Services
                                </h1>
                            </div>

                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                                Delivering petroleum products safely, efficiently, and on time
                                wherever you need it around Luzon. With well-maintained tankers
                                and experienced drivers, we ensure reliable delivery every time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="/ContactUs"
                                    className="bg-red-600 text-white text-center px-8 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition"
                                >
                                    Contact Us
                                </a>
                                <button
                                    onClick={openLearnMore}
                                    className="border border-white/70 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-white/10 transition"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>

                        <div className="hidden lg:flex justify-center items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-400/10 blur-3xl rounded-full" />
                                <img
                                    src="/map_of_luzon.png"
                                    alt="Service Coverage - Luzon"
                                    className="relative h-[500px] w-auto object-contain drop-shadow-2xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Section */}
            <section className="py-20 lg:py-32 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <p className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                            Our Fleet
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Professional Grade Equipment
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            State-of-the-art fuel tankers designed for safety and efficiency
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                                <img
                                    src="/20kl_fueltank.jpg"
                                    alt="20KL Fuel Tank"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                                    loading="lazy"
                                    onClick={() => openImageModal("/20kl_fueltank.jpg")}
                                />
                            </div>
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    20KL Fuel Tank
                                </h3>
                                <p className="text-gray-600">
                                    Ideal for medium-scale deliveries with enhanced maneuverability
                                </p>
                            </div>
                        </div>

                        <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                                <img
                                    src="/40kl_fueltank.jpg"
                                    alt="40KL Fuel Tank"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                                    loading="lazy"
                                    onClick={() => openImageModal("/40kl_fueltank.jpg")}
                                />
                            </div>
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    40KL Fuel Tank
                                </h3>
                                <p className="text-gray-600">
                                    High-capacity solution for large-scale bulk fuel deliveries
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 text-center lg:text-left">
                        <div className="space-y-4">
                            <div className="text-5xl font-bold text-red-600">24/7</div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Available Service
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Round-the-clock operations to meet your fuel delivery needs
                                anytime
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="text-5xl font-bold text-red-600">100%</div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Safety Compliant
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                All vehicles meet strict safety standards and regulations
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="text-5xl font-bold text-red-600">21+</div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Years Experience
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Trusted expertise in petroleum logistics across Luzon
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {isImageModalOpen && selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4 animate-fadeIn"
                    onClick={closeImageModal}
                >
                    <div
                        className="relative max-w-7xl w-full transform transition-all duration-500 scale-100 animate-zoomIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeImageModal}
                            className="absolute -top-12 right-0 text-white hover:text-white/70 transition-colors z-[10000]"
                            aria-label="Close image modal"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <img
                            src={selectedImage || "/placeholder.svg"}
                            alt="Full Size View"
                            className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}


            {/* Learn More Modal */}
            {isLearnMoreOpen && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fadeIn"
                    onClick={closeLearnMore}
                >
                    <div
                        className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-8 text-gray-800 animate-slideUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeLearnMore}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-red-600">
                            About Our Hauling Services
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            RBP Petrostar Fuels provides safe, efficient, and reliable fuel
                            hauling services across Luzon. Our fleet of 20KL and 40KL tankers
                            are maintained to the highest standards, ensuring every delivery
                            meets safety and quality benchmarks.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Whether you require bulk fuel transport, customized logistics, or
                            scheduled deliveries — we have the right solution for your
                            business needs.
                        </p>

                        <div className="text-right mt-6">
                            <button
                                onClick={closeLearnMore}
                                className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}
