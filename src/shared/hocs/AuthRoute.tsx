import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../entities/services/auth-token.service";

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default AuthRoute;
