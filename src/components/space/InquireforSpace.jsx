// import React from 'react'
// import Footer from '../footer/Footer'
// import Swal from 'sweetalert2'
// import {
//     EyeIcon,
//     PaintBrushIcon,
//     Squares2X2Icon,
//     UserIcon,
//     EnvelopeIcon,
//     PhoneIcon,
//     ChatBubbleLeftRightIcon,
// } from "@heroicons/react/24/outline";

// const InquireforSpace = () => {
//     // For web3forms
//     const [result, setResult] = React.useState("");

//     const onSubmit = async (event) => {

//         event.preventDefault();
//         setResult("Sending....");
//         const formData = new FormData(event.target);

//         formData.append("access_key", "8b325528-e4ac-4782-857e-fcde03a668e8");

//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const data = await response.json();

//         if (data.success) {
//             Swal.fire({
//                 title: "Success!",
//                 text: "Message sent successfully!",
//                 icon: "success"
//             });
//             event.target.reset();
//         } else {
//             console.log("Error", data);
//             setResult(data.message);
//         }
//     };
//     // end of web3forms

//     return (
//         <>
//             <div className="min-h-screen bg-white md:mt-16">
//                 {/* Hero Section */}
//                 <section className="relative">
//                     <img
//                         src="/stall_for_lease.png" // Replace with your cleaned image path
//                         alt="Stalls for Lease"
//                         className="w-full h-[500px] object-cover brightness-90"
//                     />
//                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                         <div className="text-center text-white px-4">
//                             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                                 Commercial Stalls for Lease
//                             </h1>
//                             <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
//                                 Prime location. Clean, secure, and accessible — perfect for your business.
//                             </p>
//                             <a
//                                 href="#contact"
//                                 className="bg-red-600 font-medium hover:bg-red-700 text-white py-3 px-6 rounded shadow transition"
//                             >
//                                 Inquire Now
//                             </a>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Details Section */}
//                 <section className="py-16 px-4 md:px-16 bg-gray-50">
//                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
//                         Why Lease With Us?
//                     </h2>
//                     <div className="container grid md:grid-cols-3 gap-8 text-center">
//                         <div className="flex flex-col items-center">
//                             <EyeIcon className="w-10 h-10 text-red-600 mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Great Visibility</h3>
//                             <p className="text-gray-600">
//                                 Located in a high-traffic area with excellent frontage.
//                             </p>
//                         </div>
//                         <div className="flex flex-col items-center">
//                             <PaintBrushIcon className="w-10 h-10 text-red-600 mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Freshly Painted</h3>
//                             <p className="text-gray-600">
//                                 Cleaned and newly painted for a professional look.
//                             </p>
//                         </div>
//                         <div className="flex flex-col items-center">
//                             <Squares2X2Icon className="w-10 h-10 text-red-600 mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Flexible Lease</h3>
//                             <p className="text-gray-600">
//                                 Choose short- or long-term options that suit your needs.
//                             </p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Contact Section */}
//                 <section id="contact" className="bg-gray-100 py-12 px-4 md:px-16 flex flex-col items-center justify-center">
//                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
//                     <div
//                         data-aos="fade-up"
//                         data-aos-duration="400"
//                         data-aos-once="true"
//                         className="card h-fit max-w-7xl p-5 md:p-12 border bg-white border-gray-400 shadow-2xl rounded-lg" id="form">
//                         <h2 className="mb-4 text-2xl font-semibold text-gray-900">Contact us for your space inquiry</h2>
//                         <form onSubmit={onSubmit}>
//                             <div className="mb-6">
//                                 <div className="mx-0 mb-1 sm:mb-4">
//                                     <div className="mx-0 mb-1 sm:mb-4">
//                                         <label for="name" className="pb-1 text-xs uppercase tracking-wider"></label>
//                                         <input type="text" autocomplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="name" required></input>
//                                     </div>
//                                     <div className="mx-0 mb-1 sm:mb-4">
//                                         <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label>
//                                         <input type="email" autocomplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email" required></input>
//                                     </div>
//                                     <div className="mx-0 mb-1 sm:mb-4">
//                                         <label for="prefered location" className="pb-1 text-xs uppercase tracking-wider"></label>
//                                         <input type="text" autocomplete="prefered-location" placeholder="Prefered location" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="prefered location" required></input>
//                                     </div>
//                                     <div className="mx-0 mb-1 sm:mb-4">
//                                         <label for="type of business" className="pb-1 text-xs uppercase tracking-wider"></label>
//                                         <input type="text" autocomplete="type-of-business" placeholder="Type of business" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="type of business" required></input>
//                                     </div>
//                                 </div>

