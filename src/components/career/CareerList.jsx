import Footer from '../footer/Footer'
import "./CareerList.css"
import React, { useState } from "react";

const jobList = [
    // {
    //     id: 1,
    //     title: "HR Supervisor",
    //     location: "Calululut, CSFP",
    //     type: "Full-Time",
    //     description:
    //         "Oversee and manage all aspects of the human resources function within an organization. This includes recruitment, employee relations, performance management, compliance, and organizational development. The HR Manager plays a crucial role in aligning HR strategies with business goals, fostering a positive work environment, and ensuring that the organization attracts, retains, and develops top talent. This position requires strong leadership, communication, and problem-solving skills to effectively manage the HR team and support the overall success of the company.",
    // },
    // {
    //     id: 2,
    //     title: "HR Associate",
    //     location: "Calululut, CSFP",
    //     type: "Full-Time",
    //     description:
    //         "Handling administrative tasks, assisting with recruitment, employee onboarding, record-keeping, and helping ensure compliance with company policies and labor laws. This role supports the HR team in various functions, including employee relations, benefits administration, and performance management.",
    // },
    // {
    //     id: 3,
    //     title: "Station Manager",
    //     location: "Pampanga",
    //     type: "Full-Time",
    //     description:
    //         "Oversee the day-to-day operations of the station, ensure smooth service delivery, manage staff, and meet sales and operational goals. This role involves coordinating with various departments, maintaining high service standards, and ensuring compliance with company policies and safety regulations.",
    // },
    // {
    //     id: 4,
    //     title: "Inhouse Architect",
    //     location: "Pampanga",
    //     type: "Full-Time",
    //     description:
    //         "To plan, design, and oversee construction or renovation projects within the company — ensuring that all architectural work aligns with brand standards, functionality, safety, and regulatory compliance. This role involves collaborating with various stakeholders, including contractors, engineers, and internal teams, to create efficient and aesthetically pleasing spaces that meet the company's operational needs.",
    // },
    // {
    //     id: 5,
    //     title: "Marketing",
    //     location: "Pampanga",
    //     type: "Full-Time",
    //     description:
    //         "To promote the company’s brand, products, or services to increase awareness, attract customers, and drive sales or engagement. This role involves developing and implementing marketing strategies, conducting market research, managing advertising campaigns, and utilizing various channels such as social media, email, and traditional media to reach target audiences. The goal is to effectively communicate the value proposition of the company’s offerings and enhance its market presence.",
    // },
    // {
    //     id: 6,
    //     title: "Accounting Supervisor",
    //     location: "Pampanga",
    //     type: "Full-Time",
    //     description:
    //         "To oversee and manage the accounting department's daily operations, ensuring accurate financial reporting, compliance with regulations, and effective financial management. This role involves supervising accounting staff, reviewing financial statements, managing budgets, and coordinating audits. The Accounting Supervisor plays a crucial role in maintaining the integrity of financial records and providing strategic financial insights to support decision-making within the organization.",
    // },
    // {
    //     id: 7,
    //     title: "Logostics Dispatcher",
    //     location: "Calululut, CSFP",
    //     type: "Full-Time",
    //     description:
    //         "To coordinate and manage the transportation and delivery of fuels or services within a company. This role involves scheduling and dispatching fuel truck, tracking shipments, communicating with drivers and customers, and ensuring timely and efficient delivery operations. The Logistics Dispatcher plays a critical role in optimizing routes, managing logistics resources, and maintaining high levels of customer satisfaction through effective communication and problem-solving.",
    // },
    {
        id: 1,
        title: "Tanker Driver",
        location: "Calululut, CSFP",
        type: "Full-Time",
        description:
            "To operate and drive fuel tankers to transport petroleum products safely and efficiently. This role involves adhering to safety regulations, maintaining the integrity of the fuel during transit, and ensuring timely deliveries to various locations. The Tanker Driver is responsible for conducting pre-trip inspections, managing fuel loading and unloading processes, and maintaining accurate records of deliveries while providing excellent customer service.",
    },
    // {
    //     id: 2,
    //     title: "Company Driver",
    //     location: "Calululut, CSFP",
    //     type: "Full-Time",
    //     description:
    //         "To operate and drive company vehicles for various purposes, such as transporting employees or equipment. This role involves ensuring the safe and efficient operation of the vehicle, adhering to traffic laws and company policies, and maintaining the vehicle in good condition. The Company Driver is responsible for planning routes, managing schedules, and providing excellent customer service while representing the company professionally.",
    // },
    {
        id: 2,
        title: "Pump Attendant",
        location: "Sindalan, CSFP",
        type: "Full-Time",
        description:
            "To provide excellent customer service at fuel stations by assisting customers with fueling their vehicles, operating fuel pumps, and ensuring a clean and safe environment. This role involves handling cash transactions, maintaining fuel inventory, and adhering to safety protocols while delivering a positive experience for customers. The Pump Attendant plays a crucial role in representing the company and ensuring customer satisfaction.",
    },
    {
        id: 3,
        title: "Cashier",
        location: "Sindalan  & Panipuan Pampanga",
        type: "Full-Time",
        description:
            "To manage cash transactions, process customer payments, and provide excellent service at the fuel station. This role involves handling cash, credit, and debit transactions accurately, maintaining a balanced cash register, and assisting customers with inquiries or concerns. The Cashier plays a vital role in ensuring a smooth and efficient checkout process while representing the company professionally.",
    },
    {
        id: 4,
        title: "Machinery Staff",
        location: "Calululut, CSFP",
        type: "Full-Time",
        description:
            "To operate, maintain, and repair machinery and equipment used in various industrial or construction settings. This role involves ensuring that machinery is functioning efficiently and safely, performing routine inspections, troubleshooting issues, and conducting necessary repairs. The Machinery Staff plays a crucial role in minimizing downtime, enhancing productivity, and ensuring the safety of operations by adhering to maintenance schedules and safety protocols.",
    },
    // {
    //     id: 12,
    //     title: "Admin Staff",
    //     location: "Calululut, CSFP",
    //     type: "Full-Time",
    //     description:
    //         "To provide administrative support to ensure efficient operation of the office. This role involves managing correspondence, scheduling appointments, maintaining records, and assisting with various office tasks. The Admin Staff plays a crucial role in supporting team members, facilitating communication, and contributing to the overall productivity and organization of the workplace.",
    // },
    // {
    //     id: 12,
    //     title: "General Auditor",
    //     location: "Calululut, CSFP",
    //     type: "Full-Time",
    //     description:
    //         "To conduct thorough examinations and evaluations of an organization's financial records, operations, and internal controls to ensure accuracy, compliance with regulations, and the effectiveness of processes. This role involves identifying areas of risk, recommending improvements, and providing insights to enhance overall organizational performance. The General Auditor plays a critical role in safeguarding assets, ensuring transparency, and supporting informed decision-making within the company.",
    // }
];

