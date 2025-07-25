import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/api/admin/login", { email, password });
      const data = res.data;
      login({ role: "admin", email: data.user.email });
      navigate("/admin");
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F8F8F8] p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Admin Dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3C4F76]/80 to-transparent flex items-end p-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Artisan Connect</h2>
              <p className="text-white/90 text-lg">
                Manage your artisan marketplace with powerful tools
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#2B2B2B] mb-2">Admin Portal</h1>
            <p className="text-[#5A5A5A]">Access your artisan marketplace dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#5A5A5A] mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@example.com"
                className="w-full px-4 py-3 border border-[#5A5A5A]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E86C3B]/50 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#5A5A5A] mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-[#5A5A5A]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E86C3B]/50 focus:border-transparent"
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
                  className="h-4 w-4 text-[#E86C3B] focus:ring-[#E86C3B] border-[#5A5A5A]/30 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-[#5A5A5A]">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/admin/forgot-password"
                  className="font-medium text-[#3C4F76] hover:text-[#E86C3B]"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E86C3B] to-[#d45a2a] hover:from-[#d45a2a] hover:to-[#E86C3B] text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login to Dashboard
            </button>

            <div className="mt-4 text-center text-sm text-[#5A5A5A]">
              Don't have an account?{" "}
              <Link
                to="/admin/signup"
                className="font-medium text-[#3C4F76] hover:text-[#E86C3B] transition-colors"
              >
                Create one
              </Link>
            </div>
          </form>

          <div className="mt-8 text-center text-xs text-[#5A5A5A]">
            <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;