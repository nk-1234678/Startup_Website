import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });

      if (res.data.success) {
        login(res.data.admin, "admin");
        navigate("/admin");
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Login Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Login</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E86C3B]/50 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E86C3B]/50 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#E86C3B] focus:ring-[#E86C3B] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-[#000000] hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login to Dashboard
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/admin-signup" className="text-[#E86C3B] hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block">
          <img
            src="https://i.pinimg.com/736x/ac/e8/99/ace8990e6311dfe6c44b9277f49beac0.jpg"
            alt="Admin Login Illustration"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
