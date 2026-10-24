import React, { useState } from 'react';

const CoordinateTracker = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <div 
        onMouseMove={handleMouseMove}
        style={{ width: '300px', height: '200px', border: '2px solid #333', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <p>Move mouse inside this box</p>
        <p>X: {coords.x}, Y: {coords.y}</p>
      </div>
    </div>
  );
};

export default CoordinateTracker;