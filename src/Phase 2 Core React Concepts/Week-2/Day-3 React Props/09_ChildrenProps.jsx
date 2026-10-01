import React from 'react';

// Using the native 'children' prop to render nested elements dynamically
const ContentCard = ({ children }) => {
  return (
    <div style={{ padding: '20px', border: '2px dashed #e74c3c', borderRadius: '8px', background: '#fafafa' }}>
      <span style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '10px' }}>
        Card Container Wrapper
      </span>
      {children}
    </div>
  );
};

export default ContentCard;