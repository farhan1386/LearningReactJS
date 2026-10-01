import React, { useState } from 'react';

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Type something..."
      />
      <p>Input text: {inputValue}</p>
    </div>
  );
};

export default ControlledInput;