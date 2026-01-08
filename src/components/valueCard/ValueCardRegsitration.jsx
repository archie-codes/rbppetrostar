// import React from "react";
// import Footer from "../footer/Footer";

// const ValueCardRegsitration = () => {
//   return (
//     <>
//       <section className="container pt-5 md:pt-32 mb-36 px-4 sm:px-0">
//         <div className="mx-auto flex flex-col items-start justify-start text-left mb-5 px-5  sm:py-5">
//           <h1
//             data-aos="fade-right"
//             data-aos-duration="300"
//             data-aos-once="true"
//             className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
//             ⸻ VALUE CARD
//           </h1>
//         </div>

//         <div className="mx-auto py-0 sm:pb-5 ">
//           <div className="relative isolate overflow-hidden px-6 pt-16 shadow-md sm:rounded-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-5 lg:pt-0 bg-gray-100">
//             <div className="mx-auto max-w-2xl text-left lg:mx-0 lg:flex-auto pb-5 lg:py-5 lg:text-left">
//               <p className="font-sans text-xl font-normal text-gray-700">
//                 Get <span className="font-bold">RBP VALUE CARD,</span> earn
//                 <span className="font-bold"> POINTS,</span>  and exciting
//                 <span className="font-bold"> PRIZES</span>  awaits you!
//               </p>
//               <br />
//               <p className="font-semibold pb-2">HOW TO GET YOUR RBP VALUE CARD:</p>
//               <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center justify-center gap-4">

//                 <div className="w-80 bg-white shadow-md rounded-xl p-5">
//                   <p className="font-semibold pb-2">GO TO NEAREST RBP STATION</p>
//                   <ul className="font-sans text-m font-normal list-decimal uppercase pl-5 text-gray-700">
//                     <li>Go to cashier of the station.</li>
//                     <li>Fill out the registration form.</li>
//                     <li>Pay 50 pesos for the card.</li>
//                     <li>1 Valid ID only.</li>
//                     <li>Strictly 1 card 1 vehicle only.</li>
//                   </ul>
//                 </div>

//                 <div className="w-80 bg-white shadow-md rounded-xl p-5">
//                   <p className="font-semibold">OR YOU CAN REGISTER VIA ONLINE</p>
//                   <p> JUST CLICK THE BUTTON BELOW</p>
//                   <div className="text-center mt-8">
//                     <a href="/VCardFormRegistration"  className="px-[100px] rounded-md bg-white border border-red-500 px-2.5 py-1.5 font-semibold text-red-500 shadow-xs hover:bg-red-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"> REGISTER </a>
//                   </div>
//                 </div>

//               </div>

//               <br />
//               <p className="uppercase font-semibold "> Always present your card when you buy fuel.</p>
//               <br />
//               <p className="font-sans text-m font-semibold list-disc text-gray-700">EARNING POINTS:</p>
//               <ul className="font-sans text-m font-normal list-disc pl-5 text-gray-700">
//                 <li >1 LITER OF PREMIUM = 2 POINTS</li>
//                 <li>1 LITER OF DIESEL AND UNLEADED = 1 POINT</li>
//               </ul>
//             </div>
//             <div className="relative hidden lg:block h-96 sm:h-80 mt-0 lg:mt-8">
//               <img
//                 alt="App screenshot"
//                 src="/valuecard_2.png"
//                 width={1824}
//                 height={1080}
//                 className="mt-32 rounded-lg shadow-md rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-auto w-80 object-cover hover:scale-125 transform origin-bottom"
//               />
//               <img
//                 alt="App screenshot"
//                 src="/valuecard_1.png"
//                 width={1824}
//                 height={1080}
//                 className="mt-32 rounded-xl shadow-md -rotate-6 hover:rotate-0 duration-500 -translate-y-[400px] translate-x-[270px] hover:-translate-y-[400px] h-auto w-80 object-cover hover:scale-125 transform origin-bottom"
//               />
//             </div>
//           </div>
//         </div>

//         <div class="bg-white rounded-lg shadow-lg overflow-hidden">
//           <input type="checkbox" id="accordion1" class="peer hidden" />
//           <label for="accordion1" class="flex items-center justify-between p-4 bg-gray-100 text-black/70 cursor-pointer hover:bg-gray-200 transition-colors">
//             <span class="text-lg font-sans font-semibold">⸻ LIST OF PRIZES</span>
//             <svg class="w-6 h-6 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </label>
//           <div class="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-[7400px] md:peer-checked:max-h-[2700px]">
//             <div className="mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10 mb-5">

