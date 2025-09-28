import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center py-12 px-4">

            {/* Card Container */}
            <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 border border-blue-200">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-blue-800 mb-2">Join RUHERF</h1>
                    <p className="text-blue-600">
                        Create your account to access resources, events, and connect with our community.
                    </p>
                </div>

                {/* Registration Form */}
                <form className="space-y-5">

                    {/* Full Name */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-blue-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full focus:border-blue-400 focus:ring focus:ring-blue-200 rounded-lg"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-blue-700 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="input input-bordered w-full focus:border-blue-400 focus:ring focus:ring-blue-200 rounded-lg"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-blue-700 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="input input-bordered w-full focus:border-blue-400 focus:ring focus:ring-blue-200 rounded-lg"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-blue-700 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="input input-bordered w-full focus:border-blue-400 focus:ring focus:ring-blue-200 rounded-lg"
                            required
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="checkbox checkbox-primary" />
                        <span className="text-blue-600 text-sm">
                            I agree to the <a href="#" className="text-blue-800 font-medium hover:underline">Terms & Conditions</a>
                        </span>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                    >
                        Register
                    </button>

                </form>

                {/* Login Redirect */}
                <p className="mt-6 text-center text-blue-700 text-sm">
                    Already have an account? <a href="/login" className="text-blue-800 font-semibold hover:underline">Login here</a>
                </p>

            </div>
        </div>
    );
};

export default Register;
