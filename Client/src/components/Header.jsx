import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <div className="bg-slate-800 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-extrabold text-white tracking-wide hover:text-slate-300 transition-all duration-300 animate-slide-in">
            CloudeNote
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <Link to="/">
            <li className="text-white text-2xl font-medium hover:text-slate-300 transition-all duration-300 cursor-pointer animate-fade-in">
              Home
            </li>
          </Link>
          <Link to="/AddNote">
            <li className="text-white text-2xl font-medium hover:text-slate-300 transition-all duration-300 cursor-pointer animate-fade-in">
              Add New Note
            </li>
          </Link>
          <Link to="/ProjectDetails">
            <li className="text-white text-2xl font-medium hover:text-slate-300 transition-all duration-300 cursor-pointer animate-fade-in">
              Project Details
            </li>
          </Link>
        </ul>
      </div>

      {/* Hover Effect Shadow Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </div>
  );
};

export default Header;
