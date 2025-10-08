import React, { useState } from "react";
import Footer from "../footer/Footer"
import Swal from 'sweetalert2'

const VCardFormRegistration = () => {
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
                text: "Value Card Registration successful!",
                icon: "success"
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    // end of web3forms

    // For Cellphone Number Validation

    const [mobileNumber, setMobileNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;

        if (/^\d*$/.test(value)) {
            setMobileNumber(value);

            // Regular expression to match exactly 10 digits
            const regex = /^\d{11}$/;
            if (value.length === 0 || regex.test(value)) {
                setMessage(value.length === 11 ? 'Mobile number is valid.' : '');
            } else {
                setMessage('Mobile number must be exactly 11 digits.');
            }
        } else {
            setMessage('Only digits are allowed.');
        }
    };

    return (
        <>
            <section>
                <div className="container mx-auto md:mt-20 px-4 py-10 max-w-2xl">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-400 p-6 md:p-10">
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-700">Value Card Registration</h2>
                            <p className="text-gray-500 mt-2">Fill in the details below to get value card</p>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* <!-- First Name --> */}
                                <div className="md:col-span-2">
                                    <label for="firstName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" name="fullname" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300  transition duration-150 ease-in-out" placeholder="Juan Dela Cruz" required />
                                </div>

                                {/* <!-- Address --> */}
                                <div className="md:col-span-2">
                                    <label for="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <textarea id="address" name="address" rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-300  transition duration-150 ease-in-out" placeholder="Enter your full address" required></textarea>
                                </div>

                                {/* <!-- Phone Number --> */}
                                <div className="md:col-span-2">
                                    <label for="phone" className="block text-sm font-medium text-gray-700 mb-1">Cellphone Number</label>
                                    <input type="text" id="phone number" name="ohone_number" maxLength={11} value={mobileNumber} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300  transition duration-150 ease-in-out" placeholder="09123456789" required />
                                    {message && (
                                        <p style={{ color: message === 'Mobile number is valid.' ? 'green' : 'red' }}>
                                            {message}
                                        </p>
                                    )}
                                </div>

                                {/* <!-- Plate Number --> */}
                                <div className="md:col-span-2">
                                    <label for="plate_number" className="block text-sm font-medium text-gray-700 mb-1">Plate Number</label>
                                    <input type="text" id="plate number" name="plate_number" maxLength={6} className="w-full px-4 py-3 rounded-lg border border-gray-300  transition duration-150 ease-in-out" placeholder="QWE123" required />
                                </div>

                                {/* <!-- Valid ID --> */}
                                <div className="md:col-span-2">
                                    <label for="valid_id" className="block text-sm font-medium text-gray-700 mb-1">Valid ID</label>
                                    <select id="valid_id" name="id" className="w-full px-4 py-3 rounded-lg border border-gray-300  transition duration-150 ease-in-out" required>
                                        <option value="" selected disabled>Select your ID</option>
                                        <option value="driver licensed">Driver Licensed</option>
                                    </select>
                                </div>

                            </div>

                            {/* <!-- Submit Button --> */}
                            <div className="mt-8">
                                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default VCardFormRegistration