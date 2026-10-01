import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';

const DashboardShell = () => (
  <div style={{ display: 'flex', gap: '20px', fontFamily: 'sans-serif' }}>
    <aside style={{ background: '#f0f0f0', padding: '10px' }}>
      <h3>Console Nav</h3>
      <Link to="/panel/metrics" style={{ display: 'block' }}>Metrics</Link>
      <Link to="/panel/settings" style={{ display: 'block' }}>Settings</Link>
    </aside>
    <main style={{ padding: '10px' }}>
      <Outlet />
    </main>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/panel',
    element: <DashboardShell />,
    children: [
      { path: 'metrics', element: <p>Core Telemetry Data Display</p> },
      { path: 'settings', element: <p>Configuration Settings Layout</p> }
    ]
  }
]);

const NestedRoutingLayouts = () => {
  return <RouterProvider router={router} />;
};

export default NestedRoutingLayouts;