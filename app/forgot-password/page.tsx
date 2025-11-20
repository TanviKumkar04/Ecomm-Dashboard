"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    if (!username) return;
    setMessage("A reset link has been sent (demo)");
  };

  return (
    <div className="flex justify-center mt-16">
      <div className="w-96 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

        {message && <p className="text-green-600 text-sm mb-2">{message}</p>}

        <input
          className="border p-2 w-full mb-3"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          onClick={handleReset}
          className="bg-purple-600 text-white px-4 py-2 w-full rounded hover:bg-purple-700"
        >
          Send Reset Link
        </button>

        <p className="text-sm text-center mt-4">
          Remembered password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
