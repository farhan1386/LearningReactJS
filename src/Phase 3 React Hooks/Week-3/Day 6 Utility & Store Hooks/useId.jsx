import { useId } from 'react';

const AccessibleInput = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Email Address:</label>
      <input id={id} type="email" />
    </div>
  );
};

export default AccessibleInput;
