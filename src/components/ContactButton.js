import React from "react";
import { motion } from "framer-motion";

// Animation variants for button pop-in effect
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ContactButton = ({ label = "Contact Us", onClick }) => {
  return (
    <motion.button
      className="bg-blue-800 text-white px-5 py-5 md:px-12 py-[.5rem] md:py-4 text-xs md:text-xl rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 w-fit md:w-auto"
      onClick={onClick}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {label}
    </motion.button>
  );
};

export default ContactButton;
