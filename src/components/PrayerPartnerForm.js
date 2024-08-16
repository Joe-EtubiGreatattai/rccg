import React, { useState } from 'react';

const PrayerPartnerForm = () => {
  const [activeTab, setActiveTab] = useState('Prayer Partner');
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    reason: '',
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-[-7rem] z-30 mb-[7rem] overflow-hidden relative">
      <div className="flex border-b">
        {['Counselling', 'Prayer Partner', 'Prayer Point'].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-7 px-6 text-center text-lg ${
              activeTab === tab
                ? 'bg-indigo-800 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Find A Prayer Partner</h2>
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
            className="w-full bg-indigo-700 text-white py-4 rounded-md hover:bg-indigo-800 transition duration-300 text-lg font-semibold"
          >
            Send
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-6">
          You Would Receive A Message With The Contact Address Of Your Selected
          Prayer Partner
        </p>
      </div>
    </div>
  );
};

export default PrayerPartnerForm;
