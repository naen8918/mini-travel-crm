// src/components/UserDropdown.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ username: "", role: "" });
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100 rounded hover:bg-gray-200"
      >
        👤 {user.username}
        <svg
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2">
          <p className="text-gray-700 font-semibold mb-1">{user.role}</p>

          {/* Role-specific shortcuts */}
          {user.role === "admin" && (
            <>
              <button onClick={() => navigate("/users")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">User Management</button>
              <button onClick={() => navigate("/reports/monthly")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">View Reports</button>
            </>
          )}

          {user.role === "agent" && (
            <>
              <button onClick={() => navigate("/clients")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Search Clients</button>
              <button onClick={() => navigate("/trips")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Search Trips</button>
            </>
          )}

          {user.role === "analyst" && (
            <>
              <button onClick={() => navigate("/reports/revenue")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Analytics Dashboard</button>
            </>
          )}

          <hr className="my-2" />
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
