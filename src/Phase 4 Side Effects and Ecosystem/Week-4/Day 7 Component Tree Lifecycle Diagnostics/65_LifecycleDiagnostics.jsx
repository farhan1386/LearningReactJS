import React, { useState, useEffect } from 'react';

const DiagnosticChild = ({ currentCount }) => {
  useEffect(() => {
    console.log('[Diagnostic Logs] Component mounted to tree');
    return () => console.log('[Diagnostic Logs] Component unmounted from tree');
  }, []);

  useEffect(() => {
    console.log(`[Diagnostic Logs] Rendering target updated: ${currentCount}`);
  }, [currentCount]);

  return <p>Metrics Evaluation Component Active: {currentCount}</p>;
};

const LifecycleDiagnostics = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>System Lifecycle Diagnostics Engine</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Mutate Telemetry State</button>
      <button onClick={() => setActive((prev) => !prev)} style={{ marginLeft: '10px' }}>
        Toggle Visibility Tree
      </button>
      <div style={{ marginTop: '15px' }}>
        {active && <DiagnosticChild currentCount={count} />}
      </div>
    </div>
  );
};

export default LifecycleDiagnostics;