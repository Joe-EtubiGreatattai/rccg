import React, { useState } from "react";
import { motion } from "framer-motion";

const MotionH2 = motion.h2;
const MotionDiv = motion.div;
const MotionP = motion.p;

const SeniorPastor = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col items-center">
      <MotionH2
        initial={{ opacity: 0, x: [-20, 20] }} // Start from both sides with some offset
        animate={{ opacity: 1, x: 0 }} // Animate to full opacity and centered
        transition={{ duration: 0.8 }} // Duration of the fade-in effect
        className="text-xl sm:text-2xl md:text-5xl font-bold text-center text-indigo-700 mb-9 sm:mb-8"
      >
        Board of Trustees
      </MotionH2>
      <div className="flex flex-col md:flex-row mt-20 justify-center md:space-x-6 w-full">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }} // Start from left
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
          transition={{ duration: 0.8 }} // Duration of the fade-in effect
          className="w-full md:w-1/4 flex justify-center"
        >
          <img
            src={require("./../image/pastor-man.png")}
            alt="Senior Pastor"
            className="w-4/5 md:w-[100%] md:h-[25rem]"
          />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 20 }} // Start from right
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
          transition={{ duration: 0.8 }} // Duration of the fade-in effect
          className="w-full md:w-1/2 mt-10 md:mt-0"
        >
        <p className="text-m sm:text-l md:text-3xl font-bold text-black mb-9 sm:mb-8">Meet our senior pastor</p>
          <MotionP
            initial={{ opacity: 0, x: -20 }} // Start from left
            animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
            transition={{ duration: 0.8 }} // Duration of the fade-in effect
            className="text-base md:text-lg text-gray-700 leading-loose sm:leading-relaxed"
          >
            Engineer Olusegun Stephen is the Senior Pastor of RCCG House of
            Mercy Aylesbury. He has served continuously as a Pastor in RCCG for
            37 years. He was the Pioneer National Secretary of RCF Senior Friend
            Association, Nigeria. Olusegun was ordained as the full pastor of
            RCCG in 1998. An enthusiastic Evangelist, who desired to develop
            end-time leaders and a Bible teacher who loved to partner with the
            Holy Spirit, he has encouraged many start-up businesses. As far back
            as 2006, he planted over 25 churches in Nigeria and now over 10
            churches in the UK and Sweden in Europe. He is a COREN registered
            engineer and earned his master's degree in health and safety at
            Middlesex University in London, UK
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, height: 0 }} // Start from collapsed state
            animate={{ opacity: showMore ? 1 : 0, height: showMore ? 'auto' : 0 }} // Fade in and expand if showMore is true
            transition={{ duration: 0.8 }} // Duration of the fade-in effect
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              showMore ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <MotionP
              initial={{ opacity: 0, x: -20 }} // Start from left
              animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
              transition={{ duration: 0.8 }} // Duration of the fade-in effect
              className="text-base md:text-lg text-gray-700 leading-loose sm:leading-relaxed mt-6 sm:mt-8"
            >
              He is a Health and Safety Consultant and a Qualified Train Trainer
              in Health and Safety practices. A Registered Fire Safety Manager
              in UK; A Member, Chartered Institute of Environmental Health;
              Certified Member, Institute of Occupational Safety and Health and;
              A chartered Lead Auditor in ISO 45001 with Llyod Register, UK. A
              Member of the regulation of Engineering in Nigeria and a Health
              and Safety Professional in the United Kingdom. Olusegun has
              Consulted for both private and NHS Hospitals in the United
              Kingdom.
            </MotionP>
            <MotionP
              initial={{ opacity: 0, x: 20 }} // Start from right
              animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
              transition={{ duration: 0.8 }} // Duration of the fade-in effect
              className="text-base md:text-lg text-gray-700 leading-loose sm:leading-relaxed mt-6 sm:mt-8"
            >
              He is a Health and Safety Consultant and a Qualified Train Trainer
              in Health and Safety practices. A Registered Fire Safety Manager
              in UK; A Member, Chartered Institute of Environmental Health;
              Certified Member, Institute of Occupational Safety and Health and;
              A chartered Lead Auditor in ISO 45001 with Llyod Register, UK. A
              Member of the regulation of Engineering in Nigeria and a Health
              and Safety Professional in the United Kingdom. Olusegun has
              Consulted for both private and NHS Hospitals in the United
              Kingdom. He is also the author of a bestselling book forwarded by
              Pastor E. A Adeboye, the General Overseer of RCCG - The Mystery of
              the Lord’s Prayer. Olusegun is happily married to his beautiful
              wife (Pastor Mrs Olufunke Stephen, who has also served for over 2
              decades as a Pastor in RCCG), and they are blessed with 3
              beautiful and Godly daughters (Dr Praise, Melody and Worship).
              With Jesus joy, join us to welcome Pastor Olusegun Stephen
            </MotionP>
          </MotionDiv>

          <button
            onClick={toggleShowMore}
            className="mt-4 text-indigo-700 font-bold hover:underline focus:outline-none"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </MotionDiv>
      </div>
    </div>
  );
};

export default SeniorPastor;
