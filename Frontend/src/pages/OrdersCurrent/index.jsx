import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const OrdersCurrentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-barlow items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[115px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1668px] mx-auto md:px-5 w-full">
            <div className="h-[1883px] md:h-[750px] relative w-[21%] md:w-full">
              <div className="absolute h-[1872px] md:h-[750px] inset-[0] justify-center m-auto w-full">
                <div className="absolute bg-white-A700 h-[1872px] md:h-[750px] inset-[0] justify-center m-auto p-[42px] md:px-10 sm:px-5 w-[99%]">
                  <div className="absolute flex flex-col gap-10 h-[900px] md:h-auto items-start justify-start left-[19%] top-[12%] w-auto">
                    <div className="flex flex-row gap-6 h-6 md:h-auto items-start justify-start py-0.5 w-[143px]">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_teal_500.svg"
                        alt="icon"
                      />
                      <Text
                        className="text-lg text-teal-500 w-auto"
                        size="txtBarlowBold18"
                      >
                        Dashboard
                      </Text>
                    </div>
                    <Button
                      className="bg-transparent cursor-pointer flex items-center justify-center min-w-[122px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-6"
                          src="images/img_icon.svg"
                          alt="Icon"
                        />
                      }
                      size="xs"
                    >
                      <div className="font-medium leading-[normal] text-blue_gray-800 text-left text-lg">
                        Order List
                      </div>
                    </Button>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_4.svg"
                        alt="icon_One"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Order Detail
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_blue_gray_800.svg"
                        alt="icon_Two"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Customer
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_blue_gray_800_20x20.svg"
                        alt="icon_Three"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Analytics
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Reviews
                      </Text>
                    </div>
                    <Button
                      className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[93px]"
                      onClick={() => navigate("/menu")}
                      leftIcon={
                        <Img
                          className="h-5 mr-6"
                          src="images/img_television.svg"
                          alt="television"
                        />
                      }
                      size="xs"
                    >
                      <div className="font-medium leading-[normal] text-blue_gray-800 text-left text-lg">
                        Foods
                      </div>
                    </Button>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_20x20.svg"
                        alt="icon_Four"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Food Detail
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_1.svg"
                        alt="icon_Five"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Customer Detail
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_2.svg"
                        alt="icon_Six"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Calendar
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Chat
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_3.svg"
                        alt="icon_Seven"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Wallet
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bottom-[34%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[76%]">
                    <div
                      className="bg-cover bg-no-repeat md:h-[105px] h-[149px] p-[19px] relative w-full"
                      style={{ backgroundImage: "url('images/img_card.svg')" }}
                    >
                      <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[10%] my-auto w-[58%]">
                        <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                          <Text
                            className="leading-[20.00px] text-white-A700 text-xs"
                            size="txtBarlowMedium12"
                          >
                            <>
                              Please, organize your
                              <br />
                              menus through button
                              <br />
                              bellow!
                            </>
                          </Text>
                          <div className="bg-gray-100_03 flex flex-col items-center justify-end p-2 rounded-[5px]">
                            <Text
                              className="mt-0.5 text-[15px] text-blue_gray-800 text-center"
                              size="txtBarlowMedium15"
                            >
                              +Add Menus
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[90px] inset-y-[0] my-auto right-[17%]"
                        src="images/img_play_deep_orange_a100_01.svg"
                        alt="play"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[54px] left-[0] top-[11%]"
                  src="images/img_highlight_teal_500.svg"
                  alt="highlight"
                />
              </div>
              <Img
                className="absolute h-[225px] left-[9%] object-cover top-[0] w-3/4"
                src="images/img_32700620370740_225x260.png"
                alt="32700620370740"
              />
            </div>
            <div className="flex md:flex-1 flex-col font-poppins md:gap-10 gap-[90px] items-center justify-start md:mt-0 mt-[71px] w-[71%] md:w-full">
              <Text
                className="md:text-5xl text-[64px] text-amber-600 tracking-[14.08px]"
                size="txtPoppinsBold64"
              >
                Order List
              </Text>
              <div className="flex flex-col gap-[59px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[93px] items-center justify-start mb-[5px] p-2.5"
                    style={{ backgroundImage: "url('images/img_group20.svg')" }}
                  >
                    <Text
                      className="mb-[11px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtPoppinsSemiBold40"
                    >
                      Order ID
                    </Text>
                  </div>
                  <Text
                    className="bg-amber-600 h-[93px] justify-center mb-[5px] pb-[18px] pt-3.5 sm:px-5 px-[35px] rounded-[30px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[500px]"
                    size="txtPoppinsSemiBold40"
                  >
                    Description
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[275px] md:mt-0 mt-[5px] rounded-[30px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                    shape="round"
                    color="amber_600"
                    variant="fill"
                  >
                    Status
                  </Button>
                </div>
                <div className="md:gap-5 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-start p-7 sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mb-1.5 mr-[76px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtPoppinsMedium40"
                    >
                      101
                    </Text>
                  </div>
                  <div className="hover:border hover:border-black-900_19 hover:border-solid hover:cursor-pointer md:h-[143px] h-[157px] hover:relative relative hover:shadow-bs1 hover:w-full w-full">
                    <div className="md:h-[143px] h-[157px] m-auto w-full">
                      <div className="absolute bg-gray-50_02 border border-black-900_19 border-solid h-[123px] left-[0] rounded-[12px] shadow-bs1 top-[0] w-[96%]"></div>
                      <Text
                        className="absolute bottom-[0] right-[0] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtPoppinsMedium28"
                      >
                        <>
                          Sea Food Cheese <br />
                          Kottu x 1
                        </>
                      </Text>
                    </div>
                    <Img
                      className="absolute h-[122px] object-cover right-[5%] rounded-[12px] top-[0] w-[31%]"
                      src="images/img_rectangle46_1.png"
                      alt="rectangle151"
                    />
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-start p-10 sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mr-3 sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtPoppinsMedium28"
                    >
                      Processing
                    </Text>
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-start p-[30px] sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mb-0.5 mr-[62px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtPoppinsMedium40"
                    >
                      102
                    </Text>
                  </div>
                  <div className="hover:border hover:border-black-900_19 hover:border-solid hover:cursor-pointer md:h-[143px] h-[154px] hover:relative relative hover:shadow-bs1 hover:w-full w-full">
                    <div className="md:h-[143px] h-[154px] m-auto w-full">
                      <div className="absolute bg-gray-50_02 border border-black-900_19 border-solid h-[123px] inset-x-[0] mx-auto rounded-[12px] shadow-bs1 top-[0] w-full"></div>
                      <Text
                        className="absolute bottom-[0] right-[4%] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtPoppinsMedium28"
                      >
                        <>
                          Sea Food Cheese <br />
                          Kottu x 1
                        </>
                      </Text>
                    </div>
                    <Img
                      className="absolute h-[122px] object-cover right-[0] rounded-[12px] top-[0] w-[32%]"
                      src="images/img_rectangle46_1.png"
                      alt="rectangle151"
                    />
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-end p-9 sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mr-3 mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtPoppinsMedium28"
                    >
                      Processing
                    </Text>
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-start p-[30px] sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mb-0.5 mr-16 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtPoppinsMedium40"
                    >
                      103
                    </Text>
                  </div>
                  <div className="hover:border hover:border-black-900_19 hover:border-solid hover:cursor-pointer md:h-[143px] h-[161px] hover:relative relative hover:shadow-bs1 hover:w-full w-full">
                    <div className="md:h-[143px] h-[161px] m-auto w-full">
                      <div className="absolute bg-gray-50_02 border border-black-900_19 border-solid h-[123px] inset-x-[0] mx-auto rounded-[12px] shadow-bs1 top-[0] w-full"></div>
                      <Text
                        className="absolute bottom-[0] right-[5%] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtPoppinsMedium28"
                      >
                        <>
                          Sea Food Cheese <br />
                          Kottu x 1
                        </>
                      </Text>
                    </div>
                    <Img
                      className="absolute h-[122px] object-cover right-[0] rounded-[12px] top-[0] w-[32%]"
                      src="images/img_rectangle46_1.png"
                      alt="rectangle151"
                    />
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-start p-[34px] sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mb-3 mr-[19px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtPoppinsMedium28"
                    >
                      Processing
                    </Text>
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-start p-7 sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mb-1.5 mr-[61px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtPoppinsMedium40"
                    >
                      104
                    </Text>
                  </div>
                  <div className="hover:border hover:border-black-900_19 hover:border-solid hover:cursor-pointer md:h-[143px] h-[161px] hover:relative relative hover:shadow-bs1 hover:w-full w-full">
                    <div className="md:h-[143px] h-[161px] m-auto w-full">
                      <div className="absolute bg-gray-50_02 border border-black-900_19 border-solid h-[123px] inset-x-[0] mx-auto rounded-[12px] shadow-bs1 top-[0] w-full"></div>
                      <Text
                        className="absolute bottom-[0] right-[4%] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtPoppinsMedium28"
                      >
                        <>
                          Sea Food Cheese <br />
                          Kottu x 1
                        </>
                      </Text>
                    </div>
                    <Img
                      className="absolute h-[122px] object-cover right-[0] rounded-[12px] top-[0] w-[32%]"
                      src="images/img_rectangle46_1.png"
                      alt="rectangle151"
                    />
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-end p-9 sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mr-3 mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtPoppinsMedium28"
                    >
                      Processing
                    </Text>
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-start p-[25px] sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mb-3 mr-16 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtPoppinsMedium40"
                    >
                      105
                    </Text>
                  </div>
                  <div className="hover:border hover:border-black-900_19 hover:border-solid hover:cursor-pointer md:h-[143px] h-[169px] hover:relative relative hover:shadow-bs1 hover:w-full w-full">
                    <div className="md:h-[143px] h-[169px] m-auto w-full">
                      <div className="absolute bg-gray-50_02 border border-black-900_19 border-solid h-[123px] inset-x-[0] mx-auto rounded-[12px] shadow-bs1 top-[0] w-full"></div>
                      <Text
                        className="absolute bottom-[0] right-[4%] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtPoppinsMedium28"
                      >
                        <>
                          Sea Food Cheese <br />
                          Kottu x 1
                        </>
                      </Text>
                    </div>
                    <Img
                      className="absolute h-[122px] object-cover right-[0] rounded-[12px] top-[0] w-[32%]"
                      src="images/img_rectangle46_1.png"
                      alt="rectangle151"
                    />
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-end p-[38px] sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mr-[11px] mt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtPoppinsMedium28"
                    >
                      Processing
                    </Text>
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-start p-[17px] rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mb-7 mr-[71px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtPoppinsMedium40"
                    >
                      106
                    </Text>
                  </div>
                  <div className="hover:border hover:border-black-900_19 hover:border-solid hover:cursor-pointer md:h-[143px] h-[161px] hover:relative relative hover:shadow-bs1 hover:w-full w-full">
                    <div className="absolute md:h-[143px] h-[161px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute bg-gray-50_02 border border-black-900_19 border-solid h-[123px] inset-x-[0] mx-auto rounded-[12px] shadow-bs1 top-[0] w-full"></div>
                      <Text
                        className="absolute bottom-[0] right-[4%] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtPoppinsMedium28"
                      >
                        <>
                          Sea Food Cheese <br />
                          Kottu x 1
                        </>
                      </Text>
                    </div>
                    <Img
                      className="absolute h-[122px] object-cover right-[0] rounded-[12px] top-[0] w-[32%]"
                      src="images/img_rectangle46_1.png"
                      alt="rectangle151"
                    />
                  </div>
                  <div className="bg-gray-50_02 hover:border border hover:border-black-900_19 border-black-900_19 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-end justify-end p-[35px] sm:px-5 rounded-[12px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <Text
                      className="mr-[13px] mt-[9px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtPoppinsMedium28"
                    >
                      Processing
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex font-poppins items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="md:h-[1212px] sm:h-[365px] h-[390px] relative w-full">
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
                      <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:mt-0 mt-[26px] w-[63%] md:w-full">
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
                  alt="32700620370740_One"
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
                  className="mr-[75px] sm:mt-0 mt-[11px] text-[15px] text-white-A700"
                  size="txtPoppinsRegular15WhiteA700"
                >
                  Privacy Policy Terms Pricing Do not sell or share my personal
                  information
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default OrdersCurrentPage;
