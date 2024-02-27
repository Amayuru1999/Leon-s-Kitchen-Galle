import React, { useState } from "react";
import {
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledLabel,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from "./../components/Styles";

import Logo from "./../assets/logo.png";

import { Formik, Form } from "formik";
import { TextInput } from "./../components/FormLib";
import * as Yup from "yup";

import { FiMail, FiLock, FiUser, FiCalendar, FiPhone } from "react-icons/fi";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { signupUser } from "../auth/actions/userActions";
import { useNavigate } from "react-router-dom";

const Signup = ({ signupUser }) => {
  const navigate = useNavigate();
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSignup = async (values, { setSubmitting, setFieldError }) => {
    try {
      await signupUser(values, navigate, setFieldError, setSubmitting);
      setSignupSuccess(true);
    } catch (error) {
      console.error(error);
      setSignupSuccess(false);
    }
  };

  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={35}>
          Signup
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
            mobileNumber: "",
            name: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
            name: Yup.string().required("Required"),
            mobileNumber: Yup.string().required("Required"),
            repeatPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Passwords must match"),
          })}
          onSubmit={handleSignup}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Name"
                placeholder="Name"
                icon={<FiUser />}
              />
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="Email"
                icon={<FiMail />}
              />
              <TextInput
                name="mobileNumber"
                type="text"
                label="Mobile"
                placeholder="+94"
                icon={<FiPhone />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                icon={<FiLock />}
              />
              <TextInput
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                placeholder="Repeat Password"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit" onClick={signupUser}>
                    Signup
                  </StyledFormButton>
                )}

                {/* {isSubmitting && (
                  <Loader type="ThreeDots" color={colors.theme} height={49} width={100} />
                )} */}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        {signupSuccess && (
          <div style={{ color: "green", marginTop: "10px" }}>
            Check your email for further instructions!
          </div>
        )}
        <ExtraText>
          Already have an account? <TextLink to="/login">Login</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>All rights reserved &copy; 2024</CopyrightText>
    </div>
  );
};

export default connect(null, { signupUser })(Signup);
