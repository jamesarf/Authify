import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectTo, requiresAuth }) => {
  const isAuthenticated = localStorage.getItem('reactAuthUser');

  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!requiresAuth && isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}

export default ProtectedRoute;
