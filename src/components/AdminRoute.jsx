import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!user.is_staff) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
