import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const ProtectedLayout = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  { path: '/login', element: <p>Please authenticate at secure terminal.</p> },
  { 
    path: '/secure-vault', 
    element: (
      <ProtectedLayout isAuthenticated={false}>
        <p>🔐 Welcome to the central system mainframe.</p>
      </ProtectedLayout>
    ) 
  }
]);

const ProtectedRouteGuard = () => {
  return <RouterProvider router={router} />;
};

export default ProtectedRouteGuard;