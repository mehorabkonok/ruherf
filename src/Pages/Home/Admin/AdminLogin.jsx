import React from "react";

const AdminLogin = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(`User: ${username}. Pass: ${password}`);
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-red-900 mt-[-64px]">
            <div className="w-full max-w-sm p-8 bg-red-50 border-l-4 border-red-700 rounded-lg shadow-2xl">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-red-700">Admin Login</h2>
                    <p className="text-sm text-red-800 mt-1">
                        ⚠️ Restricted Access – Authorized Personnel Only
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Username */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="username"
                            className="mb-1 font-medium text-red-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter admin username"
                            className="input input-bordered border-red-700 focus:border-red-700 focus:ring-red-700 w-full"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="password"
                            className="mb-1 font-medium text-red-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            className="input input-bordered border-red-700 focus:border-red-700 focus:ring-red-700 w-full"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-error w-full mt-2 hover:bg-red-700/90"
                    >
                        Login
                    </button>
                </form>

                {/* Footer Note */}
                <p className="text-center text-xs text-red-800 mt-6">
                    🚫 Unauthorized access is strictly prohibited
                </p>
                <p className="text-center text-xs text-red-800 mt-1">
                    Doing so may lead to disciplinary and legal actions.
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
