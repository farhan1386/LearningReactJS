import React from 'react';

const EventInspector = () => {
  const logEventDetails = (e) => {
    console.log('Event Type:', e.type);
    console.log('Target Element:', e.target);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <button onClick={logEventDetails}>Inspect Click Event</button>
    </div>
  );
};

export default EventInspector;
