import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children, redirectTo, requiresAuth }) => {
  const isAuthorized = false;
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const user = localStorage.getItem('reactAuthUser');
  const token = localStorage.getItem('reactAuthToken');
  useEffect(()=>{
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
        const response = await axios.get(`${apiUrl}/protected`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("response", response);
        isAuthorized = true; // Token is valid, user is authorized
        alert("Token is valid, user is authorized");
      } catch (err) {
        console.log("response err", err);
        alert("Session expired, please log in again.");
        localStorage.removeItem('reactAuthUser');
        localStorage.removeItem('reactAuthToken');
        
        navigate('/login');  // Redirect if token verification fails
      }

      if (requiresAuth && !isAuthorized) {
        return <Navigate to="/login" />;
      }

      if (!requiresAuth && isAuthorized) {
        return <Navigate to={redirectTo} />;
      }
    }
    checkAuth();

   }, [user, token, navigate]);

  

  return children;
}

export default ProtectedRoute;
