import React from "react";
import ContactButton from "./ContactButton";
import heroImage from "./../image/woman.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAboutUsClick = () => {
    navigate("/about-us"); // Navigate to the About Us page
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 bg-white">
      <div className="w-full w-full md:w-3/5 h-auto">
        <img
          src={heroImage}
          alt="Pastor"
          className="rounded-lg h-auto object-cover"
        />
      </div>
      <div className="mt-8 md:mt-0 w-full text-left md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          THIS IS <br />
          <span className="text-blue-800">
            RCCG HOUSE OF  <br/> MERCY HIGHWYCOMB
          </span>
        </h1>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          Our passion is to possess kingdoms and raise influential godly leaders,
          generals  <br/> in faith and kingdom power. To create an atmosphere where mercy
          turns as  <br/> many people we come in contact with into a blessing for their
          generation.
        </p>
        <div className="mt-4 sm:mt-6 md:mt-8">
          <ContactButton label="About Us" onClick={handleAboutUsClick} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
