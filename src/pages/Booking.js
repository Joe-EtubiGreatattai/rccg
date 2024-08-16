import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingHeroSection from "../components/BookingHero";
import PrayerPartnerForm from "../components/PrayerPartnerForm";

function Booking() {
  return (
    <div>
      <Header />
      <BookingHeroSection />
      <PrayerPartnerForm />
      <Footer />
    </div>
  );
}

export default Booking;
