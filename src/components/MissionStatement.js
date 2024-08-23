import React from "react";

const MissionStatement = () => {
  return (
    <div className="max-w-4xl mx-auto w-full px-4 md:px-8 lg:w-[70%] py-8 bg-white">
      <div className="space-y-6 text-left md:text-center text-gray-700 leading-relaxed">
        <p className="text-base sm:text-lg">
          Our goal is to make heaven and raise generals in faith, take many
          along to heaven, and be a blessing to our generation.
        </p>

        <p className="text-base sm:text-lg">
          Through the word of God to those who are hungry, to satisfy their
          longing souls, nourish man with the living word to turn loose the
          power of God in man to become a blessing to his generation.
        </p>

        <p className="text-base sm:text-lg">
          Our passion is to possess kingdoms and raise influential godly
          leaders, generals in faith and kingdom power. To create an atmosphere
          where mercy turns as many people we come in contact with into a
          blessing for their generation.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 text-indigo-700">
        <p className="font-semibold text-center">Join Us Every</p>
        <div className="hidden sm:block w-px h-12 bg-indigo-700"></div>
        <div className="flex items-center">
          <div className="text-center">
            <p className="font-bold text-xl">WEDNESDAY</p>
            <p className="text-black">ONLINE</p>
          </div>
        </div>
        <div className="hidden sm:block w-px h-12 bg-indigo-700"></div>
        <div className="flex items-center">
          <div className="text-center">
            <p className="font-bold text-xl">SUNDAYS</p>
            <p className="text-black">10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
