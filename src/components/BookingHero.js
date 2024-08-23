import React from "react";
import backgroundImage from "./../image/Rectangle6.png";

const BookingHeroSection = () => {
  return (
    <div
      className="relative flex items-center justify-center md:text-center mt-[6rem] h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#2E3795] opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative flex flex-col items-center text-white px-4 md:px-6 z-10">
        <h1 className="text-2xl md:text-7xl font-bold mb-4 md:mb-8 text-center leading-snug md:leading-tight">
          CONNECT WITH OUR CHURCH
        </h1>
        <p className="text-sm md:text-xl font-light mb-6 md:mb-8 leading-relaxed md:leading-loose text-center md:w-3/5">
          Seeking guidance, prayer, counselling, or simply wish to connect? Our
          church is here for you. Schedule an appointment for counselling, 
          prayer with our pastor, or anything you'd like to discuss with the 
          pastorate.
        </p>
      </div>
    </div>
  );
};

export default BookingHeroSection;
