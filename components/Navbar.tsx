"use client";

import { Bell, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full h-16 border-b bg-white flex items-center justify-between px-6">
      {/* Logo */}
      <div className="text-xl font-semibold tracking-wide">
        Ecom Dashboard
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 border rounded-full px-3 py-1 w-72">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <Bell size={22} className="cursor-pointer text-gray-600 hover:text-black" />
        <User size={22} className="cursor-pointer text-gray-600 hover:text-black" />
      </div>
    </nav>
  );
}
