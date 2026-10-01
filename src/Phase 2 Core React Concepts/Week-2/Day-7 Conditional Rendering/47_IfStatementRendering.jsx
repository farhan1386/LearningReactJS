import React from 'react';

const AdminPanel = ({ isAdmin }) => {
  if (isAdmin) {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h2>Administrator Panel</h2>
        <p>Full database write access granted.</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Guest Panel</h2>
      <p>Read-only view access active.</p>
    </div>
  );
};

export default AdminPanel;