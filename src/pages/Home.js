import React from "react";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import SectionTwo from "../components/section2";
import GoalSection from "../components/GoalSection";
import EventsComponent from "../components/EventsComponent";
import SupportSection from "../components/Support";
import GudaianceSection from "../components/Guadiance";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

// Define animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      <Header />
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <SectionTwo />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <GoalSection />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <EventsComponent />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <SupportSection />
      </AnimatedSection>
      <AnimatedSection animationVariants={fadeInUpVariants}>
        <GudaianceSection />
      </AnimatedSection>
      <Footer />
    </div>
  );
}
