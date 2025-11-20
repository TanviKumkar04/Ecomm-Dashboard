"use client";

import { useState } from "react";
import { loginUser } from "../lib/auth";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!username || !password || !confirm) {
      setError("All fields are required");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    // Save user in localStorage
    loginUser({ username });

    window.location.href = "/";
  };

  return (
    <div className="flex justify-center mt-16">
      <div className="w-96 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          className="border p-2 w-full mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3"
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-green-600 text-white px-4 py-2 w-full rounded hover:bg-green-700"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
