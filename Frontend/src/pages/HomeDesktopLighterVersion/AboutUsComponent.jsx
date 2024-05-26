import React from 'react';

const AboutUsComponent = () => {
  return (
    <div className="bg-blue_gray-100_75 flex flex-col items-center justify-center p-[108px] md:px-10 sm:px-5 rounded-[12px] w-[99%] md:w-full">
      <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start mb-[5px] mt-2 w-[99%] md:w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
          <p className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 font-bold">
            Know more about us!
          </p>
        </div>
        <div className="md:h-[1588px] sm:h-[526px] h-[529px] relative w-full">
          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-end justify-center m-auto p-5 rounded-[12px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end my-[11px] w-[96%] md:w-full">
              <div className="flex flex-col justify-start md:mt-0 mt-11 w-[31%] md:w-full">
                <div className="bg-white flex flex-col items-end justify-start mr-4 p-2.5 rounded-[31px] hover:bg-orange-600 md:mr-0">
                  <p className="my-[7px] text-black-900 text-lg tracking-[-0.36px] mr-10 font-bold">
                    How does Leon’s Kitchen work?
                  </p>
                </div>
                <div className="bg-white flex flex-col items-end justify-start mr-6 p-2.5 rounded-[31px] hover:bg-orange-600 md:mr-0">
                  <p className="ml-2.5 md:ml-[0] mt-2 text-black-900_01 text-lg tracking-[-0.36px] mr-4 font-bold">
                    What payment methods are accepted?
                  </p>
                </div>
                <div className="flex flex-col gap-8 items-center justify-start ml-9 md:ml-[0] mt-[33px]">
                  <div className="bg-white flex flex-col items-end justify-start mr-4 p-2.5 rounded-[31px] hover:bg-orange-600 md:mr-0">
                    <p className="text-black-900_01 text-lg tracking-[-0.36px] font-bold">
                      Can I track my order in real-time?
                    </p>
                  </div>
                  <div className="bg-white flex flex-col items-end justify-start mr-4 p-2.5 rounded-[31px] hover:bg-orange-600 md:mr-0">
                    <p className="text-black-900_01 text-center text-lg tracking-[-0.36px] font-bold">
                      Is delivery available in my area?
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-black-900 h-[463px] md:h-px md:ml-[0] ml-[29px] md:w-full w-px"></div>
              <div className="flex flex-col gap-[33px] items-center justify-start md:ml-[0] ml-[42px] md:mt-0 mt-[54px] w-[64%] md:w-full">
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                  <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-end p-[25px] sm:px-5 rounded-[12px] w-full">
                    <p className="mt-2 text-black-900_01 text-center text-lg tracking-[-0.36px] font-bold">
                      Place an Order!
                    </p>
                    <img
                      className="h-32 md:h-auto mt-3.5 object-cover w-32"
                      src="images/img_orderfood1.png"
                      alt="orderfoodOne"
                    />
                    <p className="mt-1.5 text-base text-black-900 text-center tracking-[-0.32px] font-medium">
                      <>
                        Place order through our
                        <br />
                        Website
                      </>
                    </p>
                  </div>
                  <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-center p-5 rounded-[12px] w-full">
                    <p className="mt-4 text-black-900_01 text-center text-lg tracking-[-0.36px] font-bold">
                      Track Progress
                    </p>
                    <img
                      className="h-[115px] md:h-auto mt-[18px] object-cover w-[115px]"
                      src="images/img_food1.png"
                      alt="foodOne"
                    />
                    <p className="mb-[5px] mt-3 text-base text-black-900 text-center tracking-[-0.32px] font-medium">
                      <>
                        You can track your order
                        <br />
                        status with delivery time
                      </>
                    </p>
                  </div>
                  <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-center p-5 rounded-[12px] w-full">
                    <p className="mt-[11px] mx-auto text-black-900_01 text-center text-lg tracking-[-0.36px] font-bold">
                      Get your Order!
                    </p>
                    <img
                      className="h-[150px] md:h-auto mt-[18px] object-cover w-[115px]"
                      src="images/img_order1.png"
                      alt="orderOne"
                      style={{ height: '130px' }}
                    />
                    <p className="mt-[5px] mx-auto text-base text-black-900 text-center tracking-[-0.32px] font-medium">
                      <>
                        Receive your order at a
                        <br />
                        lighting fast speed!
                      </>
                    </p>
                  </div>
                </div>
                <p className="text-base text-black-900_01 text-center tracking-[-0.32px] w-[83%] sm:w-full font-medium">
                  leonskitchen.lk simplifies the food ordering process. Browse through our diverse menu, select
                  your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep
                  in no time!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700_19 h-[526px] inset-y-[0] left-[38%] my-auto w-px"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
