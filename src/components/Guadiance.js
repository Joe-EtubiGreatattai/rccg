import React from "react";
import ContactButton from "./ContactButton";
import heroImage from "./../image/redem.png";
import { useNavigate } from "react-router-dom"; 

const GudaianceSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate("/booking"); // Navigate to the About Us page
  };
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
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 leading-tight">
        Do you need Guidance?
        </h1>
        <p className="mt-4 text-base md:text-xl text-gray-600">
          Whether you seek guidance, prayer Pathner, or simply wish to connect,
          our church is here for you. Schedule an appointment for counselling,
          prayer sessions.
        </p>
        <div className="mt-1 md:mt-8">
          <ContactButton label="Connect"   onClick={handleClick}/>
        </div>
      </div>
    </div>
  );
};

export default GudaianceSection;