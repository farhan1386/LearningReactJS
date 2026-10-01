import React from 'react';
import { createBrowserRouter, RouterProvider, useParams, Link } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  return (
    <div>
      <h2>User Profile View</h2>
      <p>Active Target ID: <strong>{userId}</strong></p>
      <Link to="/">Back to Directory</Link>
    </div>
  );
};

const Directory = () => (
  <div>
    <h2>User Matrix</h2>
    <ul>
      <li><Link to="/user/101">View Employee 101</Link></li>
      <li><Link to="/user/202">View Employee 202</Link></li>
    </ul>
  </div>
);

const router = createBrowserRouter([
  { path: '/', element: <Directory /> },
  { path: '/user/:userId', element: <UserProfile /> }
]);

const DynamicRouteParams = () => {
  return <RouterProvider router={router} />;
};

export default DynamicRouteParams;