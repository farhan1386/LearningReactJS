import React from 'react';

const ItemSelector = () => {
  const handleSelect = (itemName) => {
    alert(`Selected item: ${itemName}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <button onClick={() => handleSelect('Laptop')}>Select Laptop</button>
      <button onClick={() => handleSelect('Phone')}>Select Phone</button>
    </div>
  );
};

export default ItemSelector;
