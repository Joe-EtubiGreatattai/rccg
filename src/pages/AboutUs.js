import React from "react";
import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import MissionStatement from "../components/MissionStatement";
import Hopeless from "../components/Hopeless";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <AboutHero />
      <MissionStatement />
      <Hopeless />
      <Footer />
    </div>
  );
}
