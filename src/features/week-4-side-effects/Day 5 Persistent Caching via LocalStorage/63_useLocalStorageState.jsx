import { useState, useEffect } from 'react';

export const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      return savedValue ? JSON.parse(savedValue) : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
