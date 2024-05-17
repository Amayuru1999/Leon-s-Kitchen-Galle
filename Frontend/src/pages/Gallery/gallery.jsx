import React from "react";
import "./index.css";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./../../auth/actions/userActions";
import { Link } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import { connect } from "react-redux";

const Gallery = ({ logoutUser, user }) => {
  const navigate = useNavigate();
  const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg",
    "images/19.jpg",
    "images/20.jpg",
    "images/21.jpg",
    "images/22.jpg",
    "images/23.jpg",
    "images/24.jpg",
    "images/25.jpg",
    "images/26.jpg",
    "images/27.jpg",
    "images/28.jpg",
    "images/29.jpg",
    "images/30.jpg",
    "images/31.jpg",
    "images/32.jpg",
    "images/33.jpg",
    "images/34.jpg",
    "images/35.jpg",
    "images/36.jpg",

    "images/37.jpg",
    "images/38.jpg",
    "images/39.jpg",
    "images/40.jpg",
    "images/41.jpg",
    "images/42.jpg",
    "images/43.jpg",
    "images/44.jpg",
    "images/45.jpg",
    "images/46.jpg",
    "images/47.jpg",
    "images/48.jpg",
    "images/49.jpg",
    
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);
  const handleLogout = async () => {
    try {
      // Make a request to your backend endpoint to clear the user's cart
      const response = await fetch("http://localhost:5000/user/cart/clear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.email }),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("User logged out successfully");
      } else {
        // Handle failure, e.g., show an error message
        console.error("Failed to log out user");
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("An error occurred during logout:", error);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-start w-full">
        <div className="md:h-[477px] h-[716px] max-w-[1534px] mx-auto md:px-5 relative w-full">
          <div className="absolute md:h-[477px] h-[697px] inset-[0] justify-center m-auto w-full">
            <div className="absolute bottom-[4%] h-[477px] inset-x-[0] mx-auto w-full">
              <div className="absolute h-[477px] inset-[0] justify-center m-auto w-full">
                <div className="slideshow-container">
                  {images.map((image, index) => (
                    <Img
                      key={index}
                      className={`slideshow-image ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                      src={image}
                      alt={`slide-${index}`}
                    />
                  ))}
                </div>

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
                  Minimum Order: Rs.1000
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
                  <button
                    className="text-white font-poppins font-medium text-lg hover-effect focus:outline-none nav-button"
                    onClick={() => navigate("/dashboard")}
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
                    onClick={() => navigate("/orderingpage")}
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
            <Text className="mb-2">Welcome!</Text>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <Img
                className="h-80 w-80 object-cover rounded-md"
                src={image}
                alt={`image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
