import React, { useState } from "react";

const PrayerPartnerForm = () => {
  const [activeTab, setActiveTab] = useState("Prayer Partner");
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    reason: "",
    counsellingReason: "",
    prayerPoint: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Reset the form data when the tab changes
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      reason: "",
      counsellingReason: "",
      prayerPoint: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-[-7rem] z-30 mb-[7rem] overflow-hidden relative">
      <div className="flex border-b">
        {["Counselling", "Prayer Partner", "Prayer Point"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 md:py-7  px-2 md:px-6 text-center md:text-lg ${
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
                className="w-full bg-indigo-700 text-white py-2 md:py-4 rounded-md hover:bg-indigo-800 transition duration-300 text-lg font-semibold"
              >
                Send
              </button>
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
                name=""
                placeholder="what do you want to be counselled on?"
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
             
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white py-2 md:py-4 rounded-md hover:bg-indigo-800 transition duration-300 text-lg font-semibold"
              >
                Send
              </button>
            </form>
          </>
        )}
        {activeTab === "Prayer Point" && (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
            send your prayer point Lets Join our faith with yours
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name=""
                placeholder="Prayer point"
                className="w-full p-3 border rounded-md"
                onChange={handleInputChange}
                value={formData.name}
              />
              <div className="flex space-x-4">
                <input
                  type=""
                  name="Name (optional)"
                  placeholder="Phone Number"
                  className="w-1/2 p-3 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.phoneNumber}
                />
                <input
                  type="email"
                  name=""
                  placeholder="phone number (optional)"
                  className="w-1/2 p-3 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
             
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white py-2 md:py-4 rounded-md hover:bg-indigo-800 transition duration-300 text-lg font-semibold"
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PrayerPartnerForm;
