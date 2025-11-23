"use client";

import { useSelector } from "react-redux";

export default function AdminDashboard() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      {user ? (
        <p className="text-xl">Welcome, {user.name}! You have admin access.</p>
      ) : (
        <p>Please login to see your dashboard.</p>
      )}
    </div>
  );
}
