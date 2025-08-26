import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-green-900 shadow-lg px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl sm:text-3xl font-extrabold 
                     bg-gradient-to-r from-green-700 to-green-400 
                     bg-clip-text text-transparent drop-shadow-lg">
        Container Rental
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
          Dashboard
        </Link>
        <Link to="/tenants" className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
          Tenants
        </Link>
        <Link to="/payments" className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
          Payments
        </Link>
        <button
          onClick={onLogout}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500 transition-all duration-300 text-white"
        >
          Logout
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-green-900 flex flex-col items-center md:hidden py-4 space-y-2 z-50">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 w-3/4 text-center transition-all duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/tenants"
            onClick={() => setIsOpen(false)}
            className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 w-3/4 text-center transition-all duration-300"
          >
            Tenants
          </Link>
          <Link
            to="/payments"
            onClick={() => setIsOpen(false)}
            className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 w-3/4 text-center transition-all duration-300"
          >
            Payments
          </Link>
          <button
            onClick={onLogout}
            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500 w-3/4 text-center transition-all duration-300 text-white"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
