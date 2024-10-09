import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectTo, requiresAuth }) => {
  const user = localStorage.getItem('reactAuthUser');
  const token = localStorage.getItem('reactAuthToken');
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
    const isAuthorized = true; // Token is valid, user is authorized
  } catch (err) {
    localStorage.removeItem('reactAuthUser');
    localStorage.removeItem('reactAuthToken');
    alert("Session expired, please log in again.");
    navigate('/login');  // Redirect if token verification fails
  }

  if (requiresAuth && !isAuthorized) {
    return <Navigate to="/login" />;
  }

  if (!requiresAuth && isAuthorized) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}

export default ProtectedRoute;
