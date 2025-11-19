"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex justify-center p-10">
      <div className="border p-8 rounded-lg shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Register</h1>

        <input className="border w-full p-2 mb-4" placeholder="Name" />
        <input className="border w-full p-2 mb-4" placeholder="Email" />
        <input className="border w-full p-2 mb-4" placeholder="Password" />

        <button className="bg-black text-white w-full py-2">Create Account</button>

        <p className="mt-4 text-sm">
          Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
}
