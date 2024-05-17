import React from "react";

import { Button, Img, Input, Text } from "components";

const MenuPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex md:flex-col flex-row font-barlow md:gap-10 items-center justify-between w-full">
            <div className="md:h-[1159px] sm:h-[1295px] h-[1340px] md:px-5 relative w-[21%] md:w-full">
              <div className="md:h-[1159px] sm:h-[1295px] h-[1340px] m-auto w-full">
                <div className="absolute bg-white-A700 flex flex-col md:gap-10 gap-44 h-full inset-[0] justify-center m-auto p-[42px] md:px-10 sm:px-5 w-[99%]">
                  <div className="flex flex-col gap-10 h-[750px] md:h-auto items-start justify-start md:ml-[0] ml-[25px] mr-[66px] mt-[116px] w-auto">
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
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon.svg"
                        alt="icon_One"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Order List
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_4.svg"
                        alt="icon_Two"
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
                        alt="icon_Three"
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
                        alt="icon_Four"
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
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_television.svg"
                        alt="television"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Foods
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_20x20.svg"
                        alt="icon_Five"
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
                        alt="icon_Six"
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
                        alt="icon_Seven"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Calendar
                      </Text>
                    </div>
                    <div className="overflow-x-auto w-[48%]">
                      <div className="flex flex-row gap-6 items-start justify-start overflow-auto py-0.5 w-auto">
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
                        <Img
                          className="h-6"
                          src="images/img_chevrondown.svg"
                          alt="chevrondown"
                        />
                        <Img
                          className="h-6"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 items-start justify-start py-0.5 w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icon_3.svg"
                        alt="icon_Eight"
                      />
                      <Text
                        className="text-blue_gray-800 text-lg w-auto"
                        size="txtBarlowMedium18"
                      >
                        Wallet
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-16 w-full">
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
                        src="images/img_play_deep_orange_a100_01_90x76.svg"
                        alt="play"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[38px] left-[0] top-[11%]"
                  src="images/img_highlight_teal_500.svg"
                  alt="highlight"
                />
              </div>
              <Img
                className="absolute h-[211px] left-[9%] object-cover top-[0] w-3/4"
                src="images/img_32700620370740_211x260.png"
                alt="32700620370740"
              />
            </div>
            <div className="flex md:flex-1 flex-col font-poppins items-end justify-start overflow-auto md:px-5 w-[72%] md:w-full">
              <div className="overflow-x-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[150px] justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[29px] items-start justify-start w-[77%] md:w-full">
                    <div className="flex flex-col gap-[43px] items-center justify-start w-[79%] md:w-full">
                      <div className="flex flex-col gap-[53px] justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[454px] md:text-5xl sm:text-[42px] text-[56px] text-black-900"
                          size="txtPoppinsBold56"
                        >
                          Menu
                        </Text>
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                            size="txtPoppinsSemiBold32Bluegray900"
                          >
                            Catogories
                          </Text>
                          <div className="flex relative w-[10%]">
                            <a
                              href="javascript:"
                              className="my-auto text-amber-600_01 text-xl w-[77%] sm:w-full"
                            >
                              <Text size="txtPoppinsMedium20">View all</Text>
                            </a>
                            <Img
                              className="h-6 ml-[-0.9px] mt-0.5 z-[1]"
                              src="images/img_arrowright.svg"
                              alt="arrowright_One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="bg-white-A700 flex md:flex-1 flex-col gap-[52px] justify-end mb-1.5 p-[26px] sm:px-5 rounded-[16px] w-[32%] md:w-full">
                            <Img
                              className="h-[165px] md:h-auto md:ml-[0] ml-[37px] mr-6 mt-[22px] object-cover rounded-[20px] w-[74%] sm:w-full"
                              src="images/img_rectangle46_165x178.png"
                              alt="rectangleFortySix"
                            />
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[55px] mr-[67px]">
                              <Text
                                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                                size="txtPoppinsMedium24"
                              >
                                Fried Rice
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex md:flex-1 flex-col md:gap-10 gap-[60px] items-center justify-end p-[26px] sm:px-5 rounded-[16px] w-[33%] md:w-full">
                            <Img
                              className="h-[158px] md:h-auto mt-[26px] object-cover rounded-[20px] w-[73%] sm:w-full"
                              src="images/img_rectangle47.png"
                              alt="rectangleFortySeven"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                                size="txtPoppinsMedium24"
                              >
                                Kottu
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex md:flex-1 flex-col md:gap-10 gap-[72px] items-center justify-end p-[9px] rounded-[16px] w-[33%] md:w-full">
                            <Img
                              className="h-[165px] md:h-auto mt-[43px] object-cover rounded-[20px] w-[65%] sm:w-full"
                              src="images/img_rectangle48.png"
                              alt="rectangleFortyEight"
                            />
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                                size="txtPoppinsMedium24"
                              >
                                Speghetti
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[19px] items-center justify-start md:mt-0 mt-[304px] w-[19%] md:w-full">
                      <Input
                        name="groupTwentySix"
                        placeholder="Add Category"
                        className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                        wrapClassName="flex rounded-[30px] w-full"
                        prefix={
                          <Img
                            className="mr-1 my-auto"
                            src="images/img_iconparksolidadd.svg"
                            alt="icon-park-solid:add"
                          />
                        }
                        shape="round"
                        color="amber_600_01"
                        size="xs"
                      ></Input>
                      <Input
                        name="groupTwentyFour"
                        placeholder="Edit Category"
                        className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                        wrapClassName="flex rounded-[30px] w-full"
                        prefix={
                          <Img
                            className="my-auto"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                        }
                        shape="round"
                        color="amber_600_01"
                        size="sm"
                      ></Input>
                      <Input
                        name="groupTwentyTwo"
                        placeholder="Delete Category"
                        className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                        wrapClassName="flex rounded-[30px] w-full"
                        prefix={
                          <Img
                            className="mr-[3px] my-auto"
                            src="images/img_mdidelete.svg"
                            alt="mdi:delete"
                          />
                        }
                        shape="round"
                        color="amber_600_01"
                        size="xs"
                      ></Input>
                    </div>
                  </div>
                  <div className="h-[464px] md:h-[601px] sm:h-[732px] md:ml-[0] ml-[5px] relative w-full">
                    <div className="absolute sm:h-[457px] h-[464px] md:h-[601px] inset-y-[0] left-[0] my-auto w-4/5 md:w-full">
                      <div className="absolute flex flex-col gap-[30px] h-full inset-y-[0] items-start justify-start left-[0] my-auto w-[76%]">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-full">
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                            size="txtPoppinsSemiBold32Bluegray900"
                          >
                            Food Items
                          </Text>
                          <div className="flex md:ml-[0] ml-[646px] md:mt-0 mt-1 relative w-[10%] md:w-full">
                            <a
                              href="javascript:"
                              className="my-auto text-amber-600_01 text-xl w-[78%] sm:w-full"
                            >
                              <Text size="txtPoppinsMedium20">View all</Text>
                            </a>
                            <Img
                              className="h-6 ml-[-0.89px] mt-0.5 z-[1]"
                              src="images/img_arrowright.svg"
                              alt="arrowright_Two"
                            />
                          </div>
                          <a
                            href="javascript:"
                            className="sm:flex-1 md:ml-[0] ml-[528px] md:mt-0 mt-1 text-amber-600_01 text-xl w-[8%] sm:w-full"
                          >
                            <Text size="txtPoppinsMedium20">View all</Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[33%] md:w-full">
                          <div className="md:h-[363px] h-[370px] relative w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[37px] sm:px-5 rounded-[16px] w-full">
                              <Img
                                className="h-[199px] md:h-auto mb-[90px] object-cover rounded-[12px] w-[81%]"
                                src="images/img_rectangle46_1.png"
                                alt="rectangleFortyNine"
                              />
                            </div>
                            <Text
                              className="absolute bottom-[0] left-[19%] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-2/5 sm:w-full"
                              size="txtPoppinsBold24Bluegray900"
                            >
                              Rs. 1500.00
                            </Text>
                            <Text
                              className="absolute bottom-[14%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-3/5 sm:w-full"
                              size="txtPoppinsBold24Bluegray900"
                            >
                              Mixed Fried Rice
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-end my-auto md:pr-10 sm:pr-5 pr-[88px] pt-[88px] right-[0] w-[76%]">
                        <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
                          <div className="md:h-[363px] h-[370px] relative w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[35px] sm:px-5 rounded-[16px] w-full">
                              <Img
                                className="h-[199px] md:h-auto mb-[94px] object-cover rounded-[12px] w-[79%]"
                                src="images/img_rectangle46_6.png"
                                alt="rectangleFiftyTwo"
                              />
                            </div>
                            <Text
                              className="absolute bottom-[0] left-[19%] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-2/5 sm:w-full"
                              size="txtPoppinsBold24Bluegray900"
                            >
                              Rs. 1500.00
                            </Text>
                            <Text
                              className="absolute bottom-[14%] left-[19%] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-[55%] sm:w-full"
                              size="txtPoppinsBold24Bluegray900"
                            >
                              Sea Food Kottu
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[30px] h-max inset-y-[0] justify-start my-auto right-[0] w-3/5">
                      <div className="h-[60px] md:ml-[0] ml-[833px] w-[10%]"></div>
                      <div className="flex sm:flex-col flex-row gap-[43px] items-center justify-start mr-[356px] w-[62%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[53%] sm:w-full">
                          <div className="md:h-[363px] h-[370px] relative w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[37px] sm:px-5 rounded-[16px] w-full">
                              <Img
                                className="h-[199px] md:h-auto mb-[90px] object-cover rounded-[12px] w-[81%]"
                                src="images/img_rectangle46_1.png"
                                alt="rectangleFiftyOne"
                              />
                            </div>
                            <Text
                              className="absolute bottom-[0] left-[19%] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-2/5 sm:w-full"
                              size="txtPoppinsBold24Bluegray900"
                            >
                              Rs. 1500.00
                            </Text>
                            <Text
                              className="absolute bottom-[14%] left-[19%] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-[53%] sm:w-full"
                              size="txtPoppinsBold24Bluegray900"
                            >
                              Fish Speghetti
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[19px] items-center justify-start w-2/5 sm:w-full">
                          <Text
                            className="bg-amber-600_01 h-[66px] justify-center sm:px-5 px-[35px] py-[17px] rounded-[30px] text-white-A700 text-xl w-[225px]"
                            size="txtPoppinsBold20"
                          >
                            Add Item
                          </Text>
                          <Input
                            name="groupTwentyThree"
                            placeholder="Edit Item"
                            className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-left text-xl w-full"
                            wrapClassName="flex rounded-[30px] w-full"
                            prefix={
                              <Img
                                className="mr-[22px] my-auto"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                            }
                            shape="round"
                            color="amber_600_01"
                            size="sm"
                          ></Input>
                          <Input
                            name="groupTwentyOne"
                            placeholder="Delete Item"
                            className="font-bold leading-[normal] p-0 placeholder:text-white-A700 text-left text-xl w-full"
                            wrapClassName="flex rounded-[30px] w-full"
                            prefix={
                              <Img
                                className="mr-[15px] my-auto"
                                src="images/img_mdidelete.svg"
                                alt="mdi:delete"
                              />
                            }
                            shape="round"
                            color="amber_600_01"
                            size="xs"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Input
            name="setting"
            placeholder="Logout"
            className="font-bold font-poppins leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-left text-xl w-full"
            wrapClassName="flex ml-20 md:ml-[0] mt-[91px] rounded-[40px] w-[15%]"
            prefix={
              <Img
                className="mt-px mb-[5px] h-6 mr-6"
                src="images/img_arrowdown_white_a700.svg"
                alt="arrow_down"
              />
            }
            color="black_900"
            size="xl"
          ></Input>
          <footer className="flex font-poppins items-center justify-center mt-[106px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="md:h-[1212px] sm:h-[365px] h-[390px] relative w-full">
                <div className="absolute bg-blue_gray-100_90 bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto md:pl-10 sm:pl-5 pl-[42px] py-[42px] w-full">
                  <div className="flex flex-col justify-start mt-[47px] w-[97%] md:w-full">
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
                  alt="32700620370740_One"
                />
              </div>
              <div className="bg-black-900_01 flex sm:flex-col flex-row md:gap-10 items-start justify-between p-[19px] w-full">
                <Text
                  className="mb-0.5 sm:ml-[0] ml-[88px] sm:mt-0 mt-2 text-[15px] text-white-A700"
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
          </footer>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
