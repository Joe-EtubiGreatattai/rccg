import React from "react";
import { motion } from "framer-motion";
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

      <motion.div
        className="relative text-white max-w-2xl px-4 z-10"
        initial={{ opacity: 0, y: 50 }}  // Start faded out and below position
        animate={{ opacity: 1, y: 0 }}   // Fade in and move up to original position
        transition={{ duration: 1 }}     // Adjust duration for a smooth effect
      >
        <h1 className="text-lg sm:text-xl font-bold mb-4 leading-tight">
          To Support Our Mission and Ministries
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light mb-6 leading-relaxed">
          Whether you seek guidance, prayer, or simply wish to connect, our
          church is here for you. Schedule an appointment for counseling, prayer
          sessions, and more with ease.
        </p>
      </motion.div>
    </div>
  );
};

export default SupportSection;
