import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./../../auth/actions/userActions";
import { Link } from "react-router-dom";
import { Button, Img, Input, Line, List, Text } from "components";
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const OrderingPagePage = ({ logoutUser, user }) => {
  const navigate = useNavigate();
  const [itemQuantities, setItemQuantities] = useState({});
  const [items, setItems] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );
  const [message, setMessage] = useState("");

  const handleHover = (itemId) => {
    setIsHovered(itemId); // Set the hovered item ID
  };
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
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
                    className="absolute flex flex-col font-poppins gap-[55px] inset-x-[0] items-center mx-auto w-1/2 top-1/3"
                    orientation="vertical"
                    style={{ right: "20%" }}
                  >
                    <div className="flex flex-col gap-[45px] items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[94%] md:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[42px] text-black-900"
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
                            style={{
                              position: "relative",
                              paddingRight: "50px",
                            }} // Add padding to accommodate the delete button
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
                                  style={{ fontSize: "40px", padding: "10px" }}
                                >
                                  <FontAwesomeIcon icon={faPlus} />
                                </button>
                                <span
                                  className="number"
                                  style={{ fontSize: "30px" }}
                                >
                                  {itemQuantities[menuItem._id] || 0}
                                </span>
                                <button
                                  className="arrow-button"
                                  onClick={() => decrementCounter(menuItem)}
                                  disabled={itemQuantities[menuItem._id] === 0}
                                  style={{ fontSize: "40px", padding: "10px" }} // Reduced padding for the minus button
                                >
                                  <FontAwesomeIcon icon={faMinus} />
                                </button>
                              </div>
                            </div>
                            <button
                              className="delete-button"
                              onClick={() => deleteItem(menuItem)}
                              style={{
                                position: "absolute",
                                bottom: "10px",
                                right: "30px",
                                fontSize: "24px",
                                transition:
                                  "transform 0.3s ease, color 0.3s ease", // Add transition effect
                                transform:
                                  isHovered === menuItem._id
                                    ? "scale(1.2)"
                                    : "scale(1)", // Zoom effect on hover
                                color:
                                  isHovered === menuItem._id
                                    ? "red"
                                    : "inherit", // Change color to red on hover
                              }}
                              onMouseEnter={() => handleHover(menuItem._id)} // Handle mouse enter event
                              onMouseLeave={() => handleHover(null)} // Handle mouse leave event
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                            ;
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
                    <div className="flex flex-col items-center justify-start mt-[310px] w-full h-[1363px]">
                      <div className="flex flex-col gap-[29px] justify-start w-full">
                        <div className="absolute flex flex-col gap-[57px] inset-x-[0] justify-start mx-auto top-[10%] w-full ">
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
                          
                          <form action="/create-checkout-session" method="POST">
  <button
    className="bg-orange-600_cc border border-black-900_1c border-solid flex flex-row items-center justify-between p-1 rounded-lg cursor-pointer"
    type="submit"
  >
    <Text
      className="ml-[26px] text-white-A700 text-xl"
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
          parseFloat(menuItem.price.replace("Rs. ", "")) *
            (parseInt(itemQuantities[menuItem._id]) || 0)
        );
      }, 0) + 200}{" "}
      {/* Add delivery fee */}
    </Text>
  </button>
</form>

                         
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
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
