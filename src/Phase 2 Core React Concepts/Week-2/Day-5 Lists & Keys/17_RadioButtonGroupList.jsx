import React, { useState } from "react";

const RadioButtonList = () => {
  const options = [
    { id: 1, label: 'Radio Option A' },
    { id: 2, label: 'Radio Option B' },
    { id: 3, label: 'Radio Option C' },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <form>
        {options.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              id={`radio-${option.id}`}
              name="standard-radio-group"
              value={option.label}
              checked={selectedValue === option.label}
              onChange={handleChange}
            />
            <label htmlFor={`radio-${option.id}`}>{option.label}</label>
          </div>
        ))}
      </form>

      {selectedValue && (
        <p>
          You selected: <strong>{selectedValue}</strong>
        </p>
      )}
    </>
  );
};

export default RadioButtonList;
