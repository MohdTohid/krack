import React from "react";
import Loading from "./Loading";
import { useAuth } from "@/context/AuthContext";
import Login from "./Login";

export default function Dashboard() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!currentUser) {
    return <Login />;
  }

  return <div>Dashboard</div>;
}
