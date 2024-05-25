import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="flex items-center justify-center mt-6 md:px-5 w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="md:h-[1222px] sm:h-[368px] h-[392px] relative w-full">
          <div className="absolute bg-blue_gray-100_90 bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto md:pl-10 sm:pl-5 pl-[43px] py-[43px] w-full">
            <div className="flex flex-col justify-start mt-[47px] w-[96%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[512px] w-[58%] md:w-full">
                <p className="text-black-900_01 text-lg font-bold">Get Exclusive Deals in your Inbox</p>
                <p className="md:ml-[0] ml-[223px] text-black-900_01 text-lg font-bold">Legal Pages</p>
                <p className="md:ml-[0] ml-[141px] text-black-900_01 text-lg font-bold">Important Links</p>
              </div>
              <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-full">
                <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:mt-0 mt-[27px] w-[62%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <img className="h-[53px] md:mt-0 mt-[45px]" src="images/img_appstorebadgesen.svg" alt="appstorebadgese_One" />
                    <div className="flex flex-col gap-2 justify-start mb-2.5">
                      <div className="flex relative w-full border rounded-md border-gray-500">
                        <input
                          name="email"
                          placeholder="youremail@gmail.com"
                          className="p-2 placeholder:text-black-900_99 text-[15px] text-left w-full mr-2"
                          type="email"
                        />
                        <button
                          className="cursor-pointer font-medium leading-[normal] min-w-[171px] my-auto rounded-[29px] text-center text-lg z-[1] bg-orange-600 text-white py-2 px-4"
                        >
                          Subscribe
                        </button>
                      </div>
                      <p className="md:ml-[0] ml-[30px] text-[13px] text-black-900_01">
                        <span className="text-black-900_01 font-normal">
                          we won't spam, read our{" "}
                        </span>
                        <a href="javascript:" className="text-black-900_01 font-normal underline">
                          email policy
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[77%] md:w-full">
                    <p className="md:mt-0 mt-[11px] text-[15px] text-black-900">
                      <>
                        Leon's Kitchen - Galle
                        <br />
                        Best in Galle
                      </>
                    </p>
                    <img className="h-[45px] md:h-auto md:ml-[0] ml-[226px] object-cover w-[45px]" src="images/img_facebook.png" alt="facebook" />
                    <img className="h-[45px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[45px]" src="images/img_instagram.png" alt="instagram" />
                    <img className="h-[45px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[45px]" src="images/img_tiktok.png" alt="tiktok" />
                    <img className="h-[45px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[45px]" src="images/img_snapchat.png" alt="snapchat" />
                  </div>
                </div>
                <p className="leading-[43.00px] text-[15px] text-black-900 underline">
                  <>
                    Terms and conditions
                    <br />
                    Privacy
                    <br />
                    Cookies
                    <br />
                    Modern Slavery Statement
                  </>
                </p>
                <p className="sm:flex-1 leading-[43.00px] text-[15px] text-black-900 underline w-[18%] sm:w-full">
                  <>
                    Get help
                    <br />
                    Add your restaurant
                    <br />
                    Sign up to deliver
                    <br />
                    Create a business account
                  </>
                </p>
              </div>
            </div>
          </div>
          <img className="absolute h-[239px] left-[7%] object-cover top-[0] w-[16%]" src="images/img_32700620370740.png" alt="32700620370740_Two" />
        </div>
        <div className="bg-black-900_01 flex sm:flex-col flex-row md:gap-10 items-start justify-between p-[19px] w-full">
          <p className="mb-0.5 ml-24 sm:ml-[0] sm:mt-0 mt-2 text-[15px] text-white-A700">
            leonskitchen.lk Copyright 2023, All Rights Reserved.
          </p>
          <p className="mr-20 sm:mt-0 mt-[11px] text-[15px] text-lime-300">
            Privacy Policy Terms Pricing Do not sell or share my personal information
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
