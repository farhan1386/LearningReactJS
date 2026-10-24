import React from 'react';

const BubbleContainer = () => {
  const handleParentClick = () => {
    alert('Parent div clicked!');
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
    alert('Child button clicked!');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <div onClick={handleParentClick} style={{ padding: '30px', background: '#f1c40f', width: '200px' }}>
        <button onClick={handleChildClick}>Click Child</button>
      </div>
    </div>
  );
};

export default BubbleContainer;