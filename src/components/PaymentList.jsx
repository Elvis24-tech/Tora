import React from "react";

const PaymentList = ({ payments }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-extrabold mb-4 
                     bg-gradient-to-r from-green-700 to-green-400 
                     bg-clip-text text-transparent drop-shadow-md">
        Payments
      </h2>
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
  );
};

export default PaymentList;
