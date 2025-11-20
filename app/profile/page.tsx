"use client";

import { useState } from "react";

export default function ProfilePage() {
  // Simulating logged-in user (replace with real API data)
  const [user] = useState({
    username: "tanvi123",
    email: "tanvi@example.com",
    photo: "/photo.jpeg.jpg", 
  });

  return (
    <div className="p-6 flex justify-center">
      <div className="max-w-md w-full border rounded-xl p-6 shadow-md bg-white">

        {/* Profile Photo */}
        <div className="flex justify-center mb-4">
          <img
            src={user.photo}
            alt="Profile"
            className="h-24 w-24 rounded-full border object-cover"
          />
        </div>

        {/* Username */}
        <h2 className="text-center text-2xl font-bold mb-1">
          {user.username}
        </h2>

        {/* Email */}
        <p className="text-center text-gray-600 mb-6">{user.email}</p>

        {/* Info Card */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p className="text-sm"><strong>Account Status:</strong> Logged In</p>
          <p className="text-sm"><strong>Role:</strong> User</p>
        </div>

        {/* Update Profile Button */}
        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-2 rounded-lg">
            Update Profile
          </button>
        </div>

      </div>
    </div>
  );
}
