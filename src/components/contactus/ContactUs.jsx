import React, { useState } from "react";
import Footer from '../footer/Footer'
import { MapPinIcon } from '@heroicons/react/20/solid'
import Swal from 'sweetalert2'


const ContactUs = () => {
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
            <section className="pt-5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div
                                data-aos="fade-right"
                                data-aos-duration="300"
                                data-aos-once="true" className="h-full pr-6">
                                <h1 className='mb-5 font-sans font-semibold text-red-600 text-2xl md:text-xl'>
                                    ⸻ CONTACT US
                                </h1>
                                <p className="mt-3 mb-12 text-lg text-gray-700">
                                    Want to contact us? Choose an option below and well be happy to hear your feedback.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-7 w-7 items-center justify-center rounded bg-black/50 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Our Address
                                            </h3>
                                            <p className="text-gray-700">Fatima Rd., Sitio Mabalas, Brgy.Calulut</p>
                                            <p className="text-gray-700">City of San Fernando, Pampanga 2000</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-7 w-7 items-center justify-center rounded bg-black/50 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Contact
                                            </h3>
                                            <p className="text-gray-700">Mobile: +63 961-6099-638</p>
                                            <p className="text-gray-700">Email: main@rbppetrostar.com</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-7 w-7 items-center justify-center rounded bg-black/50 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Working
                                                Hours
                                            </h3>
                                            <p className="text-gray-700">Monday - Friday: 8:00 am - 5:00 pm</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div
                                data-aos="fade-left"
                                data-aos-duration="400"
                                data-aos-once="true"
                                className="card h-fit max-w-6xl p-5 md:p-12 border border-gray-400 shadow-2xl rounded-lg" id="form">
                                <h2 className="mb-4 text-2xl font-semibold text-gray-900">Email us</h2>
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
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label for="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <textarea id="textarea" name="message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default ContactUs