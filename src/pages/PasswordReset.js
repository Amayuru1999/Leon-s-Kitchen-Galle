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
  import { resetPassword } from "../auth/actions/userActions";
  
  import { useNavigate, useParams } from 'react-router-dom';

  
  const PasswordReset = ({ resetPassword }) => {
    const navigate = useNavigate();
    const {userId,resetString}=useParams();
    return (
      <div>
        <StyledFormArea>
          <Avatar image={Logo} />
          <StyledTitle color={colors.theme} size={35}>
            Password Reset
          </StyledTitle>
          <Formik
            initialValues={{
              newPassword:"",
              confirmNewPassword:"",
              userId,
              resetString
            }}
            validationSchema={Yup.object({
              newPassword: Yup.string()
                .min(8, "Password is too short")
                .max(30, "Password is too long")
                .required("Required"),
             confirmNewPassword:Yup.string()
                .required("Required")
                .oneOf([Yup.ref("newPassword")],"Password must match")
            })}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log(values);
              resetPassword(values, navigate, setFieldError, setSubmitting);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="newPassword"
                  type="password"
                  label="New Password"
                  placeholder="New Password"
                  icon={<FiLock />}
                />
  
                <TextInput
                  name="confirmNewPassword"
                  type="password"
                  label="Confirm New Password"
                  placeholder="Confirm New Password"
                  icon={<FiLock />}
                />
                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit" onClick={resetPassword}>Submit</StyledFormButton>
                  )}
  
                  {isSubmitting && (
                    <Loader
                      type="ThreeDots"
                      color={colors.theme}
                      height={49}
                      width={100}
                    />
                  )}
                </ButtonGroup>
              </Form>
            )}
          </Formik>
          
        </StyledFormArea>
        <CopyrightText>All rights reserved &copy; 2024</CopyrightText>
      </div>
    );
  };
  
  export default connect(null, { resetPassword })(PasswordReset);
  