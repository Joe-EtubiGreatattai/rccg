import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "./../image/Rectangle4.png";

// Animation variants
const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const ContactHero = () => {
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
          variants={fadeInFromLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          SEND US A MESSAGE
        </motion.h1>
      </div>
    </div>
  );
};

export default ContactHero;
