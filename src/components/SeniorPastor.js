import React, { useState } from "react";

const SeniorPastor = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-center text-indigo-700 mb-9 sm:mb-8">
        Meet Our Senior Pastor
      </h2>
      <div className="flex flex-col md:flex-row  justify-center md:space-x-6 w-full">
        <div className="w-full md:w-1/4 flex justify-center">
          <img
            src={require("./../image/pastor-man.png")}
            alt="Senior Pastor"
            className="w-4/5 md:w-[100%] md:h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <p className="text-base md:text-lg text-gray-700 leading-loose sm:leading-relaxed">
            engineer olusegun stephen is the senior pastor of rccg house of mercy
            aylesbury. he has served continuously as a pastor in rccg for 37
            years. he was the pioneer national secretary of rcf senior friend
            association, nigeria. olusegun was ordained as the full pastor of rccg
            in 1998. an enthusiastic evangelist, who desired to develop end-time
            leaders and a bible teacher who loved to partner with the holy spirit,
            he has encouraged many start-up businesses. as far back as 2006, he
            planted over 25 churches in nigeria and now over 10 churches in the uk
            and sweden in europe. he is a coren registered engineer and earned his
            master's degree in health and safety at middlesex university in
            london, uk.
          </p>

          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              showMore ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <p className="text-base md:text-lg text-gray-700 leading-loose sm:leading-relaxed mt-6 sm:mt-8">
              he is a health and safety consultant and a qualified train trainer
              in health and safety practices. a registered fire safety manager in
              uk; a member, chartered institute of environmental health; certified
              member, institute of occupational safety and health and; a chartered
              lead auditor in iso 45001 with lloyd's register, uk. a member of the
              regulation of engineering in nigeria and a health and safety
              professional in the united kingdom.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-loose sm:leading-relaxed mt-6 sm:mt-8">
              olusegun has consulted for both private and nhs hospitals in the
              united kingdom. he is also the author of a bestselling book
              forwarded by pastor e. a. adeboye, the general overseer of rccg -
              the mystery of the lord's prayer. olusegun is happily married to his
              beautiful wife (pastor mrs. olufunke stephen, who has also served
              for over 2 decades as a pastor in rccg), and they are blessed with 3
              beautiful and godly daughters (dr. praise, melody, and worship).
            </p>
          </div>

          <button
            onClick={toggleShowMore}
            className="mt-4 text-indigo-700 font-bold hover:underline focus:outline-none"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeniorPastor;
