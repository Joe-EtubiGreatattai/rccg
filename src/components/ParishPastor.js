import React from "react";

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
      <div className="flex h-full flex-col  md:flex-row">
        <div className="w-full md:w-1/2 bg-gray-900 p-8 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold text-white mb-4">
            MEET OUR PARISH PASTOR
          </h2>
          <div className="relative">
            <img
              src={pastors[0].img}
              alt={pastors[0].name}
              className="w-full md:h-[310.58px] md:w-[365px] rounded-lg"
            />
          </div>
          <p className="mt-4 text-lg font-semibold text-white">
            {pastors[0].name}
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            MEET OUR PARISH PASTOR
          </h2>
          <div className="relative">
            <img
              src={pastors[1].img}
              alt={pastors[1].name}
              className="w-full md:h-[310.58px] md:w-[365px] rounded-lg"
            />
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            {pastors[1].name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParishPastor;
