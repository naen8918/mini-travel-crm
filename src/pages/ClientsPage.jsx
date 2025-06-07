// ✅ Step 1: Build Clients List Page with Filters & Table View
// File: src/pages/ClientsPage.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [filters, setFilters] = useState({ name: "", email: "", company: "" });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchClients = () => {
    setLoading(true);
    const query = new URLSearchParams(filters).toString();
    axios
      .get(`http://localhost:5000/clients?${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setClients(res.data))
      .catch((err) => console.error("Error loading clients", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchClients();
    // eslint-disable-next-line
  }, []);

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    fetchClients();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>

      {/* 🔍 Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Search by name"
          className="border rounded p-2"
          value={filters.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Search by email"
          className="border rounded p-2"
          value={filters.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Search by company"
          className="border rounded p-2"
          value={filters.company}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-600 text-white rounded px-4 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <button
  onClick={() => navigate("/clients/1")}
  className="bg-green-600 text-white px-4 py-2 rounded mb-4"
>
  Test Navigate
</button>


      {/* 📋 Client List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Company</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                onClick={() => navigate(`/clients/${client.id}`)}
                className="hover:bg-gray-50 cursor-pointer"
              >
                <td className="p-2 border">{client.id}</td>
                <td className="p-2 border text-blue-600 hover:underline">{client.name}</td>
                <td className="p-2 border">{client.email}</td>
                <td className="p-2 border">{client.phone}</td>
                <td className="p-2 border">{client.company}</td>
                <td className="p-2 border text-blue-600 hover:underline">View ➜</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClientsPage;
