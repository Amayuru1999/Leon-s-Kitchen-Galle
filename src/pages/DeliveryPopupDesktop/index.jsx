import React from "react";

import { Button, Img, Input, List, Text } from "components";

const DeliveryPopupDesktopPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-poppins h-[4322px] mx-auto relative w-full">
        <div className="absolute flex flex-col gap-14 inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1528px] md:px-5 w-full">
            <div className="bg-gray-50_01 border border-black-900_19 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-[13px] rounded-bl-[12px] rounded-br-[12px] w-full">
              <Img
                className="md:flex-1 h-[38px] sm:h-auto md:ml-[0] ml-[23px] md:mt-0 mt-1 object-cover w-[2%] md:w-full"
                src="images/img_.png"
                alt="Three"
              />
              <Text
                className="md:ml-[0] ml-[15px] text-[15px] text-black-900"
                size="txtPoppinsMedium15"
              >
                <span className="text-black-900 font-poppins text-left font-medium">
                  {" "}
                  Get 5% Off your first order,
                </span>
                <a
                  href="javascript:"
                  className="text-orange-600 font-poppins text-left font-bold underline"
                >
                  {" "}
                  Promo: ORDER5
                </a>
              </Text>
              <Img
                className="h-[25px] md:h-auto md:ml-[0] ml-[669px] object-cover w-[25px]"
                src="images/img_location.png"
                alt="location"
              />
              <Text
                className="ml-3.5 md:ml-[0] text-[15px] text-black-900_01"
                size="txtPoppinsMedium15Black90001"
              >
                <span className="text-black-900_01 font-poppins text-left font-medium">
                  Regent Street,{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-black-900_01 font-poppins text-left font-medium underline"
                >
                  A4
                </a>
                <span className="text-black-900_01 font-poppins text-left font-medium">
                  , A4201, London
                </span>
              </Text>
              <Text
                className="md:ml-[0] ml-[15px] text-orange-600 text-sm underline"
                size="txtPoppinsMedium14"
              >
                Change Location
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-manrope md:gap-5 items-center justify-start mt-[38px] w-full">
              <Img
                className="md:flex-1 h-[53px] sm:h-auto object-cover w-[15%] md:w-full"
                src="images/img_logo1.png"
                alt="logoOne"
              />
              <div className="h-[45px] md:ml-[0] ml-[202px] relative w-[54%] md:w-full">
                <div className="absolute bg-orange-600 h-[45px] inset-y-[0] my-auto right-[18%] rounded-[22px] w-[22%]"></div>
                <Text
                  className="absolute bottom-[18%] inset-x-[0] mx-auto text-black-900 text-lg w-max"
                  size="txtManropeSemiBold18"
                >
                  <span className="text-black-900 font-poppins text-left font-medium">
                    Home
                  </span>
                  <span className="text-black-900_01 font-poppins text-left font-medium">
                    {" "}
                  </span>
                  <span className="text-black-900 font-poppins text-left font-medium">
                    {" "}
                    Browse Menu Special Offers{" "}
                  </span>
                  <span className="text-white-A700 font-poppins text-left font-medium">
                    Restaurants
                  </span>
                  <span className="text-black-900 font-poppins text-left font-medium">
                    {" "}
                    Track Order
                  </span>
                </Text>
              </div>
              <div className="bg-black-900_01 flex md:flex-1 flex-col font-poppins items-start justify-end md:ml-[0] ml-[53px] p-4 rounded-[30px] w-[16%] md:w-full">
                <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[9px] w-[81%] md:w-full">
                  <Img
                    className="h-[27px] md:h-auto object-cover rounded-[1px] w-[19%]"
                    src="images/img_maleuser.png"
                    alt="maleuser"
                  />
                  <Text
                    className="text-lg text-white-A700"
                    size="txtPoppinsMedium18"
                  >
                    Login/Signup
                  </Text>
                </div>
              </div>
            </div>
            <div className="font-poppins h-[477px] sm:h-[518px] md:h-[917px] mt-[41px] relative w-full">
              <Img
                className="h-[477px] m-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle43.png"
                alt="rectangleFortyThree"
              />
              <div className="absolute bg-black-900_e5 flex flex-col h-full inset-[0] items-start justify-center m-auto md:pr-10 sm:pr-5 pr-[57px] py-[57px] rounded-[12px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-0.5 w-full">
                  <div className="flex flex-col gap-[21px] justify-start md:mt-0 mt-[49px]">
                    <div className="bg-orange-600 flex flex-row gap-[13px] items-center justify-start mr-[413px] p-3.5 rounded-br-[12px] rounded-tr-[12px] w-[45%] md:w-full">
                      <Img
                        className="h-[29px] md:h-auto ml-[47px] object-cover w-[29px]"
                        src="images/img_clock_29x29.png"
                        alt="clock"
                      />
                      <Text
                        className="text-lg text-white-A700"
                        size="txtPoppinsSemiBold18"
                      >
                        Open until 3:00 AM
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[57px] w-[93%] md:w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtPoppinsRegular20"
                      >
                        <>I&#39;m lovin&#39; it!</>
                      </Text>
                      <Text
                        className="sm:text-[40px] md:text-[46px] text-[54px] text-white-A700"
                        size="txtPoppinsSemiBold54"
                      >
                        McDonald’s East London
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[17px] items-center justify-between mt-6 w-full">
                        <div className="h-[63px] relative w-[48%] md:w-full">
                          <Text
                            className="ml-auto mr-[35px] my-auto text-lg text-white-A700"
                            size="txtPoppinsSemiBold18"
                          >
                            Minimum Order: 12 GBP
                          </Text>
                          <div className="absolute border border-solid border-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-3 rounded-[31px] w-full">
                            <Img
                              className="h-[34px] md:h-auto md:ml-[0] ml-[21px] mt-[5px] object-cover w-[34px]"
                              src="images/img_ordercompleted.png"
                              alt="ordercompleted"
                            />
                          </div>
                        </div>
                        <div className="flex md:h-[62px] h-[63px] justify-end relative w-1/2 md:w-full">
                          <Text
                            className="mb-4 ml-auto mr-[39px] mt-auto text-lg text-white-A700"
                            size="txtPoppinsSemiBold18"
                          >
                            Delivery in 20-25 Minutes
                          </Text>
                          <div className="absolute border border-solid border-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-3.5 rounded-[31px] w-full">
                            <Img
                              className="h-[34px] md:h-auto ml-2 md:ml-[0] object-cover w-[34px]"
                              src="images/img_motocross.png"
                              alt="motocross"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[361px] md:h-auto object-cover rounded-[12px]"
                    src="images/img_rectangle43.png"
                    alt="rectangleFortyFour"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[197px] md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-69px] ml-[95px] w-[85%] z-[1]">
              <div className="flex flex-col md:gap-10 gap-[83px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[91%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtPoppinsBold32"
                  >
                    All Offers from McDonald’s East London
                  </Text>
                  <Text
                    className="text-black-900_90 text-lg"
                    size="txtPoppinsSemiBold18Black90090"
                  >
                    Search from menu...
                  </Text>
                </div>
                <div className="flex relative w-full">
                  <div className="bg-black-900_01 border border-black-900 border-solid h-[39px] my-auto rounded-[19px] w-[9%]"></div>
                  <Text
                    className="ml-[-93px] mr-auto mt-auto sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 z-[1]"
                    size="txtPoppinsBold21"
                  >
                    Offers Burgers Fries Snacks Salads Cold drinks Happy Meal®
                    Desserts Hot drinks Sauces Orbit®
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-orange-600 h-24 mt-auto mx-auto w-full"></div>
          </div>
        </div>
        <footer className="absolute bottom-[39%] flex inset-x-[0] items-center justify-center mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-blue_gray-100_90 md:h-[307px] h-[371px] sm:h-[400px] md:pl-10 sm:pl-5 pl-[43px] py-[43px] relative w-full">
              <div className="absolute flex md:flex-col flex-row md:gap-5 items-center justify-start right-[10%] top-[24%] w-[54%]">
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
              <div className="absolute flex flex-col gap-2 h-max inset-[0] justify-center m-auto w-[29%]">
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
              <div className="absolute flex flex-col gap-[33px] items-start justify-start left-[7%] top-1/4 w-[21%]">
                <Img
                  className="h-[66px] md:h-auto object-cover w-3/4 sm:w-full"
                  src="images/img_logo1.png"
                  alt="logoTwo"
                />
                <Img
                  className="h-[53px]"
                  src="images/img_appstorebadgesen.svg"
                  alt="appstorebadgese"
                />
              </div>
              <div className="absolute bottom-[12%] flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly right-[0] w-[34%]">
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
                  className="leading-[43.00px] text-[15px] text-black-900 underline w-1/2 sm:w-full"
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
              <div className="absolute bottom-[15%] flex md:flex-col flex-row md:gap-5 items-start justify-start left-[7%] w-[44%]">
                <Text
                  className="md:mt-0 mt-[11px] text-[15px] text-black-900"
                  size="txtPoppinsRegular15"
                >
                  <>
                    Company # 490039-445, Registered with
                    <br />
                    House of companies.
                  </>
                </Text>
                <Img
                  className="h-[45px] md:h-auto md:ml-[0] ml-[226px] object-cover w-[45px]"
                  src="images/img_facebook.png"
                  alt="facebook"
                />
                <Img
                  className="h-[45px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[45px]"
                  src="images/img_instagram.png"
                  alt="instagram"
                />
                <Img
                  className="h-[45px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[45px]"
                  src="images/img_tiktok.png"
                  alt="tiktok"
                />
                <Img
                  className="h-[45px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[45px]"
                  src="images/img_snapchat.png"
                  alt="snapchat"
                />
              </div>
            </div>
            <div className="bg-black-900_01 flex sm:flex-col flex-row md:gap-10 items-start justify-between p-[19px] w-full">
              <Text
                className="mb-0.5 ml-24 sm:ml-[0] sm:mt-0 mt-2 text-[15px] text-white-A700"
                size="txtPoppinsRegular15WhiteA700"
              >
                Order.uk Copyright 2024, All Rights Reserved.
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
        </footer>
        <div className="absolute border border-black-900_01 border-solid flex flex-col items-start justify-end p-[17px] md:px-5 right-[9%] rounded-[31px] top-[17%] w-1/5">
          <Img
            className="h-[26px] md:h-auto md:ml-[0] ml-[11px] mt-[3px] object-cover w-[26px]"
            src="images/img_searchmore.png"
            alt="searchmore"
          />
        </div>
        <div className="absolute flex flex-col inset-x-[0] items-start justify-start max-w-[1528px] mx-auto md:px-5 top-[24%] w-full">
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
              <div className="h-[325px] sm:h-[439px] relative w-full">
                <Img
                  className="h-[325px] m-auto object-cover rounded-[12px] w-full"
                  src="images/img_rectangle8_1.png"
                  alt="rectangleEight"
                />
                <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-end justify-center m-auto sm:pl-5 pl-[30px] rounded-[12px] w-full">
                  <div className="flex flex-col md:gap-10 gap-[169px] justify-start w-full">
                    <div className="bg-black-900_01 flex flex-col items-start justify-start md:ml-[0] ml-[358px] mr-5 p-[17px] rounded-bl-[12px] rounded-br-[12px]">
                      <Text
                        className="my-0.5 text-lg text-white-A700"
                        size="txtPoppinsBold18WhiteA700"
                      >
                        -20%
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[43px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-lg text-orange-600"
                          size="txtPoppinsMedium18Orange600"
                        >
                          McDonald’s East London
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtPoppinsBold32WhiteA700"
                        >
                          First Order Discount
                        </Text>
                      </div>
                      <div className="bg-white-A700_ab flex sm:flex-1 flex-col items-center justify-start p-5 rounded-br-[12px] rounded-tl-[45px] w-[21%] sm:w-full">
                        <Img
                          className="h-[49px] md:h-auto object-cover w-[49px]"
                          src="images/img_plus.png"
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
              <div className="h-[325px] relative w-full">
                <Img
                  className="h-[325px] m-auto object-cover rounded-[12px] w-full"
                  src="images/img_rectangle8_2.png"
                  alt="rectangleEight"
                />
                <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-end justify-center m-auto sm:pl-5 pl-[30px] rounded-[12px] w-full">
                  <div className="flex flex-col md:gap-10 gap-[169px] justify-start w-full">
                    <div className="bg-black-900_01 flex flex-col items-start justify-start md:ml-[0] ml-[358px] mr-5 p-[17px] rounded-bl-[12px] rounded-br-[12px]">
                      <Text
                        className="my-0.5 text-lg text-white-A700"
                        size="txtPoppinsBold18WhiteA700"
                      >
                        -20%
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-lg text-orange-600"
                          size="txtPoppinsMedium18Orange600"
                        >
                          McDonald’s East London
                        </Text>
                        <Text
                          className="mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtPoppinsBold32WhiteA700"
                        >
                          Vegan Discount
                        </Text>
                      </div>
                      <div className="bg-white-A700_ab flex flex-col items-center justify-start p-5 rounded-br-[12px] rounded-tl-[45px] w-[21%]">
                        <Img
                          className="h-[49px] md:h-auto object-cover w-[49px]"
                          src="images/img_plus.png"
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
              <div className="h-[325px] sm:h-[431px] relative w-full">
                <Img
                  className="h-[325px] m-auto object-cover rounded-[12px] w-full"
                  src="images/img_rectangle8_3.png"
                  alt="rectangleEight"
                />
                <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-end justify-center m-auto sm:pl-5 pl-[30px] rounded-[12px] w-full">
                  <div className="flex flex-col md:gap-10 gap-[169px] justify-start w-full">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[88px] md:ml-[0] ml-[358px] mr-5 rounded-bl-[12px] rounded-br-[12px] text-center text-lg"
                      color="black_900_01"
                      size="xl"
                      variant="fill"
                    >
                      -100%
                    </Button>
                    <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-lg text-orange-600"
                          size="txtPoppinsMedium18Orange600"
                        >
                          McDonald’s East London
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtPoppinsBold32WhiteA700"
                        >
                          Free ice Cream Offer
                        </Text>
                      </div>
                      <div className="bg-white-A700_ab flex sm:flex-1 flex-col items-center justify-start p-5 rounded-br-[12px] rounded-tl-[45px] w-[21%] sm:w-full">
                        <Img
                          className="h-[49px] md:h-auto object-cover w-[49px]"
                          src="images/img_plus.png"
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <Text
            className="mt-[76px] sm:text-[34px] md:text-[40px] text-[44px] text-black-900"
            size="txtPoppinsBold44Black900"
          >
            Burgers
          </Text>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[34px] w-full">
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="leading-[23.00px] text-black-900 text-xl w-[97%] sm:w-full"
                    size="txtPoppinsSemiBold20"
                  >
                    Royal Cheese Burger with extra Fries
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-6 text-black-900 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </Text>
                  <Text
                    className="mt-3.5 text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    GBP 23.10
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle46_17.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px]"
                      src="images/img_plus.png"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    The classics for 3
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[15px] text-black-900 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                    sized French Fries , 3 cold drinks
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    GBP 23.10
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle46_18.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px]"
                      src="images/img_plus.png"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    The classics for 3
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[15px] text-black-900 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                    sized French Fries , 3 cold drinks
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    GBP 23.10
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle46_19.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px]"
                      src="images/img_plus.png"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    The classics for 3
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[15px] text-black-900 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                    sized French Fries , 3 cold drinks
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    GBP 23.10
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle46_20.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px]"
                      src="images/img_plus.png"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    The classics for 3
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[15px] text-black-900 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                    sized French Fries , 3 cold drinks
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    GBP 23.10
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle46_21.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px]"
                      src="images/img_plus.png"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    The classics for 3
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[15px] text-black-900 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                    sized French Fries , 3 cold drinks
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    GBP 23.10
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle46_22.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px]"
                      src="images/img_plus.png"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray-900_f4 flex flex-col h-full inset-[0] justify-center m-auto p-[143px] md:px-10 sm:px-5 w-full">
          <div className="md:h-[1442px] sm:h-[1495px] h-[931px] md:ml-[0] ml-[76px] mt-[561px] relative w-[95%] md:w-full">
            <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-end justify-end left-[0] p-9 sm:px-5 rounded-[12px] shadow-bs2 w-[93%]">
              <div className="flex flex-col items-center justify-start mr-[105px] mt-[143px] w-[53%] md:w-full">
                <div className="flex flex-col gap-[31px] items-center justify-start">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900_01"
                    size="txtPoppinsBold54"
                  >
                    <span className="text-black-900_01 font-poppins text-left font-bold">
                      <>
                        Please Enter Your
                        <br />
                      </>
                    </span>
                    <a
                      href="javascript:"
                      className="text-black-900_01 font-poppins text-left font-bold underline"
                    >
                      Post Code
                    </a>
                  </Text>
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtPoppinsRegular26"
                  >
                    <>
                      To start placing delivery order, please
                      <br />
                      enter your full postcode here
                    </>
                  </Text>
                </div>
                <div className="md:h-[218px] h-[39px] mt-[179px] relative w-[78%] sm:w-full">
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto md:text-2xl sm:text-[22px] text-[26px] text-black-900 text-center w-max"
                    size="txtPoppinsBold26"
                  >
                    or
                  </Text>
                  <Img
                    className="absolute h-px inset-x-[0] mx-auto top-[44%]"
                    src="images/img_group47.svg"
                    alt="groupFortySeven"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[73px] items-start justify-start mt-[11px] w-[85%] md:w-full">
                  <Img
                    className="h-[166px] md:h-auto sm:mt-0 mt-[15px] object-cover w-[166px]"
                    src="images/img_mapmarker.png"
                    alt="mapmarker"
                  />
                  <Text
                    className="text-[22px] text-black-900_01 text-center sm:text-lg md:text-xl underline"
                    size="txtPoppinsBold22"
                  >
                    I want to come and collect
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[32%] flex md:flex-col flex-row md:gap-5 items-center justify-evenly right-[0] w-[64%]">
              <Text
                className="bg-gray-200 h-[99px] justify-center pb-6 pt-8 sm:px-5 px-[35px] rounded-bl-[120px] rounded-tl-[120px] sm:text-2xl md:text-[26px] text-[28px] text-black-900_a2 text-center w-[625px]"
                size="txtPoppinsRegular28"
              >
                eg. AA1 1BB{" "}
              </Text>
              <Button
                className="cursor-pointer font-bold min-w-[237px] rounded-br-[120px] rounded-tr-[120px] sm:text-[32px] md:text-[38px] text-[42px] text-center"
                color="orange_600"
                variant="fill"
              >
                Find
              </Button>
            </div>
            <Img
              className="absolute bottom-[0] h-[881px] left-[0] object-cover rounded-bl-[12px] rounded-tl-[12px] w-[34%]"
              src="images/img_rectangle55.png"
              alt="rectangleFiftyFive"
            />
            <div className="absolute bg-black-900_01 flex flex-col h-[116px] items-center justify-start p-[30px] sm:px-5 right-[3%] rounded-[50%] top-[0] w-[116px]">
              <Img
                className="h-[55px] md:h-auto object-cover w-[55px]"
                src="images/img_close.png"
                alt="close"
              />
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[613px] mr-[512px] mt-[1275px] md:text-2xl sm:text-[22px] text-[26px] text-green-900"
            size="txtPoppinsBold26Green900"
          >
            We deliver to your area.
          </Text>
          <div className="md:h-[1125px] sm:h-[1258px] h-[931px] max-w-[1326px] mb-[9px] md:ml-[0] ml-[86px] mr-[30px] mt-[289px] relative w-full">
            <div className="absolute bg-white-A700 bottom-[0] flex flex-col md:gap-10 gap-[88px] items-center justify-end left-[0] p-[76px] md:px-10 sm:px-5 rounded-[12px] shadow-bs2 w-[96%]">
              <div className="flex flex-col items-center justify-start mt-[27px] w-[41%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="md:text-5xl text-[84px] text-black-900_01 text-center"
                    size="txtPoppinsBold84"
                  >
                    Order Now
                  </Text>
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 text-center"
                    size="txtPoppinsRegular26"
                  >
                    <span className="text-black-900 font-poppins font-normal">
                      Minimum Delivery is{" "}
                    </span>
                    <span className="text-black-900 font-poppins font-bold">
                      £10
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                <div className="bg-black-900_01 flex flex-row sm:gap-10 gap-[62px] items-center justify-start p-8 sm:px-5 rounded-[61px] w-full">
                  <Img
                    className="h-[57px] md:h-auto ml-[19px] object-cover w-[57px]"
                    src="images/img_deliveryscooter.png"
                    alt="deliveryscooter"
                  />
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700"
                    size="txtPoppinsBold26WhiteA700"
                  >
                    Deliver my order
                  </Text>
                </div>
                <div className="bg-orange-600 flex sm:flex-col flex-row gap-[47px] items-center justify-start mt-[57px] p-8 sm:px-5 rounded-[61px] w-full">
                  <Img
                    className="h-[57px] md:h-auto sm:ml-[0] ml-[17px] object-cover w-[57px]"
                    src="images/img_newstore.png"
                    alt="newstore"
                  />
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 text-center"
                    size="txtPoppinsBold26"
                  >
                    I will come & Collect
                  </Text>
                </div>
                <div className="md:h-[110px] h-[39px] mt-[71px] relative w-[88%] sm:w-full">
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto md:text-2xl sm:text-[22px] text-[26px] text-black-900 text-center w-max"
                    size="txtPoppinsBold26"
                  >
                    or
                  </Text>
                  <Img
                    className="absolute h-px inset-x-[0] mx-auto top-[44%]"
                    src="images/img_group47.svg"
                    alt="groupFortySeven_One"
                  />
                </div>
                <Text
                  className="mt-[11px] text-[22px] text-black-900_01 text-center sm:text-lg md:text-xl underline"
                  size="txtPoppinsBold22"
                >
                  Cancel & Go back
                </Text>
              </div>
            </div>
            <div className="absolute bg-black-900_01 flex flex-col h-[116px] items-center justify-start p-[30px] sm:px-5 right-[0] rounded-[50%] top-[0] w-[116px]">
              <Img
                className="h-[55px] md:h-auto object-cover w-[55px]"
                src="images/img_close.png"
                alt="close_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryPopupDesktopPage;
