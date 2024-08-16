import React, { useState } from 'react';

const TestimonyForm = () => {
  const [testimony, setTestimony] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Testimony submitted:', testimony);
    // Reset the form after submission
    setTestimony('');
  };

  return (
    <div className="max-w-4xl my-[5rem] mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Share Your Testimony</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <textarea
            className="w-full p-7 bg-gray-100 rounded-lg resize-none"
            rows="6"
            placeholder="What Has God Done For You ?"
            value={testimony}
            onChange={(e) => setTestimony(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-700 text-white px-[5rem] py-4 rounded text-lg font-semibold hover:bg-indigo-800 transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestimonyForm;