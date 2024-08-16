import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 z-50">
      <div className="container mx-auto px-4">
        <div className="relative w-full flex justify-center -mt-16 sm:-mt-20 mb-8">
          <div className="bg-indigo-700 w-full sm:w-3/4 lg:w-2/3 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between">
            <span className="text-base md:text-lg font-semibold text-white mb-4 sm:mb-0">
              Join Our Mailing List
            </span>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto">
              <input
                type="email"
                placeholder="Yourmail@gmail.com"
                className="px-4 py-2 rounded-md text-gray-900 mb-2 sm:mb-0 sm:rounded-l-md text-sm md:text-base"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md sm:rounded-r-md text-sm md:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src={require("../image/RCCG house of mercy white 1.png")}
              alt="House Of Mercy, Highwycombe"
              className="mb-4 h-10 md:h-12"
            />
            <p className="text-xs md:text-sm mb-2">(480) 555-0103</p>
            <p className="text-xs md:text-sm mb-2">RCCGHouseofmercy@Gmail.Com</p>
            <p className="text-xs md:text-sm">114 Chapel Lane, Highwycombe, HP12 4by</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-start">
            <div className="md:flex-1 mb-4 md:mb-0">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <FaFacebookF className="text-xl md:text-2xl" />
                <FaInstagram className="text-xl md:text-2xl" />
              </div>
            </div>
            <div className="md:flex-1">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Quicklinks</h3>
              <ul className="text-sm md:text-base">
                <li className="mb-2">Home</li>
                <li className="mb-2">About Us</li>
                <li className="mb-2">Booking</li>
                <li>Give</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              DO YOU WANT TO RECEIVE THE LIFE OF CHRIST?
            </h3>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full mb-2 px-4 py-2 rounded text-gray-900 text-sm md:text-base"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full mb-2 px-4 py-2 rounded text-gray-900 text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-2 px-4 py-2 rounded text-gray-900 text-sm md:text-base"
              />
              <button
                type="submit"
                className="bg-indigo-700 text-white px-12 py-3 rounded text-sm md:text-base"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;