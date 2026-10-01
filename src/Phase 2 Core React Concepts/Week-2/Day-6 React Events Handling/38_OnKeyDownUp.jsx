import React, { useState } from 'react';

const KeyStatus = () => {
  const [status, setStatus] = useState('No key activity');

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <input 
        type="text" 
        onKeyDown={() => setStatus('Key is DOWN')}
        onKeyUp={() => setStatus('Key is UP')}
        placeholder="Type to test states..."
      />
      <p>Status: {status}</p>
    </div>
  );
};

export default KeyStatus;