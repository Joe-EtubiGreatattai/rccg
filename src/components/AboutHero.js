import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import backgroundImage from "./../image/Rectangle4.png";

const AboutHero = () => {
  return (
    <div
      className="relative flex items-center justify-center md:text-center mt-[5rem] md:mt-[6rem] h-[55vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#2E3795] opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative flex flex-col items-center text-white px-1 z-10">
        <motion.h1
          className="text-2xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }} // Starts from the left and is faded out
          animate={{ opacity: 1, x: 0 }}    // Moves to the original position and fades in
          transition={{ duration: 1 }}      // Adjust duration as needed
        >
          WELCOME TO THE HOUSE OF MERCY <br /> HIGHWYCOMB
        </motion.h1>
      </div>
    </div>
  );
};

export default AboutHero;
