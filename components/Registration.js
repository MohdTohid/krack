"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext"; // Assuming you're using AuthContext to manage auth
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function RegistrationPage() {
  const { currentUser, loading: authLoading, setIsFirstLogin } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // VALIDATION GOES HERE =

    try {
      const userDocRef = doc(db, "students", currentUser.uid);

      await setDoc(
        userDocRef,
        {
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          phone: phone,
          institution: institution,
          role: "student",
        },
        { merge: true }
      );
      setIsFirstLogin(false);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error saving student details: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Complete Your Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date Of Birth</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">School/College</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
