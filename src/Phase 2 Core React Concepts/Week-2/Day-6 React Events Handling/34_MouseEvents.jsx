import React from 'react';

const InteractiveBox = () => {
  const handleDoubleClick = () => {
    alert('Box double clicked!');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <div 
        onDoubleClick={handleDoubleClick}
        style={{ width: '150px', height: '150px', background: '#34495e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
      >
        Double Click Me
      </div>
    </div>
  );
};

export default InteractiveBox;