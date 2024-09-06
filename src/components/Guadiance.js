import React from "react";
import ContactButton from "./ContactButton";
import heroImage from "./../image/redem.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GudaianceSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate("/booking"); // Navigate to the About Us page
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 bg-white">
      {/* Image Section */}
      <motion.div
        className="w-full md:w-3/5 h-auto"
        initial={{ opacity: 0, x: -100 }} // Starts from left and faded out
        animate={{ opacity: 1, x: 0 }}   // Slides in and becomes visible
        transition={{ duration: 1 }}     // Adjust the timing as needed
      >
        <img
          src={heroImage}
          alt="Pastor"
          className="rounded-lg h-auto object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="mt-8 md:mt-0 w-full text-left md:text-left"
        initial={{ opacity: 0, x: 100 }} // Starts from right and faded out
        animate={{ opacity: 1, x: 0 }}   // Slides in and becomes visible
        transition={{ duration: 1 }}     // Adjust the timing as needed
      >
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 leading-tight">
          Do you need Guidance?
        </h1>
        <p className="mt-4 text-base md:text-xl text-gray-600">
          Whether you seek guidance, prayer Pathner, or simply <br /> wish to
          connect, our church is here for you. Schedule <br /> an appointment
          for counselling, prayer sessions.
        </p>
        <div className="mt-1 md:mt-8">
          <ContactButton label="Connect" onClick={handleClick} />
        </div>
      </motion.div>
    </div>
  );
};

export default GudaianceSection;
