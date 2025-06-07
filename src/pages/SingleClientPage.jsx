// ✅ 3-Panel Layout for Single Client View
// File: src/pages/SingleClientPage.jsx

import React from "react";

const client = {
  id: 1,
  name: "Anna Bergström",
  email: "anna@example.com",
  phone: "+46 70 123 45 67",
  company: "Bergström Consulting"
};

const notes = [
  { id: 1, note: "Called client to confirm booking", timestamp: "2025-06-01T10:15:00Z" },
  { id: 2, note: "Requested change to invoice", timestamp: "2025-06-03T14:20:00Z" }
];

const trips = [
  {
    id: 101,
    destination: "Berlin",
    start_date: "2025-06-10",
    end_date: "2025-06-15",
    price: 8500,
    invoices: [
      {
        id: 201,
        issue_date: "2025-06-01",
        due_date: "2025-06-07",
        amount: 8500,
        status: "Paid"
      }
    ]
  }
];

const SingleClientPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Client: {client.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 🧾 LEFT: Contact Info */}
        <div className="bg-white shadow rounded p-4 border">
          <h2 className="font-semibold text-lg mb-2">Contact Info</h2>
          <p><strong>Email:</strong> {client.email}</p>
          <p><strong>Phone:</strong> {client.phone}</p>
          <p><strong>Company:</strong> {client.company}</p>
        </div>

        {/* 🗒️ MIDDLE: Notes Section */}
        <div className="bg-white shadow rounded p-4 border">
          <h2 className="font-semibold text-lg mb-2">Notes</h2>
          <ul className="space-y-2">
            {notes.map(note => (
              <li key={note.id} className="border p-2 rounded bg-gray-50">
                <p>{note.note}</p>
                <small className="text-gray-500">{new Date(note.timestamp).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        </div>

        {/* ✈️ RIGHT: Trips & Invoices */}
        <div className="bg-white shadow rounded p-4 border">
          <h2 className="font-semibold text-lg mb-2">Trips & Invoices</h2>
          {trips.map(trip => (
            <div key={trip.id} className="mb-4">
              <p><strong>Destination:</strong> {trip.destination}</p>
              <p><strong>Dates:</strong> {trip.start_date} – {trip.end_date}</p>
              <p><strong>Price:</strong> {trip.price} SEK</p>
              <div className="mt-2">
                <h3 className="text-sm font-semibold">Invoices:</h3>
                <ul className="text-sm ml-3">
                  {trip.invoices.map(inv => (
                    <li key={inv.id}>
                      {inv.amount} SEK – {inv.status} ({inv.issue_date})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleClientPage;
