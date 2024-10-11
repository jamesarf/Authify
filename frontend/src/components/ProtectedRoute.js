import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from "../components/Loading";

const ProtectedRoute = ({ children, redirectTo, requiresAuth }) => {
  const [isAuthorized, setIsAuthorized] = useState(null); 
  const navigate = useNavigate();
  const user = localStorage.getItem('reactAuthUser');
  const token = localStorage.getItem('reactAuthToken');
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const checkAuth = async () => {
      if (!user || !token) {
        setIsAuthorized(false);
        return;
      }

      try {
        await axios.get(`${apiUrl}/protected`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsAuthorized(true);
      } catch (err) {
        localStorage.removeItem('reactAuthUser');
        localStorage.removeItem('reactAuthToken');
        setIsAuthorized(false);
        navigate('/login');
      }
    };

    checkAuth();
  }, [user, token, apiUrl, navigate]);

  if (isAuthorized === null) {
    return <Loading/>;
  }

  if (requiresAuth && !isAuthorized) {
    return <Navigate to="/login" />;
  }

  if (!requiresAuth && isAuthorized) {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

export default ProtectedRoute;
