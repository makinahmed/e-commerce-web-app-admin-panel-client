import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";
import Loader from "../Components/Loader/Loader";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (user?.email) {
    return children;
  }
  return (
    <>
      {loading && <Loader />}
      <Navigate to="/login"></Navigate>
    </>
  );
}

export default PrivateRoute;
