import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../entities/services/auth-token.service";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
