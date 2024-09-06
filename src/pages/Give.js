import React from "react";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GiveHero from "../components/GiveHero";
import DonationComponent from "../components/DonationComponent";
import AnimatedComponent from "../components/AnimatedSection";

// Define animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


export default function Give() {
  return (
    <div>
      <Header />
      <AnimatedComponent animationVariants={fadeInUpVariants}>
        <GiveHero />
      </AnimatedComponent>
      <AnimatedComponent animationVariants={fadeInUpVariants}>
        <DonationComponent />
      </AnimatedComponent>
      <Footer />
    </div>
  );
}
