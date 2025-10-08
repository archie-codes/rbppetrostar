import React, { useState } from "react";
import Footer from "../footer/Footer";

const AllNews = () => {
    return (
        <>
            <section className="container pt-5 md:pt-32 mb-36 isolate overflow-hidden lg:overflow-visible">
                <div className="mx-auto flex flex-col items-start justify-start text-left mb-5 px-5 sm:py-5">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-once="true"
                        className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
                        ⸻ LATEST NEWS ABOUT FUEL
                    </h1>
                </div>

                <div

                    className="mb-10 h-full w-full flex">
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">

                        {/* News Card 3 */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="https://business.inquirer.net/534445/p0-70-liter-gas-price-rollback-set-this-week" target="_blank" rel="noopener noreferrer">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/news_section/picture_3.jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="https://business.inquirer.net/534445/p0-70-liter-gas-price-rollback-set-this-week" target="_blank" rel="noopener noreferrer">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                Gasoline prices seen rising for 6th week, diesel for 5th on September 23, 2025
                                            </h5>
                                            <p>10:12 AM | September 19, 2025</p>
                                        </a>

                                        <a href="https://business.inquirer.net/547958/gasoline-prices-seen-rising-for-6th-week-diesel-for-5th-on-sept-23" target="_blank" rel="noopener noreferrer" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* News Card 2 */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="https://business.inquirer.net/534445/p0-70-liter-gas-price-rollback-set-this-week" target="_blank" rel="noopener noreferrer">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/news_section/picture_1.jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="https://business.inquirer.net/534445/p0-70-liter-gas-price-rollback-set-this-week" target="_blank" rel="noopener noreferrer">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                P0.70/liter gas price rollback set this week
                                            </h5>
                                            <p>10:15 AM | July 07, 2025</p>
                                        </a>

                                        <a href="https://business.inquirer.net/534445/p0-70-liter-gas-price-rollback-set-this-week" target="_blank" rel="noopener noreferrer" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* News Card 1 */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="https://www.sciencedaily.com/releases/2025/07/250704032934.htm" target="_blank" rel="noopener noreferrer">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/news_section/picture_2.jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="https://www.sciencedaily.com/releases/2025/07/250704032934.htm" target="_blank" rel="noopener noreferrer">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                A shocking new way to make ammonia, no fossil fuels needed
                                            </h5>
                                            <p>July 5, 2025</p>
                                        </a>

                                        <a href="https://www.sciencedaily.com/releases/2025/07/250704032934.htm" target="_blank" rel="noopener noreferrer" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <hr />

                {/* LATEST RBP EVENTS */}
                <div className="mx-auto flex flex-col items-start justify-start text-left mb-5 px-5 sm:py-5">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-once="true"
                        className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
                        ⸻ LATEST RBP NEWS
                    </h1>
                </div>

                <div className="mb-10 h-full w-full flex">
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
                        
                        {/* Disaster Relief Operations Payangan */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="/PayangaReliefOperation">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/relief_operations/payangan/payangan_1.jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="/PayangaReliefOperation">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                Payangan Relief Operations
                                            </h5>
                                            <p>July 26, 2025</p>
                                        </a>

                                        <a href="/PayangaReliefOperation" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Disaster Relief Operations Tubo-Tubo */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="/TuboTuboReliefOperations">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/relief_operations/tubo-tubo/tubo-tubo_1.jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="/TuboTuboReliefOperations">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                Tubo-Tubo Relief Operations
                                            </h5>
                                            <p>July 26, 2025</p>
                                        </a>

                                        <a href="/TuboTuboReliefOperations" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Disaster Relief Operations Bagong Daan */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="/DaangBatoReliefOperation">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/relief_operations/daang-bato/daang-bato_1.jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="/DaangBatoReliefOperation">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                Daang-Bato Relief Operations
                                            </h5>
                                            <p>July 26, 2025</p>
                                        </a>

                                        <a href="/DaangBatoReliefOperation" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Disaster Relief Operations Bagong Daan */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="/StoTomasReliefOperation">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/relief_operations/sto_tomas/sto-tomas_1.jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="/StoTomasReliefOperation">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                Sto Tomas Relief Operations
                                            </h5>
                                            <p>July 26, 2025</p>
                                        </a>

                                        <a href="/StoTomasReliefOperation" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Arenas Station Opening */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="/ArenasNews">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/arenas_opening/arenas_opening (5).JPG"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="/ArenasNews">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                Arenas Station Opening
                                            </h5>
                                            <p>Febrauary 18, 2025</p>
                                        </a>

                                        <a href="/ArenasNews" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* RBP Outreach Program */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="/OutreachProgram2">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/outreach_program_2/op (1).JPG"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="/OutreachProgram2">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                RBP Outreach Program
                                            </h5>
                                            <p>December 17, 2024</p>
                                        </a>

                                        <a href="/OutreachProgram2" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* RBP Outreach Program */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="/OutreachProgram">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/outreach_program/op (15).jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="/OutreachProgram">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                RBP Outreach Program
                                            </h5>
                                            <p>December 07 - 08, 2024</p>
                                        </a>

                                        <a href="/OutreachProgram" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RBP Team Building */}
                        <div
                            className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1">
                            <span className="absolute top-2 left-2 z-0 h-14 w-14 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[13]">
                            </span>
                            <span className="absolute grid top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <div className="relative p-2 flex justify-center">
                                    <a href="/TeamBuilding">
                                        <img classNames="rounded-md shadow-lg"
                                            src="/team_building/team_building (14).jpg"
                                            loading="lazy" />
                                    </a>
                                </div>

                                <div className="relative px-4 pb-3">
                                    <div className="leading-7 transition-all group-hover:text-white/90 ">
                                        <a href="/TeamBuilding">
                                            <h5
                                                className="text-xl font-semibold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-white">
                                                RBP Team Building
                                            </h5>
                                            <p>April 19 and 20, 2024</p>
                                        </a>

                                        <a href="/TeamBuilding" className="antialiased text-gray-600 text-sm break-all transition-all duration-300 group-hover:text-white">
                                            View News
                                            {/* &rarr; */}
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AllNews;