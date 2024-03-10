

import { Helmet } from "react-helmet";
import { Text, Img, Button, Input, Heading } from "../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { CloseSVG } from "../assets/images";

import React from "react";
import { Link } from "react-router-dom";




export default function MenuPage() {
  const [collapsed, setCollapsed] = React.useState(false);


  return (
    <>
      <Helmet>
        <title>Menu page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-gray-100">
        <div className="flex flex-col items-start justify-start w-full gap-[98px]">
          <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10 overflow-auto">
            <Sidebar
              width="351px !important"
              collapsedWidth="80px !important"
              collapsed={collapsed}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              className="h-screen top-0 bg-white-A700 !sticky overflow-auto"
            >
              <div className="flex flex-col items-end justify-start w-[87%] mr-[46px] md:mr-5">
                <Img
                  src="images/img_327006203_70740.png"
                  alt="image"
                  className="w-[86%] md:h-auto sm:w-full mr-[13px] z-[1] object-cover"
                />
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: "22px 22px 22px 71px",
                      gap: "24px",
                      color: "#464154",
                      fontWeight: 500,
                      fontSize: "18px",
                    },
                  }}
                  rootStyles={{ ["&>ul"]: { gap: "66px" } }}
                  className="flex flex-col items-center justify-start w-full mt-[-60px] md:gap-10"
                >
                  <MenuItem>
                    <Img src="images/img_highlight.svg" alt="highlight_one" className="h-[38px] z-[1]" />
                    <div className="flex flex-row justify-start items-center w-[43%] gap-6">
                      <Img src="images/img_icon_teal_500.svg" alt="icon_one" className="h-[20px] w-[20px]" />
                      <Heading size="xs" as="h6" className="!text-teal-500 !font-barlow">
                        Dashboard
                      </Heading>
                    </div>
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        src="images/img_icon_blue_gray_800_20x20.svg"
                        alt="icon_three"
                        className="h-[20px] w-[20px]"
                      />
                    }
                  >
                    Order List
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_icon_20x20.svg" alt="icon_five" className="h-[20px] w-[20px]" />}
                  >
                    Order Detail
                  </MenuItem>
                  <MenuItem icon={<Img src="images/img_icon_1.svg" alt="icon_seven" className="h-[20px] w-[20px]" />}>
                    Customer
                  </MenuItem>
                  <MenuItem icon={<Img src="images/img_icon_2.svg" alt="icon_nine" className="h-[20px] w-[20px]" />}>
                    Analytics
                  </MenuItem>
                  <MenuItem icon={<Img src="images/img_icon_3.svg" alt="icon_eleven" className="h-[20px] w-[20px]" />}>
                    Reviews
                  </MenuItem>
                  <MenuItem icon={<Img src="images/img_icon.svg" alt="icon_thirteen" className="h-[20px] w-[20px]" />}>
                    Foods
                  </MenuItem>
                  <MenuItem icon={<Img src="images/img_icon_4.svg" alt="icon_fifteen" className="h-[20px] w-[20px]" />}>
                    Food Detail
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_icon_5.svg" alt="icon_seventeen" className="h-[20px] w-[20px]" />}
                  >
                    Customer Detail
                  </MenuItem>
                  <MenuItem
                    icon={<Img src="images/img_icon_6.svg" alt="icon_nineteen" className="h-[20px] w-[20px]" />}
                  >
                    Calendar
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img src="images/img_icon_blue_gray_800.svg" alt="icon_twentyone" className="h-[20px] w-[20px]" />
                    }
                  >
                    Chat
                  </MenuItem>
                  <MenuItem icon={<Img src="images/img_icon_7.svg" alt="icon" className="h-[20px] w-[20px]" />}>
                    Wallet
                  </MenuItem>
                </Menu>
              </div>
              <div className="h-[100px] w-[75%] sm:w-full mt-[-584px] mb-[106px] ml-[47px] mr-[42px] p-[79px] md:mx-5 bg-orange-600 shadow-xs relative rounded-[10px]">
                <Text size="xs" as="p" className="w-[58%] left-[11%] top-[18%] m-auto !text-white-A700 absolute">
                  <>
                    Please, organize your
                    <br />
                    menus through button
                    <br />
                    bellow!
                  </>
                </Text>
                <Img
                  src="images/img_illustration.svg"
                  alt="illustration"
                  className="h-[90px] right-[18%] top-[18%] m-auto absolute"
                />
                <Button
                  size="xs"
                  shape="round"
                  className="bottom-[5%] left-[10%] m-auto font-barlow font-medium min-w-[116px] absolute"
                >
                  +Add Menus
                </Button>
              </div>
            </Sidebar>
            <div className="flex flex-row justify-center w-[90%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full gap-[53px]">
                <Heading size="lg" as="h1" className="ml-[459px] md:ml-5 !text-black-900_02 mt-[50px]">
                  Menu
                </Heading>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row justify-between items-start w-[61%] md:w-full ml-1 md:ml-0">
                    <Heading size="md" as="h2">
                      Catogories
                    </Heading>
                    <div className="flex flex-row justify-center items-start w-[10%]">
                      <a href="#" className="w-[77%]">
                        <Text size="xl" as="p" className="!text-amber-600">
                          View all
                        </Text>
                      </a>
                      <Img src="images/img_chevron_down.svg" alt="chevrondown_one" className="h-[24px]" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-end w-full md:w-full mt-[43px]">
                    <div className="flex flex-row md:flex-col justify-start items-center w-full gap-11 md:gap-5">
                      <div className="flex flex-row md:flex-col w-[78%] md:w-full gap-[19px]">
                        <div className="flex flex-col items-start justify-start w-[32%] md:w-full mb-1.5 gap-[52px] p-[26px] sm:p-5 bg-white-A700 rounded-[16px]">
                          <Img
                            src="images/img_rectangle_46.png"
                            alt="image"
                            className="w-[74%] md:h-auto sm:w-full mt-[22px] ml-[37px] md:ml-0 sm:ml-5 object-cover rounded-[20px]"
                          />
                          <div className="flex flex-row justify-start ml-[55px] md:ml-5">
                            <Text size="2xl" as="p" className="!text-blue_gray-900">
                              Fried Rice
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-[60px] p-[26px] sm:p-5 bg-white-A700 rounded-[16px]">
                          <Img
                            src="images/img_rectangle_47.png"
                            alt="image"
                            className="w-[73%] md:h-auto sm:w-full mt-[26px] ml-7 md:ml-0 sm:ml-5 object-cover rounded-[20px]"
                          />
                          <div className="flex flex-row justify-start ml-[74px] md:ml-5">
                            <Text size="2xl" as="p" className="!text-blue_gray-900 text-center">
                              Kottu
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[33%] md:w-full gap-[72px] p-[9px] bg-white-A700 rounded-[16px]">
                          <Img
                            src="images/img_rectangle_48.png"
                            alt="image"
                            className="w-[65%] md:h-auto sm:w-full mt-[43px] object-cover rounded-[20px]"
                          />
                          <div className="flex flex-row justify-center w-[42%] md:w-full">
                            <Text size="2xl" as="p" className="!text-blue_gray-900 text-center">
                              Speghetti
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end w-[18%] md:w-full gap-[19px] ">
                        <Input
                          shape="round"
                          name="iconparksolidad"
                          placeholder="Add Category"
                          prefix={<Img src="images/img_iconparksolidadd.svg" alt="icon-park-solid:add" />}
                          className="w-full sm:w-full gap-1 font-bold"
                        />
                        <Input
                          shape="round"
                          name="mingcuteeditfil"
                          placeholder="Edit Category"
                          prefix={<Img src="images/img_mingcuteeditfill.svg" alt="mingcute:edit-fill" />}
                          className="w-full sm:w-full font-bold"
                        />
                        <Input
                          shape="round"
                          name="mdidelete"
                          placeholder="Delete Category"
                          prefix={<Img src="images/img_mdidelete.svg" alt="mdi:delete" />}
                          className="w-full sm:w-full gap-[3px] font-bold"
                        />
                      </div>
                    </div>
                  </div>


                  <div className="flex flex-col items-start justify-start w-full mt-20">
                  <div className="flex flex-row justify-between items-start w-[61%] md:w-full ml-1 md:ml-0">
                    <Heading size="md" as="h2">
                      Food items
                    </Heading>
                    <div className="flex flex-row justify-center items-start w-[10%]">
                      <a href="#" className="w-[77%]">
                        <Text size="xl" as="p" className="!text-amber-600">
                          View all
                        </Text>
                      </a>
                      <Img src="images/img_chevron_down.svg" alt="chevrondown_one" className="h-[24px]" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-end w-full md:w-full mt-[43px]">
                    <div className="flex flex-row md:flex-col justify-start items-center w-full gap-11 md:gap-5">
                      <div className="flex flex-row md:flex-col w-[78%] md:w-full gap-[19px]">
                        <div className="flex flex-col items-start justify-start w-[32%] md:w-full mb-1.5 gap-[52px] p-[26px] sm:p-5 bg-white-A700 rounded-[16px]">
                          <Img
                            src="images/img_rectangle_46.png"
                            alt="image"
                            className="w-[74%] md:h-auto sm:w-full mt-[22px] ml-[37px] md:ml-0 sm:ml-5 object-cover rounded-[20px]"
                          />
                          <div className="flex flex-row justify-start ml-[55px] md:ml-5">
                            <Text size="2xl" as="p" className="!text-blue_gray-900 !font-bold">
                              Mixed Fried Rice <br/>
                              1500.00
                              
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-[60px] p-[26px] sm:p-5 bg-white-A700 rounded-[16px]">
                          <Img
                            src="images/img_rectangle_47.png"
                            alt="image"
                            className="w-[73%] md:h-auto sm:w-full mt-[26px] ml-7 md:ml-0 sm:ml-5 object-cover rounded-[20px]"
                          />
                          <div className="flex flex-row justify-start ml-[74px] md:ml-5">
                            <Text size="2xl" as="p" className="!text-blue_gray-900 !font-bold text-center">
                              Sea Food Kottu<br/>
                              1500.00
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[33%] md:w-full gap-[72px] p-[9px] bg-white-A700 rounded-[16px]">
                          <Img
                            src="images/img_rectangle_48.png"
                            alt="image"
                            className="w-[65%] md:h-auto sm:w-full mt-[43px] object-cover rounded-[20px]"
                          />
                          <div className="flex flex-row justify-center w-[42%] md:ml-5 mt-[-25px] ">
                            <Text size="2xl" as="p" className="!text-blue_gray-900 !font-bold text-center">
                              Fish Speghetti<br/>
                              1500.00
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end w-[16%] md:w-full gap-[19px] ">
                        <Input
                          shape="round"
                          name="iconparksolidad"
                          placeholder="Add item"
                          prefix={<Img src="images/img_iconparksolidadd.svg" alt="icon-park-solid:add" />}
                          className="w-full sm:w-full gap-1 font-bold"
                        />
                        <Input
                          shape="round"
                          name="mingcuteeditfil"
                          placeholder="Edit item"
                          prefix={<Img src="images/img_mingcuteeditfill.svg" alt="mingcute:edit-fill" />}
                          className="w-full sm:w-full font-bold"
                        />
                        <Input
                          shape="round"
                          name="mdidelete"
                          placeholder="Delete item"
                          prefix={<Img src="images/img_mdidelete.svg" alt="mdi:delete" />}
                          className="w-full sm:w-full gap-[3px] font-bold"
                        />
                      </div>
                    </div>
                  </div>
     


                    <div className="flex flex-row justify-center items-start w-[6%] md:w-full mt-1 md:mt-0">
                      <a href="#" className="w-[78%]">
                        
                      </a>
                      <Img src="images/img_chevron_down.svg" alt="chevrondown" className="h-[24px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            color="black_900_02"
            size="lg"
            leftIcon={<Img src="images/img_solarlogout2broken.svg" alt="solar:logout-2-broken" />}
            className="ml-20 gap-6 md:ml-5 sm:px-5 font-bold min-w-[250px] rounded-[40px] sm:min-w-full"
          >
            Logout
          </Button>
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
            


