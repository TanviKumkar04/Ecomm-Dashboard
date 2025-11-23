"use client";

import { useSelector } from "react-redux";

export default function UserDashboard() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      {user ? (
        <p className="text-xl">
          Welcome, <span className="font-semibold">{user.name}</span>! Your role is {user.role}.
        </p>
      ) : (
        <p>Please login to see your dashboard.</p>
      )}
    </div>
  );
}
