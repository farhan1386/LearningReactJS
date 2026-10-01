import React from 'react';

const KeyLogger = () => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      alert('Enter key pressed!');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <input 
        type="text" 
        onKeyDown={handleKeyPress} 
        placeholder="Press Enter here..." 
      />
    </div>
  );
};

export default KeyLogger;