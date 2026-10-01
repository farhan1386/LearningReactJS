import React from 'react';

const ClickCounter = () => {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickCounter;