"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-6">
      <h2 className="text-xl mb-8 font-bold">Dashboard</h2>

      <nav className="flex flex-col gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login">Logout</Link>
      </nav>
    </div>
  );
}
