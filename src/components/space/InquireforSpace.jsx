import React from 'react'
import Footer from '../footer/Footer'
import Swal from 'sweetalert2'
import {
    EyeIcon,
    PaintBrushIcon,
    Squares2X2Icon,
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const InquireforSpace = () => {
    // For web3forms
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {

        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8b325528-e4ac-4782-857e-fcde03a668e8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    // end of web3forms

    return (
        <>
            <div className="min-h-screen bg-white md:mt-16">
                {/* Hero Section */}
                <section className="relative">
                    <img
                        src="/stall_for_lease.png" // Replace with your cleaned image path
                        alt="Stalls for Lease"
                        className="w-full h-[500px] object-cover brightness-90"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Commercial Stalls for Lease
                            </h1>
                            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                                Prime location. Clean, secure, and accessible — perfect for your business.
                            </p>
                            <a
                                href="#contact"
                                className="bg-red-600 font-medium hover:bg-red-700 text-white py-3 px-6 rounded shadow transition"
                            >
                                Inquire Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* Details Section */}
                <section className="py-16 px-4 md:px-16 bg-gray-50">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                        Why Lease With Us?
                    </h2>
                    <div className="container grid md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <EyeIcon className="w-10 h-10 text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Great Visibility</h3>
                            <p className="text-gray-600">
                                Located in a high-traffic area with excellent frontage.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <PaintBrushIcon className="w-10 h-10 text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Freshly Painted</h3>
                            <p className="text-gray-600">
                                Cleaned and newly painted for a professional look.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Squares2X2Icon className="w-10 h-10 text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Flexible Lease</h3>
                            <p className="text-gray-600">
                                Choose short- or long-term options that suit your needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="bg-gray-100 py-12 px-4 md:px-16 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-once="true"
                        className="card h-fit max-w-7xl p-5 md:p-12 border bg-white border-gray-400 shadow-2xl rounded-lg" id="form">
                        <h2 className="mb-4 text-2xl font-semibold text-gray-900">Contact us for your space inquiry</h2>
                        <form onSubmit={onSubmit}>
                            <div className="mb-6">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label for="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input type="text" autocomplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="name" required></input>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input type="email" autocomplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email" required></input>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label for="prefered location" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input type="text" autocomplete="prefered-location" placeholder="Prefered location" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="prefered location" required></input>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label for="type of business" className="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input type="text" autocomplete="type-of-business" placeholder="Type of business" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="type of business" required></input>
                                    </div>
                                </div>

                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label for="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                    <textarea id="textarea" name="message" cols="30" rows="5" placeholder="Write your inquiry..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
                {/* <section id="contact" className="bg-white py-16 px-4 md:px-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                        Contact Us
                    </h2>
                    <form className="max-w-2xl mx-auto grid gap-5">
                        <div className="flex items-center border rounded p-3 gap-3">
                            <UserIcon className="w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded p-3 gap-3">
                            <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded p-3 gap-3">
                            <PhoneIcon className="w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full outline-none"
                            />
                        </div>
                        <div className="flex items-start border rounded p-3 gap-3">
                            <ChatBubbleLeftRightIcon className="w-5 h-5 text-gray-400 mt-1" />
                            <textarea
                                rows={4}
                                placeholder="Your message..."
                                className="w-full outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded transition"
                        >
                            Submit Inquiry
                        </button>
                    </form>
                </section> */}
            </div>
            <Footer />
        </>
    )
}

export default InquireforSpace