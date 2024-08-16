import React from "react";
import backgroundImage from "./../image/goal.png";

const GoalSection = () => {
  return (
    <div
      className="relative flex items-center justify-center text-center h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#2E3795] opacity-70"></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative text-white max-w-2xl px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Goal Is To</h1>
        <p className="text-lg md:text-xl font-light mb-6">
          Make Heaven, Raise Generals In Faith, Take Many Along To Heaven, Be A
          Blessing To Our Generation
        </p>
      </div>
    </div>
  );
};

export default GoalSection;
