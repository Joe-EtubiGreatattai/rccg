import React from "react";
import ContactButton from "./ContactButton";
import heroImage from "./../image/redem.png";
import { useNavigate } from "react-router-dom"; 

const GudaianceSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate("/booking"); // Navigate to the Booking page
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-16 bg-white">
      <div className="w-full md:w-1/2">
        <img
          src={heroImage}
          alt="Pastor"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <div className="mt-8 md:mt-0 w-full text-left md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 leading-snug md:leading-tight">
          Do you need Guidance?
        </h1>
        <p className="mt-4 text-sm md:text-xl text-gray-600 leading-relaxed md:leading-loose">
          Whether you seek guidance, a prayer partner, or simply wish to connect,
          our church is here for you. Schedule an appointment for counseling or prayer sessions.
        </p>
        <div className="mt-4 md:mt-8">
          <ContactButton label="Connect" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default GudaianceSection;
