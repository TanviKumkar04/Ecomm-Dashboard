"use client";

import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/authSlice"; 
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    // Clear Redux state
    dispatch(logout());

    // Clear token from localStorage if stored
    localStorage.removeItem("token");

    // Show success message
    alert("You have successfully logged out.");

    // Redirect to login page
    router.push("/auth");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left hover:text-blue-400 px-2 py-1 rounded"
    >
      Logout
    </button>
  );
}
