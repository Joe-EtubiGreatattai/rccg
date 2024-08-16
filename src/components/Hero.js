import React from "react";
import ContactButton from "./ContactButton";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-start ">
      {/* Background Image */}
      <img
        src={require("./../image/bg-1.png")}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-5 md:px-20 text-white">
        <p className="text-l md:text-2xl md:mb-2">Welcome To Our Church</p>
        <h1 className="text-3xl md:text-7xl font-bold mb-3 md:mb-6 leading-tight">
          BECOME A PART OF
          <br />
          OUR COMMUNITY
        </h1>
        <ContactButton
          label="About Us"
          onClick={() => {
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
