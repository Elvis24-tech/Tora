import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";
import Payments from "./pages/Payments";
import Login from "./pages/Login";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const ProtectedRoute = ({ element }) => (user ? element : <Navigate to="/login" />);

  return (
    <>
      {user && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login onLogin={() => {}} /> : <Navigate to="/" />}
        />
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/tenants" element={<ProtectedRoute element={<Tenants />} />} />
        <Route path="/payments" element={<ProtectedRoute element={<Payments />} />} />
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </>
  );
}

export default App;
