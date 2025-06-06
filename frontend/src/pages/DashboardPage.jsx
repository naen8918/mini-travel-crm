// src/pages/DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
  if (token) {
      axios.get('http://localhost:5000/dashboard', {
        headers: { 
          Authorization: `Bearer ${token}` 
        }
      })
      .then(res => setUserData(res.data))
      .catch(err => {
        console.error('Failed to fetch dashboard data:', err);
        setUserData({ error: 'Unauthorized or session expired' });
      });
    }
  }, [token]); // include token in dependency array


  if (!userData) return <p>Loading...</p>;
  if (userData.error) return <p>{userData.error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {userData.name || userData.email}</h1>
      <p>Role: {userData.role}</p>
    </div>
  );
};

export default DashboardPage;
