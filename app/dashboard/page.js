import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";
import React from "react";

export default function DashboardPage() {
  let isAuthenticated = false;

  let children = <Dashboard />;

  if (!isAuthenticated) {
    children = <Login />;
  }

  return <Main>{children}</Main>;
}
