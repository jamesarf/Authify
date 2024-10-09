import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children, redirectTo, requiresAuth }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem('reactAuthUser');
  const token = localStorage.getItem('reactAuthToken');
  
  useEffect(() => {
    const checkAuth = async () => {
      if (!user) {
        alert("Unauthorized! Please log in.");
        navigate('/login');  // Redirect to login if no user
        return;
      }

      if (!token) {
        alert("Unauthorized! Please log in.");
        navigate('/login');  // Redirect to login if no token
        return;
      }

      try {
        await axios.get(`${apiUrl}/protected`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // Token is valid, user is authorized
      } catch (err) {
        localStorage.removeItem('reactAuthUser');
        localStorage.removeItem('reactAuthToken');
        alert("Session expired, please log in again.");
        navigate('/login');  // Redirect if token verification fails
      }
    };

    checkAuth();
  }, [user, token, navigate]);

  return (requiresAuth && !token) ? <Navigate to={redirectTo} /> : children;
};

export default ProtectedRoute;
