import React from "react";
import { Box } from '@chakra-ui/react';
import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import MissionStatement from "../components/MissionStatement";
import Hopeless from "../components/Hopeless";
import SeniorPastor from "../components/SeniorPastor";
import ParishPastor from "../components/ParishPastor";
import Gallery from "../components/Gallary";
import AnimatedSection from "../components/AnimatedSection";

// Define animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  return (
    <Box bg="white">
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <Header />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <AboutHero />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <MissionStatement />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <Hopeless />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <SeniorPastor />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <ParishPastor />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <Gallery />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <Footer />
      </AnimatedSection>
    </Box>
  );
}
