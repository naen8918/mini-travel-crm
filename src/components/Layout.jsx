// src/components/Layout.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import UserDropdown from "./UserDropdown";

const Layout = ({ children }) => {
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => res.json())
        .then(data => setRole(data.role || ""));
    }
  }, []);

  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex-1 p-6">{children}</div>
      <div className="ml-auto">
        <UserDropdown />
      </div>
    </div>
  );
};

export default Layout;
