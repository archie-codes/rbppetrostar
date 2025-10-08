import React from "react";
import Footer from "../footer/Footer";
import { FaRegFileAlt, FaTruckMoving, FaChartLine, FaGasPump } from "react-icons/fa";

const POAccounts = () => {
    return (
        <>
            <section className="min-h-screen mt-0 md:mt-10 flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-red-50 via-white to-red-100">
                <div className="max-w-4xl w-full space-y-8">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
                            P.O Accounts <span className="text-black/60 text-2xl">(Purchase Order Accounts)</span>
                        </h1>
                        <p className="text-lg text-black/60 text-justify ">
                            RBP Petrostar Fuels offers <strong>P.O Accounts</strong> for businesses and organizations that require regular fuel supply or bulk purchases.
                            Through our Purchase Order system, clients enjoy convenient, reliable, and flexible fuel transactions without upfront cash payments.
                        </p>
                    </div>

                    {/* Details */}
                    <div className="bg-white/90 shadow-xl rounded-3xl p-10 space-y-8 text-left border border-red-100">
                        <h2 className="text-2xl font-bold text-black/60 flex items-center gap-2">
                            <FaRegFileAlt className="text-black/60" /> Program Overview
                        </h2>
                        <p className="text-gray-700 text-base leading-relaxed text-justify ">
                            Our PO Account program is designed to support companies with continuous fuel needs. 
                            Registered clients can issue purchase orders for fuel, and we’ll deliver or dispense according to agreed terms.
                            Each transaction is properly documented for transparency and easy reconciliation.
                            With RBP Petrostar Fuels, you can count on timely service, accurate billing, and a trusted partnership.
                        </p>

                        <div>
                            <h3 className="text-xl font-bold text-black/60 mb-4">Key Benefits</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                                <li className="flex items-center gap-3 bg-red-50 rounded-lg p-3 shadow">
                                    <FaChartLine className="text-red-400 text-xl" />
                                    Convenient billing and payment terms
                                </li>
                                <li className="flex items-center gap-3 bg-red-50 rounded-lg p-3 shadow">
                                    <FaTruckMoving className="text-red-400 text-xl" />
                                    Hassle-free ordering and delivery
                                </li>
                                <li className="flex items-center gap-3 bg-red-50 rounded-lg p-3 shadow">
                                    <FaRegFileAlt className="text-red-400 text-xl" />
                                    Monthly statements and transaction reports
                                </li>
                                <li className="flex items-center gap-3 bg-red-50 rounded-lg p-3 shadow">
                                    <FaGasPump className="text-red-400 text-xl" />
                                    Priority fueling for partner accounts
                                </li>
                            </ul>
                        </div>

                        <div className="text-center pt-8">
                            <a
                                href="/ContactUs"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Contact Us to Open an Account
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default POAccounts;
