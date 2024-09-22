"use client";

import React, { useState } from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { handleAuthError } from "./errorHandler";
import RegistrationPage from "./Registration";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const { signup, login, isRegistered, setIsRegistered } = useAuth();
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    setError("");
    if (!email || !password || password.length < 6) {
      return;
    }

    setAuthenticating(true);

    try {
      if (isRegistered) {
        await login(email, password);
      } else {
        await signup(email, password);
        return (<RegistrationPage />)
      }
    } catch (error) {
      //console.error("Firebase Error: ", error);
      const errorMessage = handleAuthError(error);
      setError(errorMessage);
    } finally {
      setAuthenticating(false);
    }
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className="text-4xl sm:text-5xl md:text-6xl">
        {isRegistered ? "Login" : "Register"}
      </h3>
      <p>You&apos;re one step away!</p>
      <input
        onFocus={() => setError("")}
        value={email}
        onChange={(e) => {
          setError("");
          setEmail(e.target.value);
        }}
        className="w-full mx-auto max-w-[400px] duration-300 hover:border-indigo-600 focus:border-indigo-600 px-3 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
        placeholder="Email"
      />
      <input
        onFocus={() => setError("")}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="w-full mx-auto max-w-[400px] duration-300 hover:border-indigo-600 focus:border-indigo-600 px-3 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
      />
      {error && (
        <div className="text-red-600 max-w-[500px]">
          <label>Error: {error}</label>
        </div>
      )}
      <div className="max-w-[400px] w-full mx-auto">
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? "Submitting" : "Submit"}
          dark
          full
          disable={authenticating}
        ></Button>
      </div>
      <p className="italic text-center">
        {isRegistered ? "Don't have an account? " : "Have an account? "}
        <button
          onClick={(e) => setIsRegistered(!isRegistered)}
          className="text-indigo-600"
        >
          {isRegistered ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}
