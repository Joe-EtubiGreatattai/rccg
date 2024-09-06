import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Importing framer motion
import ContactButton from "./ContactButton";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate("/about-us");
  };

  // Define the animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0 },   // Slide in and fade in
  };

  return (
    <div className="relative h-screen flex items-center justify-start">
      <img
        src={require("./../image/bg-1.png")}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Animated text container */}
      <div className="relative z-10 container mx-auto px-5 md:px-20 text-white">
        {/* Animate the paragraph */}
        <motion.p
          className="text-base md:text-2xl md:mb-2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1 }}
        >
          Welcome To Our Church
        </motion.p>

        {/* Animate the header */}
        <motion.h1
          className="text-2xl md:text-7xl font-bold mb-3 md:mb-6 leading-tight"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1, delay: 0.2 }} // Add a slight delay for the second element
        >
          BECOME A PART OF
          <br />
          OUR COMMUNITY
        </motion.h1>

        <ContactButton
          label="About Us"
          onClick={handleAboutUsClick}
        />
      </div>
    </div>
  );
};

export default HeroSection;
