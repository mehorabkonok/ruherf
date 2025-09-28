import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-24 px-4 bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 mt-[-64px]">

            {/* Card Container */}
            <div className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-sky-200">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-sky-900 mb-2">Join RUHERF</h1>
                    <p className="text-sky-800">
                        Create your account to access resources, events, and connect with our community.
                    </p>
                </div>

                {/* Registration Form */}
                <form className="space-y-6">

                    {/* Full Name */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-sky-900 font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full bg-sky-50 border-sky-300 text-sky-900 placeholder-sky-500 focus:ring focus:ring-sky-200 focus:border-sky-300 rounded-xl py-3 px-4"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-sky-900 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="input input-bordered w-full bg-sky-50 border-sky-300 text-sky-900 placeholder-sky-500 focus:ring focus:ring-sky-200 focus:border-sky-300 rounded-xl py-3 px-4"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-sky-900 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="input input-bordered w-full bg-sky-50 border-sky-300 text-sky-900 placeholder-sky-500 focus:ring focus:ring-sky-200 focus:border-sky-300 rounded-xl py-3 px-4"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-sky-900 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="input input-bordered w-full bg-sky-50 border-sky-300 text-sky-900 placeholder-sky-500 focus:ring focus:ring-sky-200 focus:border-sky-300 rounded-xl py-3 px-4"
                            required
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="checkbox checkbox-sky-500" />
                        <span className="text-sky-700 text-sm">
                            I agree to the <a href="#" className="text-sky-900 font-medium hover:underline">Terms & Conditions</a>
                        </span>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-colors"
                    >
                        Register
                    </button>

                </form>

                {/* Login Redirect */}
                <p className="mt-6 text-center text-sky-700 text-sm">
                    Already have an account? <a href="/login" className="text-sky-900 font-semibold hover:underline">Login here</a>
                </p>

            </div>
        </div>
    );
};

export default Register;
