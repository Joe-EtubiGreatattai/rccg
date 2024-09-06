import React from "react";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingHeroSection from "../components/BookingHero";
import PrayerPartnerForm from "../components/PrayerPartnerForm";
import AnimatedComponent from "../components/AnimatedSection";
// Define animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


function Booking() {
  return (
    <div>
      <Header />
      <AnimatedComponent animationVariants={fadeInUpVariants}>
        <BookingHeroSection />
      </AnimatedComponent>
      <AnimatedComponent animationVariants={fadeInUpVariants}>
        <PrayerPartnerForm />
      </AnimatedComponent>
      <Footer />
    </div>
  );
}

export default Booking;
