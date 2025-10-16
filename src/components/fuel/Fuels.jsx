// import React from 'react'
// import Footer from '../footer/Footer'
// import "./Fuels.css"

// const Fuels = () => {
//     return (
//         <>  
//         <section className="container pt-5 md:pt-32 mb-36 isolate overflow-hidden lg:overflow-visible">
//             <div className="mx-auto flex flex-col items-start justify-start text-left mb-5 px-5 sm:py-5">
//                 <h1
//                     data-aos="fade-right"
//                     data-aos-duration="300"
//                     data-aos-once="true"
//                     className='font-sans font-semibold text-red-600 text-2xl md:text-xl'>
//                     ⸻ FUEL PRODUCTS
//                 </h1>
//             </div>

//             <div className="mb-10 h-full w-full flex items-center justify-center">
//                 <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">

//                     {/* News Card 1 */}
//                     <div className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1 ">
//                         <span className="absolute top-2 left-2 z-0 h-1 w-1 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[180] -translate-y-4 -translate-x-4">
//                         </span>
//                         <span className="absolute hidden top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
//                                 <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
//                                 <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
//                             </svg>
//                         </span>
//                         <div className="flex items-center justify-center h-52 w-80 cursor-pointer overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 ">
//                             <img src="/fuelpump/yellowfuelpump.png" className="h-60 absolute -translate-x-11 rotate-5 group-hover:rotate-12 duration-500 group-hover:-translate-y-2" alt="" />
//                             <h1 className="relative font-sans font-extrabold text-4xl text-shadow-lg text-yellow-400 text-center inline-block align-middle translate-x-10 transition-all duration-300 group-hover:text-white tracking-wide">MEGA <br /> DIESEL</h1>
//                         </div>
//                     </div>

//                     {/* News Card 2 */}
//                     <div className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1 ">
//                         <span className="absolute top-2 left-2 z-0 h-1 w-1 rounded-full bg-green-700 transition-all duration-300 group-hover:scale-[180] -translate-y-4 -translate-x-4">
//                         </span>
//                         <span className="absolute hidden top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
//                                 <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
//                                 <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
//                             </svg>
//                         </span>
//                         <div className="flex items-center justify-center h-52 w-80 cursor-pointer overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 ">
//                             <img src="/fuelpump/greenfuelpump.png" className="h-60 absolute -translate-x-11 rotate-5 group-hover:rotate-12 duration-500 group-hover:-translate-y-2" alt="" />
//                             <h1 className="relative font-sans font-extrabold text-4xl text-shadow-lg text-green-700 text-center inline-block align-middle translate-x-10 transition-all duration-300 group-hover:text-white">DYNA <br /> UNLEADED</h1>
//                         </div>
//                     </div>

//                     {/* News Card 3 */}
//                     <div className="group relative cursor-pointer overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-gray-900/5 transform transition-all duration-200 hover:scale-105 hover:-translate-y-1 ">
//                         <span className="absolute top-2 left-2 z-0 h-1 w-1 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-[180] -translate-y-4 -translate-x-4">
//                         </span>
//                         <span className="absolute hidden top-2 left-2 h-14 w-14 place-items-center rounded-full bg-red-500 transition-all duration-300 group-hover:bg-red-500">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white transition-all">
//                                 <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
//                                 <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
//                             </svg>
//                         </span>
//                         <div className="flex items-center justify-center h-52 w-80 cursor-pointer overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 ">
//                             <img src="/fuelpump/redfuelpump.png" className="h-60 absolute -translate-x-11 rotate-5 group-hover:rotate-12 duration-500 group-hover:-translate-y-2" alt="" />
//                             <h1 className="relative font-sans font-extrabold text-4xl text-shadow-lg text-red-700 text-center inline-block align-middle translate-x-10 transition-all duration-300 group-hover:text-white">POWER <br /> PREMIUM</h1>
//                         </div>
//                     </div>

//                     {/* News Card 4 */}


//                 </div>
//             </div>
//         </section>
//         <Footer />
//         </>

//     )
// }

// export default Fuels



import {
    Droplet,
    Zap,
    Shield,
    Gauge,
    Sparkles,
    TrendingUp,
    Award,
    CheckCircle2,
} from "lucide-react"
import Footer from '../footer/Footer'

