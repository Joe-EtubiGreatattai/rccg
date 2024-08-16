import React from "react";
import backgroundImage from "./../image/Rectangle4.png";

const AboutHero = () => {
  return (
    <div
      className="relative flex items-center justify-center md:text-center mt-[6rem] h-[55vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#2E3795] opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative flex flex-col items-center text-white px-1 z-10">
        <h1 className="text-2xl md:text-7xl font-bold mb-4">
            WELCOME TO THE HOUSE OF MERCY <br/> HIGHWYCOMB
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;