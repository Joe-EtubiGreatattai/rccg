import React from "react";

const DonationComponent = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg my-[3rem] overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          TOGETHER, WE CAN MAKE A LASTING IMPACT.
        </h2>
        <p className="text-base text-center text-gray-600 mb-6">
          Thank You For Your Support And Generosity.
        </p>

        <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-indigo-700 text-white text-center py-4 text-2xl font-semibold">
            Give
          </div>
          <div className="p-8">
            <div className="border rounded-md mb-6">
              <div className="p-6 text-center">
                <p className="text-2xl font-semibold text-gray-700">20485918</p>
                <p className="text-xl text-gray-600">20-45-45</p>
                <p className="mt-2 text-gray-600">
                  The Redeemed Christian Church Of
                </p>
                <p className="text-gray-600">God House Of Mercy High Wycombe</p>
              </div>
              <div className="bg-indigo-700 text-white p-4 text-sm text-center">
                Please Include In The Description What Purpose You Would Be
                Giving
                <br />
                For, While You Make Your Transfer.
              </div>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="px-4 text-gray-500">Or</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            <button className="w-full border-2 border-gray-300 border-dashed text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition duration-300 flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
              </svg>
              Pay With Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationComponent;
