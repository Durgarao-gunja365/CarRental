import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser); // Set user data if exists
    } else {
      navigate("/login"); // Redirect to login if user not found
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle update
  const handleUpdate = () => {
    // Update user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false); // Exit edit mode
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Profile</h2>
      
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-lg text-gray-800">{user.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-lg text-gray-800">{user.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block font-medium text-gray-700">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-lg text-gray-800">{user.phone}</p>
            )}
          </div>

          {/* Edit and Save buttons */}
          <div className="mt-8 flex justify-between items-center">
            {isEditing ? (
              <button
                onClick={handleUpdate}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Edit Profile
              </button>
            )}
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
