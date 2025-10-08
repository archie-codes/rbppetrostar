import React from 'react'
import Footer from '../footer/Footer'

const Brochure = () => {
    return (
        <>
            <section className="pt-0 pb-10 md:pt-10 isolate overflow-hidden lg:overflow-visible">
                <div class="text-center animate-fadeIn pb-10 pt-20">
                    {/* <img src="/no_vacancy.jpg" alt="No Vacancy" class="mx-auto w-80 animate-[float_3s_infinite] shadow-2xl rounded-lg" /> */}
                    <h1 className="text-6xl font-extrabold text-red-500 mt-6">Brochure</h1>
                    <p className="text-xl text-gray-700 mt-2">Download our brochure today to explore what sets us apart.</p>
                    <a href="/brochure.pdf" download className="mt-6 inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-red-700">Download</a>
                </div>
                <div className="flex flex-col justify-center items-center overflow-hidden">
                        <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer">
                            <img src="/brochure.jpg" alt="Brochure" className="bro w-[1000px] h-96 object-cover rounded-tr-xl rounded-tl-xl object-top shadow-xl" loading="lazy" />                                                
                        </a>  
                        <hr width="60%" color="red"/>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Brochure