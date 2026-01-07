// import Footer from '../footer/Footer'
// import "./CareerList.css"
// import React, { useState } from "react";

// const jobList = [

//     {
//         id: 1,
//         title: "Company Driver",
//         location: "Calululut, CSFP and Manila",
//         type: "Full-Time",
//         description:
//             "To operate and drive company vehicles for various purposes, such as transporting employees or equipment. This role involves ensuring the safe and efficient operation of the vehicle, adhering to traffic laws and company policies, and maintaining the vehicle in good condition. The Company Driver is responsible for planning routes, managing schedules, and providing excellent customer service while representing the company professionally.",
//     },

//     {
//         id: 2,
//         title: "Cashier",
//         location: "City of San Fernando, Pampanga",
//         type: "Full-Time",
//         description:
//             "To manage cash transactions, process customer payments, and provide excellent service at the fuel station. This role involves handling cash, credit, and debit transactions accurately, maintaining a balanced cash register, and assisting customers with inquiries or concerns. The Cashier plays a vital role in ensuring a smooth and efficient checkout process while representing the company professionally.",
//     },
//     {
//         id: 3,
//         title: "Forecourt Crew",
//         location: "City of San Fernando, Pampanga",
//         type: "Full-Time",
//         description:
//             "To provide exceptional customer service at the fuel station by assisting customers with fueling their vehicles, maintaining cleanliness in the forecourt area, and ensuring a safe and efficient operation. This role involves operating fuel pumps, handling cash transactions, and addressing customer inquiries while adhering to safety protocols and company standards. The Forecourt Crew plays a crucial role in creating a positive customer experience and representing the company professionally.",
//     }
// ];

// const CareerList = () => {
//     // State to manage modal visibility and selected job
//     const [selectedJob, setSelectedJob] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     const openModal = (job) => {
//         setSelectedJob(job);
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         // Add delay to allow animation to finish
//         setShowModal(false);
//         setTimeout(() => setSelectedJob(null), 300); // match animation duration
//     };
//     return (
//         <>
//             <section className="container pt-5 md:pt-32 mb-10 isolate overflow-hidden lg:overflow-visible">
//                 <div className="mx-auto flex flex-col items-start justify-start text-left mb-1 px-5 sm:py-5">
//                     <h1
//                         data-aos="fade-right"
//                         data-aos-duration="300"
//                         data-aos-once="true"
//                         className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
//                         ⸻ OUR CAREER OPPORTUNITIES
//                     </h1>
//                 </div>

//                 <div
//                     data-aos="fade-up"
//                     data-aos-duration="300"
//                     data-aos-once="true"
//                     className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

//                     {jobList.map((job) => (

//                         <div
//                             key={job.id}
//                             className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative cursor-pointer overflow-hidden ring-1 ring-gray-900/5 transform hover:scale-105 hover:-translate-y-1 "
//                         >
//                             <span className="absolute top-2 left-2 z-0 h-1 w-1 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[180] -translate-y-4 -translate-x-4">
//                             </span>
//                             <span className="absolute hidden top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
//                                     <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
//                                     <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
//                                 </svg>
//                             </span>
//                             <div>
//                                 <h2 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-white relative font-sans text-shadow-lg group-hover:translate-x-4 transition-all duration-300 tracking-wide">{job.title}</h2>
//                                 <p className="text-sm text-gray-500 mb-2 group-hover:text-white relative font-sans flex align-middle transition-all duration-300 tracking-wide">{job.location} · {job.type}</p>
//                                 <p className="text-gray-700 text-sm mb-2 group-hover:text-white relative font-sans flex align-middle transition-all duration-300 tracking-wide">
//                                     {job.description.slice(0, 100)}...
//                                 </p>
//                                 <button
//                                     onClick={() => openModal(job)}
//                                     className="text-blue-600 text-sm hover:underline group-hover:text-white relative font-sans flex align-middle transition-all duration-300 tracking-wide"
//                                 >
//                                     View More
//                                 </button>
//                             </div>

//                         </div>
//                     ))}
//                 </div>

//                 {/* Modal */}
//                 {selectedJob && (
//                     <div className="fixed inset-0 z-50 flex items-center justify-center">
//                         {/* Overlay */}
//                         <div
//                             className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${showModal ? "opacity-100" : "opacity-0"
//                                 }`}
//                             onClick={closeModal}
//                         ></div>

