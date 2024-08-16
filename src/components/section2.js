import React from "react";
import ContactButton from "./ContactButton";
import heroImage from "./../image/woman.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 bg-white">
      <div className="w-full">
        <img
          src={heroImage}
          alt="Pastor"
          className="rounded-lg md:w-2/3 h-auto object-cover"
        />
      </div>
      <div className="mt-8 md:mt-0  w-full text-left md:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          THIS IS <br />
          <span className="text-blue-800">RCCG HOUSE OF MERCY HIGHWYCOMB</span>
        </h1>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600">
          Our Passion Is To Possess Kingdoms And Raise Influential Godly
          Leaders, Generals In Faith And Kingdom Power. To Create An Atmosphere
          Where Mercy Turns As Many People We Come In Contact With Into A
          Blessing For Their Generation.
        </p>
        <div className="mt-4 sm:mt-6 md:mt-8">
          <ContactButton label="About Us" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
