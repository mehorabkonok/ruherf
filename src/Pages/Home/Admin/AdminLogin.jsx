import React from "react";
import auth from "../../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const AdminLogin = () => {
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const adminEmail = e.target.email.value;
    const adminPassword = e.target.password.value;
    console.log(`User: ${adminEmail}. Pass: ${adminPassword}`);
    e.target.reset();

    // signing in using existing email and password
    console.log(auth); //checking the output
    signInWithEmailAndPassword(auth, adminEmail, adminPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`Sucessfully signed in with user ${user}`);
        alert("Sucess");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Got error: ${errorCode}:${errorMessage}  `);
      });
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
            <label htmlFor="username" className="mb-1 font-medium text-red-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter admin username"
              className="input input-bordered border-red-700 focus:border-red-700 focus:ring-red-700 w-full"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium text-red-700">
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
