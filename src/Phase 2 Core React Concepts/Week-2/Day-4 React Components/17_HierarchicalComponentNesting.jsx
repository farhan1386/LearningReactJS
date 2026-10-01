import React from 'react';

const Logo = () => {
  return <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />;
};

const Header = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Logo />
      <h1>My Store</h1>
    </header>
  );
};

const ProductCard = () => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', width: '150px' }}>
      <h3>Laptop</h3>
      <p>₹50,000</p>
    </div>
  );
};

const ProductList = () => {
  return (
    <section style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
      <ProductCard />
      <ProductCard />
    </section>
  );
};

const StoreApp = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <Header />
      <ProductList />
    </div>
  );
};

export default StoreApp;