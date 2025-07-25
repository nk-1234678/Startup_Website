import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/api/employee/login", { email, password });
      const data = res.data;

      // Save complete user with token in context/localStorage
      login({
        ...data.employee,
        token: data.token,
      });

      navigate("/employee/profile");
    } catch (err) {
      console.error("Employee login error:", err.message);
      setError("Invalid credentials or server error");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f8f5] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl flex bg-white rounded-xl shadow-lg overflow-hidden border border-[#e8b954]/30">
        {/* Left side - Employee Illustration */}
        <div className="hidden md:flex w-1/2 bg-[#1a1a1a] p-8 flex-col justify-center items-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#e8b954] mb-2">Employee Portal</h2>
            <p className="text-[#f4f1e9]">Access your artisan marketplace dashboard</p>
          </div>
          <div className="w-full flex justify-center my-6">
            <img 
              src="https://illustrations.popsy.co/amber/secure-login.svg" 
              alt="Employee login illustration"
              className="w-64 h-64 object-contain"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-[#f4f1e9] text-sm">New team member?</p>
            <Link 
              to="/employee/signup" 
              className="inline-block mt-2 px-4 py-2 rounded-md text-sm font-medium text-[#1a1a1a] bg-[#e8b954] hover:bg-[#d6a847] transition-colors"
            >
              Register Here
            </Link>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#2a2a2a]">Employee Login</h2>
            <p className="text-[#5a5a5a] mt-1">Enter your credentials to continue</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border-l-4 border-red-500 flex items-start">
              <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#2a2a2a] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#5a5a5a]/30 focus:outline-none focus:ring-2 focus:ring-[#7a9f79] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2a2a2a] mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#5a5a5a]/30 focus:outline-none focus:ring-2 focus:ring-[#7a9f79] focus:border-transparent"
                required
              />
              <div className="text-right mt-1">
                <Link to="/employee/forgot-password" className="text-xs text-[#7a9f79] hover:text-[#e8b954] hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#7a9f79] focus:ring-[#7a9f79] border-[#5a5a5a]/30 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#5a5a5a]">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 px-4 rounded-lg font-medium text-white bg-[#7a9f79] hover:bg-[#6a8f69] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7a9f79] transition-all"
            >
              Sign In
            </button>

            <div className="text-center md:hidden mt-4">
              <p className="text-sm text-[#5a5a5a]">
                Don't have an account?{' '}
                <Link 
                  to="/employee/signup" 
                  className="font-medium text-[#7a9f79] hover:text-[#e8b954]"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
