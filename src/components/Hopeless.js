import React from "react";
import backgroundImage from "./../image/people.png";
import { motion } from "framer-motion";

const MotionH1 = motion.h1; // Create a motion-enabled h1

const Hopeless = () => {
  return (
    <div
      className="relative flex items-center justify-center md:text-center mt-[6rem] h-[45vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#2E3795] opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative flex flex-col items-center text-white px-1 z-10">
        <MotionH1
          initial={{ opacity: 0, x: -20 }} // Initial state: hidden and positioned 20px to the left
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
          transition={{ duration: 0.8 }} // Duration of the fade-in effect
          className="text-2xl md:text-7xl font-bold mb-4"
        >
          HOPELESSNESS IS DEJECTED
        </MotionH1>
      </div>
    </div>
  );
};

export default Hopeless;
