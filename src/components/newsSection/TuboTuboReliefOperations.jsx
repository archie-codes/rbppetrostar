// import React, { useState, useEffect } from "react";
// import Footer from "../footer/Footer";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";

// const images = [
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (1).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (2).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (3).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (4).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (5).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (6).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (7).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (8).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (9).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (10).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (11).jpg",
//     "/relief_operations/tubo-tubo/tubo-tubo_1 (12).jpg",
// ];

// const TuboTuboReliefOperations = () => {

//     const [isOpen, setIsOpen] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const showPrev = () =>
//         setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
//     const showNext = () =>
//         setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

//     // Keyboard navigation
//     useEffect(() => {
//         if (!isOpen) return;
//         const handleKey = (e) => {
//             if (e.key === "Escape") setIsOpen(false);
//             if (e.key === "ArrowLeft") showPrev();
//             if (e.key === "ArrowRight") showNext();
//         };
//         window.addEventListener("keydown", handleKey);
//         return () => window.removeEventListener("keydown", handleKey);
//     }, [isOpen]);

//     return (
//         <>
//             <section className="container pt-5 md:pt-32 mb-10 isolate overflow-hidden lg:overflow-visible">
//                 <div className="mx-auto space-y-6 flex flex-col items-start justify-start text-left mb-5 px-5 sm:py-5">
//                     <h1
//                         data-aos="fade-right"
//                         data-aos-duration="300"
//                         data-aos-once="true"
//                         className='font-sans font-semibold text-red-600 text-xl md:text-xl'>
//                         ⸻ RBP RELIEF OPERATIONS
//                     </h1>
//                     <div
//                         data-aos="fade-up"
//                         data-aos-duration="300"
//                         data-aos-once="true"
//                         className="shadow-lg block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-slate-50">
//                         <div className="overflow-hidden object-cover w-full h-64 rounded-lg sm:h-96 lg:col-span-7">
//                             <img src="/relief_operations/tubo-tubo/tubo-tubo_1.jpg" alt="" className="z-0 transition-all duration-300 hover:scale-110" loading="lazy" />
//                         </div>
//                         <div className="p-6 space-y-2 lg:col-span-5">
//                             <h3 className="text-2xl text-gray-800 font-semibold sm:text-4xl mb-3">RBP Petrostar Relief Operations</h3>
//                             <span className="text-xl font-semibold text-gray-800 inline-flex">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2 mt-1 text-gray-600">
//                                     <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
//                                 </svg>
//                                 Brgy. Tubo-Tubo
//                             </span>
//                             <br />
//                             <span className="text-gray-800 pl-[30px]">Dinalupihan, Bataan </span>
//                             <br />
//                             <span className="text-gray-800 inline-flex">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2 mt-1 text-gray-600">
//                                     <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
//                                     <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
//                                 </svg>
//                                 July 26, 2025
//                             </span>
//                             <br />
//                         </div>
//                     </div>

