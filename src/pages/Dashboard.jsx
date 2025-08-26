import React, { useState } from "react";
import ShopCard from "../components/ShopCard";

const Dashboard = () => {
  const [shops, setShops] = useState([
    { id: 1, name: "Shop 1", status: "occupied", tenant: "John Doe" },
    { id: 2, name: "Shop 2", status: "vacant", tenant: "" },
    { id: 3, name: "Shop 3", status: "occupied", tenant: "Jane Smith" },
    { id: 4, name: "Shop 4", status: "vacant", tenant: "" },
  ]);

  const handleEdit = (id, field, value) => {
    setShops((prev) =>
      prev.map((shop) =>
        shop.id === id ? { ...shop, [field]: value } : shop
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center
                     bg-gradient-to-r from-green-700 to-green-400
                     bg-clip-text text-transparent drop-shadow-md">
        Container Shop Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Edit Shops</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Shop Name</th>
              <th className="border-b p-2">Status</th>
              <th className="border-b p-2">Tenant</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop) => (
              <tr key={shop.id} className="hover:bg-green-50">
                <td className="p-2">
                  <input
                    type="text"
                    value={shop.name}
                    onChange={(e) =>
                      handleEdit(shop.id, "name", e.target.value)
                    }
                    className="border px-2 py-1 rounded w-full"
                  />
                </td>
                <td className="p-2">
                  <select
                    value={shop.status}
                    onChange={(e) =>
                      handleEdit(shop.id, "status", e.target.value)
                    }
                    className="border px-2 py-1 rounded w-full"
                  >
                    <option value="occupied">Occupied</option>
                    <option value="vacant">Vacant</option>
                  </select>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    value={shop.tenant}
                    onChange={(e) =>
                      handleEdit(shop.id, "tenant", e.target.value)
                    }
                    className="border px-2 py-1 rounded w-full"
                    placeholder="Leave empty if vacant"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
