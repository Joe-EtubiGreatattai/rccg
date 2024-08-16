import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import SectionTwo from "../components/section2";
import GoalSection from "../components/GoalSection";
import EventsComponent from "../components/EventsComponent";
import SupportSection from "../components/Support";
import GudaianceSection from "../components/Guadiance";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SectionTwo />
      <GoalSection />
      <EventsComponent />
      <SupportSection />
      <GudaianceSection />
      <Footer />
    </div>
  );
}

export default Home;
