import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const iconThirteenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FoodDeliveryDashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_icon_teal_500.svg"
          alt="icon"
        />
      ),
      label: "Dashboard",
      href: "/fooddeliverydashboard",
      active: window.location.pathname === "/fooddeliverydashboard",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_icon_blue_gray_800.svg"
          alt="icon_One"
        />
      ),
      label: "Customer",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_icon_blue_gray_800_20x20.svg"
          alt="icon_Two"
        />
      ),
      label: "Analytics",
    },
    {
      icon: <Img className="h-5 w-5" src="images/img_edit.svg" alt="edit" />,
      label: "Reviews",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_television.svg"
          alt="television"
        />
      ),
      label: "Foods",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_icon_20x20.svg"
          alt="icon_Three"
        />
      ),
      label: "Food Detail",
    },
    {
      icon: (
        <Img className="h-5 w-5" src="images/img_icon_1.svg" alt="icon_Four" />
      ),
      label: "Customer Detail",
    },
    {
      icon: (
        <Img className="h-5 w-5" src="images/img_icon_2.svg" alt="icon_Five" />
      ),
      label: "Calendar",
    },
    {
      icon: <Img className="h-5 w-5" src="images/img_user.svg" alt="user" />,
      label: "Chat",
    },
    {
      icon: (
        <Img className="h-5 w-5" src="images/img_icon_3.svg" alt="icon_Six" />
      ),
      label: "Wallet",
    },
  ];

  return (
    <>
      <div className="bg-gray-100_02 font-barlow h-[1743px] mx-auto relative w-full">
        <div className="absolute bottom-[0] h-[1872px] inset-x-[0] mx-auto md:px-5 w-full">
          <div className="h-[1872px] m-auto w-full">
            <div className="absolute flex inset-[0] justify-center m-auto w-full">
              <Sidebar
                onClick={() => collapseSidebar(!collapsed)}
                className="!sticky !w-[345px] bg-white-A700 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]"
              >
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[122px] ml-[67px] mr-[156px] mt-[289px]"
                  onClick={() => navigate("/orderscurrent")}
                  leftIcon={
                    <Img
                      className="h-5 mb-0.5 mr-6"
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
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: "19px 19px 19px 66px",
                      gap: "24px",
                      color: "#464154",
                      fontWeight: 500,
                      fontSize: "18px",
                      [`&:hover, &.ps-active`]: {
                        color: "#00b074",
                        fontWeight: "700 !important",
                      },
                    },
                  }}
                  className="flex flex-col items-center justify-start pt-0.5 w-full"
                >
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </Menu>
                {!collapsed && (
                  <div
                    className="bg-cover bg-no-repeat h-[149px] md:h-[216px] ml-[45px] mr-10 mt-[111px] p-[19px] relative w-[76%]"
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
                      src="images/img_play.svg"
                      alt="play"
                    />
                  </div>
                )}
                {!collapsed && (
                  <Img
                    className="h-[54px] md:h-auto mb-[1603px] mr-[46px] object-cover"
                    src="images/img_highlight.png"
                    alt="highlight"
                  />
                )}
              </Sidebar>
              <Img
                className="h-[209px] ml-[undefinedpx] object-cover w-[16%] z-[1]"
                src="images/img_32700620370740_209x260.png"
                alt="32700620370740"
              />
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-[-38px] mr-5 mt-[41px] w-[81%] z-[1]">
                <div className="bg-gray-50_02 border border-gray-200_03 border-solid flex flex-col items-center justify-start p-[15px] rounded-lg w-[64%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-[87%] md:w-full">
                    <Text
                      className="mt-[3px] text-base text-gray-500_03"
                      size="txtBarlowRegular16"
                    >
                      Search here
                    </Text>
                    <Img
                      className="h-6 w-[23px]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-3.5 items-center justify-center w-1/5 md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-[31px] grid grid-cols-2 w-[48%]"
                    orientation="horizontal"
                  >
                    <div className="md:h-12 h-[54px] sm:ml-[0] relative w-full">
                      <div className="absolute bg-blue-600_26 bottom-[0] flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto p-2.5 rounded-[15px] w-12">
                        <div className="flex flex-col h-7 items-center justify-start w-7">
                          <Img
                            className="h-7 w-7"
                            src="images/img_icon_blue_600.svg"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bg-blue-600 h-[19px] justify-center outline outline-[3px] outline-gray-100_02 px-0.5 right-[4%] rounded-lg text-center text-white-A700 text-xs top-[0] w-4"
                        size="txtBarlowRegular12"
                      >
                        21
                      </Text>
                    </div>
                    <div className="md:h-12 h-[54px] sm:ml-[0] relative w-full">
                      <div className="absolute bg-blue-600_26 bottom-[0] flex flex-col h-12 inset-x-[0] items-center justify-start mx-auto p-2.5 rounded-[15px] w-12">
                        <div className="flex flex-col h-7 items-center justify-start w-7">
                          <Img
                            className="h-7 w-7"
                            src="images/img_user_blue_600.svg"
                            alt="user"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bg-blue-600 h-[19px] justify-center outline outline-[3px] outline-gray-100_02 px-0.5 right-[23%] rounded-lg text-center text-white-A700 text-xs top-[0] w-4"
                        size="txtBarlowRegular12"
                      >
                        53
                      </Text>
                    </div>
                  </List>
                  <List
                    className="sm:flex-col flex-row gap-[31px] grid grid-cols-2 w-[48%]"
                    orientation="horizontal"
                  >
                    <div className="md:h-12 h-[54px] relative w-full">
                      <Button
                        className="absolute bottom-[0] flex h-12 inset-x-[0] items-center justify-center mx-auto rounded-[15px] w-12"
                        color="blue_gray_500_26"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-7"
                          src="images/img_icondashboard.svg"
                          alt="icondashboard"
                        />
                      </Button>
                      <Text
                        className="absolute bg-blue_gray-500 h-[19px] justify-center outline outline-[3px] outline-gray-100_02 px-0.5 right-[4%] rounded-lg text-center text-white-A700 text-xs top-[0] w-4"
                        size="txtBarlowRegular12"
                      >
                        15
                      </Text>
                    </div>
                    <div className="md:h-12 h-[54px] relative w-full">
                      <Button
                        className="absolute bottom-[0] flex h-12 inset-x-[0] items-center justify-center mx-auto rounded-[15px] w-12"
                        color="red_A200_26"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-7"
                          src="images/img_icondashboard_red_a200.svg"
                          alt="icondashboard"
                        />
                      </Button>
                      <Text
                        className="absolute bg-red-A200 h-[19px] justify-center outline outline-[3px] outline-gray-100_02 px-0.5 right-[23%] rounded-lg text-center text-white-A700 text-xs top-[0] w-4"
                        size="txtBarlowRegular12"
                      >
                        19
                      </Text>
                    </div>
                  </List>
                </div>
                <Line className="bg-blue_gray-100_02 h-14 md:h-px ml-5 md:ml-[0] rounded-[1px] md:w-full w-px" />
                <div className="flex flex-row items-center justify-between md:ml-[0] ml-[23px] w-[14%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-blue_gray-800"
                      size="txtBarlowRegular16Bluegray800"
                    >
                      <span className="text-blue_gray-800 font-barlow text-left font-normal">
                        Hello,{" "}
                      </span>
                      <span className="text-blue_gray-800 font-barlow text-left font-semibold">
                        Amal
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[27%]">
                    <Img
                      className="h-14 md:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-full"
                      src="images/img_placeholder.png"
                      alt="placeholder"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-[undefinedpx] mt-[137px] w-[79%] z-[1]">
                <div className="flex flex-col gap-3 justify-start md:mt-0 mt-[3px]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800"
                    size="txtBarlowSemiBold32"
                  >
                    Dashboard
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[52px] text-gray-500_04 text-lg"
                    size="txtBarlowMedium18Gray50004"
                  >
                    Hi, Amal. Welcome back to Leon’s Kitchen Admin!
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row gap-6 items-center justify-center p-3.5 rounded-[12px] shadow-bs5 w-[23%] md:w-full">
                  <div className="h-12 ml-[30px] relative w-[67%]">
                    <div className="absolute flex flex-col gap-[7px] h-max inset-y-[0] justify-start my-auto right-[0]">
                      <Text
                        className="ml-2 md:ml-[0] text-blue_gray-800_01 text-lg"
                        size="txtBarlowMedium18Bluegray80001"
                      >
                        Filter Periode
                      </Text>
                      <Text
                        className="text-blue_gray-800_01 text-xs"
                        size="txtBarlowRegular12Bluegray80001"
                      >
                        17 April 2020 - 21 May 2020
                      </Text>
                    </div>
                    <Button
                      className="absolute flex h-12 inset-y-[0] items-center justify-center left-[0] my-auto rounded-[15px] w-12"
                      color="blue_600_26"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[34px]"
                        src="images/img_icon_blue_600_48x48.svg"
                        alt="icon_Seven"
                      />
                    </Button>
                  </div>
                  <Img
                    className="h-6 mr-[11px] w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-end justify-start ml-[-4px] mt-[253px] p-[34px] sm:px-5 rounded-[14px] shadow-bs5 w-1/5 z-[1]">
                <div className="flex flex-row gap-[9px] items-start justify-end mr-[29px] w-[68%] md:w-full">
                  <Img
                    className="h-[85px] mt-0.5"
                    src="images/img_floatingicon.svg"
                    alt="floatingicon"
                  />
                  <div className="flex flex-col items-start justify-start w-[47%]">
                    <div className="flex flex-col items-center justify-start w-[59%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="sm:text-4xl md:text-[42px] text-[46px] text-blue_gray-800"
                          size="txtBarlowBold46"
                        >
                          75
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-base text-blue_gray-800"
                        size="txtBarlowRegular16Bluegray800"
                      >
                        Total Orders
                      </Text>
                    </div>
                    <div className="h-[17px] md:h-[23px] mt-2 relative w-[93%]">
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0]">
                        <Text
                          className="text-gray-500_04 text-xs"
                          size="txtBarlowRegular12Gray50004"
                        >
                          4% (30 days)
                        </Text>
                      </div>
                      <div className="absolute bg-teal-A400_26 flex flex-col h-4 items-center justify-start left-[0] p-[5px] rotate-[180deg] rounded-[50%] top-[0] w-4">
                        <Img
                          className="h-[5px] w-[5px]"
                          src="images/img_icon_teal_500_01.svg"
                          alt="icon_Eight"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start ml-[undefinedpx] mr-auto mt-[253px] p-[34px] sm:px-5 rounded-[14px] shadow-bs5 w-1/5 z-[1]">
                <div className="flex flex-row gap-5 items-start justify-center w-[77%] md:w-full">
                  <div className="bg-teal-500_26 flex flex-col items-start justify-start mb-3.5 mt-0.5 p-[7px] rounded-[42px] w-[84px]">
                    <Img
                      className="h-[45px] my-3"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                  </div>
                  <div className="flex flex-col h-[102px] items-center justify-start w-[102px]">
                    <div className="flex flex-col h-[102px] items-start justify-start w-[102px]">
                      <div className="flex flex-col items-center justify-start w-[73%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="sm:text-4xl md:text-[42px] text-[46px] text-blue_gray-800"
                            size="txtBarlowBold46"
                          >
                            357
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-base text-blue_gray-800"
                          size="txtBarlowRegular16Bluegray800"
                        >
                          Total Delivered
                        </Text>
                      </div>
                      <div className="h-[17px] md:h-[23px] mt-2 relative w-[66%]">
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto">
                          <Text
                            className="text-gray-500_04 text-xs"
                            size="txtBarlowRegular12Gray50004"
                          >
                            4% (30 days)
                          </Text>
                        </div>
                        <div className="absolute bg-teal-A400_26 flex flex-col h-4 items-center justify-start left-[0] p-[5px] rotate-[180deg] rounded-[50%] top-[0] w-4">
                          <Img
                            className="h-[5px] w-[5px]"
                            src="images/img_icon_teal_500_01.svg"
                            alt="icon_Nine"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 flex flex-col items-end justify-start p-[33px] sm:px-5 right-[21%] rounded-[14px] shadow-bs5 top-[14%] w-1/5">
              <div className="flex flex-row gap-[7px] items-start justify-end mb-0.5 mr-[23px] w-[71%] md:w-full">
                <Img
                  className="h-[85px] mt-[3px] w-[84px]"
                  src="images/img_floatingicon_teal_500.svg"
                  alt="floatingicon_One"
                />
                <div className="flex flex-col items-center justify-start w-[101px]">
                  <div className="flex flex-col items-center justify-start w-[101px] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[101px] md:w-full">
                      <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="sm:text-4xl md:text-[42px] text-[46px] text-blue_gray-800"
                            size="txtBarlowBold46"
                          >
                            65
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-base text-blue_gray-800"
                          size="txtBarlowRegular16Bluegray800"
                        >
                          Total Canceled
                        </Text>
                      </div>
                      <div className="h-[17px] md:h-[23px] mt-2 relative w-[85%]">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0]">
                          <Text
                            className="text-gray-500_04 text-xs"
                            size="txtBarlowRegular12Gray50004"
                          >
                            25% (30 days)
                          </Text>
                        </div>
                        <div className="absolute bg-red-A200_26 flex flex-col h-4 items-center justify-start left-[0] p-[5px] rotate-[180deg] rounded-[50%] top-[0] w-4">
                          <Img
                            className="h-[5px] w-[5px]"
                            src="images/img_icon_red_a200.svg"
                            alt="icon_Ten"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[172px] right-[1%] top-[14%] w-1/5">
              <div className="absolute bg-white-A700 h-[172px] inset-[0] justify-center m-auto rounded-[14px] shadow-bs5 w-full"></div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[33px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group97.svg')" }}
              >
                <div className="flex flex-row gap-[21px] items-start justify-center mb-0.5 w-[77%] md:w-full">
                  <Img
                    className="h-[85px] mt-[3px] w-[84px]"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                  <div className="flex flex-col items-center justify-start w-[101px]">
                    <div className="flex flex-col items-center justify-start w-[101px] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[101px] md:w-full">
                        <div className="flex flex-col items-start justify-start w-[101px] md:w-full">
                          <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] w-[97%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Text
                                className="sm:text-4xl md:text-[42px] text-[46px] text-blue_gray-800"
                                size="txtBarlowBold46"
                              >
                                $128
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px]">
                            <Text
                              className="text-base text-blue_gray-800"
                              size="txtBarlowRegular16Bluegray800"
                            >
                              Total Revenue
                            </Text>
                          </div>
                          <div className="h-[17px] md:h-[23px] mt-2 relative w-[69%]">
                            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                              <Text
                                className="text-gray-500_04 text-xs"
                                size="txtBarlowRegular12Gray50004"
                              >
                                12% (30 days)
                              </Text>
                            </div>
                            <div className="absolute bg-red-A200_26 flex flex-col h-4 items-center justify-start left-[6%] p-[5px] rotate-[180deg] rounded-[50%] top-[0] w-4">
                              <Img
                                className="h-[5px] w-[5px]"
                                src="images/img_icon_red_a200.svg"
                                alt="icon_Eleven"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 flex flex-col items-center justify-end p-7 sm:px-5 right-[0] rounded-[14px] shadow-bs5 top-1/4 w-[42%]">
              <div className="flex flex-col gap-12 items-center justify-start w-[95%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-[95%] md:w-full">
                  <div className="flex flex-col gap-[7px] justify-start">
                    <Text
                      className="md:ml-[0] ml-[17px] text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
                      size="txtBarlowBold24"
                    >
                      Chart Order
                    </Text>
                    <Text
                      className="text-base text-gray-400_02"
                      size="txtBarlowRegular16Gray40002"
                    >
                      Lorem ipsum dolor sit amet, consectetur adip
                    </Text>
                  </div>
                  <div className="border border-blue-600 border-solid flex flex-col font-cairo items-end justify-end mb-0.5 sm:mt-0 mt-1.5 p-[11px] rounded-[14px] w-[32%] sm:w-full">
                    <div className="h-6 mr-2.5 relative w-[71%]">
                      <Text
                        className="absolute h-full inset-y-[0] my-auto right-[0] text-blue-600 text-lg"
                        size="txtCairoBold18"
                      >
                        Save Report
                      </Text>
                      <Img
                        className="absolute h-6 inset-y-[0] left-[0] my-auto w-6"
                        src="images/img_icon_blue_600_24x24.svg"
                        alt="icon_Twelve"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:h-[135px] h-[166px] relative w-full">
                  <Img
                    className="absolute bottom-[7%] h-[135px] inset-x-[0] mx-auto object-cover"
                    src="images/img_vector7.png"
                    alt="vectorSeven"
                  />
                  <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-auto w-[94%]">
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtBarlowRegular14"
                    >
                      Sunday
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtBarlowRegular14"
                    >
                      Monday
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtBarlowRegular14"
                    >
                      Tuesday
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtBarlowRegular14"
                    >
                      Wednesday
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtBarlowRegular14"
                    >
                      Thursday
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtBarlowRegular14"
                    >
                      Friday
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-sm"
                      size="txtBarlowRegular14"
                    >
                      Saturday
                    </Text>
                  </div>
                  <div className="absolute md:h-[106px] h-[127px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      className="absolute bottom-[0] h-[106px] inset-x-[0] mx-auto rounded-[19px]"
                      src="images/img_vector7_blue_600.svg"
                      alt="vectorSeven_One"
                    />
                    <div className="absolute flex flex-row items-end justify-center left-[34%] top-[0] w-[27%]">
                      <div className="bg-blue-600 border-[6px] border-solid border-white-A700 h-[31px] mt-[30px] rounded-[15px] w-[30px]"></div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[61px] items-end justify-start ml-[3px] p-1.5 w-4/5"
                        style={{
                          backgroundImage: "url('images/img_group98.svg')",
                        }}
                      >
                        <div className="md:h-[33px] h-[45px] mb-[3px] mr-[13px] relative w-[71%]">
                          <div className="absolute flex flex-col font-cairo items-center justify-start left-[2%] top-[0] w-[91%]">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Text
                                className="text-base text-blue_gray-800 w-[31px]"
                                size="txtCairoBold16"
                              >
                                456
                              </Text>
                              <Text
                                className="sm:flex-1 text-base text-blue_gray-800 w-[59%] sm:w-full"
                                size="txtCairoSemiBold16"
                              >
                                Order
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-gray-400_02 text-sm w-max"
                            size="txtBarlowRegular14Gray40002"
                          >
                            Oct 18th, 2020
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 bottom-[33%] flex flex-col items-end justify-start left-[18%] p-[26px] sm:px-5 rounded-[14px] shadow-bs5 w-[58%]">
            <div className="flex flex-col gap-[21px] justify-start my-2.5 w-[92%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[88%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
                  size="txtBarlowBold24"
                >
                  Total Revenue
                </Text>
                <div className="flex flex-row items-center justify-center md:ml-[0] ml-[487px] md:mt-0 mt-[5px] w-[7%] md:w-full">
                  <div className="bg-blue-600 h-4 rounded-[50%] w-4"></div>
                  <Text
                    className="ml-0.5 text-gray-500_04 text-sm"
                    size="txtBarlowMedium14"
                  >
                    2020
                  </Text>
                </div>
                <div className="h-[17px] md:ml-[0] ml-[23px] md:mt-0 mt-1 relative w-[4%] md:w-full">
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-gray-500_04 text-sm w-max"
                    size="txtBarlowMedium14"
                  >
                    2021
                  </Text>
                  <div className="absolute bg-red-A200 h-4 left-[7%] rounded-[50%] top-[0] w-4"></div>
                </div>
              </div>
              <div className="flex flex-col justify-start md:ml-[0] ml-[30px] w-[97%] md:w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[336px] mr-[392px] text-center text-xs"
                  shape="square"
                  color="blue_600_26"
                  size="sm"
                  variant="fill"
                >
                  $ 38.753,00
                </Button>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[29px] justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between mr-2.5 w-[99%] md:w-full">
                      <div className="flex flex-col gap-10 items-start justify-start w-auto">
                        <Text
                          className="text-[15px] text-gray-500_04 w-auto"
                          size="txtBarlowMedium15Gray50004"
                        >
                          $40k
                        </Text>
                        <Text
                          className="text-[15px] text-gray-500_04 w-auto"
                          size="txtBarlowMedium15Gray50004"
                        >
                          $30k
                        </Text>
                        <Text
                          className="text-[15px] text-gray-500_04 w-auto"
                          size="txtBarlowMedium15Gray50004"
                        >
                          $20k
                        </Text>
                        <Text
                          className="text-[15px] text-gray-500_04 w-auto"
                          size="txtBarlowMedium15Gray50004"
                        >
                          $10k
                        </Text>
                      </div>
                      <div className="h-[219px] relative w-[91%] md:w-full">
                        <div className="h-[219px] m-auto w-full">
                          <div className="absolute h-[216px] inset-[0] justify-center m-auto w-full">
                            <Img
                              className="absolute h-[216px] inset-y-[0] left-[0] my-auto"
                              src="images/img_group169.svg"
                              alt="group169"
                            />
                            <div
                              className="absolute bg-cover bg-no-repeat bottom-[5%] flex flex-col h-[178px] inset-x-[0] items-center justify-start mx-auto w-[99%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group99.svg')",
                              }}
                            >
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[164px] items-end justify-end my-[5px] p-7 sm:px-5 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group100.svg')",
                                }}
                              >
                                <Button
                                  className="cursor-pointer font-semibold min-w-[85px] mr-[71px] mt-[85px] text-center text-xs"
                                  shape="square"
                                  color="red_A200_26"
                                  size="sm"
                                  variant="fill"
                                >
                                  $ 12.657,00
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-blue-600 h-3 left-[41%] outline outline-[3px] outline-white-A700 rounded-[50%] top-[10%] w-3"></div>
                          <Line className="absolute bg-blue-600 h-[219px] inset-y-[0] my-auto right-[27%] w-px" />
                        </div>
                        <div className="absolute bg-red-A200 bottom-[24%] h-3 outline outline-[3px] outline-white-A700 right-[26%] rounded-[50%] w-3"></div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-10 items-start justify-start md:ml-[0] ml-[71px] w-auto md:w-full">
                      <div className="flex flex-col gap-[11px] items-center justify-start w-[4%] md:w-full">
                        <div className="border-2 border-gray-400_02 border-solid h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Jan
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-center justify-start w-[4%] md:w-full">
                        <div className="border-2 border-gray-400_02 border-solid h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Feb
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-center justify-start w-[4%] md:w-full">
                        <div className="border-2 border-gray-400_02 border-solid h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Mar
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-end justify-start w-[4%] md:w-full">
                        <div className="border-2 border-gray-400_02 border-solid h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Apr
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-[4%] md:w-full">
                        <div className="border-2 border-gray-400_02 border-solid h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          May
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-center justify-start w-[4%] md:w-full">
                        <div className="bg-blue-600 h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Jun
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-end justify-start w-[3%] md:w-full">
                        <div className="border-2 border-gray-400_02 border-solid h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Jul
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-[4%] md:w-full">
                        <div className="border-2 border-gray-400_02 border-solid h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Aug
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-[5%] md:w-full">
                        <div className="border-2 border-gray-400_02 border-solid h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Sept
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-end justify-start w-[4%] md:w-full">
                        <div className="bg-red-A200 h-[9px] mr-1 rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Oct
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-center justify-start w-[4%] md:w-full">
                        <div className="border-2 border-gray-400_02 border-solid h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Nov
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-center justify-start w-[4%] md:w-full">
                        <div className="border-2 border-gray-400_02 border-solid h-[9px] rounded w-[9px]"></div>
                        <Text
                          className="text-[15px] text-gray-500_04"
                          size="txtBarlowMedium15Gray50004"
                        >
                          Des
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white-A700 bottom-[28%] flex flex-col items-center justify-start p-[35px] md:px-5 right-[1%] rounded-[14px] shadow-bs5 w-[27%]">
          <div className="flex flex-col md:gap-10 gap-[61px] items-center justify-start w-[92%] md:w-full">
            <div className="flex flex-row items-end justify-start w-[99%] md:w-full">
              <Text
                className="mt-2 text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
                size="txtBarlowBold24"
              >
                Customer Map
              </Text>
              <SelectBox
                className="border border-gray-400_02 border-solid font-medium ml-10 text-[15px] text-left w-[31%] sm:w-full"
                placeholderClassName="text-gray-900_03"
                indicator={
                  <Img
                    className="h-2 mr-[0] w-[15px] rounded-[1px]"
                    src="images/img_arrow.svg"
                    alt="arrow"
                  />
                }
                isMulti={false}
                name="icon_Thirteen"
                options={iconThirteenOptionsList}
                isSearchable={false}
                placeholder="Weekly"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              />
              <Button
                className="border border-solid border-white-A700 flex h-[38px] items-center justify-center ml-[11px] rounded-[12px] w-[38px]"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_verticon.svg"
                  alt="verticon"
                />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
              <div className="flex flex-col gap-[18px] justify-start w-full">
                <div className="h-[223px] relative w-full">
                  <div className="flex m-auto w-full">
                    <div className="flex flex-col items-start justify-start my-auto">
                      <Text
                        className="text-[15px] text-gray-500_04"
                        size="txtBarlowMedium15Gray50004"
                      >
                        80
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-gray-500_04"
                        size="txtBarlowMedium15Gray50004"
                      >
                        60
                      </Text>
                      <Text
                        className="h-[18px] mt-[33px] text-[15px] text-gray-500_04"
                        size="txtBarlowMedium15Gray50004"
                      >
                        40
                      </Text>
                      <Text
                        className="mt-8 text-[15px] text-gray-500_04"
                        size="txtBarlowMedium15Gray50004"
                      >
                        20
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[9px] mt-[35px] text-[15px] text-gray-500_04"
                        size="txtBarlowMedium15Gray50004"
                      >
                        0
                      </Text>
                    </div>
                    <Line className="bg-gray-100_02 h-px ml-[-1px] mt-[7px] rounded-[1px] w-[96%] z-[1]" />
                    <Line className="bg-gray-100_02 h-px ml-[-1px] mt-[59px] rounded-[1px] w-[96%] z-[1]" />
                    <Line className="bg-gray-100_02 h-px ml-[-1px] my-auto rounded-[1px] w-[96%] z-[1]" />
                    <Line className="bg-gray-100_02 h-px mb-[60px] ml-[-1px] mt-auto rounded-[1px] w-[96%] z-[1]" />
                    <Line className="bg-gray-100_02 h-px mb-[9px] ml-[-1px] mt-auto rounded-[1px] w-[96%] z-[1]" />
                  </div>
                  <div className="absolute flex flex-row h-max inset-y-[0] items-end justify-between my-auto right-[3%] w-[86%]">
                    <div className="bg-red-A200 h-[153px] mt-[53px] w-[5%]"></div>
                    <div className="bg-amber-A400 h-[206px] w-[5%]"></div>
                    <div className="bg-red-A200 h-[102px] mt-[104px] w-[5%]"></div>
                    <div className="bg-amber-A400 h-[175px] mt-[31px] w-[5%]"></div>
                    <div className="bg-red-A200 h-[153px] mt-[53px] w-[5%]"></div>
                    <div className="bg-amber-A400 h-[65px] mt-[141px] w-[5%]"></div>
                    <div className="bg-red-A200 h-[153px] mt-[53px] w-[5%]"></div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[33px] w-[88%] md:w-full">
                  <Text
                    className="text-[15px] text-gray-500_04"
                    size="txtBarlowMedium15Gray50004"
                  >
                    Sun
                  </Text>
                  <Text
                    className="ml-[27px] text-[15px] text-gray-500_04"
                    size="txtBarlowMedium15Gray50004"
                  >
                    Sun
                  </Text>
                  <Text
                    className="ml-2.5 text-[15px] text-gray-500_04"
                    size="txtBarlowMedium15Gray50004"
                  >
                    Sun
                  </Text>
                  <Text
                    className="ml-[27px] text-[15px] text-gray-500_04"
                    size="txtBarlowMedium15Gray50004"
                  >
                    Sun
                  </Text>
                  <Text
                    className="ml-[27px] text-[15px] text-gray-500_04"
                    size="txtBarlowMedium15Gray50004"
                  >
                    Sun
                  </Text>
                  <Text
                    className="ml-2.5 text-[15px] text-gray-500_04"
                    size="txtBarlowMedium15Gray50004"
                  >
                    Sun
                  </Text>
                  <Text
                    className="ml-[27px] text-[15px] text-gray-500_04"
                    size="txtBarlowMedium15Gray50004"
                  >
                    Sun
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[19%] p-[25px] md:px-5 rounded-[14px] shadow-bs5 top-[27%] w-[42%]">
          <div className="flex flex-col gap-3.5 items-start justify-start mb-[18px] w-[90%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl"
                size="txtBarlowBold24"
              >
                Pie Chart
              </Text>
              <div className="flex sm:ml-[0] ml-[222px] sm:mt-0 mt-[11px] relative w-[11%] sm:w-full">
                <Img
                  className="h-6 my-auto w-6"
                  src="images/img_iccheck.svg"
                  alt="iccheck"
                />
                <Text
                  className="ml-[-5px] my-auto text-blue_gray-800 text-lg z-[1]"
                  size="txtBarlowSemiBold18"
                >
                  Chart
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-row items-center justify-start sm:ml-[0] ml-[25px] sm:mt-0 mt-[11px] w-[19%] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_iccheck_red_a200.svg"
                  alt="iccheck_One"
                />
                <Text
                  className="text-blue_gray-800 text-lg"
                  size="txtBarlowSemiBold18"
                >
                  Show Value
                </Text>
              </div>
              <Button
                className="border border-solid border-white-A700 flex h-[38px] items-center justify-center sm:ml-[0] ml-[37px] sm:mt-0 mt-1 rounded-[12px] w-[38px]"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_verticon_gray_500_04.svg"
                  alt="verticon_One"
                />
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[95%] md:w-full">
              <div className="flex flex-col gap-[25px] items-center justify-start w-[28%] sm:w-full">
                <div className="bg-red-A200_26 flex flex-col h-[153px] items-center justify-start rounded-[76px] w-[153px]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[152px] items-center justify-start p-[35px] sm:px-5 w-[153px] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group101.svg')",
                    }}
                  >
                    <Text
                      className="bg-white-A700 flex h-[82px] items-center justify-center sm:px-5 rounded-[50%] text-black-900 text-center text-shadow-ts text-xl w-[82px]"
                      size="txtBarlowSemiBold20"
                    >
                      81%
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-blue_gray-800 text-center text-lg"
                  size="txtBarlowSemiBold18"
                >
                  Total Order
                </Text>
              </div>
              <div className="flex flex-col gap-[25px] items-center justify-start sm:ml-[0] ml-[61px] w-[28%] sm:w-full">
                <div className="bg-teal-500_26 h-[153px] md:h-[82px] relative rounded-[76px] w-[153px]">
                  <Img
                    className="absolute h-[73px] right-[0] top-[0]"
                    src="images/img_contrast_teal_500.svg"
                    alt="contrast_One"
                  />
                  <Text
                    className="absolute bg-white-A700 flex h-max inset-[0] items-center justify-center m-auto sm:pl-5 rounded-[50%] text-black-900 text-center text-shadow-ts text-xl w-max"
                    size="txtBarlowSemiBold20"
                  >
                    22%
                  </Text>
                </div>
                <Text
                  className="text-blue_gray-800 text-center text-lg"
                  size="txtBarlowSemiBold18"
                >
                  Customer Growth
                </Text>
              </div>
              <div className="flex flex-col gap-[25px] items-center justify-start sm:ml-[0] ml-[43px] w-[28%] sm:w-full">
                <div className="bg-blue-600_26 flex flex-col h-[153px] items-end justify-start sm:pl-5 pl-[23px] rounded-[76px] w-[153px]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[152px] items-start justify-start p-3"
                    style={{
                      backgroundImage: "url('images/img_group102.svg')",
                    }}
                  >
                    <Text
                      className="bg-white-A700 flex h-[82px] items-center justify-center my-[23px] sm:pl-5 rounded-[50%] text-black-900 text-center text-shadow-ts text-xl w-[82px]"
                      size="txtBarlowSemiBold20"
                    >
                      62%
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-blue_gray-800 text-center text-lg"
                  size="txtBarlowSemiBold18"
                >
                  Total Revenue
                </Text>
              </div>
            </div>
          </div>
        </div>
        <footer className="absolute bottom-[0] flex font-poppins inset-x-[0] items-center justify-center mx-auto md:px-5 w-full">
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
                className="mb-0.5 sm:ml-[0] ml-[91px] sm:mt-0 mt-2 text-[15px] text-white-A700"
                size="txtPoppinsRegular15WhiteA700"
              >
                leonskitchen.lk Copyright 2023, All Rights Reserved.
              </Text>
              <Text
                className="mr-[69px] sm:mt-0 mt-[11px] text-[15px] text-white-A700"
                size="txtPoppinsRegular15WhiteA700"
              >
                Privacy Policy Terms Pricing Do not sell or share my personal
                information
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FoodDeliveryDashboardPage;
