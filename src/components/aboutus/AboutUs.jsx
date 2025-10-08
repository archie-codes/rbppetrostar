import React, { useEffect } from 'react';
import Footer from '../footer/Footer'
import { MapPinIcon } from '@heroicons/react/20/solid'
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [location]);
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-16 pt-5 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-once="true"
            className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Who we are
                </h1>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-pretty text-red-600 sm:text-xl">
                  ⸻ HISTORY
                </h2>
                <p className="mt-6 text-xl/8 text-gray-700 text-justify">
                  Founded in 2004, the company began as a small-scale dealer of petroleum products. Its initial operations supported clients with a fleet of approximately fifty (50) service vehicles during the 2004 local elections. Within six months, the business achieved significant growth, expanding its client network and reaching a distribution capacity of up to 500,000 liters of gasoline and diesel per week.                </p>
                <p className="mt-6 text-xl/8 text-gray-700 text-justify">
                  Due to high local demand, the first RBP Gasoline Station located in Dolores, San Fernando, Pampanga was built (July 28, 2009). Back then, the station served as one of the major family businesses.
                </p>
                <p className="mt-6 text-xl/8 text-gray-700 text-justify">
                  As a businessman taking risk in the petroleum industry, the company went through its ups and downs. In 2009, challenges were encountered in the establishment of the RBP Petro Star gasoline station located in Sindalan, San Fernando, Pampanga resulting in the non-operation of the newly constructed branch. But in spite of this trial, RBP Petro Star Dela Paz Gasoline Station in San Fernando, Pampanga was successfully launched in the same year.
                </p>
                <p className="mt-6 text-xl/8 text-gray-700 text-justify">
                  In 2011, the RBP Petrostar Sindalan Gasoline Station eventually became operational. From then on, twelve (12) more RBP Petrostar gasoline stations were established across the 3 provinces in Central Luzon:
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-once="true"
            className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="/calulut_station.jpg "
              className="w-[21.5rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                <span className="inline-flex items-center justify-center gap-1">
                  <MapPinIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <strong className="font-semibold text-gray-900">Pampanga <br /> </strong>
                </span>
                <ul role="list" className="list-disc mt-1 ml-10 text-gray-600 ">
                  <li>Pandan, Angeles City</li>
                  <li>Pulung Bulu, Angeles City</li>
                  <li>Sindalan, San Fernando, Pampanga</li>
                  <li>Delapaz, San Fernando, Pampanga</li>
                  <li>Calulut, San Fernando, Pampanga</li>
                  <li>Panipuan, Mexico, Pampanga</li>
                  <li>Arenas, Arayat, Pampanga</li>
                </ul>
                <span className="inline-flex items-center justify-center gap-1 pt-3">
                  <MapPinIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <strong className="font-semibold text-gray-900">Bataan <br /> </strong>
                </span>
                <ul role="list" className="list-disc mt-1 ml-10 text-gray-600 ">
                  <li>Orani, Bataan</li>
                  <li>Daang Bago, Dinalupihan, Bataan</li>
                </ul>
                <span className="inline-flex items-center justify-center gap-1 pt-3">
                  <MapPinIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <strong className="font-semibold text-gray-900">Nueva Ecija <br /> </strong>
                </span>
                <ul role="list" className="list-disc mt-1 ml-10 text-gray-600 ">
                  <li>Sta Rosa, Nueva Ecija</li>
                  <li>Talavera, Nueva Ecija</li>
                  <li>Cabanatuan, Nueva Ecija</li>
                </ul>
                <p className="mt-6 text-xl/8 text-gray-700 text-justify">
                  To provide access to affordable petroleum products, RBP Petrostar strives to continuously establish more branches across Central and Northern Luzon.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-600">Mission</h2>
                <p className="mt-6 text-justify">
                  The fuel that drives you to your dreams. To be a petroleum service provider for everyone in the state. To fuel with purpose.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-600">Vision</h2>
                <p className="mt-6 text-justify">
                  To be of petroleum service in the region of Pampanga. To be the leading local petroleum brand / company provider in Pampanga / Central Luzon.
                </p>
                {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-600">RBP Core Values</h2>
                <p className="mt-6 text-justify">
                  <strong className="mt-6">R - Reliable:</strong> We deliver on our promises and provide consistent, reliable service to our customers.
                </p>
                <p className="mt-6 text-justify">
                  <strong className="mt-6">B - Better:</strong> We strive to improve our products, services, and operations continuously, aiming to be better today than we were yesterday.
                </p>
                <p className="mt-6 text-justify">
                  <strong className="mt-6">P - Pioneering:</strong> We embrace innovation, taking bold steps to pioneer new energy solutions, products, and services that benefit our customers and the environment.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs