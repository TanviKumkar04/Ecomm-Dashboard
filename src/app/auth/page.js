"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/authSlice";
import { useRouter } from "next/navigation";



export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const dispatch = useDispatch();
  const router = useRouter();

  // ---------------------
  // LOGIN FUNCTION
  // ---------------------
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid credentials");
        return;
      }

      // store user info in Redux
      dispatch(
        login({
          token: data.token,
          user: { email: data.email, role: data.role, name: data.name },
        })
      );

      // redirect based on role
      if (data.role === "admin") router.push("/admin/dashboard");
      else router.push("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };

  // ---------------------
  // REGISTRATION FUNCTION
  // ---------------------
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const name = email.split("@")[0]; 
      const res = await fetch("/api/users", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role, name }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration successful! Please login.");
      setIsLogin(true); // switch to login form
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 shadow rounded w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        {isLogin ? (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full mb-3 rounded"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 w-full mb-3 rounded"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded mb-3">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full mb-3 rounded"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 w-full mb-3 rounded"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <select
              className="border w-full p-2 rounded mb-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button className="w-full bg-green-600 text-white py-2 rounded mb-3">
              Register
            </button>
          </form>
        )}

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 underline"
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
