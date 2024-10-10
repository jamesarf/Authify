import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('reactAuthUser');
    user && setUser(user);
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('reactAuthUser');
    localStorage.removeItem('reactAuthToken');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl no-underline font-bold">
          Login Registration Demo
        </Link>
        <button className="text-white md:hidden focus:outline-none" aria-label="Toggle navigation">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div className="hidden md:flex space-x-4">
          

          {!user && (
            <>
              <Link to="/" className="text-white hover:bg-indigo-700 px-3 py-2 no-underline rounded">
                Home
              </Link>
              <Link to="/register" className="text-white bg-indigo-600 px-3 py-2 no-underline rounded hover:bg-indigo-700">
                Sign up
              </Link>
            </>
          )}
          {user && (
          <>
            <Link to="/" className="text-white hover:bg-indigo-700 px-3 py-2 no-underline rounded">
              Home
            </Link>
            <Link to="/about" className="text-white hover:bg-indigo-700 px-3 py-2 no-underline rounded">
              About
            </Link>
            <Link to="/contact" className="text-white hover:bg-indigo-700 px-3 py-2 no-underline rounded">
              Contact
            </Link>
            <button
              className="text-white bg-indigo-600 px-3 py-2 no-underline rounded rounded hover:bg-indigo-700"
              onClick={logout}
            >
              Logout
            </button>
          </>
            
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
