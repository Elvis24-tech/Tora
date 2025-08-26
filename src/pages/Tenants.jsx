import React, { useState } from "react";

const Tenants = () => {
  const [tenants, setTenants] = useState([
    { id: 1, name: "John Doe", shop: "Shop 1", phone: "0712345678", startDate: "2025-08-01", endDate: "2026-07-31" },
    { id: 2, name: "Jane Smith", shop: "Shop 3", phone: "0798765432", startDate: "2025-08-15", endDate: "2026-08-14" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    shop: "",
    phone: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTenant = () => {
    if (!formData.name || !formData.shop) return alert("Please fill all fields");
    const newTenant = { id: Date.now(), ...formData };
    setTenants([...tenants, newTenant]);
    setFormData({ name: "", shop: "", phone: "", startDate: "", endDate: "" });
  };

  const handleDelete = (id) => {
    setTenants(tenants.filter((tenant) => tenant.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent drop-shadow-md">
        Tenant Management
      </h1>
      <div className="bg-white shadow-lg rounded-xl p-4 mb-6 flex flex-wrap gap-3">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 rounded flex-1" />
        <input name="shop" placeholder="Shop" value={formData.shop} onChange={handleChange} className="border p-2 rounded flex-1" />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border p-2 rounded flex-1" />
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="border p-2 rounded" />
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="border p-2 rounded" />
        <button onClick={handleAddTenant} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Tenant
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">Shop</th>
              <th className="border-b p-2">Contact</th>
              <th className="border-b p-2">Rent Start</th>
              <th className="border-b p-2">Rent End</th>
              <th className="border-b p-2">Actions</th>
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
                <td className="p-2">
                  <button onClick={() => handleDelete(tenant.id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tenants;
