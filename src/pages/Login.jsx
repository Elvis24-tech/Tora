import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const allowedEmail = "elvis@tora.com"; // only allowed email

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email !== allowedEmail) {
      setError("This email is not allowed.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {error && <p className="text-red-600">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <button className="bg-green-700 text-white py-2 rounded hover:bg-green-600 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
