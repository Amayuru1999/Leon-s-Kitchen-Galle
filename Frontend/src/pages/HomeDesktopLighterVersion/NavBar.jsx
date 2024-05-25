import React from 'react';
import { IoMdClose } from "react-icons/io";
import { Button, Img, Input, Line, List, Text } from "components";
import './NavBar.css'

const NavBar = ({
  navigate,
  handleButtonClick,
  handleClosePopup,
  isPopupOpen,
  cartItemCount,
  logoutUser,
  handleLogout,
  PopUpImage
}) => {
  return (
    <div className="nav-container">
      <Img
        className="logo"
        src="images/img_32700620370740.png"
        alt="Logo"
      />
      <div className="nav-buttons-container">
        <div className="nav-buttons">
          <button className="nav-button">
            Home
          </button>
          <button
            className="nav-button"
            onClick={() => navigate("/loginorreg")}
          >
            Browse Menu
          </button>
          <button className="nav-button">
            Special Offers
          </button>
          <button
            className="nav-button"
            onClick={() => navigate("/gallery")}
          >
            Restaurants
          </button>
          <button
            className="nav-button"
            onClick={handleButtonClick}
          >
            Track Order
          </button>
          <button
            className="nav-button cart-button"
            onClick={handleButtonClick}
          >
            <img
              src="images/cart.svg"
              alt="Cart"
              className="cart-icon"
            />
            <span>Cart</span>
            {cartItemCount > 0 && (
              <span className="cart-count">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup-inner">
              <button
                onClick={handleClosePopup}
                className="popup-inner-close-button"
              >
                <IoMdClose className="close-icon" />
              </button>
              <h2 className="popup-title">
                Please SignUp or Login
              </h2>
              <p className="popup-text">
                Dear Customer, You need to login or signup to use
                this feature.
              </p>
              <img
                src={PopUpImage}
                alt="Popup"
                className="popup-image"
              />
              <div className="button-container">
                <button
                  className="signup-button"
                  onClick={() => navigate("/loginorreg")}
                >
                  Sign Up
                </button>
                <div className="or-text">or</div>
                <button
                  className="login-button"
                  onClick={() => navigate("/loginorreg")}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button
        className="logout-button"
        onClick={() => {
          logoutUser(navigate);
          handleLogout();
        }}
      >
        <div className="logout-content">
          <img
            className="user-icon"
            src="images/img_maleuser.png"
            alt="User"
          />
          <span className="logout-text">Logout</span>
        </div>
      </button>
    </div>
  );
};

export default NavBar;
