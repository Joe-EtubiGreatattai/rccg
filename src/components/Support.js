import React from "react";
import backgroundImage from "./../image/goal.png";

const SupportSection = () => {
  return (
    <div
      className="relative flex items-center justify-center md:text-center h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#2E3795] opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative text-white max-w-2xl px-4 z-10">
        <h1 className="md:text-xl font-bold mb-4">
          TO SUPPORT OUR MISSION AND MINISTRIES.
        </h1>
        <p className="md:text-xl font-light mb-6">
          Whether you seek guidance, prayer, or simply wish to connect, our
          church is here for you. Schedule an appointment for counseling, prayer
          sessions, and more with ease.
        </p>
      </div>
    </div>
  );
};

export default SupportSection;
