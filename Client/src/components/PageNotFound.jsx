import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold tracking-wide drop-shadow-lg">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold">
          Uh-oh! We can't find that page.
        </p>
        <p className="mt-2 text-lg text-gray-200">
          It looks like the page you're trying to visit doesn't exist.
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center space-x-4">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-white text-indigo-500 rounded-full shadow-lg hover:bg-gray-100 hover:text-indigo-600 transition-all duration-300"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-white text-pink-500 rounded-full shadow-lg hover:bg-gray-100 hover:text-pink-600 transition-all duration-300"
        >
          Go Back
        </button>
      </div>

      <footer className="mt-12 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} CloudeNote. All rights reserved.
      </footer>
    </div>
  );
};

export default NotFoundPage;
