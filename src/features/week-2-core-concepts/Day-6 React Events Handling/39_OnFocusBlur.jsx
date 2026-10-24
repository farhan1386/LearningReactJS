import React, { useState } from 'react';

const FocusField = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <input 
        type="text" 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ border: isFocused ? '2px solid #3498db' : '1px solid #ccc', outline: 'none', padding: '5px' }}
        placeholder="Click to focus..."
      />
      <p>{isFocused ? 'Input is active' : 'Input is inactive'}</p>
    </div>
  );
};

export default FocusField;