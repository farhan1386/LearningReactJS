import { useSyncExternalStore } from 'react';

const NetworkMonitor = () => {
  const isOnline = useSyncExternalStore(
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    () => navigator.onLine
  );

  return <h1>Status: {isOnline ? 'Connected' : 'Disconnected'}</h1>;
};

export default NetworkMonitor;