//                         {/* Modal Box */}
//                         <div
//                             className={`bg-white p-6 rounded-xl w-full max-w-lg shadow-lg z-50 transform transition-all duration-300 ${showModal ? "scale-100 opacity-100" : "scale-95 opacity-0"
//                                 }`}
//                         >
//                             <button
//                                 onClick={closeModal}
//                                 className="absolute top-2 right-4 text-gray-600 hover:text-black text-2xl"
//                             >
//                                 &times;
//                             </button>
//                             <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedJob.title}</h2>
//                             <p className="text-sm text-gray-500 mb-4">
//                                 {selectedJob.location} · {selectedJob.type}
//                             </p>
//                             <p className="text-gray-700 mb-6">{selectedJob.description}</p>
//                             <button
//                                 onClick={() =>
//                                     window.open(
//                                         `https://mail.google.com/mail/?view=cm&fs=1&to=main@rbppetrostar.com&su=Application for ${encodeURIComponent(selectedJob.title)}`,
//                                         "_blank"
//                                     )
//                                 }
//                                 className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
//                             >
//                                 Apply Now via Gmail
//                             </button>
//                             <br />
//                             <p className="mt-2">or send your resume to  : main@rbppetrostar.com</p>
//                         </div>
//                     </div>
//                 )}
//             </section>
//             <Footer />
//         </>
//     )
// }

// export default CareerList

import Footer from '../footer/Footer';
import React, { useState } from "react";
import "./CareerList.css";

const jobList = [
    {
        id: 1,
        title: "Company Driver",
        location: "Calululut, CSFP and Manila",
        type: "Full-Time",
        description: "We are looking for a reliable Company Driver to operate vehicles for transporting employees and equipment safely and efficiently.",
        responsibilities: [
            "Transport employees and equipment to designated locations safely and on time.",
            "Perform regular vehicle inspections and maintenance checks (oil, tires, water, brakes).",
            "Plan routes to ensure the most efficient travel times.",
            "Maintain a clean and professional appearance of the company vehicle.",
            "Adhere to all traffic laws and company transport policies."
        ],
        qualifications: [
            "Valid Professional Driver’s License (restriction codes 1, 2, or 3).",
            "At least 2 years of driving experience in a professional setting.",
            "Clean driving record with no history of major accidents.",
            "Familiarity with Waze/Google Maps and routes in Pampanga and Manila.",
            "High School Diploma or equivalent."
        ]
    },
    {
        id: 2,
        title: "Cashier",
        location: "City of San Fernando, Pampanga",
        type: "Full-Time",
        description: "We are seeking a trustworthy and detail-oriented Cashier to manage transactions and provide excellent customer service at our station.",
        responsibilities: [
            "Process cash, credit, and debit transactions accurately.",
            "Maintain a balanced cash register at the start and end of shifts.",
            "Issue receipts, refunds, and change to customers.",
            "Resolve customer complaints or inquiries in a professional manner.",
            "Generate daily transaction reports for management."
        ],
        qualifications: [
            "Bachelor’s degree or College level (Finance/Accounting background is a plus).",
            "Proven work experience as a retail cashier or in a similar role.",
            "Basic computer knowledge and familiarity with POS systems.",
            "Strong math skills and attention to detail.",
            "Honest, reliable, and able to work flexible shifts."
        ]
    },
    {
        id: 3,
        title: "Forecourt Crew",
        location: "City of San Fernando, Pampanga",
        type: "Full-Time",
        description: "Join our team as a Forecourt Crew member. You will be the face of our station, assisting customers with fueling and ensuring a clean environment.",
        responsibilities: [
            "Dispense fuel into customer vehicles safely and efficiently.",
            "Clean windshields and offer basic engine checks (oil/water) to customers.",
            "Maintain cleanliness of the forecourt, pumps, and surrounding areas.",
            "Assist in inventory monitoring of fuel and lubricants.",
            "Follow safety protocols regarding hazardous materials."
        ],
        qualifications: [
            "High School Diploma or Senior High School graduate.",
            "Previous experience in a gasoline station is an advantage but not required.",
            "Physically fit and able to stand for long periods.",
            "Good communication skills and a customer-friendly attitude.",
            "Willingness to work in shifting schedules (including night shifts)."
        ]
    },
    {
        id: 4,
        title: "Station Manager",
        location: "City of San Fernando, Pampanga",
        type: "Full-Time",
        description: "Lead and manage the operations of our station, ensuring smooth daily activities and customer satisfaction.",
        responsibilities: [
            "Oversee daily operations of the station.",
            "Manage staff and ensure efficient workflow.",
            "Monitor sales performance and inventory levels.",
            "Ensure compliance with safety and operational standards.",
            "Handle customer complaints and resolve issues promptly."
        ],
        qualifications: [
            "At least College Graduate.",
            "Strong Personality.",
            "Must be able to work with little to no supervision.",
            "With at least 6 months of related experience.",
            "With experience in handling people."
        ]
    },
    {
        id: 5,
        title: "Accounting Staff",
        location: "City of San Fernando, Pampanga",
        type: "Full-Time",
        description: "Support our financial operations by managing accounting records, processing transactions, and ensuring compliance with financial regulations.",
        responsibilities: [
            "Maintain accurate financial records and prepare reports.",
            "Process invoices, payments, and other financial transactions.",
            "Ensure compliance with tax laws and accounting standards.",
            "Assist in budget preparation and financial planning.",
            "Support audits and provide necessary documentation."
        ],
        qualifications: [
            "Bachelor's Degree in Accountancy, Finance, or a related field, at least 1 to 2 years of experience in general accounting.",
            "Knowledgeable in BIR compliance, costing, and financial processes.",
            "Proficient in journal entries and basic financial statement preparation.",
            "Strong skills in Microsoft Excel (pivot tables, formulas, charts, etc.)",
            "Ability to work independently and make well-informed decisions.",
            "Excellent time management and organizational skills.",
            "Strong attention to detail and a high degree of accuracy.",
            "Good leadership and team coordination abilities.",
            "CPA is a plus, but not required."
        ]
    }
];

