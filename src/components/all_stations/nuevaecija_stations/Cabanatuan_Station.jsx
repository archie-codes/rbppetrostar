import Footer from '../../footer/Footer'

const Cabanatuan_Station = () => {
  return (
    <>
            <section className="container pt-5 md:pt-32 isolate overflow-hidden lg:overflow-visible">
                <div className="mx-auto flex flex-col items-start justify-start text-left px-5 sm:py-5">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-once="true"
                        className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
                        ⸻ CABANATUAN STATION
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-4 p-5">
                    {/* Station Picture */}
                    <div className="sm:col-span-2 sm:row-span-2 ">
                        <img classNames="object-cover" src="/thumbnail.jpg" loading="lazy" />
                    </div>

                    {/* Map */}
                    <div className="sm:row-span-2 sm:col-start-3 bg-slate-50">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d677.919366908813!2d120.97280209916707!3d15.504882125933701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33972938800b3235%3A0x34cc2b7fae4d0be4!2sRBP%20Petrostar%20Fuels%20(Cabanatuan%20City)!5e1!3m2!1sen!2sph!4v1747633414130!5m2!1sen!2sph"
                            width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    {/* Description */}
                    <div className="row-start-2 sm:col-span-2 sm:row-start-3">
                        <h1 className="flex items-center gap-2 tracking-tight text-gray-700 font-semibold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            Description
                        </h1>

                        <ul role="list" className="text-xl list-disc mt-1 ml-10 text-gray-700">
                            <li>Fuel Products Available: Diesel, Unleaded and Premium</li>
                            <li>Value Card Rewards Redemption, (Mon - Sun, 5:00 AM - 9:00 PM)</li>
                            <li>Male & Female Comfort Rooms</li>
                            <li>Pay Parking</li>
                            <li>Air & Water Services</li>
                            <li>Cash and Cashless Accepted</li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div className=" sm:col-start-3 sm:row-start-3">
                        <h2 className='flex items-center gap-2 tracking-tight text-gray-700 font-semibold text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                            Location
                        </h2>
                        <p className='text-xl pl-8 text-gray-700'>Cabanatuan, Nueva Ecija</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
  )
}

export default Cabanatuan_Station