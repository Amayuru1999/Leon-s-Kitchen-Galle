// styled components
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
    CopyrightText
  } from "./../components/Styles";
  
  import Logo from "./../assets/logo.png";
  
  // formik
  import { Formik, Form } from "formik";
  import { TextInput } from "./../components/FormLib";
  import * as Yup from "yup";
  
  //icons
  import { FiMail, FiLock } from "react-icons/fi";
  
  // Loader
  import Loader from "react-loader-spinner";
  
  // auth & redux
  import { connect } from "react-redux";
  import { forgottenPassword } from "../auth/actions/userActions";
  
  import { useNavigate, useParams } from 'react-router-dom';
  import { useState } from "react";
  const ForgottenPass = ({ forgottenPassword }) => {
    const navigate = useNavigate();
    const {userEmail}=useParams();
    const [verificationSent, setVerificationSent] = useState(false);

    const handleFormSubmit = async (values, { setSubmitting, setFieldError }) => {
        try {
          // Assuming `forgottenPassword` returns a Promise or handles asynchronous operations
          await forgottenPassword(values, navigate, setFieldError, setSubmitting);
          setVerificationSent(true); // Set state to true after the email is sent
        } catch (error) {
          // Handle errors if needed
          console.error('Error sending verification email:', error);
        }
      };

    return (
      <div>
        <StyledFormArea>
          <Avatar image={Logo} />
          <StyledTitle color={colors.theme} size={35}>
            Password Reset
          </StyledTitle>
          <Formik
            initialValues={{
              email: userEmail,
              redirectUrl:"http://localhost:3000/passwordreset"
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            })}
            onSubmit={handleFormSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="email"
                  type="text"
                  label="Enter your email address"
                  placeholder="Email"
                  icon={<FiMail />}
                />
  
                
                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit"onClick={forgottenPassword} >Submit</StyledFormButton>
                  )}
  
                  {/* {isSubmitting && (
                    <Loader
                      type="ThreeDots"
                      color={colors.theme}
                      height={49}
                      width={100}
                    />
                  )} */}
                </ButtonGroup>
              </Form>
            )}
          </Formik>
          {verificationSent && (
          <div style={{ color: 'green', marginTop: '10px' }}>
            Verification email has been sent. Please check your email.
          </div>
        )}
        </StyledFormArea>
        
        <CopyrightText>All rights reserved &copy; 2024</CopyrightText>
      </div>
    );
  };
  
  export default connect(null, { forgottenPassword })(ForgottenPass);
  