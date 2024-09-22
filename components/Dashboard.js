import React from "react";
import Loading from "./Loading";
import { useAuth } from "@/context/AuthContext";
import Login from "./Login";
import RegistrationPage from "./Registration";

export default function Dashboard() {
  const { currentUser, loading,isFirstLogin } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!currentUser) {
    return <Login />;
  }

  if (currentUser && isFirstLogin) {
    return <RegistrationPage />;
  }

  return <div>Dashboard</div>;
}
