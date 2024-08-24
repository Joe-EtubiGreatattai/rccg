import React, { useState } from 'react';
import axios from 'axios';

const TestimonyForm = () => {
  const [testimony, setTestimony] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('https://rccg-t45u.onrender.com/testimony', {
        testimony: testimony,
      });

      if (response.status === 200) {
        setSuccessMessage('Your testimony has been submitted successfully!');
        setTestimony(''); // Reset the form after successful submission
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while submitting your testimony.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl my-[5rem] mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Share Your Testimony</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <textarea
            className="w-full p-7 bg-gray-100 rounded-lg resize-none"
            rows="6"
            placeholder="What Has God Done For You?"
            value={testimony}
            onChange={(e) => setTestimony(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-700 text-white px-[5rem] py-4 rounded text-lg font-semibold hover:bg-indigo-800 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
        {successMessage && (
          <div className="mt-4 text-green-600 text-center">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="mt-4 text-red-600 text-center">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default TestimonyForm;
