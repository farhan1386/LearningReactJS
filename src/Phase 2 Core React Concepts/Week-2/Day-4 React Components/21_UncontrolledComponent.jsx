import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${inputRef.current.value}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          ref={inputRef} 
          placeholder="Type something..." 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledInput;