import React, { useState, useEffect } from 'react';

const DependencyArrayConstraints = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Dependency Control Matrix</h2>
      <p>Base Counter: {count}</p>
      <p>Derived Multiplier (x2): {calculation}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default DependencyArrayConstraints;
