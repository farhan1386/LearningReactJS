import React, { useState } from 'react';

const SimpleForm = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with: ${value}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          placeholder="Enter text..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;