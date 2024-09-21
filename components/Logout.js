"use client";

import React from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export default function Logout() {
  const { logout, currentUser } = useAuth();

  const pathname = usePathname();

  if (!currentUser) {
    return null;
  } else {
    if (pathname === "/dashboard") {
      return <Button dark text="Log Out" clickHandler={logout} />;
    }
  }
}
