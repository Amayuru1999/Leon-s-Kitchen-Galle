import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">HomeDesktopLighterVersion</Link>
        </li>
        <li>
          <Link to="/restaurantdetailpagedesktop">
            RestaurantDetailPageDesktop
          </Link>
        </li>
        <li>
          <Link to="/deliverypopupdesktop">DeliveryPopupDesktop</Link>
        </li>
        <li>
          <Link to="/orderingpage">OrderingPage</Link>
        </li>
        <li>
          <Link to="/macbookpro14one">MacBookPro14One</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/fooddeliverydashboard">FoodDeliveryDashboard</Link>
        </li>
        <li>
          <Link to="/orderscurrent">OrdersCurrent</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
