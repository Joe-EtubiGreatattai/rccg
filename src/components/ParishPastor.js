import React from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionImg = motion.img;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const ParishPastors = () => {
  const pastors = [
    {
      name: "Pastor Mrs Olufunke Stephen",
      title: "Parish Pastor",
      img: require("./../image/Group7(1).png"),
    },
    {
      name: "Pastor Bimpe Lawal",
      title: "Deputy Parish Pastor",
      img: require("./../image/Group7(2).png"),
    },
    {
      name: "Pastor Victor Obanawu",
      title: "Assistant Parish Pastor",
      img: require("./../image/pastor_victor.png"),
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <MotionH2
          initial={{ opacity: 0, x: [-20, 20] }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-5xl font-bold text-center text-indigo-700 mb-9 sm:mb-8"
        >
          Parish Pastors
        </MotionH2>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-12 md:space-y-0 md:space-x-8 lg:space-x-16">
          {pastors.map((pastor, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center w-full md:w-1/3 max-w-sm"
            >
              <div className="w-full flex justify-center mb-4">
                <MotionImg
                  src={pastor.img}
                  alt={pastor.name}
                  className="w-4/5 md:w-full md:h-[25rem] object-contain"
                />
              </div>
              <MotionH2 className="text-m sm:text-l md:text-3xl font-bold text-black mb-2 text-left w-full">
                {pastor.name}
              </MotionH2>
              <MotionP className="text-base md:text-lg text-gray-700 text-left w-full">
                {pastor.title}
              </MotionP>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParishPastors;