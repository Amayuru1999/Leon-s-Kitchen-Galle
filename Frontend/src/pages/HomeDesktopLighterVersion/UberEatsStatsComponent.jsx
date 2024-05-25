import React from 'react';

const UberEatsStatsComponent = () => {
  return (
    <div className="bg-lime-300_a5 flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1528px] mt-[43px] mx-auto p-6 md:px-5 rounded-[12px] w-full">
      <img
        className="md:flex-1 h-[88px] sm:h-auto md:ml-[0] ml-[22px] md:mt-0 mt-[5px] object-cover w-[8%] md:w-full"
        src="images/img_download1removebgpreview.png"
        alt="download1remove"
      />
      <p className="md:mt-0 mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-center text-green-800_dd font-bold">
        Uber Eats
      </p>
      <div className="bg-green-800 h-[100px] md:h-px md:ml-[0] ml-[63px] md:mt-0 my-[5px] md:w-full w-px"></div>
      <p className="leading-[38.00px] md:ml-[0] ml-[68px] md:mt-0 mt-5 text-2xl md:text-[22px] text-center text-light_green-900 sm:text-xl font-bold">
        <>
          2500+
          <br />
          Orders Delivered
        </>
      </p>
      <div className="bg-green-800_01 h-[100px] md:h-px md:ml-[0] ml-[43px] md:mt-0 my-[5px] md:w-full w-px"></div>
      <p className="leading-[38.00px] md:ml-[0] ml-[90px] md:mt-0 mt-5 text-2xl md:text-[22px] text-center text-light_green-900_01 sm:text-xl font-bold">
        <>
          5000+
          <br />
          Food items
        </>
      </p>
    </div>
  );
};

export default UberEatsStatsComponent;
