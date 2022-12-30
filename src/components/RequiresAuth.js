import { Navigate } from "react-router-dom";

const RequiresAuth = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" replace />;
};

export { RequiresAuth };
