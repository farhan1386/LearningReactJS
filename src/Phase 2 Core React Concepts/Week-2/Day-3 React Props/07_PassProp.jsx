import React from 'react';

const Greeting = ({ message }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
      <p>Received Value: <strong>{message}</strong></p>
    </div>
  );
};

export default Greeting;
