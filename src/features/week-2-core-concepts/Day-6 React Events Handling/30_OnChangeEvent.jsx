import React, { useState } from 'react';

const TextInputTracker = () => {
  const [text, setText] = useState('');

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type here..." 
      />
      <p>Live output: {text}</p>
    </div>
  );
};

export default TextInputTracker;