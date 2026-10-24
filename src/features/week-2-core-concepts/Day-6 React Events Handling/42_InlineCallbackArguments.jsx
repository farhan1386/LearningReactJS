import React from 'react';

const InlineArgumentsRef = () => {
  const displayDetails = (category, id) => {
    alert(`Category: ${category}, ID: ${id}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <button onClick={() => displayDetails('Electronics', 404)}>
        View Product 404
      </button>
    </div>
  );
};

export default InlineArgumentsRef;