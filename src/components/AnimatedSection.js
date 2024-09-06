// components/AnimatedSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className, animationVariants }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
