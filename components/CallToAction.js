"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";

export default function CallToAction() {
  const { currentUser, loading, setIsRegistered } = useAuth();

  if (currentUser) {
    return (
      <div className="max-w-[600px] mx-auto w-full">
        <Link href={"/dashboard"}>
          <Button full dark text="Dashboard"></Button>
        </Link>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Link href={"/dashboard"}>
          <Button
            text="Sign Up"
            clickHandler={() => {
              setIsRegistered(false);
            }}
          />
        </Link>
        <Link href={"/dashboard"}>
          <Button
            dark
            text="Login"
            clickHandler={() => {
              setIsRegistered(true);
            }}
          />
        </Link>
      </div>
    );
  }
}
