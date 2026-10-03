// ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}