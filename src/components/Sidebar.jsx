// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  UserCog,
  UserCircle,
  FileText,
  MapPin,
  BarChart,
  LogOut
} from "lucide-react";

const Sidebar = ({ role }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const navItems = [
    { label: "Users", path: "/users", icon: <UserCog className="text-xl" />, roles: ["admin"] },
    { label: "Reports", path: "/reports", icon: <BarChart className="text-xl" />, roles: ["admin", "analyst"] },
    { label: "Clients", path: "/clients", icon: <UserCircle className="text-xl" />, roles: ["admin", "agent"] },
    { label: "Trips", path: "/trips", icon: <MapPin className="text-xl" />, roles: ["admin", "agent"] },
    { label: "Invoices", path: "/invoices", icon: <FileText className="text-xl" />, roles: ["admin", "agent"] },
  ];


  return (
    <div className={`bg-gray-800 text-white h-screen p-4 flex flex-col transition-all duration-300 ${collapsed ? "w-16" : "w-48"}`}>
      <button onClick={toggleSidebar} className="mb-6">
        <Menu className="text-xl" />
      </button>

      <nav className="flex-1 space-y-2">
        {navItems
          .filter(item => item.roles.includes(role))
          .map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative flex items-center ${collapsed ? "justify-center" : "gap-3"} px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200 ${location.pathname === item.path ? "bg-gray-700" : ""}`}
            >
              <div title={collapsed ? item.label : ""}>
                {item.icon}
              </div>

              {!collapsed && <span>{item.label}</span>}

              {/* Tooltip (optional custom tooltip styling) */}
              {collapsed && (
                <span className="absolute left-full ml-2 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
      </nav>

      <div className="mt-auto">
        <button
          className={`group relative flex items-center ${collapsed ? "justify-center" : "gap-2"} px-3 py-2 hover:bg-gray-700 rounded w-full`}
        >
          <div title={collapsed ? "Logout" : ""}>
            <LogOut className="text-xl" />
          </div>

          {!collapsed && <span>Logout</span>}

          {collapsed && (
            <span className="absolute left-full ml-2 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
              Logout
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
