import React from "react";
import Footer from "../footer/Footer";

const ValueCardRegsitration = () => {
  return (
    <>
      <section className="container pt-5 md:pt-32 mb-36 px-4 sm:px-0">
        <div className="mx-auto flex flex-col items-start justify-start text-left mb-5 px-5  sm:py-5">
          <h1
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-once="true"
            className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
            ⸻ VALUE CARD
          </h1>
        </div>

        <div className="mx-auto py-0 sm:pb-5 ">
          <div className="relative isolate overflow-hidden px-6 pt-16 shadow-md sm:rounded-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-5 lg:pt-0 bg-gray-100">
            <div className="mx-auto max-w-2xl text-left lg:mx-0 lg:flex-auto pb-5 lg:py-5 lg:text-left">
              <p className="font-sans text-xl font-normal text-gray-700">
                Get <span className="font-bold">RBP VALUE CARD,</span> earn
                <span className="font-bold"> POINTS,</span>  and exciting
                <span className="font-bold"> PRIZES</span>  awaits you!
              </p>
              <br />
              <p className="font-semibold pb-2">HOW TO GET YOUR RBP VALUE CARD:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center justify-center gap-4">

                <div className="w-80 bg-white shadow-md rounded-xl p-5">
                  <p className="font-semibold pb-2">GO TO NEAREST RBP STATION</p>
                  <ul className="font-sans text-m font-normal list-decimal uppercase pl-5 text-gray-700">
                    <li>Go to cashier of the station.</li>
                    <li>Fill out the registration form.</li>
                    <li>Pay 50 pesos for the card.</li>
                    <li>1 Valid ID only.</li>
                    <li>Strictly 1 card 1 vehicle only.</li>
                  </ul>
                </div>

                <div className="w-80 bg-white shadow-md rounded-xl p-5">
                  <p className="font-semibold">OR YOU CAN REGISTER VIA ONLINE</p>
                  <p> JUST CLICK THE BUTTON BELOW</p>
                  <div className="text-center mt-8">
                    <a href="/VCardFormRegistration"  className="px-[100px] rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"> REGISTER </a>
                  </div>
                </div>

              </div>

              <br />
              <p className="uppercase font-semibold "> Always present your card when you buy fuel.</p>
              <br />
              <p className="font-sans text-m font-semibold list-disc text-gray-700">EARNING POINTS:</p>
              <ul className="font-sans text-m font-normal list-disc pl-5 text-gray-700">
                <li >1 LITER OF PREMIUM = 2 POINTS</li>
                <li>1 LITER OF DIESEL AND UNLEADED = 1 POINT</li>
              </ul>
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
                className="mt-32 rounded-xl shadow-md -rotate-6 hover:rotate-0 duration-500 -translate-y-[400px] translate-x-[270px] hover:-translate-y-[400px] h-auto w-80 object-cover hover:scale-125 transform origin-bottom"
              />
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <input type="checkbox" id="accordion1" class="peer hidden" />
          <label for="accordion1" class="flex items-center justify-between p-4 bg-gray-100 text-black/70 cursor-pointer hover:bg-gray-200 transition-colors">
            <span class="text-lg font-sans font-semibold">⸻ LIST OF PRIZES</span>
            <svg class="w-6 h-6 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </label>
          <div class="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-[7400px] md:peer-checked:max-h-[2700px]">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5">

              {/* Soda */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/soda.png"
                    alt="soda" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72 ">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">1.5 LITER SODA</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">130 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* TV */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/tv.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">24 INCHES TV</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">16,000 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* REF */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/ref.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">2-DOOR REFRIGERATOR</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">30,000 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Washing Machine */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/washing.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">WASHING MACHINE</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">18,600 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Rice */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/rice.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">5kg RICE | 2kg RICE</p>
                    <div className="flex items-center">
                      <p className="text-m font-semibold text-black/70 cursor-auto my-3">5kg 480 Points | 2kg 170 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Kettle */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/kettle.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">ELECTRIC KETTLE</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">1,200 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Rice Cooker */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/ricecooker.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">RICE COOKER</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">1,750 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Clothes Iron */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/clothesiron.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">FLAT IRON</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">1,250 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Stand Fan */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/standfan.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">STAND FAN</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">2,400 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Umbrella */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/umbrella.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">UMBRELLA</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">720 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Stove */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/stove.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">2 BURNER STOVE</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">2,750 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* T-Shirt */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/tshirt.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">RBP Shirt</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">560 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 1 Liter Voucher */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/1litervoucher.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">1 LITER VOUCHER</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">120 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 5 Liters Voucher */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/5litersvoucher.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">5 LITERS VOUCHER</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">600 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* 10 Liters Voucher */}
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a>
                  <img src="/prizes/10litersvoucher.png"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
                    <p className="text-lg font-bold text-black/70 truncate block capitalize">10 LITERS VOUCHER</p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black/70 cursor-auto my-3">1,200 Points</p>
                      <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>


      </section>
      <Footer />
    </>
  )
}

export default ValueCardRegsitration