import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({ children, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={authenticated ? children : <Navigate to="/login" replace />}
    />
  );
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
