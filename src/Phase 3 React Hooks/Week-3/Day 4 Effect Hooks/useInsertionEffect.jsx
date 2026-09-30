import { useInsertionEffect } from 'react';

const DynamicStyledButton = () => {
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `.dynamic-btn { background: tomato; color: white; }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return <button className="dynamic-btn">Tomato Button</button>;
};

export default DynamicStyledButton;