// Icons
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const CareerList = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState(false);

    const openModal = (job) => {
        setSelectedJob(job);
        setShowModal(true);
        setCopied(false);
    };

    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => setSelectedJob(null), 300);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText("main@rbppetrostar.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <section className="container mx-auto pt-12 lg:pt-32 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2">Join Our Team</span>
                    <h1 className='font-normal text-black/80 text-3xl md:text-4xl mb-4'>
                        Career Opportunities
                    </h1>
                    <div className="h-1 w-20 bg-red-600 rounded"></div>
                </div>

                {/* Job Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto">
                    {jobList.map((job) => (
                        <div
                            key={job.id}
                            onClick={() => openModal(job)}
                            className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden hover:-translate-y-1"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-red-50 rounded-lg group-hover:bg-red-600 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                                        {job.type}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                    {job.title}
                                </h2>

                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <MapPinIcon />
                                    {job.location}
                                </div>

                                <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                                    {job.description}
                                </p>
                            </div>

                            <button className="inline-flex items-center text-red-600 font-semibold text-sm hover:text-red-700 transition-colors">
                                View Details <ArrowRightIcon />
                            </button>
                        </div>
                    ))}
                </div>

                {/* MODAL */}
                {selectedJob && (
                    /* UPDATED: Changed z-50 to z-[9999] 
                       This ensures it sits on top of any sticky navbar 
                    */
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

                        {/* Overlay with Blur */}
                        <div
                            className={`fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 ${showModal ? "opacity-100" : "opacity-0"
                                }`}
                            onClick={closeModal}
                        ></div>

                        {/* Modal Box */}
                        <div
                            className={`bg-white rounded-2xl shadow-2xl w-full max-w-2xl z-10 transform transition-all duration-300 flex flex-col max-h-[90vh] ${showModal ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
                                }`}
                        >
                            {/* Modal Header */}
                            <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-start bg-white rounded-t-2xl sticky top-0 z-10">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedJob.title}</h2>
                                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                                        <span className="flex items-center"><MapPinIcon /> {selectedJob.location}</span>
                                        <span className="flex items-center"><ClockIcon /> {selectedJob.type}</span>
                                    </div>
                                </div>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Scrollable Content */}
                            <div className="p-6 md:p-8 overflow-y-auto">

                                {/* Description */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">About the Role</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {selectedJob.description}
                                    </p>
                                </div>

                                {/* Responsibilities */}
                                {selectedJob.responsibilities && (
                                    <div className="mb-8">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">Key Responsibilities</h3>
                                        <ul className="space-y-2">
                                            {selectedJob.responsibilities.map((res, index) => (
                                                <li key={index} className="flex items-start text-gray-600">
                                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-red-600 rounded-full flex-shrink-0"></span>
                                                    <span>{res}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Qualifications */}
                                {selectedJob.qualifications && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">Qualifications</h3>
                                        <ul className="space-y-3">
                                            {selectedJob.qualifications.map((qual, index) => (
                                                <li key={index} className="flex items-start text-gray-600 bg-gray-50 p-3 rounded-lg">
                                                    <CheckIcon />
                                                    <span className="text-sm font-medium">{qual}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 bg-white border-t border-gray-100 rounded-b-2xl sticky bottom-0 z-10">
                                <button
                                    onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=main@rbppetrostar.com&su=Application for ${encodeURIComponent(selectedJob.title)}`, "_blank")}
                                    className="w-full bg-red-600 text-white font-bold py-3.5 px-4 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-600/20 mb-4 flex justify-center items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    Apply via Gmail
                                </button>

                                <div className="text-center">
                                    <p className="text-xs text-gray-500 mb-1">Or send your resume manually to:</p>
                                    <button
                                        onClick={copyEmail}
                                        className="text-gray-800 font-semibold text-sm hover:text-red-600 transition-colors flex items-center justify-center gap-2 mx-auto"
                                    >
                                        main@rbppetrostar.com
                                        {copied ? (
                                            <span className="text-green-600 text-xs bg-green-100 px-2 py-0.5 rounded font-bold">Copied!</span>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default CareerList;