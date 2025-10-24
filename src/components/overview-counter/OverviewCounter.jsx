import CountUp from "react-countup";
import "./OverviewCounter.css";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";

function OverviewCounter() {
    return (
        <section className="h-10 md:h-30 hidden lg:block lg:h-30 xl:h-30">
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
                        <h1 className="text-xs font-black font-sans text-yellow-400 sm:text-xs md:text-md lg:text-2xl">
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
                        <h1 className="text-xs font-black font-sans text-green-700 sm:text-xs md:text-sm lg:text-2xl">
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
                        <h1 className="text-xs font-black font-sans text-red-600 sm:text-xs md:text-md lg:text-2xl">
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