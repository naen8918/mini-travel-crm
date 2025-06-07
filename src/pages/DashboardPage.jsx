// src/pages/DashboardPage.jsx
import React from "react";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [user, setUser] = useState({ username: "", role: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setUser({ username: "", role: "" });
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading dashboard...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Welcome, {user.username}</h1>
      <p className="text-gray-600 mb-4">Role: {user.role}</p>

      {/* Admin dashboard */}
      {user.role === "admin" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded shadow p-4">📈 Revenue Overview</div>
          <div className="bg-white rounded shadow p-4">🧾 Invoice Summary</div>
          <div className="bg-white rounded shadow p-4">👥 Total Clients</div>
        </div>
      )}

      {/* Analyst dashboard */}
      {user.role === "analyst" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded shadow p-4">📊 Monthly Revenue Chart</div>
          <div className="bg-white rounded shadow p-4">📈 Revenue by Client</div>
        </div>
      )}

      {/* Agent dashboard */}
      {user.role === "agent" && (
        <div className="space-y-4">
          <div className="bg-white rounded shadow p-4">🧭 Search Trips by Destination</div>
          <div className="bg-white rounded shadow p-4">🔎 Look Up Clients by Name/Company</div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
