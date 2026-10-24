import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', width: '150px' }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
    </div>
  );
};

const ProductList = () => {
  const product = {
    name: "Laptop",
    price: 50000
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductList;
