import React, { useState } from "react";

const CheckBoxList = () => {
  const options = [
    { id: 1, label: 'CheckBox A' },
    { id: 2, label: 'CheckBox B' },
    { id: 3, label: 'CheckBox C' },
  ];

  const [checkedValue, setCheckedValue] = useState("");
  
  const handleChange = (event) => {
    if (event.target.checked) {
      setCheckedValue(event.target.value);
    } else {
      setCheckedValue("");
    }
  };

  return (
    <>
      <form>
        {options.map((option) => (
          <div key={option.id}>
            <input
              type="checkbox"
              id={`checkbox-${option.id}`}
              name="standard-checkbox-group"
              value={option.label}
              checked={checkedValue === option.label}
              onChange={handleChange}
            />
            <label htmlFor={`checkbox-${option.id}`}>{option.label}</label>
          </div>
        ))}
      </form>

      {checkedValue && (
        <p>
          You selected: <strong>{checkedValue}</strong>
        </p>
      )}
    </>
  );
};

export default CheckBoxList;
