import React from "react";

const ShopCard = ({ shop }) => {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 className="text-lg sm:text-xl font-bold mb-2">{shop.name}</h2>
      <p>Status: 
        <span className={shop.status === "occupied" ? "text-red-600 font-semibold" : "text-green-600 font-semibold"}>
          {shop.status}
        </span>
      </p>
      {shop.tenant && (
        <p className="mt-2">Tenant: <span className="font-medium">{shop.tenant.name}</span></p>
      )}
    </div>
  );
};

export default ShopCard;
