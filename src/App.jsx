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
import Dashboard from "./pages/Dashboard";

// styled components
import { StyledContainer } from "./components/Styles";

// Loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter, Route, Routes } from "react-router-dom"; // Updated import statements

// auth & redux
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import { connect } from "react-redux";

function App({ checked }) {
  return (
    <BrowserRouter>
      {checked && (
        <StyledContainer>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
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
