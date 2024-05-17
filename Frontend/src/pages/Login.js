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
  import { loginUser } from "../auth/actions/userActions";
  
  import { useNavigate } from 'react-router-dom';
  
  const Login = ({ loginUser }) => {
    const navigate = useNavigate();
    return (
      <div>
        <StyledFormArea>
          <Avatar image={Logo} />
          <StyledTitle color={colors.theme} size={35}>
            Login
          </StyledTitle>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Password is too short")
                .max(30, "Password is too long")
                .required("Required")
            })}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log(values);
              loginUser(values, navigate, setFieldError, setSubmitting);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="email"
                  type="text"
                  label="Email Address"
                  placeholder="Email"
                  icon={<FiMail />}
                />
  
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  icon={<FiLock />}
                />
                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit" onClick={loginUser}>Login</StyledFormButton>
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
          <ExtraText>
            Forgotten password? <TextLink to="/forgottenpassword">Reset it</TextLink>
          </ExtraText>
          <ExtraText>
            New here? <TextLink to="/signup">Signup</TextLink>
          </ExtraText>
        </StyledFormArea>
        <CopyrightText>All rights reserved &copy; 2024</CopyrightText>
      </div>
    );
  };
  
  export default connect(null, { loginUser })(Login);
  