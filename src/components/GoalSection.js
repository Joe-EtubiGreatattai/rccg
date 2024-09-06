import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import backgroundImage from "./../image/goal.png";

const GoalSection = () => {
  // Define the animation for sliding in from the bottom
  const slideInBottom = {
    hidden: { opacity: 0, y: 100 }, // Start off-screen below
    visible: { opacity: 1, y: 0 },  // Slide in to normal position
  };

  return (
    <div
      className="relative flex items-center justify-center md:text-center h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#2E3795] opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Sliding in the text from the bottom */}
      <motion.div
        className="relative text-white max-w-2xl px-6 md:px-8 z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={slideInBottom}
        transition={{ duration: 1 }}  // Control the speed of the animation
      >
        <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-snug md:leading-tight">
          Our Goal Is To
        </h1>
        <p className="text-sm md:text-xl font-light mb-6 leading-relaxed md:leading-loose">
          Make Heaven, Raise Generals In Faith, Take Many Along To Heaven, Be A
          Blessing To Our Generation
        </p>
      </motion.div>
    </div>
  );
};

export default GoalSection;
