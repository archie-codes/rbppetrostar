import Footer from "../footer/Footer";
import {
    FaRegFileAlt,
    FaTruckMoving,
    FaChartLine,
    FaGasPump,
    FaShieldAlt,
    FaClock,
    FaUsers,
    FaCheckCircle,
    FaArrowRight,
    FaStar,
    FaQuoteLeft
} from "react-icons/fa";

const POAccounts = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-100"></div>
                <div className="absolute top-20 left-10 w-32 h-32 bg-red-200/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-300/20 rounded-full blur-xl"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        {/* Main Title */}
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-6 leading-tight">
                                P.O Accounts
                            </h1>
                            <div className="inline-block bg-red-100 text-red-800 px-6 py-2 rounded-full text-lg font-semibold">
                                Purchase Order Accounts
                            </div>
                        </div>

                        {/* Hero Description */}
                        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
                            Streamline your fuel procurement with our comprehensive <strong className="text-red-600">Purchase Order system</strong>.
                            Enjoy flexible billing, reliable delivery, and seamless transactions for your business needs.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="/ContactUs"
                                className="group bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                Open Your Account Today
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                            <a
                                href="#features"
                                className="bg-white hover:bg-gray-50 text-red-600 font-semibold py-4 px-8 rounded-xl border-2 border-red-600 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Why Choose Our P.O Accounts?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience the convenience and reliability of our Purchase Order system designed for modern businesses
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="group bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaChartLine className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Flexible Billing</h3>
                            <p className="text-gray-600">Convenient payment terms and transparent billing cycles</p>
                        </div>

                        <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaTruckMoving className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Reliable Delivery</h3>
                            <p className="text-gray-600">Hassle-free ordering with guaranteed timely delivery</p>
                        </div>

                        <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaRegFileAlt className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Reports</h3>
                            <p className="text-gray-600">Comprehensive monthly statements and transaction reports</p>
                        </div>

                        <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaGasPump className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Priority Service</h3>
                            <p className="text-gray-600">Expedited fueling and dedicated account management</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-2xl p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                    <FaShieldAlt className="text-red-600 text-3xl" />
                                    Program Overview
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    Our PO Account program is designed to support companies with continuous fuel needs.
                                    Registered clients can issue purchase orders for fuel, and we'll deliver or dispense according to agreed terms.
                                    Each transaction is properly documented for transparency and easy reconciliation.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-green-500 text-xl" />
                                        <span className="text-gray-700">Timely service and accurate billing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-green-500 text-xl" />
                                        <span className="text-gray-700">Trusted partnership with 24/7 support</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-green-500 text-xl" />
                                        <span className="text-gray-700">Flexible terms and conditions</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Additional Features</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <FaClock className="text-red-600 text-xl mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                                            <p className="text-gray-600 text-sm">Round-the-clock customer service</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaUsers className="text-red-600 text-xl mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Dedicated Manager</h4>
                                            <p className="text-gray-600 text-sm">Personal account representative</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaShieldAlt className="text-red-600 text-xl mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Secure Transactions</h4>
                                            <p className="text-gray-600 text-sm">Encrypted and protected payments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
                        <p className="text-xl text-gray-600">Trusted by businesses across the region</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-lg" />
                                ))}
                            </div>
                            <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
                            <p className="text-gray-700 mb-6 italic">
                                "RBP Petrostar's PO system has streamlined our fuel procurement process. The billing is transparent and delivery is always on time."
                            </p>
                            <div className="font-semibold text-gray-800">Sarah Johnson</div>
                            <div className="text-gray-600 text-sm">Logistics Manager, ABC Corp</div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-lg" />
                                ))}
                            </div>
                            <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
                            <p className="text-gray-700 mb-6 italic">
                                "Excellent service and support. The monthly reports help us track our fuel expenses accurately. Highly recommended!"
                            </p>
                            <div className="font-semibold text-gray-800">Michael Chen</div>
                            <div className="text-gray-600 text-sm">Operations Director, XYZ Ltd</div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-lg" />
                                ))}
                            </div>
                            <FaQuoteLeft className="text-red-600 text-2xl mb-4" />
                            <p className="text-gray-700 mb-6 italic">
                                "The priority service and flexible payment terms have been a game-changer for our business operations. I highly recommend RBP Petrostar Fuels"
                            </p>
                            <div className="font-semibold text-gray-800">Emily Rodriguez</div>
                            <div className="text-gray-600 text-sm">Fleet Manager, DEF Industries</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
                        Join hundreds of satisfied businesses who trust RBP Petrostar Fuels for their fuel procurement needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/ContactUs"
                            className="group bg-white hover:bg-gray-100 text-red-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                        >
                            Contact Us Now
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a
                            href="tel:+1234567890"
                            className="bg-red-800 hover:bg-red-900 text-white font-semibold py-4 px-8 rounded-xl border-2 border-red-800 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Call Us Today
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default POAccounts;
