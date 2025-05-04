import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCar, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
    };

    // Initial check
    checkLoginStatus();

    // Listen to storage event
    window.addEventListener("storage", checkLoginStatus);

    // Scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  const navLinks = [
    { label: "Home", to: "/" },
    isLoggedIn && { label: "Cars", to: "/cars" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    isLoggedIn && { label: "My Bookings", to: "/my-bookings" },
    
  ].filter(Boolean);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-2" : "bg-white/90 backdrop-blur-sm py-3"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center text-2xl font-bold group"
          >
            <FaCar className="mr-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            <span className="text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              DurgaCar
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, to }) => (
              <Link 
                to={to} 
                key={to} 
                className="relative group px-1"
              >
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-medium">
                  {label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {!isLoggedIn ? (
              <div className="flex items-center space-x-4 ml-6">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4 ml-6">
                <button
                  onClick={() => navigate("/profile")}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  aria-label="User profile"
                >
                  <FaUserCircle className="text-2xl" />
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white shadow-inner">
          {navLinks.map(({ label, to }) => (
            <Link
              to={to}
              key={to}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 font-medium"
            >
              {label}
            </Link>
          ))}

          {!isLoggedIn ? (
            <div className="pt-2 space-y-2 border-t border-gray-200">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-blue-600 hover:bg-blue-50 transition-colors duration-300 font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 font-medium text-center"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="pt-2 space-y-2 border-t border-gray-200">
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-blue-600 hover:bg-blue-50 transition-colors duration-300 font-medium"
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="w-full text-left px-3 py-2 rounded-md text-red-500 hover:bg-red-50 transition-colors duration-300 font-medium"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}