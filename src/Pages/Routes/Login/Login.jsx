import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-green-100 via-green-200 to-green-300 mt-[-64px]">

            {/* Card Container */}
            <div className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10 border border-green-200">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-green-900 mb-2">Welcome Back</h1>
                    <p className="text-green-800">
                        Login to your RUHERF account and explore resources, events, and more.
                    </p>
                </div>

                {/* Login Form */}
                <form className="space-y-6">

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-green-900 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="input input-bordered w-full bg-green-50 border-green-300 text-green-900 placeholder-green-500 focus:ring focus:ring-green-200 focus:border-green-300 rounded-xl"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-green-900 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="input input-bordered w-full bg-green-50 border-green-300 text-green-900 placeholder-green-500 focus:ring focus:ring-green-200 focus:border-green-300 rounded-xl"
                            required
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a href="#" className="text-green-700 text-sm hover:text-green-900 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-colors"
                    >
                        Login
                    </button>

                </form>

                {/* Register Redirect */}
                <p className="mt-6 text-center text-green-700 text-sm">
                    Don't have an account? <Link to="/register" className="text-green-900 font-semibold hover:underline">Register here</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;
