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
      <nav className="hidden md:flex justify-between items-center px-6 py-4 bg-white shadow-md relative border-b border-[#e0e0e0]">
        {/* Left links */}
        <div className="flex gap-6 font-medium text-[#38404f]">
          <Link to="/" className="hover:text-[#ff6612] transition">Home</Link>
          <Link to="/shop" className="hover:text-[#ff6612] transition">Shop</Link>
          <Link to="/artisans" className="hover:text-[#ff6612] transition">Artisans</Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link to="/cart" className="relative group">
            <ShoppingCart className="w-6 h-6 text-[#38404f] group-hover:text-[#ff6612] transition" />
            <span className="absolute -top-2 -right-2 bg-[#ff6612] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Admin Shortcut */}
          <Link
            to="/admin/login"
            className="bg-[#2c2d67] text-white px-3 py-1.5 rounded text-sm hover:bg-[#232452] transition"
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
              <User className="w-6 h-6 text-[#38404f] group-hover:text-[#ff6612] transition" />
            </button>

            {empDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 border border-[#e0e0e0]">
                {!role ? (
                  <>
                    <Link
                      to="/employee/login"
                      onClick={() => setEmpDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-[#38404f] hover:bg-[#ff6612]/10 hover:text-[#ff6612]"
                    >
                      Employee Login
                    </Link>
                    <Link
                      to="/employee/signup"
                      onClick={() => setEmpDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-[#38404f] hover:bg-[#ff6612]/10 hover:text-[#ff6612]"
                    >
                      Employee Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-[#ff6612] hover:bg-[#ff6612]/10"
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
              <UserCircle className="w-6 h-6 text-[#38404f] group-hover:text-[#ff6612] transition" />
            </button>

            {custDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 border border-[#e0e0e0]">
                {!customerToken ? (
                  <>
                    <Link
                      to="/customer/login"
                      onClick={() => setCustDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-[#38404f] hover:bg-[#ff6612]/10 hover:text-[#ff6612]"
                    >
                      Customer Login
                    </Link>
                    <Link
                      to="/customer/signup"
                      onClick={() => setCustDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-[#38404f] hover:bg-[#ff6612]/10 hover:text-[#ff6612]"
                    >
                      Customer Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleCustomerLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-[#ff6612] hover:bg-[#ff6612]/10"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (sm and smaller screens) */}
      <nav className="md:hidden flex justify-between items-center px-4 py-3 bg-white shadow-md relative border-b border-[#e0e0e0]">
        <button onClick={toggleMobileMenu} className="p-2">
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#38404f]" /> : <Menu className="w-6 h-6 text-[#38404f]" />}
        </button>

        <div className="flex items-center gap-3">
          {/* Cart - Always visible */}
          <Link to="/cart" className="relative group">
            <ShoppingCart className="w-5 h-5 text-[#38404f] group-hover:text-[#ff6612] transition" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#ff6612] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>

          {/* Admin Shortcut - Compact version */}
          <Link
            to="/admin/login"
            className="bg-[#2c2d67] text-white px-2 py-1 rounded text-xs hover:bg-[#232452] transition"
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
              <User className="w-5 h-5 text-[#38404f] group-hover:text-[#ff6612] transition" />
            </button>

            {empDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 border border-[#e0e0e0]">
                {!role ? (
                  <>
                    <Link
                      to="/employee/login"
                      onClick={() => setEmpDropdownOpen(false)}
                      className="block px-3 py-1.5 text-xs text-[#38404f] hover:bg-[#ff6612]/10 hover:text-[#ff6612]"
                    >
                      Employee Login
                    </Link>
                    <Link
                      to="/employee/signup"
                      onClick={() => setEmpDropdownOpen(false)}
                      className="block px-3 py-1.5 text-xs text-[#38404f] hover:bg-[#ff6612]/10 hover:text-[#ff6612]"
                    >
                      Employee Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-1.5 text-xs text-[#ff6612] hover:bg-[#ff6612]/10"
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
              <UserCircle className="w-5 h-5 text-[#38404f] group-hover:text-[#ff6612] transition" />
            </button>

            {custDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 border border-[#e0e0e0]">
                {!customerToken ? (
                  <>
                    <Link
                      to="/customer/login"
                      onClick={() => setCustDropdownOpen(false)}
                      className="block px-3 py-1.5 text-xs text-[#38404f] hover:bg-[#ff6612]/10 hover:text-[#ff6612]"
                    >
                      Customer Login
                    </Link>
                    <Link
                      to="/customer/signup"
                      onClick={() => setCustDropdownOpen(false)}
                      className="block px-3 py-1.5 text-xs text-[#38404f] hover:bg-[#ff6612]/10 hover:text-[#ff6612]"
                    >
                      Customer Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleCustomerLogout}
                    className="block w-full text-left px-3 py-1.5 text-xs text-[#ff6612] hover:bg-[#ff6612]/10"
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
        <div className="md:hidden bg-white shadow-md px-4 py-2 border-b border-[#e0e0e0]">
          <Link 
            to="/" 
            onClick={toggleMobileMenu}
            className="block py-2 text-[#38404f] hover:text-[#ff6612] transition"
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            onClick={toggleMobileMenu}
            className="block py-2 text-[#38404f] hover:text-[#ff6612] transition"
          >
            Shop
          </Link>
          <Link 
            to="/artisans" 
            onClick={toggleMobileMenu}
            className="block py-2 text-[#38404f] hover:text-[#ff6612] transition"
          >
            Artisans
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;