import axios from "axios";
import { sessionService } from "redux-react-session";
import { useNavigate } from 'react-router-dom';
export const signupSuccess = () => {
  return {
    type: "SIGNUP_SUCCESS",
  };
};
export const loginUser = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  // Make checks and get some data
  return () => {
    console.log("aaaaa");
    axios
      .post(
        "http://localhost:5000/user/signin",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;

          // check for specific error
          if (message.includes("credentials")) {
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          }
        } else if (data.status === "SUCCESS") {
          const userData = data.data[0];

          const token = userData._id;

          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  navigate("/restaurantdetailpagedesktop");
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        }

        //complete submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};

export const signupUser = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    
    axios
      .post(
        "http://localhost:5000/user/signup",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;

          // checking for specific error
          if (message.includes("name")) {
            setFieldError("name", message);
          } else if (message.includes("email")) {
            setFieldError("email", message);
          } else if (message.includes("date")) {
            setFieldError("mobileNumber", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          }

          // complete submission
          setSubmitting(false);
        } else if (data.status === "SUCCESS") {
          // Login user after successful signup
          const { email, password } = credentials;
          

          dispatch(
            loginUser(
              { email, password },
              navigate,
              setFieldError,
              setSubmitting
            )
          );
        }
      })
      .catch((err) => console.error(err));
  };
};

export const logoutUser = (navigate) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    navigate("/");
  };
};

export const forgottenPassword = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  // Make checks and get some data
  return () => {
    console.log("aaaaa");
    axios
      .post(
        "http://localhost:5000/user/requestPasswordReset",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;

          // check for specific error
          if (message.toLowerCase().includes("user") || message.toLowerCase().includes("password") || message.toLowerCase().includes("email")) {
            
          } {
            setFieldError("email",message)
          }
        } else if (data.status === "PENDING") {
          const {email}=credentials;
          navigate(`/emailsent/${email}/${true}`)
        }

        //complete submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};

//Actuall reset
export const resetPassword = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  // Make checks and get some data
  return () => {
    console.log("aaaaa");
    axios
      .post(
        "http://localhost:5000/user/resetPassword",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;

        if (data.status === "FAILED") {
          const { message } = data;

          // check for specific error
          if (message.toLowerCase().includes("password")) {
            
          } {
            setFieldError("newPassword",message)
          }
        } else if (data.status === "SUCCESS") {
          navigate(`/emailsent`)
        }

        //complete submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};