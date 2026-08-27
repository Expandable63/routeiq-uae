"use client";

import { useState } from "react";

export default function Home() {
  const customers = [
    "Super Cement",
    "Fassco International",
    "Al Ain Holding",
    "AZEMCO",
    "Al Baker Group",
  ];

  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        RouteIQ UAE
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg border"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Customers
          </h2>

          <ul className="space-y-3">
            {filteredCustomers.map((customer) => (
              <li key={customer}>{customer}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            UAE Map
          </h2>

          <div className="h-80 bg-slate-200 rounded-lg flex items-center justify-center">
            Map Coming Soon
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Today's Route
          </h2>

          <ol className="space-y-3">
            <li>1. Super Cement</li>
            <li>2. Fassco</li>
            <li>3. Al Ain Holding</li>
          </ol>
        </div>

      </div>
    </main>
  );
}