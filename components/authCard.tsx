"use client";

import Link from "next/link";

export default function AuthCard({ title, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
}
