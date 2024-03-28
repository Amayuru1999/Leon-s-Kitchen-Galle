// import { ProSidebarProvider } from "react-pro-sidebar";
// import React from "react";
// import Routes from "./Routes";

// function App() {
//   return (
//     <ProSidebarProvider>
//       <Routes />
//     </ProSidebarProvider>
//   );
// }

// export default App;
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/HomeDesktopLighterVersion/index";

import { StyledContainer } from "./components/Styles";
import { Link } from "react-router-dom";
// Loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter, Route, Routes } from "react-router-dom"; // Updated import statements

// auth & redux
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import { connect } from "react-redux";
import ForgottenPassword from "pages/ForgottenPassword";
import EmailSent from "pages/EmailSent";
import PasswordReset from "pages/PasswordReset";
import RestaurantDetailPageDesktopPage from "pages/RestaurantDetailPageDesktop";
import OrderingPagePage from "pages/OrderingPage";
import HomeDesktopLighterVersion from "pages/HomeDesktopLighterVersion"
import MacBookPro14OnePage from "pages/MacBookPro14One";
import PaymentForm from "pages/PaymentForm/PaymentForm";
function App({ checked }) {
  return (
    <BrowserRouter>
      {checked && (
        <StyledContainer>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/loginorreg" element={<Home />} />
            <Route path="/forgottenpassword" element={<ForgottenPassword />} />

            {/* <Route path="/emailsent/:userEmail/:reset" element={<EmailSent />} /> */}
            <Route path="emailsent">
              <Route path=":userEmail">
                <Route path=":reset" element={<EmailSent/>}/>
              </Route>
            </Route>
            <Route path="/payment" element={<PaymentForm/>}/>
            <Route
            path="/restaurantdetailpagedesktop"
            element={<RestaurantDetailPageDesktopPage />}
          />
          <Route path="/macbookpro14one" element={<MacBookPro14OnePage />} />
          <Route path="/orderingpage" element={<OrderingPagePage />} />
            {/* <Route
  path="/passwordreset/:userId?/:resetString?"
  element={<PasswordReset />}
/> */}
            <Route path="passwordreset">
              <Route path=":userId">
                <Route path=":resetString"  element={<PasswordReset/>}/>
              </Route>
            </Route>


          </Routes>
        </StyledContainer>
      )}
    </BrowserRouter>
  );
}

const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