//               {/* Soda */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/soda.png"
//                     alt="soda" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72 ">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">1.5 LITER SODA</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">130 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* TV */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/tv.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">24 INCHES TV</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">16,000 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* REF */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/ref.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">2-DOOR REFRIGERATOR</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">30,000 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Washing Machine */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/washing.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">WASHING MACHINE</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">18,600 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Rice */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/rice.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">5kg RICE | 2kg RICE</p>
//                     <div className="flex items-center">
//                       <p className="text-m font-semibold text-black/70 cursor-auto my-3">5kg 480 Points | 2kg 170 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Kettle */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/kettle.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">ELECTRIC KETTLE</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">1,200 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Rice Cooker */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/ricecooker.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">RICE COOKER</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">1,750 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Clothes Iron */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/clothesiron.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">FLAT IRON</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">1,250 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Stand Fan */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/standfan.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">STAND FAN</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">2,400 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Umbrella */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/umbrella.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">UMBRELLA</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">720 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Stove */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/stove.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">2 BURNER STOVE</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">2,750 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* T-Shirt */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/tshirt.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">RBP Shirt</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">560 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* 1 Liter Voucher */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/1litervoucher.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">1 LITER VOUCHER</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">120 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* 5 Liters Voucher */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/5litersvoucher.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">5 LITERS VOUCHER</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">600 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* 10 Liters Voucher */}
//               <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                 <a>
//                   <img src="/prizes/10litersvoucher.png"
//                     alt="Product" className="h-80 w-72 object-cover rounded-t-xl bg-gray-200" />
//                   <div className="px-4 py-3 w-72">
//                     <span className="text-gray-400 mr-3 uppercase text-xs">PRIZE</span>
//                     <p className="text-lg font-bold text-black/70 truncate block capitalize">10 LITERS VOUCHER</p>
//                     <div className="flex items-center">
//                       <p className="text-lg font-semibold text-black/70 cursor-auto my-3">1,200 Points</p>
//                       <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                         <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                       </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//             </div>
//           </div>
//         </div>


//       </section>
//       <Footer />
//     </>
//   )
// }

// export default ValueCardRegsitration


import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import {
  CreditCard,
  MapPin,
  UserPlus,
  Banknote,
  CheckCircle,
  Gift,
  Zap,
  Droplet,
  ChevronDown,
  ChevronUp,
  X,
  User,
  Mail,
  Phone,
  Car
} from "lucide-react";
import Swal from 'sweetalert2';

