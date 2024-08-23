import React from "react";
import backgroundImage from "./../image/goal.png";

const GoalSection = () => {
  return (
    <div
      className="relative flex items-center justify-center md:text-center h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#2E3795] opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative text-white max-w-2xl px-6 md:px-8 z-10 text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-snug md:leading-tight">
          Our Goal Is To
        </h1>
        <p className="text-sm md:text-xl font-light mb-6 leading-relaxed md:leading-loose">
          Make Heaven, Raise Generals In Faith, Take Many Along To Heaven, Be A
          Blessing To Our Generation
        </p>
      </div>
    </div>
  );
};

export default GoalSection;
