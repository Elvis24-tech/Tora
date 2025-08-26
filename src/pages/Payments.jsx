import React, { useState } from "react";

const Payments = () => {
  const [payments] = useState([
    { id: 1, tenant: "John Doe", amount: 5000, date: "2025-08-01", status: "paid" },
    { id: 2, tenant: "Jane Smith", amount: 5000, date: "2025-08-15", status: "due" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center
                     bg-gradient-to-r from-green-700 to-green-400
                     bg-clip-text text-transparent drop-shadow-md">
        Payment Management
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Tenant</th>
              <th className="border-b p-2">Amount</th>
              <th className="border-b p-2">Date</th>
              <th className="border-b p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-green-50">
                <td className="p-2">{payment.tenant}</td>
                <td className="p-2">KES {payment.amount}</td>
                <td className="p-2">{payment.date}</td>
                <td className={`p-2 font-semibold ${payment.status === "paid" ? "text-green-600" : "text-red-600"}`}>
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
