import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{
      width: "200px",
      height: "100vh",
      backgroundColor: "#f4f4f4",
      padding: "1rem",
      position: "fixed",
      top: 0,
      left: 0
    }}>
      <h3>CRM Menu</h3>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/trips">Trips</Link></li>
          <li><Link to="/invoices">Invoices</Link></li>
          <li><Link to="/login" onClick={() => localStorage.removeItem("token")}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
