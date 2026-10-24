import React, { useState } from 'react';

const HoverPanel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: '200px', height: '100px', background: isHovered ? '#2ecc71' : '#e74c3c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {isHovered ? 'Mouse Inside' : 'Mouse Outside'}
      </div>
    </div>
  );
};

export default HoverPanel;