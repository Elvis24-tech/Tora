import React from "react";

const TenantList = ({ tenants }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-extrabold mb-4 
                     bg-gradient-to-r from-green-700 to-green-400 
                     bg-clip-text text-transparent drop-shadow-md">
        Tenants
      </h2>
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
  );
};

export default TenantList;
