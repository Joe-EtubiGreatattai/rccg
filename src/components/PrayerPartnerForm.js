import React, { useState } from "react";
import axios from "axios";
import {
  Progress,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const PrayerPartnerForm = () => {
  const [activeTab, setActiveTab] = useState("Prayer Partner");
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    reason: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalMessage, setModalMessage] = useState("");
  const [submitType, setSubmitType] = useState(""); // Track the type being submitted

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      reason: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let endpoint = "";
    let requestData = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      reason: formData.reason,
    };

    switch (activeTab) {
      case "Prayer Partner":
        endpoint = "https://rccg-t45u.onrender.com/prayer-partner";
        setSubmitType("Prayer Partner");
        break;
      case "Counselling":
        endpoint = "https://rccg-t45u.onrender.com/couselling";
        setSubmitType("Counselling");
        break;
      case "Prayer Point":
        endpoint = "https://rccg-t45u.onrender.com/prayer-point";
        requestData.reason = formData.reason;
        setSubmitType("Prayer Point");
        break;
      default:
        return;
    }

    try {
      const response = await axios.post(
        endpoint,
        new URLSearchParams(requestData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status === 200) {
        setModalMessage(`${submitType} submitted successfully!`);
      } else {
        setModalMessage(`Something went wrong with your ${submitType} submission. Please try again.`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setModalMessage(`There was an error submitting your ${submitType}. Please try again later.`);
    } finally {
      setIsLoading(false);
      onOpen(); // Open the modal after submission
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-[-7rem] z-30 mb-[7rem] overflow-hidden relative">
      <div className="flex border-b">
        {["Counselling", "Prayer Partner", "Prayer Point"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 md:py-7 px-2 md:px-6 text-center md:text-lg ${
              activeTab === tab
                ? "bg-indigo-800 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-8">
        {activeTab === "Prayer Partner" && (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Find A Prayer Partner
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 border rounded-md"
                onChange={handleInputChange}
                value={formData.name}
              />
              <div className="flex space-x-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-1/2 p-3 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.phoneNumber}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-1/2 p-3 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
              <textarea
                name="reason"
                placeholder="Why Do You Want A Prayer Partner?"
                className="w-full p-3 border rounded-md"
                rows="4"
                onChange={handleInputChange}
                value={formData.reason}
              ></textarea>
              <button
                type="submit"
                className={`w-full bg-indigo-700 text-white py-2 md:py-4 rounded-md hover:bg-indigo-800 transition duration-300 text-lg font-semibold ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? `Submitting ${submitType}...` : "Send"}
              </button>
              {isLoading && (
                <Progress
                  size="xs"
                  isIndeterminate
                  colorScheme="purple"
                  mt={2}
                />
              )}
            </form>
            <p className="text-sm text-gray-600 mt-6">
              You Would Receive A Message With The Contact Address Of Your
              Selected Prayer Partner
            </p>
          </>
        )}
        {activeTab === "Counselling" && (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Find the Support You Need
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="reason"
                placeholder="What do you want to be counselled on?"
                className="w-full p-3 border rounded-md"
                onChange={handleInputChange}
                value={formData.reason}
              />
              <div className="flex space-x-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-1/2 p-3 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.phoneNumber}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-1/2 p-3 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-indigo-700 text-white py-2 md:py-4 rounded-md hover:bg-indigo-800 transition duration-300 text-lg font-semibold ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? `Submitting ${submitType}...` : "Send"}
              </button>
              {isLoading && (
                <Progress
                  size="xs"
                  isIndeterminate
                  colorScheme="purple"
                  mt={2}
                />
              )}
            </form>
          </>
        )}
        {activeTab === "Prayer Point" && (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Send Your Prayer Point
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="prayerPoint"
                placeholder="Prayer Point"
                className="w-full p-3 border rounded-md"
                onChange={handleInputChange}
                value={formData.prayerPoint}
              />
              <div className="flex space-x-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number (optional)"
                  className="w-1/2 p-3 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.phoneNumber}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  className="w-1/2 p-3 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-indigo-700 text-white py-2 md:py-4 rounded-md hover:bg-indigo-800 transition duration-300 text-lg font-semibold ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? `Submitting ${submitType}...` : "Send"}
              </button>
              {isLoading && (
                <Progress
                  size="xs"
                  isIndeterminate
                  colorScheme="purple"
                  mt={2}
                />
              )}
            </form>
          </>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{submitType}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{modalMessage}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={onClose}>
            close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PrayerPartnerForm;
