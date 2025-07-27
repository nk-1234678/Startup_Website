import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const EmployeeSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const position = "worker";

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrors({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#%&*])[A-Za-z\d@!#%&*]{6,}$/;

    const validationErrors = {};
    if (!name.trim()) validationErrors.name = "Name is required";
    if (!emailRegex.test(email)) validationErrors.email = "Invalid email format";
    if (!passwordRegex.test(password)) {
      validationErrors.password =
        "Password must be 6+ chars with uppercase, number, and special char";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = { name, email, password, position };
    console.log("Sending payload:", payload);

    try {
      const res = await axios.post("/api/employee/signup", payload);
      const data = res.data;

      console.log("Signup success:", data);

      // Save to AuthContext
      login({ role: "employee", email: data.employee.email });

      // Save to localStorage for admin dashboard
      const existingEmployees = JSON.parse(localStorage.getItem("employees")) || [];

      const newEmployee = {
        id: data.employee._id,
        name: data.employee.name,
        email: data.employee.email,
        joinDate: new Date().toISOString(),
        role: "Employee",
        status: "active",
      };

      localStorage.setItem("employees", JSON.stringify([...existingEmployees, newEmployee]));

      navigate("/employee/profile");
    } catch (err) {
      console.error("Signup error:", err);
      console.error("Backend error:", err.response?.data);
      setErrors({ email: err.response?.data?.message || "Something went wrong" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f1e9] flex items-center justify-center p-4">
      <div className="w-full max-w-3xl flex bg-white rounded-xl shadow-lg overflow-hidden border border-[#e8b954]/30">
        {/* Left side - Employee Illustration */}
        <div className="hidden md:flex w-1/2 bg-[#2a2a2a] p-8 flex-col justify-center items-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#e8b954] mb-2">Join Our Team</h2>
            <p className="text-[#f4f1e9]">Register as an employee to access the artisan marketplace</p>
          </div>
          <div className="w-full flex justify-center my-6">
            <img 
              src="https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5YncB0TpuQZGB3qsr9485UpDgJERFchz61ySM" 
              alt="Employee illustration"
              className="w-64 h-64 object-contain"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-[#f4f1e9] text-sm">Already part of the team?</p>
            <Link 
              to="/employee/login" 
              className="inline-block mt-2 px-4 py-2 rounded-md text-sm font-medium text-[#2a2a2a] bg-[#e8b954] hover:bg-[#d6a847] transition-colors"
            >
              Employee Login
            </Link>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#2a2a2a]">Employee Registration</h2>
            <p className="text-[#5a5a5a] mt-1">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#2a2a2a] mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-[#5a5a5a]/30"
                } focus:outline-none focus:ring-2 focus:ring-[#7a9f79] focus:border-transparent`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2a2a2a] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-[#5a5a5a]/30"
                } focus:outline-none focus:ring-2 focus:ring-[#7a9f79] focus:border-transparent`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2a2a2a] mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-[#5a5a5a]/30"
                } focus:outline-none focus:ring-2 focus:ring-[#7a9f79] focus:border-transparent`}
              />
              {errors.password ? (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              ) : (
                <p className="text-[#5a5a5a] text-xs mt-1">
                  6+ characters with uppercase, number, and special character
                </p>
              )}
            </div>

            <input type="hidden" value={position} />

            <button
              type="submit"
              className="w-full mt-6 py-3 px-4 rounded-lg font-medium text-white bg-[#7a9f79] hover:bg-[#6a8f69] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7a9f79] transition-all"
            >
              Register as Employee
            </button>

            <div className="text-center md:hidden mt-4">
              <p className="text-sm text-[#5a5a5a]">
                Already have an account?{' '}
                <Link 
                  to="/employee/login" 
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

export default EmployeeSignup;