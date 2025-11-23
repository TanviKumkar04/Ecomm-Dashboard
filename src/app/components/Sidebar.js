"use client";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const { token } = useSelector((state) => state.auth); 
  const { user } = useSelector((state) => state.auth);


  return (
    <div
      className={`h-screen bg-gray-900 text-white p-5 flex flex-col transition-all duration-300 ${
        open ? "w-64" : "w-16"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="mb-5 p-2 bg-gray-700 rounded"
      >
        {open ? "<<" : ">>"}
      </button>

      {open && <h2 className="text-2xl font-bold mb-4">Dashboard</h2>}

      <div className="flex flex-col gap-4 mt-2">
        {/* Always visible links */}
        <Link href="/auth" className="hover:text-blue-400">
          {open ? "Login/Register" : "L/R"}
        </Link>

        <Link href="/products" className="hover:text-blue-400">
          {open ? "Products" : "P"}
        </Link>
        {user && user.role === "admin" && (
  <Link href="/admin/products" className="hover:text-blue-400">
    {open ? "Manage Products" : "MP"}
  </Link>
)}


        {/* Logout button visible only if user is logged in */}
        {token && (
          <div className="mt-auto">
            <LogoutButton />
          </div>
        )}
      </div>
    </div>
  );
}
