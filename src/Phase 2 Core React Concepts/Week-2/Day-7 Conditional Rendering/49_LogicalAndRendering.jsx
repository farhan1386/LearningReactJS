import React, { useState } from 'react';

const NotificationCenter = () => {
  const [hasNewAlerts, setHasNewAlerts] = useState(true);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Notification Terminal</h2>
      <button onClick={() => setHasNewAlerts(false)}>Clear Desktop Banner</button>

      {hasNewAlerts && (
        <div style={{ marginTop: '15px', padding: '10px', background: '#f1c40f', width: '220px' }}>
          ⚠️ Incoming network packet detected.
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;