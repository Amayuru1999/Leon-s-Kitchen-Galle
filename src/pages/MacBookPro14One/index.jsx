import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const MacBookPro14OnePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[1482px] mx-auto relative w-full">
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[123px] justify-start w-full">
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[84px] md:px-5 w-[45%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBold40"
              >
                Let’s Make Payment
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-[42px] text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                size="txtInterRegular24"
              >
                <>
                  To start your subscription, input your card details to make
                  payment. <br />
                  You will be redirected to your banks authorization page .{" "}
                </>
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[38px] w-[79%] md:w-full">
                <Img
                  className="h-11 sm:h-auto mb-[3px] md:mt-0 mt-[9px] object-cover w-[34%] md:w-full"
                  src="images/img_image6.png"
                  alt="imageSix"
                />
                <Img
                  className="h-[50px] sm:h-auto ml-5 md:ml-[0] md:mt-0 my-[3px] object-cover w-1/5 md:w-full"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
                <Img
                  className="h-14 sm:h-auto md:ml-[0] ml-[31px] object-cover w-[39%] md:w-full"
                  src="images/img_image5.png"
                  alt="imageFive"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[7px] mt-[35px] text-gray-700 text-xl"
                size="txtInterRegular20"
              >
                Cardholder’s Name
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[493px] items-center justify-end md:ml-[0] ml-[3px] p-1 w-[79%] md:w-full"
                style={{ backgroundImage: "url('images/img_group40.svg')" }}
              >
                <div className="flex flex-col gap-6 justify-start mb-3 mt-[18px] w-[98%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[18px] sm:text-[19px] md:text-[21px] text-[23px] text-green-900_01"
                    size="txtInterRegular23"
                  >
                    Amayuru Upantih
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-700 text-xl"
                      size="txtInterRegular20"
                    >
                      Card Number
                    </Text>
                    <div className="flex flex-row gap-[19px] items-center justify-start md:ml-[0] ml-[5px] mt-[22px] w-[56%] md:w-full">
                      <Img
                        className="h-[33px] md:h-auto object-cover rounded-[10px] w-1/5"
                        src="images/img_mastercard1.png"
                        alt="mastercardOne"
                      />
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-green-900_02"
                        size="txtInterRegular23Green90002"
                      >
                        9870 3456 7890 6473
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-7 w-[72%] md:w-full">
                      <Text
                        className="mb-[9px] text-gray-700 text-xl"
                        size="txtInterRegular20"
                      >
                        Expiry
                      </Text>
                      <Text
                        className="mt-[9px] text-gray-700 text-xl"
                        size="txtInterRegular20"
                      >
                        CVC
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between ml-7 md:ml-[0] mt-3.5 w-[71%] md:w-full">
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-green-800_02"
                        size="txtInterRegular23Green80002"
                      >
                        03 / 25
                      </Text>
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-green-900_03"
                        size="txtInterRegular23Green90003"
                      >
                        654
                      </Text>
                    </div>
                    <Text
                      className="mt-[27px] text-gray-700 text-xl"
                      size="txtInterRegular20"
                    >
                      Discount Code
                    </Text>
                    <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[18px] mt-[27px] w-[97%] md:w-full">
                      <Text
                        className="mb-0.5 text-lime-900 text-xl"
                        size="txtInterRegular20Lime900"
                      >
                        CHIKAMSO-20-OFF
                      </Text>
                      <Text
                        className="mt-0.5 text-green-900_04 text-xl"
                        size="txtInterBold20"
                      >
                        Apply
                      </Text>
                    </div>
                    <Text
                      className="ml-24 md:ml-[0] mt-[78px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterBold24"
                    >
                      Pay
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-poppins items-center justify-start w-full">
              <div className="md:h-[1212px] sm:h-[365px] h-[390px] md:px-5 relative w-full">
                <div className="absolute bg-blue_gray-100_90 bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto md:pl-10 sm:pl-5 pl-[42px] py-[42px] w-full">
                  <div className="flex flex-col justify-start mt-[47px] w-[96%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[512px] w-[58%] md:w-full">
                      <Text
                        className="text-black-900_01 text-lg"
                        size="txtPoppinsBold18"
                      >
                        Get Exclusive Deals in your Inbox
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[223px] text-black-900_01 text-lg"
                        size="txtPoppinsBold18"
                      >
                        Legal Pages
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[141px] text-black-900_01 text-lg"
                        size="txtPoppinsBold18"
                      >
                        Important Links
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-full">
                      <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:mt-0 mt-[26px] w-[62%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                          <Img
                            className="h-[52px] md:mt-0 mt-11"
                            src="images/img_appstorebadgesen.svg"
                            alt="appstorebadgese"
                          />
                          <div className="flex flex-col gap-[9px] justify-start mb-2.5">
                            <div className="flex relative w-full">
                              <Input
                                name="email"
                                placeholder="youremail@gmail.com"
                                className="p-0 placeholder:text-black-900_99 text-[15px] text-left w-full"
                                wrapClassName="ml-[undefinedpx] my-auto w-[79%] z-[1]"
                                type="email"
                                shape="round"
                              ></Input>
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[171px] ml-[-67px] my-auto text-center text-lg z-[1]"
                                shape="round"
                                color="orange_600"
                                variant="fill"
                              >
                                Subscribe
                              </Button>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[30px] text-[13px] text-black-900_01"
                              size="txtPoppinsRegular13Black90001"
                            >
                              <span className="text-black-900_01 font-poppins text-left font-normal">
                                we wont spam, read our{" "}
                              </span>
                              <a
                                href="javascript:"
                                className="text-black-900_01 font-poppins text-left font-normal underline"
                              >
                                email policy
                              </a>
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[77%] md:w-full">
                          <Text
                            className="md:mt-0 mt-2.5 text-[15px] text-black-900 w-[42%] sm:w-full"
                            size="txtPoppinsRegular15"
                          >
                            <>
                              Company # 490039-445, Registered with
                              <br />
                              House of companies.
                            </>
                          </Text>
                          <Img
                            className="h-11 md:h-auto md:ml-[0] ml-[225px] object-cover w-[45px] sm:w-full"
                            src="images/img_facebook.png"
                            alt="facebook"
                          />
                          <Img
                            className="h-11 md:h-auto ml-3.5 md:ml-[0] object-cover w-[45px] sm:w-full"
                            src="images/img_instagram.png"
                            alt="instagram"
                          />
                          <Img
                            className="h-11 md:h-auto ml-3.5 md:ml-[0] object-cover w-[45px] sm:w-full"
                            src="images/img_tiktok.png"
                            alt="tiktok"
                          />
                          <Img
                            className="h-11 md:h-auto ml-3.5 md:ml-[0] object-cover w-[45px] sm:w-full"
                            src="images/img_snapchat.png"
                            alt="snapchat"
                          />
                        </div>
                      </div>
                      <Text
                        className="leading-[43.00px] text-[15px] text-black-900 underline"
                        size="txtPoppinsRegular15"
                      >
                        <>
                          Terms and conditions
                          <br />
                          Privacy
                          <br />
                          Cookies
                          <br />
                          Modern Slavery Statement
                        </>
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[43.00px] text-[15px] text-black-900 underline w-[18%] sm:w-full"
                        size="txtPoppinsRegular15"
                      >
                        <>
                          Get help
                          <br />
                          Add your restaurant
                          <br />
                          Sign up to deliver
                          <br />
                          Create a business account
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[237px] left-[7%] object-cover top-[0] w-[16%]"
                  src="images/img_32700620370740.png"
                  alt="32700620370740"
                />
              </div>
              <div className="bg-black-900_01 flex sm:flex-col flex-row md:gap-10 items-start justify-between p-[19px] w-full">
                <Text
                  className="mb-0.5 ml-24 sm:ml-[0] sm:mt-0 mt-2 text-[15px] text-white-A700"
                  size="txtPoppinsRegular15WhiteA700"
                >
                  leonskitchen.lk Copyright 2023, All Rights Reserved.
                </Text>
                <Text
                  className="mr-20 sm:mt-0 mt-[11px] text-[15px] text-white-A700"
                  size="txtPoppinsRegular15WhiteA700"
                >
                  Privacy Policy Terms Pricing Do not sell or share my personal
                  information
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute md:h-[735px] h-[870px] sm:h-[932px] md:px-5 right-[5%] top-[3%] w-[35%] md:w-full">
          <div className="flex flex-col h-full items-center justify-start ml-[87px] mt-[132px]">
            <Text
              className="md:text-5xl text-[64px] text-black-900"
              size="txtInterBold64"
            >
              Rs. 3110.00
            </Text>
          </div>
          <div className="absolute bg-gray-200_02 flex flex-col h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-[10px] w-full">
            <div className="flex flex-col md:gap-10 gap-[169px] justify-start mb-[89px] mt-[53px] w-full">
              <Text
                className="md:ml-[0] ml-[22px] text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                size="txtInterMedium24"
              >
                You’re paying,
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-start justify-between w-[98%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtInterBold26"
                  >
                    Mixed Fried Rice
                  </Text>
                  <Text
                    className="mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterMedium24Black900"
                  >
                    Rs. 1300.00
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[61px] w-[98%] md:w-full">
                  <Text
                    className="sm:mt-0 mt-0.5 md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtInterBold26"
                  >
                    Leon’s Kitchen Special
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterMedium24Black900"
                  >
                    Rs. 1700.00
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between mt-[76px] w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtInterBold26"
                  >
                    Discounts & Offers
                  </Text>
                  <Text
                    className="mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterMedium24Black900"
                  >
                    Rs. 0.00
                  </Text>
                </div>
                <Line className="bg-gray-600 h-px md:ml-[0] ml-[51px] mt-[82px] w-[89%]" />
                <div className="flex flex-row gap-[334px] items-start justify-end md:ml-[0] ml-[45px] mt-[42px] w-[91%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtInterBold26"
                  >
                    Tax
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterMedium24Black900"
                  >
                    Rs. 110.00
                  </Text>
                </div>
                <div className="flex flex-row gap-[296px] items-start justify-end md:ml-[0] ml-[45px] mt-[50px] w-[90%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtInterBold26"
                  >
                    Total
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterMedium24Black900"
                  >
                    Rs. 3110.00
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacBookPro14OnePage;
