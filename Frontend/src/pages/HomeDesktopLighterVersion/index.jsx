import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { Button, Img, Input, Line, List, Text } from "components";
import { connect } from "react-redux";
import { logoutUser } from "./../../auth/actions/userActions";
import { IoMdClose } from "react-icons/io";
// React router
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PopUpImage from "./../../assets/images/logo.png";
import NavBar from "./NavBar"; // Adjust the path as necessary
import CustomComponent from "./CustomComponent";
import AboutUsComponent from "./AboutUsComponent";
import UberEatsStatsComponent from "./UberEatsStatsComponent";
import FooterComponent from "./FooterComponent";

const HomeDesktopLighterVersionPage = ({ logoutUser, user }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);
  const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
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

    "images/39.jpg",
    "images/40.jpg",
    "images/41.jpg",
    "images/42.jpg",
    "images/43.jpg",
    "images/44.jpg",
    "images/45.jpg",
    "images/46.jpg",
    "images/47.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const updateCartItemCount = (newCount) => {
    setCartItemCount(newCount);
  };
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
              <NavBar
                navigate={navigate}
                handleButtonClick={handleButtonClick}
                handleClosePopup={handleClosePopup}
                isPopupOpen={isPopupOpen}
                cartItemCount={cartItemCount}
                logoutUser={logoutUser}
                handleLogout={handleLogout}
                PopUpImage={PopUpImage}
              />

              <div className="font-poppins h-[610px] md:h-[651px] mt-[41px] relative w-full">
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

        <div className="flex flex-col font-poppins items-center justify-start mt-5 w-full h-full">
          <Helmet>
            <script
              src="https://static.elfsight.com/platform/platform.js"
              defer
            />
          </Helmet>
          <CustomComponent />

          <div className="sm:h-[1500px] h-[1590px] md:h-[1135px] md:px-5 relative w-full">
            <Img
              className="absolute bottom-[22%] h-[898px] inset-x-[0] mx-auto object-cover w-full"
              src="images/img_32901370112176.png"
              alt="32901370112176"
            />
          </div>
          <AboutUsComponent />
          <div className="mt-10 md:mt-96">
      <UberEatsStatsComponent />
    </div>
        </div>
        <div className="mt-[10rem] md:mt-[50rem] "
        style={{
          width:"100%"
        }}
        >
        <FooterComponent />
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
