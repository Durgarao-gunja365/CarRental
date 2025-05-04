import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Dummy check — replace with real authentication
    if (email === "user@example.com" && password === "password") {
      // Store user details in localStorage
      const userDetails = {
        name: "User Name",  // Replace with actual user name
        email: email,      // Replace with user email
        phone: "9876543210",  // Replace with actual user phone
      };
      localStorage.setItem("user", JSON.stringify(userDetails)); // Store user data
  
      // Store login status as well
      localStorage.setItem("loggedIn", true);
      window.dispatchEvent(new Event("storage"));
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/profile");  // Redirect to the profile page
      }, 1500);
    } else {
      toast.error("Invalid credentials");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-600">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Login to your account

        </p>
        <p className="text-center text-gray-500 text-sm">
  sample Email for login: User@example.com
          
        </p>
        <p className="text-center text-gray-500 text-sm">
          Pass: password
          
        </p>

        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md"
        >
          Login
        </button>

        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Register
          </span>
        </div>
      </form>
    </div>
  );
}
