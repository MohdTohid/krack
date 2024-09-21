"use client";

import React, { useState } from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const { signup, login, isRegistered, setIsRegistered } = useAuth();
  const router = useRouter();

  async function handleSubmit() {
    if (!email || !password || password.length < 6) {
      return;
    }

    setAuthenticating(true);

    try {
      if (isRegistered) {
        await login(email, password);
      } else {
        await signup(email, password);
        router.push("/registration");
      }
    } catch (error) {
      console.log("ERROR: " + error.message);
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
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="w-full mx-auto max-w-[400px] duration-300 hover:border-indigo-600 focus:border-indigo-600 px-3 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="w-full mx-auto max-w-[400px] duration-300 hover:border-indigo-600 focus:border-indigo-600 px-3 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? "Submitting" : "Submit"}
          dark
          full
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
