import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const RoleGuard = ({ currentRole, allowedRoles, children }) => {
  if (!allowedRoles.includes(currentRole)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  { path: '/unauthorized', element: <p>⚠️ Access Denied: Insufficient credentials.</p> },
  {
    path: '/admin',
    element: (
      <RoleGuard currentRole="guest" allowedRoles={['admin', 'super-user']}>
        <h2>System Root Administration</h2>
      </RoleGuard>
    )
  }
]);

const RoleBasedAuthorization = () => {
  return <RouterProvider router={router} />;
};

export default RoleBasedAuthorization;