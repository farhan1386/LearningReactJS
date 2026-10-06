import React from 'react';

const Child = ({ secretCode }) => {
  return <p>Secret Code: {secretCode}</p>;
};

const Parent = ({ secretCode }) => {
  return <Child secretCode={secretCode} />;
};

const Grandparent = () => {
  return <Parent secretCode="XYZ123" />;
};

export default Grandparent;