import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ContactButton from "./ContactButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={require('./../image/logo.png')}
              alt="Logo"
              className="h-15 md:h-15 w-auto md:w-80"
            />
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-800 ${isActive ? 'font-bold text-indigo-700' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-800 ${isActive ? 'font-bold text-indigo-700' : ''}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-800 ${isActive ? 'font-bold text-indigo-700' : ''}`
              }
            >
              Bookings
            </NavLink>
            <NavLink
              to="/give"
              className={({ isActive }) =>
                `text-gray-600 hover:text-gray-800 ${isActive ? 'font-bold text-indigo-700' : ''}`
              }
            >
              Give
            </NavLink>
            <ContactButton label="Contact Us" />
          </nav>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu dropdown */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ${isActive ? 'font-bold text-indigo-700' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ${isActive ? 'font-bold text-indigo-700' : ''}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ${isActive ? 'font-bold text-indigo-700' : ''}`
              }
            >
              Booking
            </NavLink>
            <NavLink
              to="/give"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ${isActive ? 'font-bold text-indigo-700' : ''}`
              }
            >
              Give
            </NavLink>
            <div className="mt-4">
              <ContactButton label="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
