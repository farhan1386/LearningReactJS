import React from 'react';

const LinkInterception = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    alert('Navigation intercepted and blocked.');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <a href="https://google.com" onClick={handleLinkClick}>
        Go to Google
      </a>
    </div>
  );
};

export default LinkInterception;