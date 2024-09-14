import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import axios from "axios";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [modalContent, setModalContent] = useState(null); // Modal content state
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal control

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    setModalContent(null); // Clear previous modal content
    onOpen(); // Open the modal
    try {
      const response = await axios.post(
        "https://rccg-t45u.onrender.com/new-member",
        new URLSearchParams(formData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status === 200) {
        setModalContent({
          title: "Success",
          description: "Your information has been submitted successfully!",
          status: "success",
        });
      } else {
        setModalContent({
          title: "Error",
          description: "Something went wrong. Please try again.",
          status: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setModalContent({
        title: "Error",
        description:
          "There was an error submitting your information. Please try again later.",
        status: "error",
      });
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10 z-50">
      <div className="container mx-auto px-4">
        <div className="relative w-full flex justify-center -mt-16 sm:-mt-20 mb-8">
          <div className="bg-indigo-700 w-full sm:w-3/4 lg:w-2/3 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between">
            <span className="text-base md:text-lg font-semibold text-white mb-4 sm:mb-0">
              Join Our Mailing List
            </span>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto">
              <input
                type="email"
                placeholder="Yourmail@gmail.com"
                className="px-4 py-2 rounded-md text-gray-900 mb-2 sm:mb-0 sm:rounded-l-md text-sm md:text-base"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md sm:rounded-r-md text-sm md:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src={require("../image/RCCG house of mercy white 1.png")}
              alt="House Of Mercy, Highwycombe"
              className="mb-4 h-10 md:h-12"
            />
            <p className="text-xs md:text-sm mb-2">
              <a href="tel:+14805550103" className="hover:underline">
                (480) 555-0103
              </a>
            </p>

            <p className="text-xs md:text-sm mb-2">
              <a
                href="mailto:RCCGHouseofmercy@Gmail.Com"
                className="hover:underline"
              >
                RCCGHouseofmercy@Gmail.Com
              </a>
            </p>

            <p className="text-xs md:text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=114+Chapel+Lane,+Highwycombe,+HP12+4by"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                114 Chapel Lane, Highwycombe, HP12 4by
              </a>
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-start">
            <div className="md:flex-1 mb-4 md:mb-0">
              <h3 className="text-lg md:text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                {/* Social media placeholders */}
                <a href="[Facebook Link]">
                  <FaFacebookF className="text-xl md:text-2xl" />
                </a>
                <a href="[Instagram Link]">
                  <FaInstagram className="text-xl md:text-2xl" />
                </a>
              </div>
            </div>
            <div className="md:flex-1">
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Quicklinks
              </h3>
              <ul className="text-sm md:text-base">
                <li className="mb-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="mb-2">
                  <Link to="/booking">Booking</Link>
                </li>
                <li>
                  <Link to="/give">Give</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              DO YOU WANT TO RECEIVE THE LIFE OF CHRIST?
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-2 px-4 py-2 rounded text-gray-900 text-sm md:text-base"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mb-2 px-4 py-2 rounded text-gray-900 text-sm md:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-2 px-4 py-2 rounded text-gray-900 text-sm md:text-base"
              />
              <button
                type="submit"
                className={`bg-indigo-700 text-white px-12 py-3 rounded text-sm md:text-base ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Please wait..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Chakra UI Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalContent?.title}</ModalHeader>
          <ModalBody>{modalContent?.description}</ModalBody>
          <ModalFooter>
            <Button colorScheme={modalContent?.status} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </footer>
  );
};

export default Footer;
