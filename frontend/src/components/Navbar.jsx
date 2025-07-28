import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, UserCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const [empDropdownOpen, setEmpDropdownOpen] = useState(false);
  const [custDropdownOpen, setCustDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const customerToken = localStorage.getItem("customerToken");

  const handleLogout = () => {
    localStorage.removeItem("role");
    setEmpDropdownOpen(false);
    navigate("/");
  };

  const handleCustomerLogout = () => {
    localStorage.removeItem("customerToken");
    setCustDropdownOpen(false);
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar (md and larger screens) */}
      <nav className="hidden md:flex justify-between items-center px-8 py-4 bg-white shadow-sm relative border-b border-[#e0e0e0]">
        {/* Left links */}
        <div className="flex gap-8 font-medium text-[#1F1F1F]">
          <Link 
            to="/" 
            className="hover:text-[#e8b954] transition-colors duration-200 font-semibold"
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className="hover:text-[#e8b954] transition-colors duration-200 font-semibold"
          >
            Shop
          </Link>
          <Link 
            to="/artisans" 
            className="hover:text-[#e8b954] transition-colors duration-200 font-semibold"
          >
            Artisans
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          <Link to="/cart" className="relative group">
            <div className="p-2 rounded-full hover:bg-[#e8b954]/10 transition-colors duration-200">
              <ShoppingCart className="w-5 h-5 text-[#1F1F1F] group-hover:text-[#e8b954] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-[#e8b954] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
          </Link>

          {/* Admin Shortcut */}
          <Link
            to="/admin/login"
            className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md text-sm hover:bg-[#2a2a2a] transition-colors duration-200 font-medium shadow-sm"
          >
            Admin Panel
          </Link>

          {/* Employee Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setEmpDropdownOpen(!empDropdownOpen);
                setCustDropdownOpen(false);
              }} 
              className="focus:outline-none group"
            >
              <div className="p-2 rounded-full hover:bg-[#e8b954]/10 transition-colors duration-200">
                <User className="w-5 h-5 text-[#1F1F1F] group-hover:text-[#e8b954] transition-colors" />
              </div>
            </button>

            {empDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 border border-[#e0e0e0]">
                {!role ? (
                  <>
                    <Link
                      to="/employee/login"
                      onClick={() => setEmpDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-[#1F1F1F] hover:bg-[#e8b954]/10 hover:text-[#e8b954] transition-colors duration-150"
                    >
                      Employee Login
                    </Link>
                    <Link
                      to="/employee/signup"
                      onClick={() => setEmpDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-[#1F1F1F] hover:bg-[#e8b954]/10 hover:text-[#e8b954] transition-colors duration-150"
                    >
                      Employee Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2.5 text-sm text-[#e8b954] hover:bg-[#e8b954]/10 transition-colors duration-150"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Customer Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setCustDropdownOpen(!custDropdownOpen);
                setEmpDropdownOpen(false);
              }} 
              className="focus:outline-none group"
            >
              <div className="p-2 rounded-full hover:bg-[#e8b954]/10 transition-colors duration-200">
                <UserCircle className="w-5 h-5 text-[#1F1F1F] group-hover:text-[#e8b954] transition-colors" />
              </div>
            </button>

            {custDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 border border-[#e0e0e0]">
                {!customerToken ? (
                  <>
                    <Link
                      to="/customer/login"
                      onClick={() => setCustDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-[#1F1F1F] hover:bg-[#e8b954]/10 hover:text-[#e8b954] transition-colors duration-150"
                    >
                      Customer Login
                    </Link>
                    <Link
                      to="/customer/signup"
                      onClick={() => setCustDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-[#1F1F1F] hover:bg-[#e8b954]/10 hover:text-[#e8b954] transition-colors duration-150"
                    >
                      Customer Signup
                    </Link>
                  </>
                ) : (
                  <>
                  <button
                    onClick={handleCustomerLogout}
                    className="block w-full text-left px-4 py-2.5 text-sm text-[#e8b954] hover:bg-[#e8b954]/10 transition-colors duration-150"
                  >
                    Logout
                  </button>
                  <Link
                      to="orderhistory"
                      onClick={() => setCustDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-[#1F1F1F] hover:bg-[#e8b954]/10 hover:text-[#e8b954] transition-colors duration-150"
                    >
                      History
                    </Link>
                  </>
                  
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (sm and smaller screens) */}
      <nav className="md:hidden flex justify-between items-center px-5 py-3 bg-white shadow-sm relative border-b border-[#e0e0e0]">
        <button 
          onClick={toggleMobileMenu} 
          className="p-2 rounded-full hover:bg-[#e8b954]/10 transition-colors duration-200"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-[#1F1F1F]" />
          ) : (
            <Menu className="w-5 h-5 text-[#1F1F1F]" />
          )}
        </button>

        <div className="flex items-center gap-3">
          {/* Cart - Always visible */}
          <Link to="/cart" className="relative group">
            <div className="p-2 rounded-full hover:bg-[#e8b954]/10 transition-colors duration-200">
              <ShoppingCart className="w-5 h-5 text-[#1F1F1F] group-hover:text-[#e8b954] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-[#e8b954] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </div>
          </Link>

          {/* Admin Shortcut - Compact version */}
          <Link
            to="/admin/login"
            className="bg-[#2E3A59] text-white px-3 py-1.5 rounded-md text-xs hover:bg-[#1F2A4A] transition-colors duration-200 font-medium shadow-sm"
          >
            Admin
          </Link>

          {/* Employee Icon - Now visible on mobile */}
          <div className="relative">
            <button 
              onClick={() => {
                setEmpDropdownOpen(!empDropdownOpen);
                setCustDropdownOpen(false);
              }} 
              className="focus:outline-none group"
            >
              <div className="p-2 rounded-full hover:bg-[#e8b954]/10 transition-colors duration-200">
                <User className="w-5 h-5 text-[#1F1F1F] group-hover:text-[#e8b954] transition-colors" />
              </div>
            </button>

            {empDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-1 z-50 border border-[#e0e0e0]">
                {!role ? (
                  <>
                    <Link
                      to="/employee/login"
                      onClick={() => setEmpDropdownOpen(false)}
                      className="block px-3 py-2 text-xs text-[#1F1F1F] hover:bg-[#e8b954]/10 hover:text-[#e8b954] transition-colors duration-150"
                    >
                      Employee Login
                    </Link>
                    <Link
                      to="/employee/signup"
                      onClick={() => setEmpDropdownOpen(false)}
                      className="block px-3 py-2 text-xs text-[#1F1F1F] hover:bg-[#e8b954]/10 hover:text-[#e8b954] transition-colors duration-150"
                    >
                      Employee Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-xs text-[#e8b954] hover:bg-[#e8b954]/10 transition-colors duration-150"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Customer Icon */}
          <div className="relative">
            <button 
              onClick={() => {
                setCustDropdownOpen(!custDropdownOpen);
                setEmpDropdownOpen(false);
              }} 
              className="focus:outline-none group"
            >
              <div className="p-2 rounded-full hover:bg-[#e8b954]/10 transition-colors duration-200">
                <UserCircle className="w-5 h-5 text-[#1F1F1F] group-hover:text-[#e8b954] transition-colors" />
              </div>
            </button>

            {custDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-1 z-50 border border-[#e0e0e0]">
                {!customerToken ? (
                  <>
                    <Link
                      to="/customer/login"
                      onClick={() => setCustDropdownOpen(false)}
                      className="block px-3 py-2 text-xs text-[#1F1F1F] hover:bg-[#e8b954]/10 hover:text-[#e8b954] transition-colors duration-150"
                    >
                      Customer Login
                    </Link>
                    <Link
                      to="/customer/signup"
                      onClick={() => setCustDropdownOpen(false)}
                      className="block px-3 py-2 text-xs text-[#1F1F1F] hover:bg-[#e8b954]/10 hover:text-[#e8b954] transition-colors duration-150"
                    >
                      Customer Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleCustomerLogout}
                    className="block w-full text-left px-3 py-2 text-xs text-[#e8b954] hover:bg-[#e8b954]/10 transition-colors duration-150"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-sm px-5 py-3 border-b border-[#e0e0e0]">
          <Link 
            to="/" 
            onClick={toggleMobileMenu}
            className="block py-2.5 text-[#1F1F1F] hover:text-[#e8b954] transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            onClick={toggleMobileMenu}
            className="block py-2.5 text-[#1F1F1F] hover:text-[#e8b954] transition-colors duration-200 font-medium"
          >
            Shop
          </Link>
          <Link 
            to="/artisans" 
            onClick={toggleMobileMenu}
            className="block py-2.5 text-[#1F1F1F] hover:text-[#e8b954] transition-colors duration-200 font-medium"
          >
            Artisans
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;