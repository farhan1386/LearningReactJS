import React from 'react';

// The final presenter component deep in the hierarchy
const ThemeLabel = ({ activeTheme }) => {
  return <p>Current active workspace setting: <strong>{activeTheme}</strong></p>;
};

// The intermediate bridge component passing data down
const ControlPanel = ({ activeTheme }) => {
  return (
    <div style={{ background: '#f5f5f5', padding: '10px' }}>
      <h5>Control Panel</h5>
      <ThemeLabel activeTheme={activeTheme} />
    </div>
  );
};

// The root orchestrator holding the initial configurations
const Dashboard = () => {
  const currentTheme = "Midnight Dark";
  
  return (
    <div style={{ padding: '20px', border: '1px solid #333' }}>
      <h2>Application Dashboard</h2>
      <ControlPanel activeTheme={currentTheme} />
    </div>
  );
};

export default Dashboard;