import { useState, useDebugValue } from 'react';

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useDebugValue(isOnline ? 'Online Status: Active' : 'Online Status: Offline');

  return isOnline;
};

const StatusDisplay = () => {
  const isOnline = useOnlineStatus();
  return <p>Am I Online? {isOnline ? 'Yes' : 'No'}</p>;
};

export default StatusDisplay;