const ValueCardRegistration = () => {
  const [isPrizesOpen, setIsPrizesOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // For web3forms
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Replace with your actual Access Key
    formData.append("access_key", "8b325528-e4ac-4782-857e-fcde03a668e8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // 1. Close the Modal immediately
        setIsModalOpen(false);

        // 2. Show the Success Alert
        Swal.fire({
          title: "Success!",
          text: "Value Card Registration successful!",
          icon: "success",
          confirmButtonColor: "#dc2626"
        });

        // 3. Reset the form inputs
        event.target.reset();
        
        // 4. FIX: Reset the button status back to normal
        setResult(""); 
        
      } else {
        console.log("Error", data);
        setResult(data.message);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error"
        });
      }
    } catch (error) {
      console.error("Submission Error", error);
      setResult("An error occurred");
    }
  };

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const prizes = [
    { name: "1.5 Liter Soda", points: "130 Points", img: "/prizes/soda.png" },
    { name: "24 Inches TV", points: "16,000 Points", img: "/prizes/tv.png" },
    { name: "2-Door Refrigerator", points: "30,000 Points", img: "/prizes/ref.png" },
    { name: "Washing Machine", points: "18,600 Points", img: "/prizes/washing.png" },
    { name: "5kg Rice | 2kg Rice", points: "480 | 170 Points", img: "/prizes/rice.png" },
    { name: "Electric Kettle", points: "1,200 Points", img: "/prizes/kettle.png" },
    { name: "Rice Cooker", points: "1,750 Points", img: "/prizes/ricecooker.png" },
    { name: "Flat Iron", points: "1,250 Points", img: "/prizes/clothesiron.png" },
    { name: "Stand Fan", points: "2,400 Points", img: "/prizes/standfan.png" },
    { name: "Umbrella", points: "720 Points", img: "/prizes/umbrella.png" },
    { name: "2 Burner Stove", points: "2,750 Points", img: "/prizes/stove.png" },
    { name: "RBP Shirt", points: "560 Points", img: "/prizes/tshirt.png" },
    { name: "1 Liter Voucher", points: "120 Points", img: "/prizes/1litervoucher.png" },
    { name: "5 Liters Voucher", points: "600 Points", img: "/prizes/5litersvoucher.png" },
    { name: "10 Liters Voucher", points: "1,200 Points", img: "/prizes/10litersvoucher.png" },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 font-sans selection:bg-red-100 selection:text-red-900">

      {/* Custom Animations Styles */}
      <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(-6deg); }
                    50% { transform: translateY(-20px) rotate(-3deg); }
                }
                @keyframes float-slower {
                    0%, 100% { transform: translateY(0px) translateX(20px) rotate(12deg); }
                    50% { transform: translateY(-25px) translateX(20px) rotate(8deg); }
                }
                @keyframes pulse-soft {
                    0%, 100% { opacity: 0.5; transform: scale(1) translate(-50%, -50%); }
                    50% { opacity: 0.8; transform: scale(1.1) translate(-50%, -50%); }
                }
                .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
                .animate-float-slower { animation: float-slower 8s ease-in-out infinite; }
                .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
                
                .hero-visual:hover .animate-float-slow,
                .hero-visual:hover .animate-float-slower {
                    animation-play-state: paused;
                }
            `}</style>

      {/* --- SECTION 1: HERO & VALUE PROPOSITION --- */}
      <section className="relative w-full pt-32 pb-16 px-6 lg:px-12 lg:pt-40 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-12 bg-red-600"></span>
              <span className="text-red-600 font-bold tracking-widest text-xs uppercase flex items-center gap-2">
                <CreditCard size={14} /> Loyalty Program
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              RBP Value Card <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                Rewards Await.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Drive, Fuel, Earn. Get your <span className="font-bold text-gray-900">RBP Value Card</span> today and turn your regular refueling into exciting prizes!
            </p>

            <div className="flex flex-wrap gap-4">
              {/* --- MODAL TRIGGER BUTTON --- */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-red-500 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                Register Online Now
              </button>
              {/* ---------------------------- */}

              <a href="#how-to-get" className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
                How it Works
              </a>
            </div>
          </div>

          {/* --- HERO VISUAL --- */}
          <div className="hero-visual relative h-[450px] w-full flex items-center justify-center lg:justify-end perspective-1000" data-aos="fade-left">
            <img
              src="/valuecard_1.png"
              alt="RBP Value Card Front"
              className="animate-float-slow absolute w-72 md:w-96 shadow-2xl rounded-xl z-20 border-[6px] border-white transition-all duration-500 ease-out hover:scale-110 hover:z-30 cursor-pointer"
              style={{ top: '15%', left: '10%' }}
            />
            <img
              src="/valuecard_2.png"
              alt="RBP Value Card Back"
              className="animate-float-slower absolute w-64 md:w-80 shadow-xl rounded-xl z-10 opacity-90 blur-[0.5px] border-[6px] border-white transition-all duration-500 ease-out hover:scale-105 hover:translate-x-32 hover:blur-0 hover:z-30 cursor-pointer"
            />
            <div className="animate-pulse-soft absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-red-200/60 to-orange-100/60 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: HOW TO GET & EARN --- */}
      <section id="how-to-get" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: Steps to Get Card */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 text-sm">1</span>
                How to Get Your Card
              </h3>
              <div className="space-y-8 relative pl-6 border-l-2 border-dashed border-gray-200 ml-4">
                <div className="relative group">
                  <span className="absolute -left-[31px] top-0 bg-white group-hover:bg-red-600 w-4 h-4 rounded-full border-4 border-red-600 group-hover:border-red-200 shadow transition-colors duration-300"></span>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2"><MapPin size={18} className="text-red-500" /> Visit Any Station</h4>
                  <p className="text-gray-500 text-sm mt-1">Head to the nearest RBP station cashier.</p>
                </div>
                <div className="relative group">
                  <span className="absolute -left-[31px] top-0 bg-white group-hover:bg-red-600 w-4 h-4 rounded-full border-4 border-red-600 group-hover:border-red-200 shadow transition-colors duration-300"></span>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2"><UserPlus size={18} className="text-red-500" /> Fill Out Form</h4>
                  <p className="text-gray-500 text-sm mt-1">Complete the simple registration form.</p>
                </div>
                <div className="relative group">
                  <span className="absolute -left-[31px] top-0 bg-white group-hover:bg-red-600 w-4 h-4 rounded-full border-4 border-red-600 group-hover:border-red-200 shadow transition-colors duration-300"></span>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2"><Banknote size={18} className="text-red-500" /> Pay Fee</h4>
                  <p className="text-gray-500 text-sm mt-1">Pay ₱50.00 card fee. Present 1 Valid ID.</p>
                </div>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg mt-4">
                  <p className="text-xs text-orange-800 font-semibold flex items-center gap-2">
                    <CheckCircle size={14} /> Note: Strictly 1 Card per 1 Vehicle only.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Earning Points */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 text-sm">2</span>
                Earning Points
              </h3>
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-700 to-green-600 rounded-2xl text-white shadow-lg transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <Zap className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 uppercase font-bold tracking-wider">Premium Fuel</p>
                      <p className="text-2xl font-bold">1 Liter = 2 Points</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-sm transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-50 rounded-xl">
                      <Droplet className="text-red-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Diesel & Unleaded</p>
                      <p className="text-2xl font-bold">1 Liter = 1 Point</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm text-gray-500 italic">
                  * Always present your card to the pump attendant before fueling to earn points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: PRIZES CATALOG --- */}
      <section className="py-20 bg-neutral-50" id="prizes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="flex items-center justify-between cursor-pointer group mb-10 select-none"
            onClick={() => setIsPrizesOpen(!isPrizesOpen)}
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Gift className="text-red-600" /> Rewards Catalog
              </h2>
              <p className="text-gray-500 mt-2">Redeem your hard-earned points for these amazing items.</p>
            </div>
            <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-red-50 transition-colors">
              {isPrizesOpen ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>

          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isPrizesOpen ? 'opacity-100 max-h-[5000px]' : 'opacity-0 max-h-0'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {prizes.map((prize, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col">
                  <div className="relative bg-gray-100 pt-[100%] overflow-hidden">
                    <img
                      src={prize.img}
                      alt={prize.name}
                      className="absolute top-0 left-0 w-full h-full object-cover p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm border border-gray-100">
                      PRIZE
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{prize.name}</h3>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="font-bold text-red-600">{prize.points}</span>
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Gift size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- REGISTRATION MODAL --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsModalOpen(false)} // Close on backdrop click
        >
          <div
            className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
          >
            {/* Header */}
            <div className="bg-red-600 p-6 flex justify-between items-center text-white">
              <div>
                <h3 className="text-xl font-bold">Register Value Card</h3>
                <p className="text-red-100 text-sm">Join the club and start earning.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-red-500 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <User size={16} className="text-red-500" /> Full Name
                </label>
                {/* Added Name Attribute */}
                <input required name="full_name" type="text" placeholder="Juan Dela Cruz" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Phone size={16} className="text-red-500" /> Mobile Number
                  </label>
                  {/* Added Name Attribute */}
                  <input required name="mobile_number" type="tel" placeholder="0917 123 4567" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Mail size={16} className="text-red-500" /> Email (Optional)
                  </label>
                  {/* Added Name Attribute */}
                  <input name="email" type="email" placeholder="juan@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Car size={16} className="text-red-500" /> Vehicle Type
                </label>
                {/* Added Name Attribute */}
                <select name="vehicle_type" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white">
                  <option>Motorcycle</option>
                  <option>Private Car / Sedan</option>
                  <option>SUV / Van</option>
                  <option>Truck / Heavy Equipment</option>
                  <option>Tricycle / PUV</option>
                </select>
              </div>

              <div className="pt-4">
                <button type="submit" disabled={result === "Sending...."} className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transform active:scale-95 transition-all shadow-lg hover:shadow-red-500/30 disabled:opacity-70 disabled:cursor-not-allowed">
                  {result === "Sending...." ? "Sending..." : "Submit Registration"}
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  By registering, you agree to RBP's Terms & Conditions.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

export default ValueCardRegistration;