# 🌐 Mini Travel CRM – React Frontend

![React](https://img.shields.io/badge/react-18.x-blue)
![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

> Frontend dashboard for the Mini Travel CRM system – built with **React**, designed to integrate securely with the Flask REST API backend. Enables agents, analysts, and admins to manage client data, invoices, and analytics.

---

## 📌 Overview

This frontend provides:
- 🔐 Login & protected route access via JWT
- 🧭 Navigation Sidebar & Dashboard layout
- 📁 Placeholder pages for Clients, Invoices, Trips
- 🎨 Modular layout system using React Router and custom components
- 📦 Easy setup & deploy-ready structure

---

## 🧱 Folder Structure
```bash
frontend/
├── public/ # Static assets
├── src/
│ ├── components/ # Shared UI components (Sidebar, Layout, PrivateRoute)
│ ├── pages/ # Page views (Dashboard, Clients, etc.)
│ ├── styles/ # CSS for layout and styling
│ ├── App.js # Main routing setup
│ └── index.js # Entry point
├── package.json
└── README.md
```
---

## 🚀 Getting Started (Development)

### 1. Clone the repo
```bash
git clone https://github.com/naen8918/mini-travel-crm.git
cd mini-travel-crm/frontend
```
### 2. Install dependencies
```bash
npm install
```

### 3. Run the app
```bash
npm start
```
The app will start on http://localhost:3000 and connect to your backend at http://localhost:5000.

### 🔐 Authentication
This app uses **JWT authentication**:
- Tokens are saved to `localStorage` after login
- Protected routes use `<PrivateRoute>` logic
- Logout clears the token and redirects to login

### 🖼️ Current Screens
| Page         | Description                        |
| ------------ | ---------------------------------- |
| `/`          | Login form                         |
| `/dashboard` | Shows user name and role from JWT  |
| `/clients`   | Placeholder for clients management |
| `/invoices`  | Placeholder for invoices           |
| `/trips`     | Placeholder for trips              |

---

### 🔧 Customization Tips
- Update `Sidebar.jsx` to match your CRM structure
- Use `Layout.jsx` to keep UI consistent across pages
- Add Tailwind, Bootstrap, or your preferred styling framework if desired

### 🔮 Future Improvements
| Feature                  | Status  | Description                          |
| ------------------------ | ------- | ------------------------------------ |
| ✅ User greeting by name  | Done ✅  | Uses `name` from backend JWT claims  |
| 🔁 Real data loading     | Not yet | Connect Clients, Invoices to backend |
| 🛑 Role-based UI locking | Planned | Admin-only routes and views          |
| 🌈 Better styling        | Planned | Add Tailwind or Material UI          |
| 🌐 Responsive design     | Planned | Mobile/tablet-friendly layout        |

---

### 🧠 Author
### Nazgul Engvall
#### React/Flask Developer
GitHub: [naen8918](https://github.com/naen8918)

### 📄 License
This frontend is licensed under the MIT License.
Built for learning, personal portfolio, and small business use cases.
