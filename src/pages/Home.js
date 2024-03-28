import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "./../components/Styles";

// Images
import Logo from "../assets/logo.png";
import Chef from "../assets/chef.png";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Chef})`, // Set the chef image as the background
        backgroundSize: "cover", // Cover the entire container
        backgroundPosition: "center", // Center the background image
        minHeight: "100vh", // Make the background cover the entire viewport height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "250px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          left: -700,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>

      <StyledTitle
        size={65}
        style={{
          color: "yellow",
          fontFamily: "Arial, sans-serif",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          margin: "20px 0", // Example margin
        }}
      >
        Sign Up With Us!
      </StyledTitle>

      {/* <StyledSubTitle size={27} style={{ color: "#ffffff" }}>Feel free to explore our page</StyledSubTitle> */}
      <ButtonGroup>
        <StyledButton to="/login" style={{ marginRight: "30px" }}>
          Login
        </StyledButton>
        <StyledButton to="/signup">Signup</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
