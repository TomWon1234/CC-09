import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { authStatus } = useContext(AuthContext);

  if (authStatus !== "signedIn") {
    // If not signed in, redirect to login page
    return <Navigate to="/login" />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;