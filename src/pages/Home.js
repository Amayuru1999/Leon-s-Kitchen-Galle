import React from "react";
import { motion } from 'framer-motion'

import {
  StyledTitle,
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
          left: -600,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: -100 }}
        transition={{
          duration: "2",
          delay: "1"
        }}
      >
        <StyledTitle
          size={65}
          style={{
            color: "yellow",
            fontFamily: "Arial, sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            margin: "20px 0", // Example margin
            textAlign: "center", // Center the text
            fontSize: "4rem", // Increase font size
            letterSpacing: "10px", // Add letter spacing
            fontWeight: "bold", // Make it bold
            lineHeight: "1.2", // Adjust line height
            // Hide the text fill color
          }}
        >
          Sign Up With Us!
        </StyledTitle>
      </motion.div>
      {/* <StyledSubTitle size={27} style={{ color: "#ffffff" }}>Feel free to explore our page</StyledSubTitle> */}
      <ButtonGroup>
  {/* Updated button styles with larger size, centered text, and bold font */}
  <StyledButton to="/login" style={{ marginRight: "70px", padding: "15px 25px", fontSize: "1.6rem", textAlign: "center", fontWeight: "bold" }}>
    Login
  </StyledButton>
  <StyledButton to="/signup" style={{  padding: "15px 25px", fontSize: "1.6rem", textAlign: "center", fontWeight: "bold" }}>
    Signup
  </StyledButton>
</ButtonGroup>

    </div>
  );
};

export default Home;
