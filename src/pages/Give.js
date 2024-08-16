import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GiveHero from "../components/GiveHero";
import DonationComponent from "../components/DonationComponent";

export default function Give() {
  return (
    <div>
      <Header />
      <GiveHero />
      <DonationComponent />
      <Footer />
    </div>
  );
}
