import React from 'react';
import { useLocalStorageState } from './62_useLocalStorageState';

const LocalStoragePersistence = () => {
  const [theme, setTheme] = useLocalStorageState('app-theme', 'light');

  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '20px', 
      background: theme === 'light' ? '#fff' : '#333', 
      color: theme === 'light' ? '#000' : '#fff',
      transition: 'all 0.2s ease'
    }}>
      <h2>Persistent Cache Workspace</h2>
      <p>Active System UI Theme State: <strong>{theme}</strong></p>
      <button onClick={() => setTheme((prev) => prev === 'light' ? 'dark' : 'light')}>
        Toggle Persistent Context Theme
      </button>
    </div>
  );
};

export default LocalStoragePersistence;