const CareerList = () => {
    // State to manage modal visibility and selected job
    const [selectedJob, setSelectedJob] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const closeModal = () => {
        // Add delay to allow animation to finish
        setShowModal(false);
        setTimeout(() => setSelectedJob(null), 300); // match animation duration
    };
    return (
        <>
            <section className="container pt-5 md:pt-32 mb-10 isolate overflow-hidden lg:overflow-visible">
                <div className="mx-auto flex flex-col items-start justify-start text-left mb-1 px-5 sm:py-5">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-once="true"
                        className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
                        ⸻ OUR CAREER OPPORTUNITIES
                    </h1>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-once="true"
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {jobList.map((job) => (

                        <div
                            key={job.id}
                            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative cursor-pointer overflow-hidden ring-1 ring-gray-900/5 transform hover:scale-105 hover:-translate-y-1 "
                        >
                            <span className="absolute top-2 left-2 z-0 h-1 w-1 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[180] -translate-y-4 -translate-x-4">
                            </span>
                            <span className="absolute hidden top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                            </span>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-white relative font-sans text-shadow-lg group-hover:translate-x-4 transition-all duration-300 tracking-wide">{job.title}</h2>
                                <p className="text-sm text-gray-500 mb-2 group-hover:text-white relative font-sans flex align-middle transition-all duration-300 tracking-wide">{job.location} · {job.type}</p>
                                <p className="text-gray-700 text-sm mb-2 group-hover:text-white relative font-sans flex align-middle transition-all duration-300 tracking-wide">
                                    {job.description.slice(0, 100)}...
                                </p>
                                <button
                                    onClick={() => openModal(job)}
                                    className="text-blue-600 text-sm hover:underline group-hover:text-white relative font-sans flex align-middle transition-all duration-300 tracking-wide"
                                >
                                    View More
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedJob && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        {/* Overlay */}
                        <div
                            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${showModal ? "opacity-100" : "opacity-0"
                                }`}
                            onClick={closeModal}
                        ></div>

                        {/* Modal Box */}
                        <div
                            className={`bg-white p-6 rounded-xl w-full max-w-lg shadow-lg z-50 transform transition-all duration-300 ${showModal ? "scale-100 opacity-100" : "scale-95 opacity-0"
                                }`}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-4 text-gray-600 hover:text-black text-2xl"
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedJob.title}</h2>
                            <p className="text-sm text-gray-500 mb-4">
                                {selectedJob.location} · {selectedJob.type}
                            </p>
                            <p className="text-gray-700 mb-6">{selectedJob.description}</p>
                            <button
                                onClick={() =>
                                    window.open(
                                        `https://mail.google.com/mail/?view=cm&fs=1&to=main@rbppetrostar.com&su=Application for ${encodeURIComponent(selectedJob.title)}`,
                                        "_blank"
                                    )
                                }
                                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
                            >
                                Apply Now via Gmail
                            </button>
                            <br />
                            <p className="mt-2">or send your resume to  : main@rbppetrostar.com</p>
                        </div>
                    </div>
                )}
            </section>
            <Footer />
        </>
    )
}

export default CareerList