//                     {/* Gallery */}
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                         {images.map((src, idx) => (
//                             <div
//                                 key={idx}
//                                 className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
//                                 onClick={() => {
//                                     setCurrentIndex(idx);
//                                     setIsOpen(true);
//                                 }}
//                             >
//                                 <img
//                                     src={src}
//                                     alt={`Gallery Image ${idx + 1}`}
//                                     className="h-auto w-full object-cover rounded-xl transform transition-transform duration-300 hover:scale-110"
//                                     loading="lazy"
//                                 />
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//                 <a href="/AllNews" className="flex items-end justify-end text-lg font-semibold text-red-500 gap-1 mt-5 px-5 sm:px-5">
//                     MORE NEWS<span aria-hidden="true">→</span>
//                 </a>
//             </section>

//             {/* Custom Lightbox */}
//             {isOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]">
//                     {/* Close button */}
//                     <button
//                         className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2"
//                         onClick={() => setIsOpen(false)}
//                     >
//                         <X size={24} />
//                     </button>

//                     {/* Prev button */}
//                     <button
//                         className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3"
//                         onClick={showPrev}
//                     >
//                         <ChevronLeft size={28} />
//                     </button>

//                     {/* Image */}
//                     <img
//                         src={images[currentIndex]}
//                         alt={`Gallery Image ${currentIndex + 1}`}
//                         className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
//                         loading="lazy"
//                     />

//                     {/* Next button */}
//                     <button
//                         className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3"
//                         onClick={showNext}
//                     >
//                         <ChevronRight size={28} />
//                     </button>
//                 </div>
//             )}

//             {/* For Footer */}
//             <Footer />
//         </>
//     )
// }

// export default TuboTuboReliefOperations


import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Expand,
  HeartHandshake 
} from "lucide-react";

// Image Array
const images = [
    "/relief_operations/tubo-tubo/tubo-tubo_1 (1).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (2).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (3).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (4).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (5).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (6).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (7).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (8).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (9).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (10).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (11).jpg",
    "/relief_operations/tubo-tubo/tubo-tubo_1 (12).jpg",
];

const TuboTuboReliefOperations = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Lightbox Controls
    const showPrev = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };
    const showNext = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    // Keyboard support & Scroll Lock
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = '';
            return;
        }
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => {
            if (e.key === "Escape") setIsOpen(false);
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <main className="min-h-screen bg-neutral-50 font-sans selection:bg-red-100 selection:text-red-900">
            
            {/* --- SECTION 1: IMMERSIVE HERO --- */}
            <section className="relative w-full pt-32 pb-20 px-6 lg:px-12 lg:pt-40 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Typography Side */}
                    <div className="lg:col-span-6 z-10" data-aos="fade-right">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="h-px w-12 bg-red-600"></span>
                            <span className="text-red-600 font-bold tracking-widest text-xs uppercase flex items-center gap-2">
                                <HeartHandshake size={14}/> Outreach Program
                            </span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            RBP Petrostar <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                                Relief Operations.
                            </span>
                        </h1>
                        
                        <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
                            Bringing aid and hope to the residents of Brgy. Tubo-Tubo. A commitment to service and community support.
                        </p>

                        {/* Glassmorphic Details Card */}
                        <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-5 inline-flex flex-col sm:flex-row gap-6 sm:items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-semibold uppercase">Location</p>
                                    <p className="text-sm font-bold text-gray-800">Brgy. Tubo-Tubo, Bataan</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-semibold uppercase">Date</p>
                                    <p className="text-sm font-bold text-gray-800">July 26, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Visual Side (Bento Shape) */}
                    <div className="lg:col-span-6 relative" data-aos="fade-left" data-aos-delay="100">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl -rotate-2 transition-transform hover:rotate-0 duration-700 group">
                            {/* Using the hero image from your original code */}
                            <img 
                                src="/relief_operations/tubo-tubo/tubo-tubo_1.jpg" 
                                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
                                alt="Main Event" 
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold text-xl">Dinalupihan Mission</p>
                                <p className="text-white/80 text-sm mt-1">Brgy. Tubo-Tubo</p>
                            </div>
                        </div>
                        {/* Decorative background blob */}
                        <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: MASONRY GALLERY --- */}
            <section className="px-4 pb-24 max-w-[1600px] mx-auto">
                <div className="flex justify-between items-end mb-10 px-2 border-b border-gray-200 pb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Community Highlights</h2>
                    <span className="text-sm font-medium text-gray-500 hidden sm:block">
                        {images.length} Photos captured
                    </span>
                </div>

                {/* CSS Columns Masonry Layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {images.map((src, idx) => (
                        <div 
                            key={idx} 
                            className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-zoom-in shadow-sm hover:shadow-xl transition-all duration-300"
                            onClick={() => {
                                setCurrentIndex(idx);
                                setIsOpen(true);
                            }}
                        >
                            <img 
                                src={src} 
                                alt={`Relief Operation ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur text-gray-900 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Expand size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-20 flex justify-center">
                    <a href="/AllNews" className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <span>Read More News</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </section>

            {/* --- CUSTOM LIGHTBOX --- */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/5 backdrop-blur-xl"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Dark overlay specifically for contrast */}
                    <div className="absolute inset-0 bg-black/90"></div>

                    {/* Controls */}
                    <button 
                        className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    <button 
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 text-white hover:bg-white/10 rounded-full transition-all hidden sm:block group"
                        onClick={showPrev}
                    >
                        <ChevronLeft size={40} className="group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button 
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 text-white hover:bg-white/10 rounded-full transition-all hidden sm:block group"
                        onClick={showNext}
                    >
                        <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Image Container */}
                    <div className="relative z-40 max-w-7xl w-full h-full flex flex-col items-center justify-center p-4">
                        <img 
                            src={images[currentIndex]} 
                            className="max-h-[85vh] max-w-full rounded shadow-2xl object-contain select-none animate-in fade-in zoom-in-95 duration-300"
                            onClick={(e) => e.stopPropagation()} 
                            alt="Full View"
                        />
                        <div className="mt-4 flex flex-col items-center text-white/80">
                            <p className="font-semibold text-lg">Tubo-Tubo Relief Ops</p>
                            <p className="text-white/50 font-mono text-sm tracking-widest mt-1">
                                {currentIndex + 1} <span className="mx-2 text-white/20">/</span> {images.length}
                            </p>
                        </div>
                    </div>

                    {/* Mobile Bottom Navigation */}
                    <div 
                        className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 sm:hidden z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                         <button onClick={showPrev} className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white active:scale-95"><ChevronLeft size={24} /></button>
                         <button onClick={showNext} className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white active:scale-95"><ChevronRight size={24} /></button>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}

export default TuboTuboReliefOperations;