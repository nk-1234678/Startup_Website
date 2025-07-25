import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const CustomerLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const res = await axios.post("/api/customers/login", formData);
      localStorage.setItem("customerToken", res.data.token);
      navigate("/checkout");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f8f5] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left side - Illustration */}
        <div className="hidden md:block w-1/2 bg-[#1a1a1a] p-8 flex flex-col justify-center items-center">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#e8b954] mb-2">Welcome Back!</h2>
            <p className="text-[#f4f1e9]">Log in to access your account and continue shopping</p>
          </div>
          <div className="w-full flex justify-center my-4">
             <img 
            src="https://cdni.iconscout.com/illustration/premium/thumb/creating-account-11638616-9472338.png?f=webp" 
            alt="Login illustration"
            className="w-full max-w-xs"
          />
          </div>
         
          <div className="mt-8 text-center">
            <p className="text-[#f4f1e9]">New to our platform?</p>
            <Link 
              to="/customer/signup" 
              className="inline-block mt-2 px-6 py-2 rounded-full font-medium text-[#1a1a1a] bg-[#e8b954] hover:bg-[#d6a847] transition-colors"
            >
              Sign up here
            </Link>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#2a2a2a] mb-2">Customer Login</h2>
            <p className="text-[#5a5a5a]">Enter your credentials to access your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border-l-4 border-red-500 flex items-start">
              <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2a2a2a] mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#5a5a5a]/30 focus:outline-none focus:ring-2 focus:ring-[#e8b954] focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#2a2a2a] mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#5a5a5a]/30 focus:outline-none focus:ring-2 focus:ring-[#e8b954] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
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

              <Link 
                to="/customer/forgot-password" 
                className="text-sm font-medium text-[#7a9f79] hover:text-[#e8b954]"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full mt-6 py-3 px-4 rounded-lg font-medium text-white bg-[#e8b954] hover:bg-[#d6a847] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e8b954] transition-all flex justify-center items-center ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : 'Log in'}
            </button>

            <div className="text-center md:hidden mt-4">
              <p className="text-sm text-[#5a5a5a]">
                Don't have an account?{' '}
                <Link 
                  to="/customer/signup" 
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

export default CustomerLogin;
