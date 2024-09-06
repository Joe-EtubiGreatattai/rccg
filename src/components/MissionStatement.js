import React from "react";
import OnlineServiceButton from "./OnlineServiceButton";
import { motion } from "framer-motion";

const MotionDiv = motion.div; // Create a motion-enabled div

const MissionStatement = () => {
  return (
    <div className="max-w-4xl justify-center items-center mx-auto w-full px-4 md:px-8 lg:w-[70%] py-8 bg-white">
      <div className="space-y-6 text-left md:text-center text-gray-700 leading-relaxed">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }} // Initial state: hidden and positioned 20px down
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
          transition={{ duration: 0.8 }} // Duration of the fade-in effect
          className="text-base sm:text-lg"
        >
          Our goal is to make heaven and raise generals in faith, take many
          along to heaven, and be a blessing to our generation.
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }} // Delay the start slightly
          className="text-base sm:text-lg"
        >
          Through the word of God to those who are hungry, to satisfy their
          longing souls, nourish man with the living word to turn loose the
          power of God in man to become a blessing to his generation.
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg"
        >
          Our passion is to possess kingdoms and raise influential godly
          leaders, generals in faith and kingdom power. To create an atmosphere
          where mercy turns as many people we come in contact with into a
          blessing for their generation.
        </MotionDiv>
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

      <OnlineServiceButton />
    </div>
  );
};

export default MissionStatement;
