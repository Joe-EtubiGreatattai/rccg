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

      <div className="relative flex flex-col items-center text-white px-1 z-10">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          CONNECT WITH OUR CHURCH
        </h1>
        <p className="text-lg md:text-xl font-light mb-6 md:w-1/2">
          seeking for guidance, prayer, counselling or simply wish to connect,
          our church is here for you. Schedule an appointment for counselling,
          prayer with our pastor and anything you want to discuss with the
          pastorate.
        </p>
      </div>
    </div>
  );
};

export default BookingHeroSection;
