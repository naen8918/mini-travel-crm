// src/components/Layout.jsx
import React from "react";
import Sidebar from "./Sidebar";
import "../styles/Layout.css"; // We’ll create this next

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
