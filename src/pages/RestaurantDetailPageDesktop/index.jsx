import React from "react";
import "./index.css";
import { useState ,useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./../../auth/actions/userActions";
import { Link } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import { connect } from "react-redux";

const RestaurantDetailPageDesktopPage = ({ logoutUser, user }) => {
  const navigate = useNavigate();
  const drinksRef=useRef(null);
  const friedRiceRef = useRef(null);
  const kottuRef = useRef(null);

  

 
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

  const handleButtonClick = () => {
    if (friedRiceRef.current) {
      setTimeout(() => {
        friedRiceRef.current.scrollIntoView({ behavior: "smooth" });
      }, 5000);
    }
  
    if (kottuRef.current) {
      setTimeout(() => {
        kottuRef.current.scrollIntoView({ behavior: "smooth" });
      }, 5000); // 500 milliseconds delay
    }
  
    if (drinksRef.current) {
      setTimeout(() => {
        drinksRef.current.scrollIntoView({ behavior: "smooth" });
      }, 5000); // 1000 milliseconds delay, adjust as needed
    }
  };
  
  
  
  
  
  const handleAddToCart = async (itemName, itemDescription, itemPrice) => {
    try {
      // Prepare the item data
      const itemData = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        userId: user.email,
        // Add other item details as needed
      };
  
      // Make a POST request to your backend endpoint
      const response = await fetch('http://localhost:5000/user/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      });
  
     
    } catch (error) {
      // Handle unexpected errors
      console.error('An error occurred:', error);
    }
  };
  
  const notify = () => toast("Added to the cart successfully!");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <div className="md:h-[477px] h-[716px] max-w-[1534px] mx-auto md:px-5 relative w-full">
            <div className="absolute md:h-[477px] h-[697px] inset-[0] justify-center m-auto w-full">
              <div className="absolute bottom-[4%] h-[477px] inset-x-[0] mx-auto w-full">
                <div className="absolute h-[477px] inset-[0] justify-center m-auto w-full">
                  
                  
                  <Img
                    className="absolute h-[477px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle2_477x1528.png"
                    alt="rectangleTwo"
                  />
                  
                  <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[4%] my-auto">
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
                      LEON’S KITCHEN GALLE
                    </Text>
                  </div>
                  <Text
                    className="absolute bottom-[22%] left-[31%] text-lg text-white-A700"
                    size="txtPoppinsSemiBold18"
                  >
                    Delivery in 20-25 Minutes
                  </Text>
                  <Text
                    className="absolute bottom-[23%] left-[9%] text-lg text-white-A700"
                    size="txtPoppinsSemiBold18"
                  >
                    Minimum Order: rS.1000
                  </Text>
                  <div className="absolute border border-solid border-white-A700 bottom-[19%] flex flex-col items-start justify-end left-[4%] p-3 rounded-[31px] w-[22%]">
                    <Img
                      className="h-[34px] md:h-auto md:ml-[0] ml-[21px] mt-[5px] object-cover w-[34px]"
                      src="images/img_ordercompleted.png"
                      alt="ordercompleted"
                    />
                  </div>
                  <div className="absolute border border-solid border-white-A700 bottom-[19%] flex flex-col items-start justify-end left-[26%] p-3.5 rounded-[31px] w-[23%]">
                    <Img
                      className="h-[34px] md:h-auto ml-2 md:ml-[0] object-cover w-[34px]"
                      src="images/img_motocross.png"
                      alt="motocross"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[8%] h-[158px] object-cover right-[3%] rounded-[12px] w-[9%]"
                    src="images/img_rectangle64.png"
                    alt="rectangleSixtyFour"
                  />
                </div>
              </div>
              <div className="absolute bg-orange-600 bottom-[0] flex flex-row gap-[13px] items-center justify-center left-[0] p-3.5 rounded-br-[12px] rounded-tr-[12px] w-[22%]">
                <Img
                  className="h-[29px] md:h-auto ml-[47px] object-cover w-[29px]"
                  src="images/img_clock_29x29.png"
                  alt="clock"
                />
                <Text
                  className="mr-[39px] text-lg text-white-A700"
                  size="txtPoppinsSemiBold18"
                >
                  Open until 10:00 PM
                </Text>
              </div>
              <div className="absolute flex md:flex-col flex-row font-manrope md:gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-[98%]">
                <Img
                  className="h-[239px] sm:h-auto object-cover w-[18%] md:w-full"
                  src="images/img_32700620370740.png"
                  alt="32700620370740"
                />
                
                <div className="h-[45px] md:ml-[0] ml-[331px] relative w-[42%] md:w-full">
                  <div className="flex ml-[-300px] items-center gap-4">
                    <button className="text-white font-poppins font-medium text-lg hover-effect focus:outline-none nav-button"
                    onClick={() => navigate('/dashboard')}
                    >
                      Home
                    </button>
                    <button className="text-black-900_01 font-poppins font-medium text-lg hover-effect focus:outline-none nav-button">
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
                    <button
  className="flex items-center text-black-900 font-poppins font-medium text-lg hover-effect focus:outline-none nav-button relative"
  onClick={() => navigate('/orderingpage')}
>
  <img
    src="images/cart.svg"
    alt="Cart"
    className="h-6 w-20 mr-1" // Adjust the size as needed and add margin-right
  />
  <span>Cart</span>
</button>

                  </div>
                  
                  
                </div>
                <button
                  className="bg-black-900_01 flex flex-col font-poppins items-center justify-center p-4 rounded-[30px] w-[10%] md:w-full focus:outline-none border border-white-A700 hover:bg-gray-400 transition duration-300 "
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
              <Img
                className="h-[38px] md:h-auto md:ml-[0] ml-[23px] mt-1 object-cover w-[2%]"
                src="images/img_.png"
                alt="One"
              />
              <Text className="mb-2">Welcome, {user.name}</Text>
            </div>
            
            
              
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:h-[546px] h-[704px] md:px-5 relative w-full">
              <div className="absolute h-[690px] inset-[0] justify-center m-auto w-full">
                <div className="flex flex-col items-center justify-start mb-[-69px] ml-[95px] w-[82%] z-[1]">
                  <div className="flex flex-col md:gap-10 gap-[77px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[93%] md:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                        size="txtPoppinsBold32"
                      >
                        All Offers from Leon’s Kitchen Galle
                      </Text>
                    </div>
                    <div className="absolute bg-orange-600 h-24 inset-x-0 mx-auto top-[100px] w-full">
                      <div className="flex items-center justify-center h-full">
                        {" "}
                        {/* Center items vertically and horizontally */}
                        <div className="space-x-16 text-center">
                          <button className="text-black font-bold text-lg bg-transparent px-4 py-2 rounded hover:bg-gray-300 hover:text-orange-600 focus:outline-none"
                          onClick={() => handleButtonClick(friedRiceRef)}>
                            Fried Rice
                          </button>
                          <button className="text-black font-bold text-lg bg-transparent px-4 py-2 rounded hover:bg-gray-300 hover:text-orange-600 focus:outline-none"
                          onClick={() => handleButtonClick(kottuRef)}>
                            Kottu
                          </button>
                          <button className="text-black font-bold text-lg bg-transparent px-4 py-2 rounded hover:bg-gray-300 hover:text-orange-600 focus:outline-none"
                          onClick={() => handleButtonClick(drinksRef)}>
                            Cold Drinks
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:h-[546px] h-[595px] mt-auto mx-auto w-full">
                <Img
                  className="absolute bottom-[0] h-[546px] inset-x-[0] mx-auto object-cover w-[90%] top-[210px]"
                  src="images/img_32823722953625.png"
                  alt="32823722953625"
                />
              </div>
            </div>
            
          </div>
          <Text
            className="mt-[65px] sm:text-[34px] md:text-[40px] text-[44px] text-orange-400 "
            size="txtPoppinsBold44"
          >
            Fried Rice
          </Text>
          <div ref={friedRiceRef} className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1528px] min-h-[auto] mt-[18px] mx-auto md:px-5 w-full">
        
            <div
              className="common-pointer bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105"
              
            >
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col gap-[46px] items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Chicken Fried Rice
                  </Text>
                  <Text
                    className="text-black-900 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    With splendid one chicken leg
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 1300
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-300"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Chicken Fried Rice", "With splendid one chicken leg", "Rs. 1300")
                      notify();}}
                    />
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105"
              
            >
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Egg Fried Rice
                  </Text>
                  <Text
                    className="mt-[18px] text-black-900 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    With splendid one chicken leg
                  </Text>
                  <Text
                    className="mt-[69px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 1000
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_199x203.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {
                        handleAddToCart("Egg Fried Rice", "With splendid one chicken leg", "Rs. 1000");
                        notify();
                      }}
                    />
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    SeaFood Fried Rice
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[18px] text-black-900 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    Expended sri Lankan spices with With splendid one chicken
                    leg
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 1900
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_1.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("SeaFood Fried Rice", "Expended sri Lankan spices with With splendid one chicken leg", "Rs. 1900")
                      notify();}}
                    />
                    <ToastContainer />
                  </div>  
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Mix Fried Rice
                  </Text>
                  <Text
                    className="mt-[21px] text-black-900 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    With splendid one chicken leg
                  </Text>
                  <Text
                    className="mt-[69px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 2100
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_2.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Mix Fried Rice", "With splendid one chicken leg", "Rs. 2100")
                    notify();}}
                    />
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Vegitable Fried Rice
                  </Text>
                  <Text
                    className="mt-[18px] text-black-900 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    With splendid one chicken leg
                  </Text>
                  <Text
                    className="mt-[69px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 800
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_3.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => handleAddToCart("Vegetable Fried Rice", "With splendid one chicken leg", "Rs. 800")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-start mt-0.5 w-[98%] md:w-full ">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Grill Chicken Fried Rice
                  </Text>
                  <Text
                    className="mt-[21px] text-black-900 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    With splendid one chicken leg
                  </Text>
                  <Text
                    className="mt-[69px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 1500
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_4.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Grill Chicken Fried Rice", "With splendid one chicken leg", "Rs. 1500")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[123px] sm:text-[34px] md:text-[40px] text-[44px] text-orange-600"
            size="txtPoppinsBold44Orange600"
          >
            Kottu
          </Text>
          <div ref={kottuRef} className="gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-3 justify-center max-w-[1528px] min-h-[auto] mt-10 mx-auto md:px-5 w-full">
            <div
              className="common-pointer bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105"
            >
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Cheese Kottu
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-3 text-[11px] text-black-900 w-full"
                    size="txtPoppinsRegular11"
                  >
                    Chiken Kottu is a Sri Lankan street food sensation featuring
                    shredded roti stir-fried with a medley of vegetables.
                  </Text>
                  <Text
                    className="mt-[21px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 1500
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_5.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Cheese Kottu", "With splendid one chicken leg", "Rs. 1500")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Chicken Kottu
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[18px] text-[11px] text-black-900 w-full"
                    size="txtPoppinsRegular11"
                  >
                    Chiken Kottu is a Sri Lankan street food sensation featuring
                    shredded roti stir-fried with a medley of vegetables.
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 1300
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_6.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Chicken Kottu", "With splendid one chicken leg", "Rs. 1300")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Egg Kottu
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-3.5 text-[11px] text-black-900 w-full"
                    size="txtPoppinsRegular11"
                  >
                    Chiken Kottu is a Sri Lankan street food sensation featuring
                    shredded roti stir-fried with a medley of vegetables.
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 1000
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_7.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Egg Kottu", "With splendid one chicken leg", "Rs. 1000")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    SeaFood Kottu
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[17px] text-black-900 text-xs w-full"
                    size="txtPoppinsRegular12Black900"
                  >
                    Chiken Kottu is a Sri Lankan street food sensation featuring
                    shredded roti stir-fried with a medley.
                  </Text>
                  <Text
                    className="mt-[13px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 1950
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_8.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("SeaFood Kottu", "With splendid one chicken leg", "Rs. 1950")
                      notify();
                    }}

                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Prawn Kottu
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[17px] text-[11px] text-black-900 w-full"
                    size="txtPoppinsRegular11"
                  >
                    Chiken Kottu is a Sri Lankan street food sensation featuring
                    shredded roti stir-fried with a medley of vegetables.
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 2200
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_9.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Prawn Kottu", "With splendid one chicken leg", "Rs. 2200")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Pork Kottu
                  </Text>
                  <Text
                    className="leading-[25.00px] mt-[17px] text-[11px] text-black-900 w-full"
                    size="txtPoppinsRegular11"
                  >
                    Chiken Kottu is a Sri Lankan street food sensation featuring
                    shredded roti stir-fried with a medley of vegetables.
                  </Text>
                  <Text
                    className="mt-[3px] text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 1900
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_10.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Pork Kottu", "With splendid one chicken leg", "Rs. 1900")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[116px] sm:text-[34px] md:text-[40px] text-[44px] text-orange-600"
            size="txtPoppinsBold44Orange600"
          >
            Cold Drinks
          </Text>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1528px] mt-[42px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div ref={drinksRef}
               className="common-pointer bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105"
              
            >
              <div className="flex flex-row items-center justify-between mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[111px] items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Cocacola
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 180
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%]">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_11.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Cocacola", "With splendid one chicken leg", "Rs. 180")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex flex-row items-center justify-between mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[107px] items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Pepsi
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 180
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%]">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_12.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("RedBull", "With splendid one chicken leg", "Rs. 180")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-1 flex-col items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full hover:scale-105 focus:scale-105">
              <div className="flex flex-row items-center justify-between mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[109px] items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    RedBull
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 180
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%]">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_13.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Sprite", "With splendid one chicken leg", "Rs. 180")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="md:h-[1198px] h-[1231px] mt-10 md:px-5 relative w-full">
            <Img
              className="absolute bottom-[0] h-[1158px] inset-x-[0] mx-auto object-cover w-full "
              src="images/img_31992938816222.png"
              alt="31992938816222"
            />
            <div className="absolute bg-gray-50_02 border border-black-900_19 border-solid flex flex-col items-center justify-end left-[6%] p-[22px] sm:px-5 rounded-[12px] shadow-bs1 top-[0] w-[29%] hover:scale-105 focus:scale-105">
              <div className="flex flex-row items-center justify-between mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[107px] items-center justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Sprite
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 180
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%]">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_14.png"
                    alt="rectangleFortySix"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus"
                      onClick={() => {handleAddToCart("Cocacola Zero", "With splendid one chicken leg", "Rs. 180")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-50_02 border border-black-900_19 border-solid flex flex-col inset-x-[0] items-center justify-end mx-auto p-[22px] sm:px-5 rounded-[12px] shadow-bs1 top-[0] w-[29%] hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[109px] items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Cocacola Zero
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 180
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_15.png"
                    alt="rectangleFortySix_One"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus_One"
                      onClick={() => {handleAddToCart("Kinley", "With splendid one chicken leg", "Rs. 180")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-50_02 border border-black-900_19 border-solid flex flex-col items-center justify-end p-[22px] sm:px-5 right-[6%] rounded-[12px] shadow-bs1 top-[0] w-[29%] hover:scale-105 focus:scale-105">
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-between mt-0.5 w-[98%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[107px] items-start justify-start">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsSemiBold20"
                  >
                    Kinley
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtPoppinsBold18"
                  >
                    Rs. 180
                  </Text>
                </div>
                <div className="h-[199px] relative w-[47%] sm:w-full">
                  <Img
                    className="h-[199px] m-auto object-cover rounded-[12px] w-full hover:scale-105 focus:scale-105"
                    src="images/img_rectangle46_16.png"
                    alt="rectangleFortySix_Two"
                  />
                  <div className="absolute bg-white-A700_ab bottom-[0] flex flex-col items-end justify-end p-3.5 right-[0] rounded-br-[12px] rounded-tl-[45px] w-[44%]">
                    <Img
                      className="h-[49px] md:h-auto mt-1 object-cover w-[49px] hover:scale-105 focus:scale-105"
                      src="images/img_plus.png"
                      alt="plus_Two"
                      onClick={() => {handleAddToCart("Kinley", "With splendid one chicken leg", "Rs. 180")
                      notify();
                    }}
                    />
                    <ToastContainer/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[634px] md:h-[661px] max-w-[1548px] mt-[27px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[634px] m-auto object-cover w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
            
          </div>
          <div className="h-[1065px] md:h-[1228px] sm:h-[715px] mt-[50px] md:px-5 relative w-full">
            <div className="h-[1065px] m-auto w-full">
              <div className="bg-lime-300_01 flex flex-col items-center justify-start mb-[-21px] mx-auto p-[87px] md:px-10 sm:px-5 w-full z-[1]">
                <div className="flex flex-col gap-[35px] items-center justify-start mb-[63px] w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                    <Text
                      className="sm:mt-0 mt-0.5 sm:text-[34px] md:text-[40px] text-[44px] text-black-900"
                      size="txtPoppinsBold44Black900"
                    >
                      Customer Reviews
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-[22px] grid grid-cols-2 hover:scale-105 focus:scale-105"
                      orientation="horizontal"
                    >
                      <div className="bg-orange-600 flex flex-col h-[75px] items-center justify-start sm:ml-[0] p-[19px] rotate-[-180deg] rounded-[37px] w-full">
                        <Img
                          className="h-9 md:h-auto object-cover w-9"
                          src="images/img_back.png"
                          alt="back"
                        />
                      </div>
                      <div className="bg-orange-600 flex flex-col h-[75px] items-center justify-end sm:ml-[0] p-[19px] rounded-[37px] w-full">
                        <Img
                          className="h-9 md:h-auto object-cover w-9"
                          src="images/img_back_36x36.png"
                          alt="back"
                        />
                      </div>
                    </List>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between w-full">
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[15px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="h-[274px] sm:h-[521px] sm:ml-[0] relative w-full">
                        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded w-full">
                          <div className="flex flex-col gap-9 items-center justify-start mt-[17px] w-[99%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                              <Img
                                className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                                src="images/img_ellipse3.png"
                                alt="ellipseThree"
                              />
                              <Line className="bg-orange-600 sm:h-0.5 h-[50px] ml-2.5 sm:ml-[0] sm:mt-0 my-0.5 w-0.5 sm:w-full" />
                              <Text
                                className="sm:flex-1 leading-[21.00px] sm:ml-[0] ml-[13px] sm:mt-0 mt-[9px] text-base text-black-900 w-1/4 sm:w-full"
                                size="txtPoppinsRegular16"
                              >
                                <span className="text-black-900_01 font-poppins text-left text-lg font-semibold">
                                  St Glx
                                </span>
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  <>
                                    <br />
                                  </>
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-normal">
                                  South London
                                </span>
                              </Text>
                              <Img
                                className="h-[23px] md:h-auto mb-0.5 sm:ml-[0] ml-[61px] sm:mt-0 mt-[29px] object-cover w-[23px]"
                                src="images/img_timespan.png"
                                alt="timespan"
                              />
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-end justify-start sm:ml-[0] ml-[13px] sm:mt-0 mt-[9px] w-[37%] sm:w-full">
                                <div className="flex flex-row items-center justify-end w-3/5 md:w-full">
                                  <Img
                                    className="h-4 md:h-auto object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_One"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Two"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Three"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Four"
                                  />
                                </div>
                                <Text
                                  className="text-[15px] text-black-900"
                                  size="txtPoppinsRegular15"
                                >
                                  24th September, 2023
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[27.00px] text-base text-black-900 w-[99%] sm:w-full"
                              size="txtPoppinsRegular16"
                            >
                              <>
                                The positive aspect was undoubtedly the
                                efficiency of the service. The queue moved
                                quickly, the staff was friendly, and the food
                                was up to the usual McDonald&#39;s standard –
                                hot and satisfying.
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded w-full">
                          <div className="flex flex-col gap-9 items-center justify-start mt-[17px] w-[99%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                              <Img
                                className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                                src="images/img_ellipse3_54x54.png"
                                alt="ellipseThree_One"
                              />
                              <Line className="bg-orange-600 sm:h-0.5 h-[50px] ml-2.5 sm:ml-[0] sm:mt-0 my-0.5 w-0.5 sm:w-full" />
                              <Text
                                className="sm:flex-1 leading-[21.00px] sm:ml-[0] ml-[13px] sm:mt-0 mt-[9px] text-base text-black-900 w-1/4 sm:w-full"
                                size="txtPoppinsRegular16"
                              >
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  Nisal{" "}
                                </span>
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  <>
                                    <br />
                                  </>
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-normal">
                                  Matara
                                </span>
                              </Text>
                              <Img
                                className="h-[23px] md:h-auto mb-0.5 sm:ml-[0] ml-[61px] sm:mt-0 mt-[29px] object-cover w-[23px]"
                                src="images/img_timespan.png"
                                alt="timespan_One"
                              />
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-end justify-start sm:ml-[0] ml-[13px] sm:mt-0 mt-[9px] w-[37%] sm:w-full">
                                <div className="flex flex-row items-center justify-end w-3/5 md:w-full">
                                  <Img
                                    className="h-4 md:h-auto object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Five"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Six"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Seven"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Eight"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Nine"
                                  />
                                </div>
                                <Text
                                  className="text-[15px] text-black-900"
                                  size="txtPoppinsRegular15"
                                >
                                  24th September, 2023
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[27.00px] text-base text-black-900 w-[99%] sm:w-full"
                              size="txtPoppinsRegular16"
                            >
                              The positive aspect was undoubtedly the efficiency
                              of the service. Superb and fantastic food
                              experience.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-[274px] sm:h-[601px] sm:ml-[0] relative w-full">
                        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded w-full">
                          <div className="flex flex-col gap-9 items-center justify-start mt-[17px] w-[99%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                              <Img
                                className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                                src="images/img_ellipse3.png"
                                alt="ellipseThree"
                              />
                              <Line className="bg-orange-600 sm:h-0.5 h-[50px] ml-2.5 sm:ml-[0] sm:mt-0 my-0.5 w-0.5 sm:w-full" />
                              <Text
                                className="sm:flex-1 leading-[21.00px] sm:ml-[0] ml-[13px] sm:mt-0 mt-[9px] text-base text-black-900 w-1/4 sm:w-full"
                                size="txtPoppinsRegular16"
                              >
                                <span className="text-black-900_01 font-poppins text-left text-lg font-semibold">
                                  St Glx
                                </span>
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  <>
                                    <br />
                                  </>
                                </span>
                                <span className="text-orange-600 font-poppins text-left font-normal">
                                  South London
                                </span>
                              </Text>
                              <Img
                                className="h-[23px] md:h-auto mb-0.5 sm:ml-[0] ml-[61px] sm:mt-0 mt-[29px] object-cover w-[23px]"
                                src="images/img_timespan.png"
                                alt="timespan"
                              />
                              <div className="flex sm:flex-1 flex-col gap-1.5 items-end justify-start sm:ml-[0] ml-[13px] sm:mt-0 mt-[9px] w-[37%] sm:w-full">
                                <div className="flex flex-row items-center justify-end w-3/5 md:w-full">
                                  <Img
                                    className="h-4 md:h-auto object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_One"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Two"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Three"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Four"
                                  />
                                </div>
                                <Text
                                  className="text-[15px] text-black-900"
                                  size="txtPoppinsRegular15"
                                >
                                  24th September, 2023
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[27.00px] text-base text-black-900 w-[99%] sm:w-full"
                              size="txtPoppinsRegular16"
                            >
                              <>
                                The positive aspect was undoubtedly the
                                efficiency of the service. The queue moved
                                quickly, the staff was friendly, and the food
                                was up to the usual McDonald&#39;s standard –
                                hot and satisfying.
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-5 rounded w-full">
                          <div className="flex flex-col gap-[29px] items-center justify-start mb-[5px] mt-[15px] w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                              <Img
                                className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                                src="images/img_ellipse3_1.png"
                                alt="ellipseThree_One"
                              />
                              <Line className="bg-orange-600 sm:h-0.5 h-[50px] sm:mt-0 my-0.5 w-0.5 sm:w-full" />
                              <Text
                                className="leading-[21.00px] sm:mt-0 mt-[9px] text-base text-black-900"
                                size="txtPoppinsRegular16"
                              >
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  Nuwan Sampath
                                </span>
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  <>
                                    <br />
                                  </>
                                </span>
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  Galle
                                </span>
                              </Text>
                              <Img
                                className="h-[23px] md:h-auto mb-0.5 sm:mt-0 mt-[29px] object-cover w-[23px]"
                                src="images/img_timespan.png"
                                alt="timespan_One"
                              />
                              <div className="flex flex-col gap-1.5 items-end justify-start sm:mt-0 mt-[9px]">
                                <div className="flex flex-row items-center justify-end w-3/5 md:w-full">
                                  <Img
                                    className="h-4 md:h-auto object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Five"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Six"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Seven"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Eight"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Nine"
                                  />
                                </div>
                                <Text
                                  className="text-[15px] text-black-900"
                                  size="txtPoppinsRegular15"
                                >
                                  24th September, 2023
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[27.00px] text-base text-black-900 w-[99%] sm:w-full"
                              size="txtPoppinsRegular16"
                            >
                              The positive aspect was undoubtedly the efficiency
                              of the service. Most delicious Italian foods in
                              Galle area.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="bg-white-A700 flex h-[274px] sm:h-[601px] justify-end relative rounded w-[33%] md:w-full">
                      <div className="flex flex-col gap-9 h-full items-center justify-start mb-[18px] mt-auto mx-auto w-[92%]">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                          <Img
                            className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                            src="images/img_ellipse3.png"
                            alt="ellipseThree"
                          />
                          <Line className="bg-orange-600 sm:h-0.5 h-[50px] ml-2.5 sm:ml-[0] sm:mt-0 my-0.5 w-0.5 sm:w-full" />
                          <Text
                            className="sm:flex-1 leading-[21.00px] sm:ml-[0] ml-[13px] sm:mt-0 mt-[9px] text-base text-black-900 w-1/4 sm:w-full"
                            size="txtPoppinsRegular16"
                          >
                            <span className="text-black-900_01 font-poppins text-left text-lg font-semibold">
                              St Glx
                            </span>
                            <span className="text-black-900 font-poppins text-left font-normal">
                              <>
                                <br />
                              </>
                            </span>
                            <span className="text-orange-600 font-poppins text-left font-normal">
                              South London
                            </span>
                          </Text>
                          <Img
                            className="h-[23px] md:h-auto mb-0.5 sm:ml-[0] ml-[61px] sm:mt-0 mt-[29px] object-cover w-[23px]"
                            src="images/img_timespan.png"
                            alt="timespan"
                          />
                          <div className="flex sm:flex-1 flex-col gap-1.5 items-end justify-start sm:ml-[0] ml-[13px] sm:mt-0 mt-[9px] w-[37%] sm:w-full">
                            <div className="flex flex-row items-center justify-end w-3/5 md:w-full">
                              <Img
                                className="h-4 md:h-auto object-cover w-4"
                                src="images/img_star.png"
                                alt="star"
                              />
                              <Img
                                className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                src="images/img_star.png"
                                alt="star_One"
                              />
                              <Img
                                className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                src="images/img_star.png"
                                alt="star_Two"
                              />
                              <Img
                                className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                src="images/img_star.png"
                                alt="star_Three"
                              />
                              <Img
                                className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                src="images/img_star.png"
                                alt="star_Four"
                              />
                            </div>
                            <Text
                              className="text-[15px] text-black-900"
                              size="txtPoppinsRegular15"
                            >
                              24th September, 2023
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="leading-[27.00px] text-base text-black-900 w-[99%] sm:w-full"
                          size="txtPoppinsRegular16"
                        >
                          <>
                            The positive aspect was undoubtedly the efficiency
                            of the service. The queue moved quickly, the staff
                            was friendly, and the food was up to the usual
                            McDonald&#39;s standard – hot and satisfying.
                          </>
                        </Text>
                      </div>
                      <div className="absolute bg-white-A700 h-[274px] sm:h-[601px] inset-[0] justify-center m-auto rounded w-full">
                        <div className="flex flex-col gap-[29px] h-full items-center justify-start m-auto w-[92%]">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                            <Img
                              className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                              src="images/img_ellipse3_1.png"
                              alt="ellipseThree_One"
                            />
                            <Line className="bg-orange-600 sm:h-0.5 h-[50px] sm:mt-0 my-0.5 w-0.5 sm:w-full" />
                            <Text
                              className="leading-[21.00px] sm:mt-0 mt-[9px] text-base text-black-900"
                              size="txtPoppinsRegular16"
                            >
                              <span className="text-black-900 font-poppins text-left font-normal">
                                Nuwan Sampath
                              </span>
                              <span className="text-black-900 font-poppins text-left font-normal">
                                <>
                                  <br />
                                </>
                              </span>
                              <span className="text-black-900 font-poppins text-left font-normal">
                                Galle
                              </span>
                            </Text>
                            <Img
                              className="h-[23px] md:h-auto mb-0.5 sm:mt-0 mt-[29px] object-cover w-[23px]"
                              src="images/img_timespan.png"
                              alt="timespan_One"
                            />
                            <div className="flex flex-col gap-1.5 items-end justify-start sm:mt-0 mt-[9px]">
                              <div className="flex flex-row items-center justify-end w-3/5 md:w-full">
                                <Img
                                  className="h-4 md:h-auto object-cover w-4"
                                  src="images/img_star.png"
                                  alt="star_Five"
                                />
                                <Img
                                  className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                  src="images/img_star.png"
                                  alt="star_Six"
                                />
                                <Img
                                  className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                  src="images/img_star.png"
                                  alt="star_Seven"
                                />
                                <Img
                                  className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                  src="images/img_star.png"
                                  alt="star_Eight"
                                />
                                <Img
                                  className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                  src="images/img_star.png"
                                  alt="star_Nine"
                                />
                              </div>
                              <Text
                                className="text-[15px] text-black-900"
                                size="txtPoppinsRegular15"
                              >
                                24th September, 2023
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="leading-[27.00px] text-base text-black-900 w-[99%] sm:w-full"
                            size="txtPoppinsRegular16"
                          >
                            The positive aspect was undoubtedly the efficiency
                            of the service. Most delicious Italian foods in
                            Galle area.
                          </Text>
                        </div>
                        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded w-full">
                          <div className="flex flex-col gap-9 items-center justify-start mt-[17px] w-[99%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                              <Img
                                className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                                src="images/img_ellipse3_2.png"
                                alt="ellipseThree_Two"
                              />
                              <Line className="bg-orange-600 sm:h-0.5 h-[50px] sm:mt-0 my-0.5 w-0.5 sm:w-full" />
                              <Text
                                className="leading-[21.00px] sm:mt-0 mt-[9px] text-base text-black-900"
                                size="txtPoppinsRegular16"
                              >
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  Sanjeewa De Silva
                                </span>
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  <>
                                    <br />
                                  </>
                                </span>
                                <span className="text-black-900 font-poppins text-left font-normal">
                                  Karapitiya
                                </span>
                              </Text>
                              <Img
                                className="h-[23px] md:h-auto mb-0.5 sm:mt-0 mt-[29px] object-cover w-[23px]"
                                src="images/img_timespan.png"
                                alt="timespan_Two"
                              />
                              <div className="flex flex-col gap-1.5 items-end justify-start sm:mt-0 mt-[9px]">
                                <div className="flex flex-row items-center justify-end w-3/5 md:w-full">
                                  <Img
                                    className="h-4 md:h-auto object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Ten"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Eleven"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Twelve"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Thirteen"
                                  />
                                  <Img
                                    className="h-4 md:h-auto ml-[3px] object-cover w-4"
                                    src="images/img_star.png"
                                    alt="star_Fourteen"
                                  />
                                </div>
                                <Text
                                  className="text-[15px] text-black-900"
                                  size="txtPoppinsRegular15"
                                >
                                  24th September, 2023
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[27.00px] text-base text-black-900 w-[99%] sm:w-full"
                              size="txtPoppinsRegular16"
                            >
                              Simply Brilliant. Best of the Best in Galle.
                              Positive vibes makes me more hungry.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="flex items-center justify-center mt-auto mx-auto w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="md:h-[1181px] sm:h-[368px] h-[392px] relative w-full">
                    <div className="absolute bg-blue_gray-100_90 bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto overflow-auto md:pl-10 sm:pl-5 pl-[43px] py-[43px] w-full">
                      <div className="flex flex-col justify-start mt-[47px] w-[97%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[517px] w-[58%] md:w-full">
                          <Text
                            className="text-black-900_01 text-lg"
                            size="txtPoppinsBold18"
                          >
                            Get Exclusive Deals in your Inbox
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[228px] text-black-900_01 text-lg"
                            size="txtPoppinsBold18"
                          >
                            Legal Pages
                          </Text>
                          <Text
                            className="ml-36 md:ml-[0] text-black-900_01 text-lg"
                            size="txtPoppinsBold18"
                          >
                            Important Links
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:mt-0 mt-[27px] w-[62%] md:w-full">
                            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                              <Img
                                className="h-[53px] md:mt-0 mt-[45px]"
                                src="images/img_appstorebadgesen.svg"
                                alt="appstorebadgese"
                              />
                              <div className="flex flex-col gap-2 justify-start mb-2.5">
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
                                    className="cursor-pointer font-medium leading-[normal] min-w-[172px] ml-[-67.78px] my-auto text-center text-lg z-[1]"
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
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[76%] md:w-full">
                              <Text
                                className="md:mt-0 mt-[11px] text-[15px] text-black-900 w-[41%] sm:w-full"
                                size="txtPoppinsRegular15"
                              >
                                <>
                                  Company # 490039-445, Registered with
                                  <br />
                                  House of companies.
                                </>
                              </Text>
                              <Img
                                className="h-[45px] md:h-auto md:ml-[0] ml-[227px] object-cover w-[45px]"
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
                            className="leading-[43.00px] ml-10 md:ml-[0] text-[15px] text-black-900 underline"
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
                      className="absolute h-[239px] left-[6%] object-cover top-[0] w-[16%]"
                      src="images/img_32700620370740.png"
                      alt="32700620370740_One"
                    />
                  </div>
                  <div className="bg-black-900_01 flex sm:flex-col flex-row md:gap-10 items-start justify-between p-[19px] w-full">
                    <Text
                      className="mb-0.5 sm:ml-[0] ml-[83px] sm:mt-0 mt-2 text-[15px] text-white-A700"
                      size="txtPoppinsRegular15WhiteA700"
                    >
                      leonskitchen.lk Copyright 2023, All Rights Reserved.
                    </Text>
                    <Text
                      className="mr-[85px] sm:mt-0 mt-[11px] text-[15px] text-white-A700"
                      size="txtPoppinsRegular15WhiteA700"
                    >
                      Privacy Policy Terms Pricing Do not sell or share my
                      personal information
                    </Text>
                  </div>
                </div>
              </footer>
            </div>
            <Img
              className="absolute bottom-[35%] h-[178px] inset-x-[0] mx-auto object-cover rounded-[12px] w-[9%]"
              src="images/img_rectangle64.png"
              alt="rectangleSixtyTwo"
            />
          </div>
        </div>
      
    </>
  );
};
const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, { logoutUser })(
  RestaurantDetailPageDesktopPage
);
