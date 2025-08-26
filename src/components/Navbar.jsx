import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-900 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-extrabold 
                     bg-gradient-to-r from-green-400 to-green-400 
                     bg-clip-text text-transparent drop-shadow-lg">
        Container Rental
      </h1>
      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
        >
          Dashboard
        </Link>
        <Link
          to="/tenants"
          className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
        >
          Tenants
        </Link>
        <Link
          to="/payments"
          className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
        >
          Payments
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
