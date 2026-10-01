import React from 'react';

const TelemetryBanner = ({ isStreamActive }) => {
  if (!isStreamActive) {
    return null;
  }

  return (
    <div style={{ background: '#2ecc71', color: '#fff', padding: '10px', position: 'fixed', top: 0, left: 0, width: '100%' }}>
      Live data synchronization stream active.
    </div>
  );
};

export default TelemetryBanner;