import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const BasicRoute = ({ children, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={!authenticated ? children : <Navigate to="/dashboard" replace />}
    />
  );
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(BasicRoute);
