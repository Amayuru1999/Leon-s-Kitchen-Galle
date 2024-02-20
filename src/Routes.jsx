import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Signup from "signup";
const Menu = React.lazy(() => import("pages/Menu"));
const OrdersCurrent = React.lazy(() => import("pages/OrdersCurrent"));
const FoodDeliveryDashboard = React.lazy(
  () => import("pages/FoodDeliveryDashboard"),
);
const Login = React.lazy(() => import("pages/Login"));
const MacBookPro14One = React.lazy(() => import("pages/MacBookPro14One"));
const OrderingPage = React.lazy(() => import("pages/OrderingPage"));
const DeliveryPopupDesktop = React.lazy(
  () => import("pages/DeliveryPopupDesktop"),
);
const RestaurantDetailPageDesktop = React.lazy(
  () => import("pages/RestaurantDetailPageDesktop"),
);
const HomeDesktopLighterVersion = React.lazy(
  () => import("pages/HomeDesktopLighterVersion"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeDesktopLighterVersion />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/restaurantdetailpagedesktop"
            element={<RestaurantDetailPageDesktop />}
          />
          <Route
            path="/deliverypopupdesktop"
            element={<DeliveryPopupDesktop />}
          />
          <Route path="/orderingpage" element={<OrderingPage />} />
          <Route path="/macbookpro14one" element={<MacBookPro14One />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/fooddeliverydashboard"
            element={<FoodDeliveryDashboard />}
          />
          <Route path="/orderscurrent" element={<OrdersCurrent />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
