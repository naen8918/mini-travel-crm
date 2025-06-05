import React from "react";

function DashboardPage() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <p>Your token: {token ? token.slice(0, 20) + "..." : "Not logged in"}</p>
      <button onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
        }}>Logout</button>

    </div>
  );
}

export default DashboardPage;