<footer className="flex justify-center items-center w-full mt-[-55px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="h-[390px] w-full relative">
                      <div className="flex flex-row justify-end w-full bottom-0 right-0 left-0 py-[1px] m-auto bg-blue_gray-100 absolute">
                        <div className="flex flex-col items-end justify-start w-[94%] mt-[30px] gap-10px">
                          <div className="flex flex-row justify-between w-[70%] mr-[118px] !font-bold ">
                            <h5 size="x5" as="h6" className="!text-black-900 !font-bold ">
                              Get Exclusive Deals in your Inbox
                            </h5>
                            <div className="flex flex-row items-center  gap-[179px] ml-[300px] mt-[40px]" >
                              <h5 size="x5" as="h6" className="bottom" mt="4px" fontFamily="Poppins"  >
                                Legal Pages
                              </h5>
                              <h5 size="x5" as="h6" className="bottom " >
                                Important Links
                              </h5>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start items-center w-full gap-10">
                            <div className="flex flex-col items-start justify-start w-[62%] gap-2.5">
                              <div className="flex flex-row justify-between items-start w-full">
                                <Img
                                  src="images/img_app_store_badges_en.png"
                                  alt="appstore_one"
                                  className="w-[37%] mt-20 object-cover"
                                />
                                <div className="flex flex-col items-start justify-start w-[49%] mb-2.5 gap-2">
                                  <div className="flex flex-row justify-start w-full ">
                                    





                                    <div className="flex flex-row justify-start w-full ">
                                      <Input
                                        type="email"
                                        name="email"
                                        placeholder="youremail@gmail.com"
                                        className="w-[69%] !rounded-[29px]"
                                      />
                                      <Button
                                        color="orange_600"
                                        size="md"
                                        className="ml-[-67px] font-medium min-w-[171px] rounded-[29px]"
                                      >
                                        Subscribe
                                      </Button>
                                    </div>
                                  </div>
                                  <Text size="xs" as="p" className="ml-[30px] !text-black-900">
                                    <div className="h-px w-full bg-black-900_33" />
                                    <div className="h-[104px] w-px bg-black-900_33" />
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-between items-start w-[87%] gap-[205px] mt-[10px]">
                                <Text as="p" className="w-[42%] mt-[12.5px]">
                                  Company # 490039-445, Registered with
                                  <br />
                                  House of companies.
                                </Text>
                                <div className="flex flex-row justify-between w-auto gap-3.5 mt-[-30px]">
                                  
                                  <Img
                                    src="images/img_facebook.png"
                                    alt="snapchat_one"
                                    className="w-[45px] object-cover"
                                  />

                               <Img
                                    src="images/img_instagram.png"
                                    alt="snapchat_one"
                                    className="w-[45px] object-cover"
                                  />

                                <Img
                                    src="images/img_tiktok.png"
                                    alt="snapchat_one"
                                    className="w-[45px] object-cover"
                                  />

                               <Img
                                    src="images/img_snapchat.png"
                                    alt="snapchat_one"
                                    className="w-[45px] object-cover"
                                  />

                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start w-[36%] ">
                              <div className="flex flex-row justify-start items-start w-full">
                                <div className="flex flex-row justify-start w-[57%] z-[1]">
                                  <ul className="flex flex-col items-start justify-start w-full gap-[30px]">
                                    <li>
                                      <a href="#" className="bottom1">
                                        <Text as="p" className="underline">
                                          Terms and conditions
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom1" >
                                        <Text as="p" className="underline">
                                          Privacy
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom1">
                                        <Text as="p" className="underline">
                                          Cookies
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom1">
                                        <Text as="p" className="underline">
                                          Modern Slavery Statement
                                        </Text>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="flex flex-row justify-start w-[57%] z-[1]">
                                  <ul className="flex flex-col items-start justify-start w-full gap-[30px]">
                                    <li>
                                      <a href="#" className="bottom2">
                                        <Text as="p" className="underline">
                                          Get help
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom2" >
                                        <Text as="p" className="underline">
                                          Add your restaurant
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom2">
                                        <Text as="p" className="underline">
                                          Sign up to deliver
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="bottom2">
                                        <Text as="p" className="underline">
                                          Create a business account
                                        </Text>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_327006203_70740.png"
                        alt="image_seven"
                        className="h-[237px] w-[16%] left-[7%] bottom-65 m-auto object-cover absolute"
                      />
                    </div>
                    <div className="flex flex-row justify-between w-full p-[19px] bg-black-900">
                      <div className="flex flex-row justify-center mt-2 mb-0.5 ml-[94px]">
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            leonskitchen.lk Copyright 2023, All Rights Reserved.
                          </Text>
                        </a>
                      </div>
                      <div className="flex flex-row justify-center mr-20">
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Privacy Policy Terms Pricing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Do not sell or share my personal information
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}












