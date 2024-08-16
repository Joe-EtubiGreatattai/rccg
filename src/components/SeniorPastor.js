import React from "react";

const SeniorPastor = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row ">
      <div className="w-full md:w-2/3 flex justify-center md:space-between">
        <img
          src={require("./../image/pastor-man.png")}
          alt="Senior Pastor"
          className="w-4/5 md:h-[367px] md:w-[349px]"
        />
      </div>
      <div className="w-full md:w-4/5 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left text-indigo-700 mb-2 sm:mb-4">
          Meet Our Senior Pastor
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Engineer Olusegun Stephen Is The Senior Pastor Of RCCG House Of Mercy
          Aylesbury. He Has Served Continuously As A Pastor In RCCG For 37
          Years. He Was The Pioneer National Secretary Of RCF Senior Friend
          Association, Nigeria. Olusegun Was Ordained As The Full Pastor Of RCCG
          In 1998. An Enthusiastic Evangelist, Who Desired To Develop End-Time
          Leaders And A Bible Teacher Who Loved To Partner With The Holy Spirit,
          He Has Encouraged Many Start-Up Businesses. As Far Back As 2006, He
          Planted Over 25 Churches In Nigeria And Now Over 10 Churches In The UK
          And Sweden In Europe. He Is A COREN Registered Engineer And Earned His
          Master's Degree In Health And Safety At Middlesex University In
          London, UK.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
          He Is A Health And Safety Consultant And A Qualified Train Trainer In
          Health And Safety Practices. A Registered Fire Safety Manager In UK; A
          Member, Chartered Institute Of Environmental Health; Certified Member,
          Institute Of Occupational Safety And Health And; A Chartered Lead
          Auditor In ISO 45001 With Llyod Register, UK. A Member Of The
          Regulation Of Engineering In Nigeria And A Health And Safety
          Professional In The United Kingdom.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
          Olusegun Has Consulted For Both Private And NHS Hospitals In The
          United Kingdom. He Is Also The Author Of A Bestselling Book Forwarded
          By Pastor E. A. Adeboye, The General Overseer Of RCCG - The Mystery Of
          The Lord's Prayer. Olusegun Is Happily Married To His Beautiful Wife
          (Pastor Mrs Olufunke Stephen, Who Has Also Served For Over 2 Decades
          As A Pastor In RCCG), And They Are Blessed With 3 Beautiful And Godly
          Daughters (Dr Praise, Melody And Worship).
        </p>
      </div>
    </div>
  );
};

export default SeniorPastor;
