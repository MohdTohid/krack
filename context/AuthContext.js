"use client";

import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { handleAuthError } from "@/components/errorHandler";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDataObj, setUserDataObj] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(null);

  // AUTH HANDLERS
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const userDocRef = doc(db, "students", user.uid);

        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          createdAt: new Date().toISOString(),
        });
      })
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(email, password) {
    setUserDataObj(null);
    setCurrentUser(null);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        // Set the user to our local context state
        setLoading(true);
        setCurrentUser(user);
        if (!user) {
          return;
        }

        // If user exists, fetch data from firestore database
        const docRef = doc(db, "students", user.uid);
        const docSnap = await getDoc(docRef);
        let firebaseData = {};

        if (docSnap.exists()) {
          firebaseData = docSnap.data();
        }
        setUserDataObj(firebaseData);
      } catch (error) {
        console.log("ERROR: " + error.message);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userDataObj,
    setUserDataObj,
    signup,
    login,
    logout,
    loading,
    isRegistered,
    setIsRegistered,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
