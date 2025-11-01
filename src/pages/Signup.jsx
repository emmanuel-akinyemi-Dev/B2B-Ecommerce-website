import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/apiClient.js";
import AuthLayout from "../layouts/AuthLayout.jsx";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signup", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard"); // redirect after signup
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <AuthLayout title="Create an Account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-6 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-medium hover:underline">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}
