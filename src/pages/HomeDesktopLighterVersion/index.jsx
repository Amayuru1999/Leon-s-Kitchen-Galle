import React from "react";
import "./index.css";
import { useState } from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import { connect } from "react-redux";
import { logoutUser } from "./../../auth/actions/userActions";

// React router
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const HomeDesktopLighterVersionPage = ({ logoutUser, user }) => {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartItemCount = (newCount) => {
    setCartItemCount(newCount);
  };
  const handleLogout = async () => {
    try {
      // Make a request to your backend endpoint to clear the user's cart
      const response = await fetch('http://localhost:5000/user/cart/clear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.email }),
      });
  
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('User logged out successfully');
      } else {
        // Handle failure, e.g., show an error message
        console.error('Failed to log out user');
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('An error occurred during logout:', error);
    }
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="sm:h-[818px] h-[820px] md:h-[914px] max-w-[1545px] mx-auto md:px-5 relative w-full">
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="border border-black-900_19 border-solid flex flex-col items-center justify-end p-[13px] rounded-bl-[12px] rounded-br-[12px] w-full">
                <Img
                  className="h-[38px] md:h-auto md:ml-[0] ml-[23px] mt-1 object-cover w-[2%]"
                  src="images/img_.png"
                  alt="One"
                />
                {/* <Text className="mb-2">Welcome, {user.name}</Text> */}
              </div>

              <div className="flex md:flex-col flex-row gap-[53px] items-center justify-end md:ml-[0] ml-[383px] mt-[38px] w-3/4 md:w-full">
                <div className="flex relative w-3/4 md:w-full">
                  <div className="flex ml-[-93px] items-center gap-4">
                    <button className="text-white font-poppins font-medium text-lg hover-effect focus:outline-none nav-button">
                      Home
                    </button>
                    <button className="text-black-900_01 font-poppins font-medium text-lg hover-effect focus:outline-none nav-button"
                    onClick={() => navigate('/loginorreg')}
                    >
                      Browse Menu
                    </button>
                    <button className="text-black-900 font-poppins font-medium text-lg hover-effect focus:outline-none nav-button">
                      Special Offers
                    </button>
                    <button className="text-black-900 font-poppins font-medium text-lg hover-effect focus:outline-none nav-button">
                      Restaurants
                    </button>
                    <button className="text-black-900 font-poppins font-medium text-lg hover-effect focus:outline-none nav-button">
                      Track Order
                    </button>
                    <button className="flex items-center text-black-900 font-poppins font-medium text-lg hover-effect focus:outline-none nav-button relative">
                      <img
                        src="images/cart.svg"
                        alt="Cart"
                        className="h-6 w-20 mr-2" // Adjust the size as needed and add margin-right
                      />
                      <span>Cart</span>
                      {cartItemCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white font-bold rounded-full px-2">
                          {cartItemCount}
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                <button
                  className="bg-black-900_01 flex flex-col font-poppins items-center justify-center p-4 rounded-[30px] w-[20%] md:w-full focus:outline-none border border-white-A700 hover:bg-gray-400 transition duration-300 "
                  to="#"
                  onClick={() => {
                    logoutUser(navigate); // Assuming logoutUser is a function that logs out the user
                    handleLogout(); // Assuming handleLogout clears the user's cart
                  }}
                >
                  <div className="flex flex-row gap-3 items-center justify-center w-[81%] md:w-full">
                    <img
                      className="h-[27px] md:h-auto object-cover rounded-[1px] w-[19%]"
                      src="images/img_maleuser.png"
                      alt="maleuser"
                    />
                    <span className="text-lg text-white-A700">Logout</span>
                  </div>
                </button>
              </div>
              <div className="font-poppins h-[610px] md:h-[651px] mt-[41px] relative w-full">
                <Img
                  className="h-[610px] m-auto object-cover rounded-[12px] w-full"
                  src="images/img_rectangle2.png"
                  alt="rectangleTwo"
                />
                <div className="absolute bottom-[33%] flex flex-col items-center justify-start right-[0] w-[26%]">
                  <div className="h-[127px] relative w-full">
                    <Img
                      className="h-[127px] m-auto object-cover w-full"
                      src="images/img_notification1.png"
                      alt="notificationOne"
                    />
                    <div className="absolute bg-gray-80 flex flex-col items-start justify-start left-[7%] pt-[3px] px-[3px] top-[17%] w-[61%]">
                      <div className="flex flex-col items-start justify-start mt-[3px] w-[91%] md:w-full">
                        <Img
                          className="h-[15px] md:h-auto object-cover w-[29%] sm:w-full"
                          src="images/img_logo2.png"
                          alt="logoTwo"
                        />
                        <div className="flex flex-row gap-[19px] items-start justify-start ml-0.5 md:ml-[0] mt-[11px] w-[66%] md:w-full">
                          <Text
                            className="text-black-900 text-xs"
                            size="txtPoppinsSemiBold12"
                          >
                            Order Accepted!{" "}
                          </Text>
                          <Img
                            className="h-[17px] md:h-auto object-cover w-[17px]"
                            src="images/img_tickbox.png"
                            alt="tickbox"
                          />
                        </div>
                        <Text
                          className="ml-0.5 md:ml-[0] text-black-900_cc text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Your order will be delivered shortly
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[7%] flex flex-col items-center justify-start right-[4%] w-[26%]">
                  <div className="h-[127px] relative w-full">
                    <Img
                      className="h-[127px] m-auto object-cover w-full"
                      src="images/img_notification1.png"
                      alt="notificationOne_One"
                    />
                    <div className="absolute bg-gray-50 flex flex-col items-start justify-start left-[7%] p-[5px] top-[17%] w-[29%]">
                      <Img
                        className="h-[15px] md:h-auto object-cover w-[58%]"
                        src="images/img_logo2.png"
                        alt="logoTwo_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start right-[7%] top-[18%] w-[26%]">
                  <div className="h-[127px] relative w-full">
                    <Img
                      className="h-[127px] m-auto object-cover w-full"
                      src="images/img_notification1.png"
                      alt="notificationOne_Two"
                    />
                    <div className="absolute bg-gray-50 flex flex-col items-start justify-end left-[7%] top-[17%] w-[61%]">
                      <Img
                        className="h-[15px] md:h-auto md:ml-[0] ml-[3px] mt-1 object-cover w-1/4 sm:w-full"
                        src="images/img_logo2.png"
                        alt="logoTwo_Two"
                      />
                      <Text
                        className="md:ml-[0] ml-[3px] mt-2.5 text-black-900 text-xs"
                        size="txtPoppinsSemiBold12"
                      >
                        We’ve Received your order!
                      </Text>
                      <div className="h-[18px] md:ml-[0] ml-[3px] relative w-[84%]">
                        <Text
                          className="m-auto text-black-900_cc text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Awaiting Restaurant acceptance{" "}
                        </Text>
                        <Img
                          className="absolute h-3 inset-y-[0] my-auto object-cover right-[9%] w-3"
                          src="images/img_tracking.png"
                          alt="tracking"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-blue_gray-100_7f bottom-[5%] flex flex-col items-center justify-end left-[3%] p-[22px] sm:px-5 rounded-[20px] w-[44%]">
                  <div className="flex flex-col gap-[7px] items-start justify-start mt-[25px]">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      Order Restaurant food and takeaway.
                    </Text>
                    <Text
                      className="leading-[66.00px] md:text-5xl text-[64px] text-black-900_01"
                      size="txtPoppinsSemiBold64"
                    >
                      <>
                        The Best of <br /> Galle
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[239px] left-[0] object-cover top-[2%] w-[17%]"
            src="images/img_32700620370740.png"
            alt="32700620370740"
          />
        </div>
        <div className="flex flex-col font-poppins md:gap-10 gap-[63px] items-center justify-start max-w-[1528px] mt-[53px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[42px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
                <Text
                  className="md:mt-0 mt-[3px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsBold32"
                >
                  Up to -10% Leon’s exclusive deals
                </Text>
                <div className="h-[61px] relative w-[35%] md:w-full">
                  <div className="absolute bottom-[26%] inset-x-[0] mx-auto">
                    <button className="text-black-900 font-poppins text-lg font-semibold mr-4 focus:outline-none hover:text-yellow-400 transition duration-300 ease-in-out">
                      Pasta
                    </button>
                    <button className="text-black-900 font-poppins text-lg font-semibold mr-4 focus:outline-none hover:text-yellow-400 transition duration-300 ease-in-out">
                      Spaghetti
                    </button>
                    <button className="text-black-900 font-poppins text-lg font-semibold mr-4 focus:outline-none hover:text-yellow-400 transition duration-300 ease-in-out">
                      Chinese
                    </button>
                    <button className="text-black-900 font-poppins text-lg font-semibold focus:outline-none hover:text-yellow-400 transition duration-300 ease-in-out">
                      Kottu
                    </button>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="h-[325px] relative w-full">
                  <a
                    href="#"
                    className="block h-[325px] m-auto object-cover rounded-[12px] w-full overflow-hidden focus:outline-none"
                  >
                    <Link
                      to="/loginorreg"
                      className="block h-[325px] m-auto rounded-[12px] w-full overflow-hidden focus:outline-none"
                    >
                      <img
                        className="h-[325px] m-auto object-cover w-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                        src="images/img_rectangle9.png"
                        alt="rectangleNine"
                      />
                    </Link>
                  </a>
                  <div className="absolute bottom-[11%] flex flex-col items-center justify-start left-[9%]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Chicken Fired Rice
                    </Text>
                  </div>
                  <Button
                    className="absolute cursor-pointer font-bold leading-[normal] min-w-[88px] right-[4%] text-center text-lg top-[0]"
                    shape="round"
                  >
                    -10%
                  </Button>
                </div>

                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="h-[325px] relative w-full">
                    <a
                      href="#"
                      className="block h-[325px] m-auto rounded-[12px] w-full overflow-hidden focus:outline-none"
                    >
                      
                      <img
                        className="h-[325px] m-auto object-cover w-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                        src="images/img_rectangle8_325x496.png"
                        alt="rectangleEight"
                      />
                    </a>
                    <div className="absolute h-[325px] inset-0 justify-center m-auto w-full">
                      <a
                        href="#"
                        className="block h-[325px] m-auto rounded-[12px] w-full overflow-hidden focus:outline-none"
                      >
                        <Link
                      to="/loginorreg"
                      className="block h-[325px] m-auto rounded-[12px] w-full overflow-hidden focus:outline-none"
                    >
                        <img
                          className="h-[325px] m-auto object-cover w-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                          src="images/img_rectangle9_325x496.png"
                          alt="rectangleNine"
                        />
                        </Link>
                      </a>
                      <div className="absolute bottom-[11%] flex flex-col items-center justify-start left-[9%]">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtPoppinsBold24"
                        >
                          Mixed Fried Rice
                        </Text>
                      </div>
                      <Button
                        className="absolute cursor-pointer font-bold leading-[normal] min-w-[88px] right-[4%] text-center text-lg top-[0]"
                        shape="round"
                      >
                        -10%
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="h-[325px] relative w-full">
                    <a
                      href="#"
                      className="block h-[325px] m-auto object-cover rounded-[12px] w-full overflow-hidden focus:outline-none"
                    >
                      <Link
                      to="/loginorreg"
                      className="block h-[325px] m-auto rounded-[12px] w-full overflow-hidden focus:outline-none"
                    >
                      <img
                        className="h-[325px] m-auto object-cover w-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                        src="images/img_rectangle9_1.png"
                        alt="rectangleNine"
                      />
                      </Link>
                    </a>
                    <div className="absolute bottom-[11%] flex flex-col items-start justify-start left-[9%]">
                      <Text
                        className="text-lg text-orange-600"
                        size="txtPoppinsMedium18Orange600"
                      >
                        Restaurant
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        Pasta
                      </Text>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-bold leading-[normal] min-w-[88px] right-[4%] text-center text-lg top-[0]"
                      shape="round"
                    >
                      -10%
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[50px] justify-start w-full">
              <Text
                className="md:ml-[0] ml-[21px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtPoppinsBold32"
              >
                Leon’s Kitchen Popular Categories 🤩
              </Text>
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-between w-full">
                <a
                  href="#"
                  className="block rounded-[12px] overflow-hidden focus:outline-none"
                >
                  <Img
                    className="h-[203px] md:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                    src="images/img_rectangle13.png"
                    alt="rectangleThirteen"
                  />
                  <div className="bg-gray-100 border-t border-black-900_19 border-solid flex flex-col items-start justify-start p-2">
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtPoppinsBold18"
                    >
                      Fried Rice
                    </Text>
                    
                  </div>
                </a>

                <a
                  href="#"
                  className=" bg-gray-100 border border-black-900_19 border-solid flex flex-col gap-2 justify-start pb-2 rounded-[12px] w-full overflow-hidden focus:outline-none"
                >
                  <Img
                    className="h-[203px] md:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                    src="images/img_rectangle15.png"
                    alt="rectangleFifteen"
                  />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[22px]">
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtPoppinsBold18"
                    >
                      Salad
                    </Text>
                    
                  </div>
                </a>

                <a
                  href="#"
                  className=" bg-gray-100 border border-black-900_19 border-solid flex flex-col gap-[9px] justify-start pb-2 rounded-[12px] w-full overflow-hidden focus:outline-none"
                >
                  <Img
                    className="h-[203px] md:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                    src="images/img_rectangle17.png"
                    alt="rectangleSeventeen"
                  />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[22px]">
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtPoppinsBold18"
                    >
                      Pasta
                    </Text>
                   
                  </div>
                </a>

                <a
                  href="#"
                  className="block bg-gray-100 border border-black-900_19 border-solid rounded-[12px] w-full focus:outline-none"
                >
                  <Img
                    className="h-[203px] md:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                    src="images/img_rectangle19.png"
                    alt="rectangleNineteen"
                  />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[22px] p-2">
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtPoppinsBold18"
                    >
                      Pizza
                    </Text>
                    
                  </div>
                </a>

                <a
                  href="#"
                  className="block bg-gray-100 border border-black-900_19 border-solid rounded-[12px] w-full focus:outline-none"
                >
                  <Img
                    className="h-[203px] md:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                    src="images/img_rectangle21.png"
                    alt="rectangleTwentyOne"
                  />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[22px] p-2">
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtPoppinsBold18"
                    >
                      Burgers
                    </Text>
                    
                  </div>
                </a>

                <a
                  href="#"
                  className="block bg-gray-100 border border-black-900_19 border-solid rounded-[12px] w-full focus:outline-none"
                >
                  <Img
                    className="h-[203px] md:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full transition-transform duration-300 transform hover:scale-105 focus:scale-105"
                    src="images/img_rectangle23.png"
                    alt="rectangleTwentyThree"
                  />
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[22px] p-2">
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtPoppinsBold18"
                    >
                      Kottu
                    </Text>
                    
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins items-center justify-start mt-5 w-full">
          <div className="sm:h-[2500px] h-[2520px] md:h-[3135px] md:px-5 relative w-full">
            <Img
              className="absolute bottom-[22%] h-[898px] inset-x-[0] mx-auto object-cover w-full"
              src="images/img_32901370112176.png"
              alt="32901370112176"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[532px] h-full inset-[0] items-center justify-center m-auto w-[90%]">
              <div className="md:h-[1089px] h-[1106px] relative w-full">
                <div className="md:h-[1089px] h-[1106px] m-auto w-full">
                  <div className="absolute bg-gradient  bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto p-[21px] sm:px-5 rounded-[12px] w-full">
                    <Img
                      className="h-[239px] md:h-auto md:ml-[0] ml-[963px] mt-[37px] object-cover w-[18%] sm:w-full"
                      src="images/img_32700620370740.png"
                      alt="32700620370740_One"
                    />
                    <div className="bg-black-900_01 flex flex-col items-end justify-start md:ml-[0] ml-[544px] mt-[82px] p-[31px] sm:px-5 rounded-[75px]">
                      <Text
                        className="mb-1.5 sm:text-[40px] md:text-[46px] text-[54px] text-black-900_01 tracking-[-3.24px]"
                        size="txtPoppinsMedium54"
                      >
                        <span className="text-white-A700 font-poppins text-left font-medium">
                          <a
                            href="javascript:"
                            className="text-orange-600 font-poppins text-left font-medium underline mr-2"
                          >
                            Personalised
                          </a>
                          <span className="text-white-A700 font-poppins text-left font-medium">
                            & Instant
                          </span>
                        </span>
                      </Text>
                    </div>

                    <Text
                      className="md:ml-[0] ml-[866px] mt-10 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-1.44px] w-[33%] sm:w-full"
                      size="txtPoppinsRegular24"
                    >
                      Download the Leon’s Kitchen app for faster ordering
                    </Text>
                    <Img
                      className="h-[102px] mb-[229px] md:ml-[0] ml-[898px] mt-[38px]"
                      src="images/img_appstorebadgesen.svg"
                      alt="appstorebadgese"
                    />
                  </div>
                  <Img
                    className="absolute h-[1089px] inset-y-[0] left-[0] my-auto object-cover w-[55%]"
                    src="images/img_friendslaughin.png"
                    alt="friendslaughin"
                  />
                </div>
                <Img
                  className="absolute h-[1089px] inset-y-[0] left-[0] my-auto object-cover w-[55%]"
                  src="images/img_friendslaughin_1089x832.png"
                  alt="friendslaughin_One"
                />
              </div>
              <div className="bg-blue_gray-100_75 flex flex-col items-center justify-center p-[108px] md:px-10 sm:px-5 rounded-[12px] w-[99%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start mb-[5px] mt-2 w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtPoppinsBold32"
                    >
                      Know more about us!
                    </Text>
                    <div className="h-[61px] relative w-[55%] md:w-full">
                      <Text
                        className="absolute bottom-[26%] right-[0] text-base text-black-900"
                        size="txtPoppinsRegular16"
                      >
                        Frequent Questions Who we are? Partner Program Help &
                        Support
                      </Text>
                      <div className="absolute border border-orange-600 border-solid h-[61px] inset-y-[0] left-[0] my-auto rounded-[30px] w-[33%]"></div>
                    </div>
                  </div>
                  <div className="md:h-[1588px] sm:h-[526px] h-[529px] relative w-full">
                    <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-end justify-center m-auto p-5 rounded-[12px] w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end my-[11px] w-[96%] md:w-full">
                        <div className="flex flex-col justify-start md:mt-0 mt-11 w-[31%] md:w-full">
                          <div className="bg-orange-600 flex flex-col items-end justify-start mr-4 p-2.5 rounded-[31px]">
                            <Text
                              className="my-[7px] text-black-900 text-lg tracking-[-0.36px]"
                              size="txtPoppinsBold18Black900"
                            >
                              How does Leon’s Kitchen work?
                            </Text>
                          </div>
                          <Text
                            className="ml-2.5 md:ml-[0] mt-9 text-black-900_01 text-lg tracking-[-0.36px]"
                            size="txtPoppinsBold18"
                          >
                            What payment methods are accepted?
                          </Text>
                          <div className="flex flex-col gap-8 items-center justify-start ml-9 md:ml-[0] mt-[33px]">
                            <Text
                              className="text-black-900_01 text-lg tracking-[-0.36px]"
                              size="txtPoppinsBold18"
                            >
                              Can I track my order in real-time?
                            </Text>
                            <Text
                              className="text-black-900_01 text-center text-lg tracking-[-0.36px]"
                              size="txtPoppinsBold18"
                            >
                              <>
                                Are there any special discounts or
                                <br />
                                promotions available?
                              </>
                            </Text>
                            <Text
                              className="text-black-900_01 text-center text-lg tracking-[-0.36px]"
                              size="txtPoppinsBold18"
                            >
                              Is dilivery available in my area?
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-black-900 h-[463px] md:h-px md:ml-[0] ml-[29px] md:w-full w-px" />
                        <div className="flex flex-col gap-[33px] items-center justify-start md:ml-[0] ml-[42px] md:mt-0 mt-[54px] w-[64%] md:w-full">
                          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-end p-[25px] sm:px-5 rounded-[12px] w-full">
                              <Text
                                className="mt-2 text-black-900_01 text-center text-lg tracking-[-0.36px]"
                                size="txtPoppinsBold18"
                              >
                                Place an Order!
                              </Text>
                              <Img
                                className="h-32 md:h-auto mt-3.5 object-cover w-32"
                                src="images/img_orderfood1.png"
                                alt="orderfoodOne"
                              />
                              <Text
                                className="mt-1.5 text-base text-black-900 text-center tracking-[-0.32px]"
                                size="txtPoppinsMedium16"
                              >
                                <>
                                  Place order through our
                                  <br />
                                  website or Mobile app
                                </>
                              </Text>
                            </div>
                            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-center p-5 rounded-[12px] w-full">
                              <Text
                                className="mt-4 text-black-900_01 text-center text-lg tracking-[-0.36px]"
                                size="txtPoppinsBold18"
                              >
                                Track Progress
                              </Text>
                              <Img
                                className="h-[115px] md:h-auto mt-[18px] object-cover w-[115px]"
                                src="images/img_food1.png"
                                alt="foodOne"
                              />
                              <Text
                                className="mb-[5px] mt-3 text-base text-black-900 text-center tracking-[-0.32px]"
                                size="txtPoppinsMedium16"
                              >
                                <>
                                  You can track your order
                                  <br />
                                  status with delivery time
                                </>
                              </Text>
                            </div>
                            <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-center p-5 rounded-[12px] w-full">
                              <Text
                                className="mt-[11px] mx-auto text-black-900_01 text-center text-lg tracking-[-0.36px]"
                                size="txtPoppinsBold18"
                              >
                                Get your Order!
                              </Text>
                              <Img
                                className="h-[150px] md:h-auto mt-[18px] object-cover w-[115px]"
                                src="images/img_order1.png"
                                alt="orderOne"
                              />
                              <Text
                                className="mt-[5px] mx-auto text-base text-black-900 text-center tracking-[-0.32px]"
                                size="txtPoppinsMedium16"
                              >
                                <>
                                  Receive your order at a<br />
                                  lighting fast speed!
                                </>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="text-base text-black-900_01 text-center tracking-[-0.32px] w-[83%] sm:w-full"
                            size="txtPoppinsRegular16Black90001"
                          >
                            leonskitchen.lk simplifies the food ordering
                            process. Browse through our diverse menu, select
                            your favorite dishes, and proceed to checkout. Your
                            delicious meal will be on its way to your doorstep
                            in no time!
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="absolute bg-white-A700_19 h-[526px] inset-y-[0] left-[38%] my-auto w-px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-lime-300_a5 flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1528px] mt-[43px] mx-auto p-6 md:px-5 rounded-[12px] w-full">
            <Img
              className="md:flex-1 h-[88px] sm:h-auto md:ml-[0] ml-[22px] md:mt-0 mt-[5px] object-cover w-[8%] md:w-full"
              src="images/img_download1removebgpreview.png"
              alt="download1remove"
            />
            <Text
              className="md:mt-0 mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-center text-green-800_dd"
              size="txtPoppinsBold32Green800dd"
            >
              Uber Eats
            </Text>
            <Line className="bg-green-800 h-[100px] md:h-px md:ml-[0] ml-[63px] md:mt-0 my-[5px] md:w-full w-px" />
            <Text
              className="leading-[38.00px] md:ml-[0] ml-[68px] md:mt-0 mt-5 text-2xl md:text-[22px] text-center text-light_green-900 sm:text-xl"
              size="txtPoppinsBold24Lightgreen900"
            >
              <>
                2500+
                <br />
                Orders Delivered
              </>
            </Text>
            <Line className="bg-green-800_01 h-[100px] md:h-px md:ml-[0] ml-[43px] md:mt-0 my-[5px] md:w-full w-px" />
            <Text
              className="leading-[38.00px] md:ml-[0] ml-[90px] md:mt-0 mt-5 text-2xl md:text-[22px] text-center text-light_green-900_01 sm:text-xl"
              size="txtPoppinsBold24Lightgreen90001"
            >
              <>
                5000+
                <br />
                Food items
              </>
            </Text>
          </div>
          <footer className="flex items-center justify-center mt-6 md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="md:h-[1222px] sm:h-[368px] h-[392px] relative w-full">
                <div className="absolute bg-blue_gray-100_90 bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto md:pl-10 sm:pl-5 pl-[43px] py-[43px] w-full">
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
                      <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:mt-0 mt-[27px] w-[62%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                          <Img
                            className="h-[53px] md:mt-0 mt-[45px]"
                            src="images/img_appstorebadgesen.svg"
                            alt="appstorebadgese_One"
                          />
                          <div className="flex flex-col gap-2 justify-start mb-2.5">
                            <div className="flex relative w-full border rounded-md border-gray-500">
                              <Input
                                name="email"
                                placeholder="youremail@gmail.com"
                                className="p-2  placeholder:text-black-900_99 text-[15px] text-left w-full mr-2"
                                wrapClassName="my-auto w-[79%] z-[1]"
                                type="email"
                              ></Input>
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[171px] my-auto rounded-[29px] text-center text-lg z-[1]"
                                color="orange_600"
                                size="xs"
                              >
                                Subscribe
                              </Button>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[30px] text-[13px] text-black-900_01"
                              size="txtPoppinsRegular13Black90001"
                            >
                              <span className="text-black-900_01 font-poppins text-left font-normal">
                                we won't spam, read our{" "}
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
                  className="absolute h-[239px] left-[7%] object-cover top-[0] w-[16%]"
                  src="images/img_32700620370740.png"
                  alt="32700620370740_Two"
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
                  className="mr-20 sm:mt-0 mt-[11px] text-[15px] text-lime-300"
                  size="txtPoppinsRegular15Lime300"
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
const mapStateToProps = ({ session }) => ({
  user: session.user,
});
// export default HomeDesktopLighterVersionPage;
export default connect(mapStateToProps, { logoutUser })(
  HomeDesktopLighterVersionPage
);
