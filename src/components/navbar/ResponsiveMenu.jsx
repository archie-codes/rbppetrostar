
import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const ResponsiveMenu = ({ showMenu }) => {
  const [openMenus, setOpenMenus] = useState({
    stations: false,
    products: false,
  });

  const toggleMenu = (menuId) => {
    setOpenMenus((prevMenus) => ({ ...prevMenus, [menuId]: !prevMenus[menuId] }));
  };

  return (
    <div className={` ${showMenu ? "-left-[100%]" : "left-0"
      } h-screen w-[65%] bg-red-500 fixed top-0 z-50 transition-all duration-500 pt-2 pb-6 px-8 flex flex-col justify-between text-white `}>
      <div>
        {/* Logo */}
        <div className="flex items-start pt-5 pb-4">
          <img className="h-9 sm:h-14" src='navbar_logo2.png' />
        </div>
        {/* Mobile Navbar */}
        <nav className="mt-4">
          <ul className="space-y-7 text-l font-medium text-lg">
            <li>
              <a href="/Home">HOME</a>
            </li>
            <li>
              <a href="/AboutUs">ABOUT</a>
            </li>
            <li>
              <a href="/AllNews">NEWS</a>
            </li>
            <li>
              <button onClick={() => toggleMenu('products')} className="flex items-center justify-between w-full ">
                PRODUCS {openMenus.products ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </button>
              {openMenus.products && (
                <ul className="mt-2 bg-red-500 rounded-md shadow-md border border-red-600">
                  <li className="p-2">
                    <a href="/ValueCardRegistration" className="text-white hover:bg-gray-600 hover:text-white transition duration-150 ease-in-out">VALUE CARD</a>
                  </li>
                  <li className="p-2">
                    <a href="/Hauling" className="text-white hover:bg-gray-600 hover:text-white transition duration-150 ease-in-out">HAULING</a>
                  </li>
                  <li className="p-2">
                    <a href="/InquireforSpace" className="text-white hover:bg-gray-600 hover:text-white transition duration-150 ease-in-out">SPACES</a>
                  </li>
                  <li className="p-2">
                    <a href="/POAccounts" className="text-white hover:bg-gray-600 hover:text-white transition duration-150 ease-in-out">P.O ACCOUNT</a>
                  </li>
                  <li className="p-2">
                    <a href="/Fuels" className="text-white hover:bg-gray-600 hover:text-white transition duration-150 ease-in-out">FUELS</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={() => toggleMenu('stations')} className="flex items-center justify-between w-full ">
                STATIONS {openMenus.stations ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}
              </button>
              {openMenus.stations && (
                <ul className="mt-2 bg-red-500 rounded-md shadow-md border border-red-600 w-full">
                  <li className="p-2">
                    <a href="/PampangaStationList" className="text-white hover:bg-gray-600 hover:text-white transition duration-150 ease-in-out">PAMPANGA</a>
                  </li>
                  <li className="p-2">
                    <a href="/BataanStationList" className="text-white hover:bg-gray-600 hover:text-white transition duration-150 ease-in-out">BATAAN</a>
                  </li>
                  <li className="p-2">
                    <a href="/NuevaEcijaStationList" className="text-white hover:bg-gray-600 hover:text-white transition duration-150 ease-in-out">NUEVA ECIJA</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/CareerList">CAREERS</a>
            </li>
            <li>
              <a href="/ContactUs">CONTACT US</a>
            </li>
            <li>
              <a href="https://rbpfuels.com"
                target="_blank"
                rel="noopener noreferrer">
                LOG IN
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;