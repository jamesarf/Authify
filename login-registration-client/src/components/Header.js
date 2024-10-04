import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {

  const [user, setUser] = useState(null);
  const navigate =useNavigate();
  
  useEffect(() => {
    const user = localStorage.getItem('reactAuthUser');
    user && setUser(user)
  }, [navigate]);
  
  return (
    <nav className="bg-indigo-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl no-underline font-bold">Login Registration Demo </Link>
        <button className="text-white md:hidden focus:outline-none" aria-label="Toggle navigation">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {user && (
          <div className="hidden md:flex space-x-4">
            <button className="text-white hover:bg-indigo-700 px-3 py-2 no-underline rounded">Logout</button>
          </div>
        )}
        
      </div>
    </nav>
  );
}

export default Header;
