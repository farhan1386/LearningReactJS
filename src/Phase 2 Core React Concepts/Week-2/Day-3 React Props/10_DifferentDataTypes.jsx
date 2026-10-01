import React from 'react';

const ProductCard = ({ title, price, isAvailable, onAddToCart }) => {
  return (
    <div style={{ padding: '15px', border: '1px solid #2ecc71', margin: '10px 0' }}>
      <h4>{title}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Status: {isAvailable ? 'In Stock' : 'Out of Stock'}</p>
      
      <button 
        onClick={onAddToCart} 
        disabled={!isAvailable}
        style={{ padding: '5px 10px', cursor: isAvailable ? 'pointer' : 'not-allowed' }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;