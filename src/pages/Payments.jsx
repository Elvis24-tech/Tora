import React, { useState } from "react";

const Payments = () => {
  const [payments, setPayments] = useState([
    { id: 1, tenant: "John Doe", amount: 5000, date: "2025-08-01", status: "paid" },
    { id: 2, tenant: "Jane Smith", amount: 5000, date: "2025-08-15", status: "due" },
  ]);

  const [formData, setFormData] = useState({
    tenant: "",
    amount: "",
    date: "",
    status: "due",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPayment = () => {
    if (!formData.tenant || !formData.amount) return alert("Please fill all fields");
    const newPayment = { id: Date.now(), ...formData, amount: parseInt(formData.amount, 10) };
    setPayments([...payments, newPayment]);
    setFormData({ tenant: "", amount: "", date: "", status: "due" });
  };

  const handleDelete = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent drop-shadow-md">
        Payment Management
      </h1>
      <div className="bg-white shadow-lg rounded-xl p-4 mb-6 flex flex-wrap gap-3">
        <input name="tenant" placeholder="Tenant Name" value={formData.tenant} onChange={handleChange} className="border p-2 rounded flex-1" />
        <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} className="border p-2 rounded flex-1" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-2 rounded" />
        <select name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded">
          <option value="paid">Paid</option>
          <option value="due">Due</option>
        </select>
        <button onClick={handleAddPayment} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Payment
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Tenant</th>
              <th className="border-b p-2">Amount</th>
              <th className="border-b p-2">Date</th>
              <th className="border-b p-2">Status</th>
              <th className="border-b p-2">Actions</th>
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
                <td className="p-2">
                  <button onClick={() => handleDelete(payment.id)} className="text-red-600 hover:underline">Delete</button>
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
