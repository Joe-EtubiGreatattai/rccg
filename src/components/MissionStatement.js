import React from "react";

const MissionStatement = () => {
  return (
    <div className="max-w-4xl mx-auto w-full px-4 md:px-8 lg:w-[70%] py-8 bg-white">
      <div className="space-y-6 text-left md:text-center text-gray-700">
        <p className="text-base sm:text-lg">
          Our Goal Is To Make Heaven And Raise Generals In Faith, Take Many
          Along To Heaven, Be A Blessing To Our Generation.
        </p>

        <p className="text-base sm:text-lg">
          Through The Word Of God To Those Who Are Hungry, To Satisfy Their
          Longing Souls, Nourish Man With The Living Word To Turn Loose The
          Power Of God In Man To Become A Blessing To His Generation.
        </p>

        <p className="text-base sm:text-lg">
          Our Passion Is To Possess Kingdoms And Raise Influential Godly
          Leaders, Generals In Faith And Kingdom Power. To Create An Atmosphere
          Where Mercy Turns As Many People We Come In Contact With Into A
          Blessing For Their Generation.
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
