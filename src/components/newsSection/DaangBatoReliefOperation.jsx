import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
    "/relief_operations/daang-bato/daang-bato_1 (1).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (2).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (3).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (4).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (5).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (6).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (7).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (8).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (9).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (10).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (11).jpg",
    "/relief_operations/daang-bato/daang-bato_1 (12).jpg",
];

const DaangBatoReliefOperation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const showPrev = () =>
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    const showNext = () =>
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e) => {
            if (e.key === "Escape") setIsOpen(false);
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen]);

    return (
        <>
            <section className="container pt-5 md:pt-32 mb-10 isolate overflow-hidden lg:overflow-visible">
                <div className="mx-auto space-y-6 flex flex-col items-start justify-start text-left mb-5 px-5 sm:py-5">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-once="true"
                        className='font-sans font-semibold text-red-600 text-xl md:text-xl'>
                        ⸻ RBP RELIEF OPERATIONS
                    </h1>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="300"
                        data-aos-once="true"
                        className="shadow-lg block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-slate-50">
                        <div className="overflow-hidden object-cover w-full h-64 rounded-lg sm:h-96 lg:col-span-7">
                            <img src="/relief_operations/daang-bato/daang-bato_1.jpg" alt="" className="z-0 transition-all duration-300 hover:scale-110" loading="lazy" />
                        </div>
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl text-gray-800 font-semibold sm:text-4xl mb-3">RBP Petrostar Relief Operations</h3>
                            <span className="text-xl font-semibold text-gray-800 inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2 mt-1 text-gray-600">
                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                                Brgy. Daang Bato
                            </span>
                            <br />
                            <span className="text-gray-800 pl-[30px]">Daang Bato, Bataan </span>
                            <br />
                            <span className="text-gray-800 inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2 mt-1 text-gray-600">
                                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                </svg>
                                July 26, 2025
                            </span>
                            <br />
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {images.map((src, idx) => (
                            <div
                                key={idx}
                                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                                onClick={() => {
                                    setCurrentIndex(idx);
                                    setIsOpen(true);
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`Gallery Image ${idx + 1}`}
                                    className="h-auto w-full object-cover rounded-xl transform transition-transform duration-300 hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                </div>
                <a href="/AllNews" className="flex items-end justify-end text-lg font-semibold text-red-500 gap-1 mt-5 px-5 sm:px-5">
                    MORE NEWS<span aria-hidden="true">→</span>
                </a>
            </section>

            {/* Custom Lightbox */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]">
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={24} />
                    </button>

                    {/* Prev button */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3"
                        onClick={showPrev}
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Image */}
                    <img
                        src={images[currentIndex]}
                        alt={`Gallery Image ${currentIndex + 1}`}
                        className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
                        loading="lazy"
                    />

                    {/* Next button */}
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3"
                        onClick={showNext}
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            )}

            {/* For Footer */}
            <Footer />
        </>
    )
}

export default DaangBatoReliefOperation