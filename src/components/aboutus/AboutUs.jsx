import React, { useEffect } from 'react';
import Footer from '../footer/Footer'
import {
  MapPinIcon,
  BuildingOfficeIcon,
  TruckIcon,
  ChartBarIcon,
  UsersIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/calulut_station.jpg')"
          }}
        ></div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 via-red-800/40 to-red-600/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-red-800/30"></div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-300/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              About RBP Petrostar
            </h1>
            <div className="inline-block bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-lg font-semibold mb-8 shadow-xl border border-red-400/30">
              Fueling Communities Since 2004
            </div>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              From humble beginnings to becoming Central Luzon's trusted petroleum partner,
              we've been <strong className="text-red-200">fueling communities</strong> for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BuildingOfficeIcon className="text-red-600 w-12 h-12" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">11+</div>
              <div className="text-gray-600">Gasoline Stations</div>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TruckIcon className="text-blue-600 w-12 h-12" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
              <div className="text-gray-600">Liters Weekly Capacity</div>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ChartBarIcon className="text-green-600 w-12 h-12" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <UsersIcon className="text-purple-600 w-12 h-12" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Provinces Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">

                  Our Journey
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-xl font-bold text-red-600 mb-2">2004 - The Beginning</h3>
                    <p className="text-gray-700">
                      Founded in 2004, the company began as a small-scale dealer of petroleum products. Its initial operations supported clients with a fleet of approximately fifty (50) service vehicles during the 2004 local elections. Within six months, the business achieved significant growth, expanding its client network and reaching a distribution capacity of up to 500,000 liters of gasoline and diesel per week.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2009 - First Station</h3>
                    <p className="text-gray-700">
                      Opened our first RBP Gasoline Station in Dolores, San Fernando, Pampanga,
                      marking our transition from dealer to station operator.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-bold text-green-600 mb-2">2011 - Expansion</h3>
                    <p className="text-gray-700">
                      RBP Petrostar Sindalan became operational, followed by 12 more stations
                      across Central Luzon's three provinces.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  alt="RBP Petrostar Station"
                  src="/calulut_station.jpg"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving communities across Central Luzon with convenient access to quality fuel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pampanga */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPinIcon className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Pampanga</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Pandan, Angeles City
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Pulung Bulu, Angeles City
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Sindalan, San Fernando
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Delapaz, San Fernando
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Calulut, San Fernando
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Panipuan, Mexico
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Arenas, Arayat
                </li>
              </ul>
            </div>

            {/* Bataan */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPinIcon className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Bataan</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Orani, Bataan
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Daang Bago, Dinalupihan
                </li>
              </ul>
            </div>

            {/* Nueva Ecija */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPinIcon className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Nueva Ecija</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Sta Rosa, Nueva Ecija
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Talavera, Nueva Ecija
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Cabanatuan, Nueva Ecija
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To provide access to affordable petroleum products, RBP Petrostar strives to continuously
              establish more branches across Central and Northern Luzon.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <ShieldCheckIcon className="text-white w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The fuel that drives you to your dreams.
                To be a petroleum service provider for everyone in the state. To fuel with purpose.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <StarIcon className="text-white w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading petroleum service provider in the region of Pampanga and
                Central Luzon, establishing ourselves as the premier local petroleum brand
                that communities trust and rely on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheckIcon className="text-white w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Reliability</h3>
                <p className="text-gray-600">Consistent, dependable service you can count on</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <UsersIcon className="text-white w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Community</h3>
                <p className="text-gray-600">Supporting local communities and businesses</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ChartBarIcon className="text-white w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600">Striving for the highest quality in everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutUs