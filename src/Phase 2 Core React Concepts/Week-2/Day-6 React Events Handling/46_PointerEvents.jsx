import React, { useState } from 'react';

const DrawingCanvasMock = () => {
  const [isPressing, setIsPressing] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <div
        onPointerDown={() => setIsPressing(true)}
        onPointerUp={() => setIsPressing(false)}
        onPointerLeave={() => setIsPressing(false)}
        style={{
          width: '250px',
          height: '250px',
          background: isPressing ? '#e74c3c' : '#3498db',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          touchAction: 'none',
          userSelect: 'none'
        }}
      >
        Works with Touch or Mouse clicks
      </div>
    </div>
  );
};

export default DrawingCanvasMock;