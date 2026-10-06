import React from 'react';

const Frame = ({ children }) => {
  return (
    <div style={{ border: "5px solid gold", padding: "10px" }}>
      {children}
    </div>
  );
};

export default Frame;