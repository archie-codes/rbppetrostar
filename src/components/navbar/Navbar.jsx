import React, { useState, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { User } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import ResponsiveMenu from './ResponsiveMenu';
import './Navbar.css';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);
    const element = document.documentElement;

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, [location]);

    return (
        <>
            <header className="slanted md:fixed top-0 left-0 right-0 z-[99] w-full bg-navbar text-white py-3 px-6 border-b-[5px]">
                <nav className="slantedTwo flex items-center justify-between h-[70px] py-2">
                    {/* Logo section */}
                    <div className="slantedThree flex items-start">
                        <Link to="/Home">
                            <img className="h-9 sm:h-14" src='navbar_logo2.png' />
                        </Link>
                    </div>

                    {/* Desktop menu section */}
                    <div className="hidden lg:block">
                        <ul className="flex gap-8 items-center font-medium text-lg">
                            <li>
                                <CustomLink to="/Home" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                                    HOME
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/AboutUs" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                                    ABOUT
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/AllNews" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                                    NEWS
                                </CustomLink>
                            </li>
                            <li className="group relative cursor-pointer">
                                <p className="flex items-center gap-[2px] h-[72px]">
                                    PRODUCTS
                                    <span>
                                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                    </span>
                                </p>

                                {/* dropdown section */}
                                <div className="absolute -left-9 z-[99999] w-[150px] bg-gray-100 p-2 text-red-500 rounded-md shadow-md transform transition-all duration-300 ease-in-out opacity-0 translate-y-2 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                                    <ul className="flex flex-col space-y-1">
                                        <li className="p-2 hover:bg-red-500 hover:text-white rounded-md transition">
                                            <CustomLink to="/ValueCardRegistration">VALUE CARD</CustomLink>
                                        </li>
                                        <li className="p-2 hover:bg-red-500 hover:text-white rounded-md transition">
                                            <CustomLink to="/Hauling">HAULING</CustomLink>
                                        </li>
                                        <li className="p-2 hover:bg-red-500 hover:text-white rounded-md transition">
                                            <CustomLink to="/InquireforSpace">SPACES</CustomLink>
                                        </li>
                                        <li className="p-2 hover:bg-red-500 hover:text-white rounded-md transition">
                                            <CustomLink to="/POAccounts">P.O ACCOUNT</CustomLink>
                                        </li>
                                        <li className="p-2 hover:bg-red-500 hover:text-white rounded-md transition">
                                            <CustomLink to="/Fuels">FUELS</CustomLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>


                            <li className="group relative cursor-pointer">
                                <p className="flex items-center gap-[2px] h-[72px]">
                                    STATION
                                    <span>
                                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                    </span>
                                </p>
                                {/* dropdown section */}
                                <div className="absolute -left-9 z-[99999] w-[150px] bg-gray-100 p-2 text-red-500 rounded-md shadow-md transform transition-all duration-300 ease-in-out opacity-0 translate-y-2 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                                    <ul className='space-y-2'>
                                        <li className="p-1 hover:bg-red-500 hover:text-white hover:rounded-md">
                                            <CustomLink to="/PampangaStationList">PAMPANGA</CustomLink>
                                        </li>
                                        <li className="p-1 hover:bg-red-500 hover:text-white hover:rounded-md">
                                            <CustomLink to="/BataanStationList">BATAAN</CustomLink>
                                        </li>
                                        <li className="p-1 hover:bg-red-500 hover:text-white hover:rounded-md">
                                            <CustomLink to="/NuevaEcijaStationList">NUEVA ECIJA</CustomLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <CustomLink to="/CareerList" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                                    CAREERS
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/ContactUs" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                                    CONTACT US
                                </CustomLink>
                            </li>
                            <li>
                                <a href="https://rbpfuels.com"
                                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-tooltip-id="my-tooltip" data-tooltip-content="LOG IN" data-tooltip-variant="light">
                                    <User />
                                </a>
                                <Tooltip id="my-tooltip" />
                            </li>
                        </ul>
                    </div>

                    {/* Mobile menu section */}
                    <div className="block md:hidden gap-4 ">
                        {showMenu ? (
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                className="cursor-pointer transition-all"
                                size={35}
                            />
                        ) : (
                            <HiMenuAlt3
                                onClick={toggleMenu}
                                className="cursor-pointer transition-all"
                                size={35}
                            />
                        )}

                        {/* Mobile menu */}
                        <ResponsiveMenu showMenu={showMenu} />
                    </div>
                </nav>

            </header>

        </>
    );
};

export default Navbar;


function CustomLink({ to, children, ...props }) {
    const ResolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: ResolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}