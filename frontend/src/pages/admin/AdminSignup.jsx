import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const AdminSignup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("/api/admin/signup", {
        name,
        email,
        password,
      });
      login({ role: "admin", email: res.data.user.email });
      navigate("/admin");
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="h-[90vh] bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center px-4">
      <div className="flex w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left image section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://i.pinimg.com/736x/41/f9/b5/41f9b52ef2bc4f5aea82218e439fde3f.jpg"
            alt="Handcrafted Pottery"
            className="object-cover w-full h-full "
          />
        </div>

        {/* Right form section */}
        <div className="w-full md:w-1/2">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] py-4 px-4 text-center">
            <h2 className="text-2xl font-bold text-white">Admin Registration</h2>
            <p className="text-indigo-100 text-sm mt-1">Create your administrator account</p>
          </div>

          <form onSubmit={handleSignup} className="px-6 py-4">
            {error && (
              <div className="mb-4 p-2 bg-red-50 text-red-600 rounded text-sm border border-red-200">
                {error}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@example.com"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters required</p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white font-medium py-2 px-4 rounded shadow hover:shadow-lg transition duration-300"
            >
              Register Admin Account
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/admin/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </form>

          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              By registering, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
