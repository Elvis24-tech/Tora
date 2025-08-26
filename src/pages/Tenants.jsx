import React, { useState } from "react";

const Tenants = () => {
  const [tenants] = useState([
    { id: 1, name: "John Doe", shop: "Shop 1", phone: "0712345678", startDate: "2025-08-01", endDate: "2026-07-31" },
    { id: 2, name: "Jane Smith", shop: "Shop 3", phone: "0798765432", startDate: "2025-08-15", endDate: "2026-08-14" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center
                     bg-gradient-to-r from-green-700 to-green-400
                     bg-clip-text text-transparent drop-shadow-md">
        Tenant Management
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">Shop</th>
              <th className="border-b p-2">Contact</th>
              <th className="border-b p-2">Rent Start</th>
              <th className="border-b p-2">Rent End</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id} className="hover:bg-green-50">
                <td className="p-2">{tenant.name}</td>
                <td className="p-2">{tenant.shop}</td>
                <td className="p-2">{tenant.phone}</td>
                <td className="p-2">{tenant.startDate}</td>
                <td className="p-2">{tenant.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tenants;
