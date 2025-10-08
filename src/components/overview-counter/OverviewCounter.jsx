import CountUp from "react-countup";
import "./OverviewCounter.css";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";

function OverviewCounter() {
    return (
        <section className="h-10 md:h-30 hidden md:block lg:h-30 xl:h-30">
            <div className="container grid grid-cols-4 mx-auto gap-4 -translate-y-4 md:-translate-y-10 my-4">
                {/* Box 1 */}
                <div className="box flex flex-col items-center justify-center py-3 bg-white shadow-lg">
                    <h1 className="text-xs font-bold text-black/80 sm:text-xs md:text-md lg:text-2xl">FUEL PRICE UPDATE</h1>
                    <p className="font-bold text-black/70 sm:text-md text-xs md:text-lg">As of October 7, 2025</p>
                </div>
                {/* Diesel */}
                <div className="box grid grid-cols-2 items-center justify-center shadow-lg">
                    <div className="col-span-1 row-span-2 place-self-center">
                        <BsFillFuelPumpDieselFill className="text-5xl text-yellow-400" />
                    </div>
                    <div className="">
                        <h1 className="text-xs font-black font-sans text-yellow-400 sm:text-xs md:text-md lg:text-3xl">
                            DIESEL
                        </h1>
                    </div>
                    <div className="">
                        <p className="flex items-center font-semibold text-black/70 sm:text-xs md:text-2xl">₱ 0.<CountUp start={100} end={80} suffix=" ⇧" duration={2.75} /></p>
                    </div>
                </div>
                {/* Unleaded */}
                <div className="box grid grid-cols-2 items-center justify-center shadow-lg">
                    <div className="col-span-1 row-span-2 place-self-center">
                        <BsFillFuelPumpDieselFill className="text-5xl text-green-700" />
                    </div>
                    <div className="">
                        <h1 className="text-xs font-black font-sans text-green-700 sm:text-xs md:text-md lg:text-3xl">
                            UNLEADED
                        </h1>
                    </div>
                    <div className="">
                        <p className="font-semibold text-black/70 sm:text-xs md:text-2xl">₱ 0.<CountUp start={100} end={20} suffix=" ⇧" duration={2.75} /></p>
                    </div>
                </div>
                {/* Premium */}
                <div className="box grid grid-cols-2 items-center justify-center shadow-lg">
                    <div className="col-span-1 row-span-2 place-self-center">
                        <BsFillFuelPumpDieselFill className="text-5xl text-red-600" />
                    </div>
                    <div className="">
                        <h1 className="text-xs font-black font-sans text-red-600 sm:text-xs md:text-md lg:text-3xl">
                            PREMIUM
                        </h1>
                    </div>
                    <div className="">
                        <p className="font-semibold text-black/70 sm:text-xs md:text-2xl">₱ 0.<CountUp start={100} end={20} suffix=" ⇧" duration={2.75} /></p>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default OverviewCounter;

// import React from "react";
// import CountUp from "react-countup";
// import { BsFillFuelPumpDieselFill } from "react-icons/bs";

// const fuels = [
//   {
//     name: "DIESEL",
//     color: "text-yellow-400",
//     price: 1.40,
//     icon: <BsFillFuelPumpDieselFill className="text-5xl text-yellow-400" />,
//   },
//   {
//     name: "UNLEADED",
//     color: "text-green-700",
//     price: 1.00,
//     icon: <BsFillFuelPumpDieselFill className="text-5xl text-green-700" />,
//   },
//   {
//     name: "PREMIUM",
//     color: "text-red-600",
//     price: 1.00,
//     icon: <BsFillFuelPumpDieselFill className="text-5xl text-red-600" />,
//   },
// ];

// function OverviewCounter() {
//   return (
//     <section className="hidden md:block py-6">
//       <div className="container mx-auto grid grid-cols-4 gap-4">
//         {/* Title Box */}
//         <div
//           className="
//             relative p-4 bg-white rounded-xl cursor-pointer 
//             text-gray-800 shadow-md
//             transition-transform duration-200 ease-in-out
//             hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:ring-1 hover:ring-black/5
//           "
//         >
//           <h1 className="text-xs md:text-lg lg:text-xl font-bold text-black/80 text-center">
//             FUEL PRICE UPDATE
//           </h1>
//           <p className="text-xs md:text-base font-semibold text-black/70 text-center">
//             As of September 14, 2025
//           </p>
//         </div>

//         {/* Fuel Boxes */}
//         {fuels.map((fuel, index) => (
//           <div
//             key={index}
//             className="
//               relative grid grid-cols-2 items-center bg-white rounded-xl p-4
//               shadow-md cursor-pointer
//               transition-transform duration-200 ease-in-out
//               hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:ring-1 hover:ring-black/5
//             "
//           >
//             <div className="flex items-center justify-center">{fuel.icon}</div>
//             <div>
//               <h2
//                 className={`font-black font-sans ${fuel.color} text-sm md:text-xl lg:text-2xl`}
//               >
//                 {fuel.name}
//               </h2>
//               <p className="font-semibold text-black/70 text-sm md:text-xl">
//                 ₱{" "}
//                 <CountUp
//                   start={fuel.price - 5}
//                   end={fuel.price}
//                   decimals={2}
//                   duration={2}
//                   suffix=" ⇧"
//                 />
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default OverviewCounter;

