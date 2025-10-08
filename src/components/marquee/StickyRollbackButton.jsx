import { useLocation } from "react-router-dom";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";

const StickyRollbackButton = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/Home" || location.pathname === "/";

    if (isHomePage) return null;

    return (
        <div className="hidden lg:block fixed bottom-4 left-4 z-50 group cursor-pointer">
            <div
                className="
                    flex items-center bg-red-600 text-white
                    transition-all duration-300 ease-in-out
                    rounded-full shadow-lg
                    h-12 w-12 sm:w-12 md:w-14
                    group-hover:w-48 sm:group-hover:w-56 md:group-hover:w-[550px]
                    overflow-hidden pl-2 pr-2
                    "
            >

                {/* Icon & Label */}
                <BsFillFuelPumpDieselFill className="h-6 w-6 flex-shrink-0 ml-2 animate-[wiggle_1.2s_ease-in-out_infinite]
              origin-center" />
                <span
                    className="
                    ml-3 whitespace-nowrap text-sm font-semibold
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    hidden sm:inline
                    "
                >
                    FUEL PRICE UPDATE AS OF OCT 07, 2025 | DIESEL ₱ 0.80 | GASOLINE ₱ 0.20
                </span>
            </div>
        </div>
    );
};

export default StickyRollbackButton;
