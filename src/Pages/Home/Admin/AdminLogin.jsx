// import React from 'react';

// const AdminLogin = () => {
//     return (
//         <div>
//             <p>This is only for admin login</p>
//         </div>
//     );
// };

// export default AdminLogin;


// import React from "react";

// const AdminLogin = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-base-200">
//             <div className="card w-full max-w-md shadow-2xl bg-base-100 border border-error">
//                 <div className="card-body">
//                     <h2 className="text-2xl font-bold text-error text-center">
//                         Admin Login
//                     </h2>
//                     <p className="text-center text-sm text-gray-500 mb-4">
//                         ⚠️ Restricted Access: Authorized Personnel Only
//                     </p>

//                     <form>
//                         {/* Username */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Username</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter admin username"
//                                 className="input input-bordered input-error"
//                                 required
//                             />
//                         </div>

//                         {/* Password */}
//                         <div className="form-control mt-4">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Enter password"
//                                 className="input input-bordered input-error"
//                                 required
//                             />
//                         </div>

//                         {/* Submit */}
//                         <div className="form-control mt-6">
//                             <button className="btn btn-error hover:btn-error/80">
//                                 Login
//                             </button>
//                         </div>
//                     </form>

//                     {/* Extra Note */}
//                     <p className="text-center text-xs text-gray-400 mt-4">
//                         Unauthorized access may lead to disciplinary action 🚫
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminLogin;


import React from "react";

const AdminLogin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm p-8 bg-white border-l-4 border-error rounded-lg shadow-lg">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-error">Admin Login</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        ⚠️ Restricted Access – Authorized Personnel Only
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {/* Username */}
                    <div className="flex flex-col">
                        <label htmlFor="username" className="mb-1 font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter admin username"
                            className="input input-bordered border-error focus:border-error focus:ring-error w-full"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1 font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            className="input input-bordered border-error focus:border-error focus:ring-error w-full"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-error w-full mt-2 hover:bg-error/90"
                    >
                        Login
                    </button>
                </form>

                {/* Footer Note */}
                <p className="text-center text-xs text-gray-400 mt-6">
                    🚫 Unauthorized access is strictly prohibited
                </p>
                <p className="text-center text-xs text-gray-400 mt-1">
                    Doing so will lead to disciplinary as well as legal actions.
                </p>
            </div>
        </div >
    );
};

export default AdminLogin;
