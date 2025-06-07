// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ClientsPage from "./pages/ClientsPage";
import InvoicesPage from "./pages/InvoicesPage";
import TripsPage from "./pages/TripsPage";
import NotFoundPage from "./pages/NotFoundPage";

import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <Layout><DashboardPage /></Layout>
          </PrivateRoute>
        } />
        <Route path="/clients" element={
          <PrivateRoute>
            <Layout><ClientsPage /></Layout>
          </PrivateRoute>
        } />
        <Route path="/invoices" element={
          <PrivateRoute>
            <Layout><InvoicesPage /></Layout>
          </PrivateRoute>
        } />
        <Route path="/trips" element={
          <PrivateRoute>
            <Layout><TripsPage /></Layout>
          </PrivateRoute>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
