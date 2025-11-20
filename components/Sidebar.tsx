"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, LogIn, LogOut, Package, UserPlus, User } from "lucide-react";
import Link from "next/link";
import { isLoggedIn, logoutUser } from "@/app/lib/auth";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/" },
    { name: "Products", icon: <Package size={20} />, path: "/products" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-64" : "w-16"
        } bg-gray-900 h-screen p-5 pt-8 duration-300 fixed left-0 top-0`}
      >
        {/* Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white absolute -right-4 top-5 bg-gray-700 p-1 rounded-full"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* LOGO */}
        <div className="flex items-center gap-3 text-white">
          <Package size={30} />
          {open && <h1 className="text-xl font-semibold">My Shop</h1>}
        </div>

        {/* MAIN MENU */}
        <ul className="mt-8 space-y-4">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className="flex items-center gap-4 text-gray-300 p-2 hover:bg-gray-700 rounded-md"
              >
                {item.icon}
                {open && <span>{item.name}</span>}
              </Link>
            </li>
          ))}

          {/* PROFILE – only show after login */}
          {loggedIn && (
            <li>
              <Link
                href="/profile"
                className="flex items-center gap-4 text-gray-300 p-2 hover:bg-gray-700 rounded-md"
              >
                <User size={20} />
                {open && <span>Profile</span>}
              </Link>
            </li>
          )}

          {/* Login / Register / Logout */}
          {!loggedIn ? (
            <>
              <li>
                <Link
                  href="/login"
                  className="flex items-center gap-4 text-gray-300 p-2 hover:bg-gray-700 rounded-md"
                >
                  <LogIn size={20} /> {open && "Login"}
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="flex items-center gap-4 text-gray-300 p-2 hover:bg-gray-700 rounded-md"
                >
                  <UserPlus size={20} /> {open && "Register"}
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  logoutUser();
                  window.location.href = "/login";
                }}
                className="flex items-center gap-4 text-gray-300 p-2 hover:bg-gray-700 rounded-md w-full text-left"
              >
                <LogOut size={20} /> {open && "Logout"}
              </button>
            </li>
          )}
        </ul>
      </div>

      <div className={`${open ? "ml-64" : "ml-16"} p-8 w-full duration-300`}></div>
    </div>
  );
}
