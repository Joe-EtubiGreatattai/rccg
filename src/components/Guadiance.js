import React from "react";
import ContactButton from "./ContactButton";
import heroImage from "./../image/redem.png";

const GudaianceSection = () => {
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
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
        Do you need Guidance?
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Whether you seek guidance, prayer Pathner, or simply wish to connect,
          our church is here for you. Schedule an appointment for counselling,
          prayer sessions.
        </p>
        <div className="mt-8">
          <ContactButton label="Connect" />
        </div>
      </div>
    </div>
  );
};

export default GudaianceSection;