//                                 <div className="mx-0 mb-1 sm:mb-4">
//                                     <label for="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
//                                     <textarea id="textarea" name="message" cols="30" rows="5" placeholder="Write your inquiry..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required></textarea>
//                                 </div>
//                             </div>
//                             <div className="text-center">
//                                 <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Send Message</button>
//                             </div>
//                         </form>
//                     </div>
//                 </section>
//                 {/* <section id="contact" className="bg-white py-16 px-4 md:px-16">
//                     <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
//                         Contact Us
//                     </h2>
//                     <form className="max-w-2xl mx-auto grid gap-5">
//                         <div className="flex items-center border rounded p-3 gap-3">
//                             <UserIcon className="w-5 h-5 text-gray-400" />
//                             <input
//                                 type="text"
//                                 placeholder="Full Name"
//                                 className="w-full outline-none"
//                             />
//                         </div>
//                         <div className="flex items-center border rounded p-3 gap-3">
//                             <EnvelopeIcon className="w-5 h-5 text-gray-400" />
//                             <input
//                                 type="email"
//                                 placeholder="Email Address"
//                                 className="w-full outline-none"
//                             />
//                         </div>
//                         <div className="flex items-center border rounded p-3 gap-3">
//                             <PhoneIcon className="w-5 h-5 text-gray-400" />
//                             <input
//                                 type="tel"
//                                 placeholder="Phone Number"
//                                 className="w-full outline-none"
//                             />
//                         </div>
//                         <div className="flex items-start border rounded p-3 gap-3">
//                             <ChatBubbleLeftRightIcon className="w-5 h-5 text-gray-400 mt-1" />
//                             <textarea
//                                 rows={4}
//                                 placeholder="Your message..."
//                                 className="w-full outline-none"
//                             ></textarea>
//                         </div>
//                         <button
//                             type="submit"
//                             className="bg-red-600 hover:bg-red-700 text-white py-3 rounded transition"
//                         >
//                             Submit Inquiry
//                         </button>
//                     </form>
//                 </section> */}
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default InquireforSpace



import React, { useState } from "react";
import Footer from "../footer/Footer";
import Swal from "sweetalert2";
import {
  PaintBrushIcon,
  Squares2X2Icon,
  CheckCircleIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const InquireforSpace = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "8b325528-e4ac-4782-857e-fcde03a668e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      event.target.reset();
      setResult("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px]">
          <img
            src="/stall_for_lease.png"
            alt="Commercial Stalls for Lease"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <CheckCircleIcon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">
                  Prime Commercial Spaces Available
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Your Business
                <span className="block text-red-600">Deserves the Best</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Premium commercial stalls in high-traffic locations. Clean,
                secure, and ready for your success story.
              </p>
              <a
                href="#contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule a Viewing
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose Our Spaces?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to launch and grow your business in one
                perfect location
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <MapPinIcon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Prime Location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Situated in high-traffic areas with excellent visibility and
                  accessibility for maximum customer reach.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <PaintBrushIcon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Move-In Ready</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Freshly renovated and professionally cleaned spaces ready for
                  your business to thrive from day one.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Squares2X2Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Flexible Terms</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose lease options that work for you—short-term trials or
                  long-term commitments available.
                </p>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Additional Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  ["24/7 Security", "Round-the-clock surveillance and security personnel"],
                  ["Ample Parking", "Convenient parking for customers and staff"],
                  ["Modern Utilities", "High-speed internet, reliable power, and water supply"],
                  ["Professional Support", "Dedicated property management team at your service"],
                ].map(([title, desc], i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircleIcon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{title}</h4>
                      <p className="text-muted-foreground text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 px-4 md:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Preferred Location *
                    </label>
                    <input
                      type="text"
                      name="prefered location"
                      placeholder="e.g., Downtown, Mall Area"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Type of Business *
                    </label>
                    <input
                      type="text"
                      name="type of business"
                      placeholder="e.g., Retail, Food & Beverage"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Additional Details *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your space requirements, preferred move-in date, or any questions you have..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={result === "Sending...."}
                  className="w-full bg-red-600 hover:bg-red-700  text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {result === "Sending...." ? "Sending..." : "Submit Inquiry"}
                </button>

                {result && result !== "Sending...." && (
                  <p className="text-sm text-center text-muted-foreground">
                    {result}
                  </p>
                )}
              </form>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-accent" />
                <span>Secure & Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-accent" />
                <span>24-Hour Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-accent" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default InquireforSpace;
