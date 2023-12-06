import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoute = ({ children, allowedRoutes }) => {
  const { token, role } = useContext(AuthContext)
  const isAllowed = allowedRoutes.includes(role)
  const accessibleRoute = token && isAllowed ? children : <Navigate to='/login' replace={true} />

  return accessibleRoute
}
