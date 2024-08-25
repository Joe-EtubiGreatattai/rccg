import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ContactButton from "./ContactButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/booking", label: "Bookings" },
    { to: "/give", label: "Give" },
  ];

  const NavItem = ({ to, label, isMobile }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isMobile ? 'block px-3 py-2 rounded-md' : ''} text-sm md:text-base text-gray-600 hover:text-gray-800 ${
          isActive ? "font-bold text-indigo-700" : ""
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center">
          <img
            src={require("./../image/logo.png")}
            alt="Logo"
            className="h-12 md:h-15 w-auto md:w-60"
          />
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavItem key={link.to} {...link} />
            ))}
            <NavLink to="/contactus">
              <ContactButton label="Contact Us" />
            </NavLink>
          </nav>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-1">
            {navLinks.map((link) => (
              <NavItem key={link.to} {...link} isMobile />
            ))}
            <div className="mt-4">
              <NavLink to="/contactus">
                <ContactButton label="Contact Us" />
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;