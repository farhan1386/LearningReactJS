import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home Station</h2>
    <nav><Link to="/dashboard">Go to Dashboard</Link></nav>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard Matrix</h2>
    <nav><Link to="/">Go Home</Link></nav>
  </div>
);

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/dashboard', element: <Dashboard /> }
]);

const BrowserRouterSetup = () => {
  return <RouterProvider router={router} />;
};

export default BrowserRouterSetup;