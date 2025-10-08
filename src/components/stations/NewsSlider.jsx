import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsSlider.css";



function NewsSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="w-[90%] m-auto">
                <h2
                    data-aos="fade-right"
                    data-aos-duration="400"
                    data-aos-once="true"
                    className="pt-0 font-sans font-semibold text-red-600 text-xl md:text-2xl justify-center text-center md:justify-center md:text-center mb-10 mt-10">⸻ FIND THE NEAREST STATION</h2>
                <Slider {...settings} className="mb-10">

                    {/* Arenas */}
                    {/* <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/stations/arenas/arenas_main.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">ARENAS STATION</p>
                            <p className="mb-10">Arayat, Pampanga</p>

                            <a href="/Arenas_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div> */}
                        
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/stations/calulut/calulut_station.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">CALULUT STATION</p>
                            <p className="mb-10">San Fernando, Pampanga</p>
                            <a href="/Calulut_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/thumbnail.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">CABANATUAN STATION</p>
                            <p className="mb-10">Cabanatuan, Nueva Ecija</p>
                            <a href="/Cabanatuan_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/thumbnail.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">DELA PAZ STATION</p>
                            <p className="mb-10">San Fernando, Pampanga</p>
                            <a href="/Delapaz_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/thumbnail.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">SINDALAN STATION</p>
                            <p className="mb-10">San Fernando, Pampanga</p>
                            <a href="/Sindalan_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/stations/panipuan/panipuan_main.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">PANIPUAN STATION</p>
                            <p className="mb-10">Mexico, Pampanga</p>
                            <a href="/Panipuan_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/stations/dinalupihan/dinalupihan_main.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">DINALUPIHAN STATION</p>
                            <p className="mb-10">Dinalupihan, Bataan</p>
                            <a href="/Dinalupihan_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/stations/orani/orani_main.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">ORANI STATION</p>
                            <p className="mb-10">Orani, Bataan</p>
                            <a href="/Orani_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/stations/sta rosa/sta rosa_main.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">STA ROSA STATION</p>
                            <p className="mb-10">Sta Rosa, Nueva Ecija</p>
                            <a href="/Sta_Rosa_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/stations/sta rosa/sta rosa_main.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">SAN MATIAS STATION</p>
                            <p className="mb-10">Guagua, Pampanga</p>
                            <a href="/SanMatias_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/stations/talavera/talavera_main.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">TALAVERA STATION</p>
                            <p className="mb-10">Talavera, Nueva Ecija</p>
                            <a href="/Talavera_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/thumbnail.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">PULUNG BULU STATION</p>
                            <p className="mb-10">Angeles City, Pampanga</p>
                            <a href="/Pulungbulu_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                    <div className="h-[400px] text-black rounded-xl bg-slate-50">
                        <div className="rounded-t-xl flex justify-center items-center bg-slate-50 h-auto overflow-hidden">
                            <img src="/thumbnail.jpg" alt="" className="w-full h-52 relative z-0 transition-all duration-300 hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-0 p-4 text-black/80">
                            <p className="text-xl font-semibold">PANDAN STATION</p>
                            <p className="mb-10">Angeles City, Pampanga</p>
                            <a href="/Pandan_Station" className="rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                VIEW STATION
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </>

    );
}

export default NewsSlider;