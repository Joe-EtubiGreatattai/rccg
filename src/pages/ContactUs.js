import React from "react";
import { useInView } from "react-intersection-observer";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import Apply from "../components/Apply";
import TestimonyForm from "../components/TestimonyForm";
import Footer from "../components/Footer";
import AnimatedComponent from "../components/AnimatedSection";

// Define animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactUs() {
  return (
    <div>
      <AnimatedComponent animationVariants={fadeInUpVariants}>
        <ContactHero />
      </AnimatedComponent>
      <AnimatedComponent animationVariants={fadeInUpVariants}>
        <ContactForm />
      </AnimatedComponent>
      <AnimatedComponent animationVariants={fadeInUpVariants}>
        <Apply />
      </AnimatedComponent>
      <AnimatedComponent animationVariants={fadeInUpVariants}>
        <TestimonyForm />
      </AnimatedComponent>
      <Footer />
    </div>
  );
}
