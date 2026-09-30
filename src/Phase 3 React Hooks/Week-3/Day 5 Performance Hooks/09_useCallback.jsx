import { useState, useCallback, memo } from 'react';

const ChildButton = memo(({ onClick }) => <button onClick={onClick}>Click me</button>);

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildButton onClick={increment} />
    </div>
  );
};

export default Parent;
