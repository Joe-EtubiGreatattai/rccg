import React from "react";

const ContactButton = ({ label = "Contact Us", onClick }) => {
  return (
    <button
      className="bg-blue-800 text-white px-10 py-5 md:px-12 py-1 md:py-4 text-sm md:text-xl rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 w-fit md:w-auto"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ContactButton;
