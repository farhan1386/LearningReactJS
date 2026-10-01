import React, { useState, useEffect } from 'react';

const EffectCleanupRoutine = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Window Dimensions Monitor</h2>
      <p>Viewport Width: <strong>{windowWidth}px</strong></p>
    </div>
  );
};

export default EffectCleanupRoutine;
