import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl font-extrabold text-red-500 mb-4">⚠️</div>

        <h1 className="text-5xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-6">
          Something went wrong. The page you are looking for might be
          unavailable, removed, or doesn’t exist.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 bg-red-500 hover:bg-sky-500 text-white rounded-md shadow-lg transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
