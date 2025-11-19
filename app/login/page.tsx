"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const loginHandler = () => {
    localStorage.setItem("auth", "true");
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center p-10">
      <div className="border p-8 rounded-lg shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <input
          className="border w-full p-2 mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="bg-black text-white w-full py-2"
          onClick={loginHandler}
        >
          Login
        </button>

        <p className="mt-4 text-sm">
          No account? <Link className="text-blue-500" href="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
