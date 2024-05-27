import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./../../auth/actions/userActions";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Helmet } from "react-helmet";
import { Button, Img, Input, Line, List, Text } from "components";
import { connect } from "react-redux";
import GalleryNavBar from "./GalleryNavBar";

import PopUpImage from "./../../assets/images/logo.png";

const Gallery = ({ logoutUser, user }) => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
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
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-start w-full">
        
        <Img
          className="h-[38px] md:h-auto md:ml-[0] ml-[0px] mt-1 object-cover w-[2%]"
          src="images/img_.png"
          alt="One"
        />
        {/* <Text className="mb-2 ml-[0px]">Welcome!</Text> */}

        <GalleryNavBar
          navigate={navigate}
          handleButtonClick={handleButtonClick}
          handleClosePopup={handleClosePopup}
          isPopupOpen={isPopupOpen}
          cartItemCount={cartItemCount}
          logoutUser={logoutUser}
          handleLogout={handleLogout}
          PopUpImage={PopUpImage}
        />
       

        <div className="md:h-[477px] h-[716px] max-w-[1534px] mx-auto md:px-5 relative w-full mt-0">
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
                
              </div>
            </div>
            <div className="absolute bg-orange-600 bottom-0 flex flex-row gap-3 items-center justify-center left-0 p-3.5 rounded-br-lg rounded-tr-lg w-1/4 md:w-1/3 sm:w-1/2">
              <img
                className="h-7 md:h-auto ml-12 sm:ml-4 object-cover w-7"
                src="images/img_clock_29x29.png"
                alt="clock"
              />
              <span className="mr-10 sm:mr-4 text-lg text-white font-semibold">
                Open until 10:00 PM
              </span>
            </div>
          </div>
        </div>
        <Helmet>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            defer
          />
        </Helmet>
        <div
          className="elfsight-app-fd76f4b6-e0fc-4e44-98f9-82fc7d69a499"
          data-elfsight-app-lazy
          style={{ paddingTop: "30px" }} // Adjust the padding as needed
        />
        <div className="flex flex-wrap justify-center gap-12">
          {images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <Img
                className="h-80 w-80 object-cover rounded-md cursor-pointer"
                src={image}
                alt={`image-${index}`}
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
};

export default Gallery;
