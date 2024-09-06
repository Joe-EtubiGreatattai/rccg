import React from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionImg = motion.img;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const ParishPastor = () => {
  const pastors = [
    {
      name: "Pastor Mrs Olufunke Stephen",
      img: require("./../image/Group7(1).png"),
    },
    {
      name: "Pastor Bimpe Lawal",
      img: require("./../image/Group7(2).png"),
    },
  ];

  return (
    <div className="w-full md:h-[80vh] ">
      <div className="flex h-full flex-col md:flex-row">
        <MotionDiv
          initial={{ opacity: 0, x: -100 }} // Start from left with some offset
          animate={{ opacity: 1, x: 0 }} // Slide to original position
          transition={{ duration: 0.8 }} // Duration of the slide-in effect
          className="w-full md:w-1/2 bg-gray-900 p-8 flex flex-col justify-center items-center"
        >
          <MotionH2
            initial={{ opacity: 0, x: -50 }} // Slight offset for heading
            animate={{ opacity: 1, x: 0 }} // Animate to full opacity and centered
            transition={{ duration: 0.8, delay: 0.2 }} // Slight delay for heading
            className="text-xl font-bold text-white mb-4"
          >
            MEET OUR PARISH PASTOR
          </MotionH2>
          <div className="relative">
            <MotionImg
              src={pastors[0].img}
              alt={pastors[0].name}
              initial={{ opacity: 0, x: -100 }} // Start from left
              animate={{ opacity: 1, x: 0 }} // Slide to original position
              transition={{ duration: 0.8 }} // Duration of the slide-in effect
              className="w-full md:h-[310.58px] md:w-[365px] rounded-lg"
            />
          </div>
          <MotionP
            initial={{ opacity: 0, x: -50 }} // Slight offset for paragraph
            animate={{ opacity: 1, x: 0 }} // Animate to full opacity and centered
            transition={{ duration: 0.8, delay: 0.4 }} // Slight delay for paragraph
            className="mt-4 text-lg font-semibold text-white"
          >
            {pastors[0].name}
          </MotionP>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 100 }} // Start from right with some offset
          animate={{ opacity: 1, x: 0 }} // Slide to original position
          transition={{ duration: 0.8 }} // Duration of the slide-in effect
          className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center items-center"
        >
          <MotionH2
            initial={{ opacity: 0, x: 50 }} // Slight offset for heading
            animate={{ opacity: 1, x: 0 }} // Animate to full opacity and centered
            transition={{ duration: 0.8, delay: 0.2 }} // Slight delay for heading
            className="text-xl font-bold text-gray-800 mb-4"
          >
            MEET OUR PARISH PASTOR
          </MotionH2>
          <div className="relative">
            <MotionImg
              src={pastors[1].img}
              alt={pastors[1].name}
              initial={{ opacity: 0, x: 100 }} // Start from right
              animate={{ opacity: 1, x: 0 }} // Slide to original position
              transition={{ duration: 0.8 }} // Duration of the slide-in effect
              className="w-full md:h-[310.58px] md:w-[365px] rounded-lg"
            />
          </div>
          <MotionP
            initial={{ opacity: 0, x: 50 }} // Slight offset for paragraph
            animate={{ opacity: 1, x: 0 }} // Animate to full opacity and centered
            transition={{ duration: 0.8, delay: 0.4 }} // Slight delay for paragraph
            className="mt-4 text-lg font-semibold text-gray-800"
          >
            {pastors[1].name}
          </MotionP>
        </MotionDiv>
      </div>
    </div>
  );
};

export default ParishPastor;
