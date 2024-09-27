import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "./../image/bg-2.png";
import ContactButton from "./ContactButton";

// Animation variants for fade-in from the bottom
const fadeInFromBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Hover effect for the overlay
const overlayHover = {
  rest: { scale: 1, opacity: 0.95 },
  hover: { scale: 0.9, opacity: 0.7 },
};

const Apply = () => {
  return (
    <div
      className="relative flex items-center justify-center text-left md:text-center md:h-[60vh] py-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* First overlay that shrinks on hover */}
      <motion.div
        className="absolute inset-0"
        variants={overlayHover}
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>

      {/* Second overlay that shrinks on hover */}
      <motion.div
        className="absolute inset-0 bg-black"
        variants={overlayHover}
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>

      {/* Text content */}
      <div className="relative text-white px-4 z-10">
        <motion.h1
          className="text-2xl md:text-5xl font-bold mb-4 mx-auto"
          variants={fadeInFromBottom}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Apply/Support food basket.
        </motion.h1>
        <motion.p
          className="text-sm md:text-xl font-light mb-6 max-w-2xl mx-auto"
          variants={fadeInFromBottom}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Join us for our Food Basket Event to support families in need. Our
          church believes in the power of community, especially during
          challenging times. To ensure we have enough food baskets and
          streamline distribution, please also pre-register to receive a basket.{" "}
          <span className="font-bold">
            "Give, and it will be given to you. A good measure, pressed down,
            shaken together, and running over, will be poured into your lap." -
            Luke 6:38.
          </span>
          Thank you for being part of our mission to spread love and hope. We
          look forward to seeing you!
        </motion.p>
        <ContactButton label="Apply/support" />
      </div>
    </div>
  );
};

export default Apply;
