import useAuthentication from "../hooks/useAuthentication";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { user } = useAuthentication();
  const { state } = useLocation();

  if (user) {
    return <Navigate to={state ? state : "/"} />;
  }
  return children;
};

export default PublicRoutes;
