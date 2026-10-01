import React from 'react';

const DatabaseConnecting = () => <p>Resolving cloud servers...</p>;
const DatabaseOnline = () => <p>🟢 Remote instance active.</p>;
const DatabaseOffline = () => <p>🔴 Host handshake timed out.</p>;

const INSTANCE_VIEWS = {
  connecting: <DatabaseConnecting />,
  online: <DatabaseOnline />,
  offline: <DatabaseOffline />
};

const RemoteInstanceTracker = ({ statusKey }) => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Infrastructure Node Monitor</h2>
      {INSTANCE_VIEWS[statusKey] || <p>Undefined Cluster Key</p>}
    </div>
  );
};

export default RemoteInstanceTracker;