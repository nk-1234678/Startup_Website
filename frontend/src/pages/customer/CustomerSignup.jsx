import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const CustomerSignup = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    password: "" 
  });
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
      await axios.post("/api/customers/signup", formData);
      navigate("/customer/login", { 
        state: { successMessage: "Signup successful! Please log in." } 
      });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed. Please try again.");
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
            <h2 className="text-3xl font-bold text-[#e8b954] mb-2">Welcome!</h2>
            <p className="text-[#f4f1e9]">Join our community and discover amazing products</p>
          </div>
          <div className="w-full flex justify-center my-4">
             <img 
            src="https://cdni.iconscout.com/illustration/premium/thumb/creating-account-11638616-9472338.png?f=webp" 
            alt="Login illustration"
            className="w-full max-w-xs"
          />
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#f4f1e9]">Already have an account?</p>
            <Link 
              to="/customer/login" 
              className="inline-block mt-2 px-6 py-2 rounded-full font-medium text-[#1a1a1a] bg-[#e8b954] hover:bg-[#d6a847] transition-colors"
            >
              Log in here
            </Link>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#2a2a2a] mb-2">Create Account</h2>
            <p className="text-[#5a5a5a]">Fill in your details to get started</p>
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
              <label htmlFor="name" className="block text-sm font-medium text-[#2a2a2a] mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#5a5a5a]/30 focus:outline-none focus:ring-2 focus:ring-[#e8b954] focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

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
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#5a5a5a]/30 focus:outline-none focus:ring-2 focus:ring-[#e8b954] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
              <p className="mt-2 text-xs text-[#5a5a5a]">
                Password must be at least 8 characters long
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-[#7a9f79] focus:ring-[#7a9f79] border-[#5a5a5a]/30 rounded"
                />
              </div>
              <label htmlFor="terms" className="ml-3 block text-sm text-[#5a5a5a]">
                I agree to the{' '}
                <Link to="/terms" className="text-[#7a9f79] hover:text-[#e8b954] font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-[#7a9f79] hover:text-[#e8b954] font-medium">
                  Privacy Policy
                </Link>
              </label>
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
                  Creating account...
                </>
              ) : 'Sign Up'}
            </button>

            <div className="text-center md:hidden mt-4">
              <p className="text-sm text-[#5a5a5a]">
                Already have an account?{' '}
                <Link 
                  to="/customer/login" 
                  className="font-medium text-[#7a9f79] hover:text-[#e8b954]"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignup;
