import React, { useState } from 'react';

const SelectList = () => {
  const options = [
    { id: 1, label: 'Select Option A' },
    { id: 2, label: 'Select Option B' },
    { id: 3, label: 'Select Option C' },
  ];

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const selectedOption = options.find(option => String(option.id) === selectedValue);

  return (
    <div className="select-container">
      <label htmlFor="standard-select" className="select-label">
        Choose a standard option:
      </label>
      
      <div className="select-wrapper">
        <select 
          id="standard-select" 
          className="custom-select"
          value={selectedValue} 
          onChange={handleChange}
        >
          <option value="" disabled>-- Select an option --</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {selectedOption && (
        <p className="select-output">
          You selected: <strong>{selectedOption.label}</strong>
        </p>
      )}
    </div>
  );
};

export default SelectList;