// You can replace these UI components with your own reusable ones
// or simple div wrappers if you’re not using shadcn/ui
export const Badge = ({ className, children }) => (
    <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${className}`}
    >
        {children}
    </span>
)

export const Card = ({ className, children }) => (
    <div className={`rounded-2xl overflow-hidden bg-white ${className}`}>{children}</div>
)

export const CardContent = ({ className, children }) => (
    <div className={className}>{children}</div>
)

const fuelProducts = [
    {
        id: 1,
        name: "MEGA DIESEL",
        tagline: "Maximum Power & Efficiency",
        color: "yellow",
        bgGradient: "from-yellow-50 to-amber-50",
        accentColor: "text-yellow-600",
        badgeColor: "bg-yellow-500",
        hoverColor: "group-hover:bg-yellow-500",
        image: "/fuelpump/yellowfuelpump.png",
        octane: "Cetane 51+",
        type: "Premium Diesel",
        features: [
            "Advanced detergent additives",
            "Superior engine protection",
            "Reduced emissions",
            "Enhanced fuel economy",
        ],
        benefits: [
            { icon: Zap, text: "Up to 5% better fuel economy" },
            { icon: Shield, text: "Extended engine life" },
            { icon: Droplet, text: "Cleaner combustion" },
        ],
        specs: {
            sulfur: "< 10 ppm",
            lubricity: "Enhanced",
            stability: "Superior",
        },
    },
    {
        id: 2,
        name: "DYNA UNLEADED",
        tagline: "Everyday Performance",
        color: "green",
        bgGradient: "from-green-50 to-emerald-50",
        accentColor: "text-green-700",
        badgeColor: "bg-green-600",
        hoverColor: "group-hover:bg-green-600",
        image: "/fuelpump/greenfuelpump.png",
        octane: "RON 91",
        type: "Regular Unleaded",
        features: ["Consistent quality", "Reliable performance", "Cost-effective solution", "Wide compatibility"],
        benefits: [
            { icon: Gauge, text: "Smooth engine operation" },
            { icon: TrendingUp, text: "Value for money" },
            { icon: CheckCircle2, text: "Trusted formula" },
        ],
        specs: {
            octane: "91 RON",
            ethanol: "Up to 10%",
            additives: "Standard",
        },
    },
    {
        id: 3,
        name: "POWER PREMIUM",
        tagline: "Ultimate Performance",
        color: "red",
        bgGradient: "from-red-50 to-rose-50",
        accentColor: "text-red-700",
        badgeColor: "bg-red-600",
        hoverColor: "group-hover:bg-red-600",
        image: "/fuelpump/redfuelpump.png",
        octane: "RON 95+",
        type: "Premium Unleaded",
        features: ["High-octane formula", "Maximum power output", "Premium additives", "Performance optimization"],
        benefits: [
            { icon: Sparkles, text: "Peak engine performance" },
            { icon: Award, text: "Premium quality" },
            { icon: Zap, text: "Responsive acceleration" },
        ],
        specs: {
            octane: "95+ RON",
            ethanol: "Up to 10%",
            additives: "Premium blend",
        },
    },
]

const Fuels = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-16 md:pt-32 pb-12">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="h-px w-8 bg-red-600" />
                        <span className="text-red-600 font-semibold text-sm tracking-wider uppercase">
                            Fuel Products
                        </span>
                        <div className="h-px w-8 bg-red-600" />
                    </div>
                    <h1 className="font-sans font-bold text-4xl md:text-6xl text-neutral-900 mb-6 text-balance">
                        Premium Fuel Solutions for Every Journey
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 leading-relaxed text-balance">
                        Engineered for performance, designed for reliability. Choose the fuel that powers your drive with
                        cutting-edge formulations and proven results.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid gap-8 md:gap-10 grid-cols-1 lg:grid-cols-3 mb-20">
                    {fuelProducts.map((product) => (
                        <Card
                            key={product.id}
                            className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <CardContent className="p-0">
                                {/* Product Image Section */}
                                <div
                                    className={`relative h-72 bg-gradient-to-br ${product.bgGradient} overflow-hidden`}
                                >
                                    <div
                                        className={`absolute inset-0 ${product.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    />

                                    {/* Badge */}
                                    <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white border-0 z-10`}>
                                        {product.type}
                                    </Badge>

                                    {/* Fuel Pump Image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-64 object-contain -translate-x-8 rotate-3 group-hover:rotate-6 group-hover:-translate-y-2 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Product Name Overlay */}
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                        <h2
                                            className={`font-sans font-extrabold text-4xl ${product.accentColor} group-hover:text-white transition-colors duration-500 text-right leading-tight`}
                                        >
                                            {product.name.split(" ")[0]}
                                            <br />
                                            {product.name.split(" ")[1]}
                                        </h2>
                                    </div>

                                    {/* Octane Rating */}
                                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <span className="font-bold text-neutral-900 text-sm">{product.octane}</span>
                                    </div>
                                </div>

                                {/* Product Details Section */}
                                <div className="p-6 bg-white">
                                    <p className="text-neutral-600 text-sm mb-4 italic">{product.tagline}</p>

                                    {/* Benefits */}
                                    <div className="space-y-3 mb-6">
                                        {product.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className={`${product.accentColor} flex-shrink-0`}>
                                                    <benefit.icon className="w-5 h-5" />
                                                </div>
                                                <span className="text-sm text-neutral-700">{benefit.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <div className="border-t border-neutral-200 pt-4 mb-4">
                                        <h3 className="font-semibold text-neutral-900 text-sm mb-3 uppercase tracking-wide">
                                            Key Features
                                        </h3>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                                                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${product.accentColor}`} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Specifications */}
                                    <div className="border-t border-neutral-200 pt-4">
                                        <h3 className="font-semibold text-neutral-900 text-sm mb-3 uppercase tracking-wide">
                                            Specifications
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {Object.entries(product.specs).map(([key, value]) => (
                                                <div key={key} className="bg-neutral-50 rounded-lg p-3">
                                                    <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">
                                                        {key}
                                                    </div>
                                                    <div className="text-sm font-semibold text-neutral-900">{value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Trust Section */}
                <div className="max-w-4xl mx-auto text-center py-16 border-t border-neutral-200">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
                        Trusted by Drivers Nationwide
                    </h2>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                        Our fuel products meet the highest industry standards and are formulated with advanced additives to ensure
                        optimal performance, efficiency, and engine protection.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
                            <div className="text-sm text-neutral-600">Purity Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">21+</div>
                            <div className="text-sm text-neutral-600">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">1M+</div>
                            <div className="text-sm text-neutral-600">Happy Customers</div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Fuels
