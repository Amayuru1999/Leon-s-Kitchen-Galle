import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./../../auth/actions/userActions";
import { Link } from "react-router-dom";
import { Button, Img, Input, Line, List, Text } from "components";
import { connect } from "react-redux";

const OrderingPagePage = ({ logoutUser, user }) => {
  const navigate = useNavigate();
  const [itemQuantities, setItemQuantities] = useState({});
  const [items, setItems] = useState([]);
  const deleteItem = async (menuItem) => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/cart/${user.email}/${menuItem._id}`,
        {
          method: "DELETE",
        }
      );

      console.log("Delete response status:", response.status);

      if (response.ok) {
        // Item deleted successfully
        console.log("Item deleted from the cart");
        // Now, update the local state to reflect the changes
        setItems((prevItems) =>
          prevItems.filter((item) => item._id !== menuItem._id)
        );
      } else {
        // Handle deletion failure
        const errorData = await response.json();
        console.error("Failed to delete item from the cart:", errorData);
      }
    } catch (error) {
      console.error("An error occurred during item deletion:", error);
    }
  };

  const incrementCounter = (menuItem) => {
    console.log("Received menuItem in incrementCounter:", menuItem);
    if (menuItem && menuItem._id) {
      console.log("Incrementing with menuItem:", menuItem);
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [menuItem._id]: (prevQuantities[menuItem._id] || 0) + 1,
      }));
    } else {
      console.warn(
        "Attempting to increment with undefined menuItem or menuItem._id"
      );
    }
  };

  const decrementCounter = (menuItem) => {
    console.log("Received menuItem in decrementCounter:", menuItem);
    if (
      menuItem &&
      menuItem._id &&
      itemQuantities[menuItem._id] &&
      itemQuantities[menuItem._id] > 0
    ) {
      console.log("Decrementing with menuItem:", menuItem);
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [menuItem._id]: prevQuantities[menuItem._id] - 1,
      }));
    } else {
      console.warn(
        "Attempting to decrement with undefined menuItem or menuItem._id or already at 0"
      );
    }
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

  useEffect(() => {
    console.log("Current items:", items);
  }, [items]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/user/cart/${user.email}`
        );
        console.log(response); // Add this line to log the response
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching cart data:", error.message);
      }
    };

    fetchCartData();
  }, [user.email]);

  // Run the effect whenever userEmail changes

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-start mt-[17px] w-full">
          <div className="sm:h-[2131px] md:h-[2145px] h-[2335px] max-w-[1528px] mx-auto md:px-5 relative w-full">
            <div className="absolute sm:h-[2131px] md:h-[2145px] h-[2271px] inset-[0] justify-center m-auto w-full">
              <div className="absolute flex flex-col font-manrope inset-x-[0] justify-start mx-auto top-[0] w-full">
                <div className="border border-black-900_19 border-solid flex flex-col items-center justify-end p-[13px] rounded-bl-[12px] top=[10px] rounded-br-[12px] w-full">
                  <Img
                    className="h-[38px] md:h-auto md:ml-[0] ml-[23px] mt-1 object-cover w-[2%]"
                    src="images/img_.png"
                    alt="One"
                  />
                  <Text className="mb-2">Welcome, {user.name}</Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[53px] items-center justify-end md:ml-[0] ml-[383px] mt-[38px] w-3/4 md:w-full">
                  <div className="flex relative w-3/4 md:w-full">
                    <div className="flex ml-[-93px] items-center gap-4">
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
                      <button className="flex items-center text-black-900 font-poppins font-medium text-lg hover-effect focus:outline-none nav-button relative">
                        <img
                          src="images/cart.svg"
                          alt="Cart"
                          className="h-6 w-20 mr-2" // Adjust the size as needed and add margin-right
                        />
                        <span>Cart</span>
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
                <div className="font-poppins md:h-[1913px] h-[1942px] sm:h-[1981px] mt-[41px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col md:gap-10 gap-[158px] items-start justify-start w-full">
                      <div className="h-[477px] md:h-[527px] relative w-full">
                        <div className="absolute h-[477px] md:h-[527px] inset-[0] justify-center m-auto w-full">
                          <Img
                            className="h-[477px] m-auto object-cover rounded-[12px] w-full"
                            src="images/img_rectangle2_2.png"
                            alt="rectangleTwo"
                          />
                          <div className="absolute bottom-[9%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto w-[94%]">
                            <div className="flex flex-col gap-[17px] items-center justify-start mb-12 w-[24%] md:w-full">
                              <Text
                                className="md:text-5xl text-6xl text-white-A700 tracking-[10.80px]"
                                size="txtPoppinsBold60"
                              >
                                All Set!
                              </Text>
                              <div className="bg-black-900_01 border border-solid border-white-A700 flex flex-row gap-[17px] items-center justify-start p-3 rounded-[31px] w-full">
                                <Img
                                  className="h-[34px] md:h-auto ml-[21px] mt-[5px] object-cover w-[34px]"
                                  src="images/img_ordercompleted.png"
                                  alt="ordercompleted"
                                />
                                <Text
                                  className="text-lg text-white-A700"
                                  size="txtPoppinsSemiBold18"
                                >
                                  Minimum Order: Rs.2000
                                </Text>
                              </div>
                            </div>
                            <div className="bg-black-900_01 border border-solid border-white-A700 flex flex-row gap-[17px] items-center justify-center mb-12 md:ml-[0] ml-[17px] md:mt-0 mt-[107px] p-3.5 rounded-[31px] w-1/4 md:w-full">
                              <Img
                                className="h-[34px] md:h-auto ml-2 object-cover w-[34px]"
                                src="images/img_motocross.png"
                                alt="motocross"
                              />
                              <Text
                                className="mr-[25px] text-lg text-white-A700"
                                size="txtPoppinsSemiBold18"
                              >
                                Delivery in 20-25 Minutes
                              </Text>
                            </div>
                            <Img
                              className="h-[158px] sm:h-auto md:ml-[0] ml-[596px] md:mt-0 mt-[60px] object-cover rounded-[12px] w-[10%] md:w-full"
                              src="images/img_rectangle64.png"
                              alt="rectangleSixtyFour"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-orange-600 flex flex-row gap-[13px] items-center justify-center left-[0] p-3.5 rounded-br-[12px] rounded-tr-[12px] top-[23%] w-[25%]">
                    <Img
                      className="h-[29px] md:h-auto ml-[47px] object-cover w-[29px]"
                      src="images/img_clock_29x29.png"
                      alt="clock"
                    />
                    <Text
                      className="mr-[45px] text-lg text-white-A700"
                      size="txtPoppinsSemiBold18"
                    >
                      Open until 10:00 AM
                    </Text>
                  </div>
                  <List
                    className="absolute bottom-[28%] flex flex-col font-poppins gap-[31px] inset-x-[0] items-center mx-auto w-1/2"
                    orientation="vertical"
                    style={{ right: "20%" }}
                  >
                    <div className="flex flex-col gap-[45px] items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[94%] md:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                          size="txtPoppinsSemiBold32"
                        >
                          Cart
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        {items.map((menuItem) => (
                          <div
                            key={menuItem.id}
                            className="bg-gray-50_02 border border-black-900_19 border-solid flex flex-col items-center justify-start p-[27px] sm:px-5 rounded-lg shadow-bs1 w-full mb-4 relative"
                          >
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="flex flex-col gap-[57px] items-start justify-start sm:mt-0 mt-3.5">
                                <Text
                                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                  size="txtPoppinsSemiBold24Black900"
                                >
                                  {menuItem.name}
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtPoppinsRegular14"
                                >
                                  {menuItem.price}
                                </Text>
                              </div>
                              <div className="relative flex items-center gap-2">
                                <button
                                  className="arrow-button"
                                  onClick={() => incrementCounter(menuItem)}
                                  style={{ fontSize: "24px", padding: "10px" }}
                                >
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                                <span className="number">
                                  {itemQuantities[menuItem._id] || 0}
                                </span>
                                <button
                                  className="arrow-button"
                                  onClick={() => decrementCounter(menuItem)}
                                  disabled={itemQuantities[menuItem._id] === 0}
                                  style={{ fontSize: "24px", padding: "10px" }} // Reduced padding for the minus button
                                >
                                  <FontAwesomeIcon icon={faMinus} />
                                </button>
                              </div>
                            </div>
                            <button
                              className="delete-button"
                              onClick={() => deleteItem(menuItem)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[0] md:h-[1360px] h-[1363px] right-[0] w-[30%] sm:w-full">
              <div className="md:h-[1360px] h-[1363px] m-auto w-full">
                <div className="absolute bg-gray-50 border border-black-900_1c border-solid flex flex-col h-full inset-y-[0] items-center justify-start my-auto pb-[13px] right-[0] rounded-[12px] w-[81%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-teal-800 border border-black-900_1c border-solid flex flex-row gap-[30px] items-end justify-start p-[21px] sm:px-5 rounded-tl-lg rounded-tr-lg w-full">
                      <Img
                        className="h-[58px] md:h-auto ml-[26px] mt-[17px] object-cover w-[58px]"
                        src="images/img_fullshoppingbasket.png"
                        alt="fullshoppingbas"
                      />
                      <Text
                        className="mb-1 mt-[22px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtPoppinsSemiBold32WhiteA700"
                      >
                        My Cart
                      </Text>
                    </div>
                    <Line className="bg-white-A700 h-px w-full" />
                    <div className="flex flex-col items-center justify-start mt-[310px] w-full">
  <div className="flex flex-col gap-[29px] justify-start w-full">
    {/* New */}
    <div
      className="absolute flex flex-col gap-[57px] inset-x-[0] justify-start mx-auto top-[10%] w-full"
      style={{ height: "auto" }}
    >
      {items.map((menuItem, index) => (
        <div
          key={index}
          className="flex flex-col gap-[49px] justify-start md:ml-[0] ml-[88px] w-[81%] md:w-full"
        >
          <div className="flex flex-row gap-[27px] items-start justify-start ml-5 md:ml-[0] w-[56%] md:w-full">
            <Text
              className="bg-orange-600 flex h-[45px] items-center justify-center mt-[29px] rounded-[22px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-[45px]"
              size="txtPoppinsBold24"
            >
              {parseInt(itemQuantities[menuItem._id]) || 0}x{" "}
              {/* Convert to integer */}
            </Text>
            <div className="flex flex-col items-start justify-start mb-[17px]">
              {/* Log intermediate values for debugging */}
              {console.log(
                "Quantity:",
                itemQuantities[menuItem._id]
              )}
              {console.log(
                "Price:",
                parseFloat(
                  menuItem.price.replace("Rs. ", "")
                )
              )}
              <Text
                className="text-teal-800 text-xl"
                size="txtPoppinsSemiBold20Teal800"
              >
                {/* Log intermediate result of multiplication */}
                {parseFloat(
                  menuItem.price.replace("Rs. ", "")
                ) *
                  (parseInt(itemQuantities[menuItem._id]) ||
                    0) || 0}{" "}
                {/* Convert to float */}
              </Text>
              <Text
                className="mt-0.5 text-base text-black-900_01"
                size="txtPoppinsSemiBold16"
              >
                {menuItem.name}
              </Text>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-row items-start justify-between mt-[173px] w-[92%] md:w-full">
        <Text
          className="text-black-900_01 text-xl"
          size="txtPoppinsSemiBold20Black90001"
        >
          Sub Total:{" "}
        </Text>
        <Text
          className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
          size="txtPoppinsRegular24Gray90001"
        >
          {/* Calculate subtotal */}
          Rs.
          {items.reduce((total, menuItem) => {
            return (
              total +
              parseFloat(
                menuItem.price.replace("Rs. ", "")
              ) *
                (parseInt(itemQuantities[menuItem._id]) ||
                  0)
            );
          }, 0)}
        </Text>
      </div>
      <Text
        className="mt-[13px] text-black-900_01 text-xl"
        size="txtPoppinsSemiBold20Black90001"
      >
        Discounts:
      </Text>
      <div className="flex flex-row items-start justify-between mt-3.5 w-[89%] md:w-full">
        <Text
          className="mt-1 text-black-900_01 text-xl"
          size="txtPoppinsSemiBold20Black90001"
        >
          Delivery Fee:
        </Text>
        <Text
          className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
          size="txtPoppinsRegular24Gray90001"
        >
          Rs.200
        </Text>
      </div>
      <Line className="bg-black-900_33 h-px w-full" />
      <div className="bg-orange-600_cc border border-black-900_1c border-solid flex flex-row items-center justify-between mt-[33px] p-1 rounded-lg w-[94%] md:w-full">
        <Text
          className="ml-[27px] text-white-A700 text-xl"
          size="txtPoppinsSemiBold20WhiteA700"
        >
          Total to pay
        </Text>
        <Text
          className="my-[3px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
          size="txtPoppinsSemiBold36"
        >
          {/* Calculate total to pay */}
          Rs.
          {items.reduce((total, menuItem) => {
            return (
              total +
              parseFloat(
                menuItem.price.replace("Rs. ", "")
              ) *
                (parseInt(itemQuantities[menuItem._id]) ||
                  0)
            );
          }, 0) + 200}{" "}
          {/* Add delivery fee */}
        </Text>
      </div>
    </div>

                        {/* <Line className="bg-black-900_33 h-px w-full" /> */}
                      </div>
                    </div>

                    {/* <div className="flex flex-row items-start justify-start mt-4 w-[83%] md:w-full">
                      <div className="bg-gray-200_01 border border-black-900_33 border-solid flex flex-col gap-2 items-center justify-start p-[11px] rounded-[12px] w-[53%]">
                        <Img
                          className="h-[35px] md:h-auto object-cover w-[35px]"
                          src="images/img_deliveryscooter.png"
                          alt="deliveryscooter"
                        />
                        <div className="flex flex-col items-center justify-start mb-[5px]">
                          <Text
                            className="text-base text-black-900"
                            size="txtPoppinsSemiBold16Black900"
                          >
                            Delivery
                          </Text>
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtPoppinsRegular15"
                          >
                            Starts at 17:50
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-black-900_33 h-[104px] mb-[9px] ml-3 mt-0.5 w-px" />
                      <div className="flex flex-col items-center justify-start ml-[33px] mt-[13px] w-[33%]">
                        <Img
                          className="h-[35px] md:h-auto object-cover w-[35px]"
                          src="images/img_newstore.png"
                          alt="newstore"
                        />
                        <div className="md:h-7 h-[45px] mt-1 relative w-full">
                          <Text
                            className="absolute right-[31%] text-base text-black-900_87 top-[0]"
                            size="txtPoppinsSemiBold16Black90087"
                          >
                            Pick
                          </Text>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-[15px] text-black-900_87 w-max"
                            size="txtPoppinsRegular15Black90087"
                          >
                            Starts at 8:30
                          </Text>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute flex flex-col md:gap-10 gap-[430px] justify-start left-[2%] top-[65px] w-[22%]">
              <Img
                className="h-[239px] md:h-auto mr-[63px] object-cover w-[81%]"
                src="images/img_32700620370740.png"
                alt="32700620370740"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[21px] items-center justify-end mt-[23px] md:px-5 w-[58%] md:w-full">
            <div className="flex flex-col gap-[38px] justify-start w-[47%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[11px] items-start justify-start w-[86%] md:w-full">
                <Img
                  className="h-[45px] md:h-auto sm:mt-0 mt-0.5 object-cover w-[45px]"
                  src="images/img_idverified.png"
                  alt="idverified"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_01"
                  size="txtPoppinsBold32Black90001"
                >
                  Contact information
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[23px] text-black-900 text-lg"
                size="txtPoppinsBold18Black900"
              >
                <span className="text-black-900 font-poppins text-left font-normal leading-[46.00px]">
                  <>
                    <br />
                    If you have allergies or other dietary restrictions, please
                    contact the restaurant. The restaurant will provide
                    food-specific information upon request.
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-black-900 font-poppins text-left font-bold">
                  <>
                    Phone number
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-black-900_01 font-poppins text-left text-2xl font-bold">
                  <>
                    076 735 9359
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-black-900_01 font-poppins text-left text-2xl font-normal leading-[48.00px]">
                  <>
                    <br />
                  </>
                </span>
              </Text>
            </div>
            <div className="h-[659px] relative w-[52%] md:w-full">
              <div className="absolute bg-black-900_01 flex flex-row gap-[15px] h-full inset-[0] items-start justify-center m-auto p-[63px] md:px-10 sm:px-5 rounded-br-[12px] rounded-tr-[12px] shadow-bs3 w-[97%]">
                <Img
                  className="h-[45px] md:h-auto mt-[59px] object-cover w-[45px]"
                  src="images/img_clock_45x45.png"
                  alt="clock_Two"
                />
                <Text
                  className="mb-[427px] mt-[57px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtPoppinsBold32WhiteA700"
                >
                  Operational Times
                </Text>
              </div>
              <Text
                className="absolute bottom-[22%] leading-[46.00px] right-[0] text-base text-white-A700 w-[88%] sm:w-full"
                size="txtPoppinsBold16"
              >
                <span className="text-white-A700 font-poppins text-left font-bold">
                  Monday:
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  {" "}
                  8:00 AM–10:00 PM
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  <>
                    <br />
                    Tuesday:{" "}
                  </>
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  8:00 AM–10:00 PM
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  <>
                    <br />
                    Wednesday:{" "}
                  </>
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  8:00 AM–10:00 PM
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  <>
                    <br />
                    Thursday:{" "}
                  </>
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  8:00 AM–10:00 PM
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  <>
                    <br />
                    Friday:{" "}
                  </>
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  8:00 AM–10:00 PM
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  <>
                    <br />
                    Saturday:{" "}
                  </>
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  8:00 AM–11:30 PM
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  <>
                    <br />
                    Sunday:
                  </>
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  {" "}
                  8:00 AM–11:30 PM
                </span>
              </Text>
            </div>
          </div>
          <div className="md:h-[1629px] h-[1865px] sm:h-[2092px] mt-[98px] md:px-5 relative w-full">
            <div className="md:h-[1531px] h-[1865px] sm:h-[1994px] m-auto w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[607px] items-center justify-start w-full">
                  <div className="md:h-[1028px] h-[795px] relative w-[90%] md:w-full">
                    <div className="md:h-[1028px] h-[795px] m-auto w-full">
                      <div className="h-[795px] m-auto w-full">
                        <Img
                          className="h-[795px] m-auto object-cover w-full"
                          src="images/img_image1.png"
                          alt="imageOne"
                        />
                        <div className="absolute bg-white-A700 h-[73px] right-[16%] rounded-[12px] shadow-bs4 top-[18%] w-[15%]"></div>
                      </div>
                      <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto top-[6%] w-4/5">
                        <div className="bg-black-900_f7 flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[43px] py-[43px] rounded-[12px]">
                          <Text
                            className="leading-[38.00px] mb-[332px] mt-[82px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                            size="txtPoppinsBold32WhiteA700"
                          >
                            <>
                              Leon’s Kitchen
                              <br />
                              Galle
                            </>
                          </Text>
                        </div>
                        <div className="bg-black-900_01 flex flex-col h-[73px] items-center justify-start mb-[358px] md:ml-[0] ml-[364px] md:mt-0 mt-[108px] p-[11px] rounded-[36px] w-[73px]">
                          <Img
                            className="h-[45px] md:h-auto mb-1.5 object-cover w-[45px]"
                            src="images/img_previouslocation.png"
                            alt="previouslocatio"
                          />
                        </div>
                        <Text
                          className="md:ml-[0] ml-[87px] md:mt-0 mt-[126px] text-base text-black-900_01"
                          size="txtPoppinsRegular16Black90001"
                        >
                          <span className="text-black-900_01 font-poppins text-left font-semibold">
                            Leon’s Kitchen
                          </span>
                          <span className="text-black-900_01 font-poppins text-left font-normal">
                            <>
                              <br />
                            </>
                          </span>
                          <span className="text-black-900_01 font-poppins text-left font-normal">
                            Galle
                          </span>
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="absolute h-max inset-y-[0] left-[11%] my-auto text-lg text-white-A700"
                      size="txtPoppinsBold18WhiteA700"
                    >
                      <span className="text-white-A700 font-poppins text-left font-normal">
                        <>
                          Morris Road,Welipata,Galle
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-poppins text-left font-bold">
                        <>
                          Phone number
                          <br />
                        </>
                      </span>
                      <span className="md:text-[22px] sm:text-xl text-orange-600 font-poppins text-left text-2xl font-normal">
                        <>
                          076 735 9359
                          <br />
                          <br />
                        </>
                      </span>
                    </Text>
                  </div>
                  <footer className="flex items-center justify-center w-full">
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
                          alt="32700620370740_Two"
                        />
                      </div>
                      <div className="bg-black-900_01 flex sm:flex-col flex-row md:gap-10 items-start justify-between p-[19px] w-full">
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[94px] sm:mt-0 mt-2 text-[15px] text-white-A700"
                          size="txtPoppinsRegular15WhiteA700"
                        >
                          leonskitchen.lk Copyright 2023, All Rights Reserved.
                        </Text>
                        <Text
                          className="mr-20 sm:mt-0 mt-[11px] text-[15px] text-white-A700"
                          size="txtPoppinsRegular15WhiteA700"
                        >
                          Privacy Policy Terms Pricing Do not sell or share my
                          personal information
                        </Text>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
              <div className="absolute bg-lime-300_01 bottom-[26%] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[87px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-[35px] items-center justify-start mb-[42px] w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                    <Text
                      className="sm:mt-0 mt-0.5 sm:text-[34px] md:text-[40px] text-[44px] text-black-900"
                      size="txtPoppinsBold44Black900"
                    >
                      Customer Reviews
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-[22px] grid grid-cols-2"
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
                  <List
                    className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-[18px] rounded w-full">
                      <div className="flex flex-col gap-9 items-center justify-start mt-[17px] w-[99%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                          <Img
                            className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                            src="images/img_ellipse3_54x54.png"
                            alt="ellipseThree"
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
                          The positive aspect was undoubtedly the efficiency of
                          the service. Superb and fantastic food experience.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-5 rounded w-full">
                      <div className="flex flex-col gap-[29px] items-center justify-start mb-[5px] mt-[15px] w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                          <Img
                            className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                            src="images/img_ellipse3_1.png"
                            alt="ellipseThree"
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
                            alt="timespan"
                          />
                          <div className="flex flex-col gap-1.5 items-end justify-start sm:mt-0 mt-[9px]">
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
                          {" "}
                          Most delicious Italian foods in Galle area. Absolute
                          Best Customer Service 100% Recommended
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-[18px] rounded w-full">
                      <div className="flex flex-col gap-9 items-center justify-start mt-[17px] w-[99%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                          <Img
                            className="h-[54px] md:h-auto rounded-[50%] w-[54px]"
                            src="images/img_ellipse3_2.png"
                            alt="ellipseThree"
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
                            alt="timespan"
                          />
                          <div className="flex flex-col gap-1.5 items-end justify-start sm:mt-0 mt-[9px]">
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
                          Simply Brilliant. Best of the Best in Galle. Positive
                          vibes makes me more hungry.
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <Img
              className="absolute bottom-[21%] h-[178px] inset-x-[0] mx-auto object-cover rounded-[12px] w-[9%]"
              src="images/img_rectangle64.png"
              alt="rectangleSixtyTwo"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ session }) => ({
  user: session.user,
});
// export default OrderingPagePage;
export default connect(mapStateToProps, { logoutUser })(OrderingPagePage);
