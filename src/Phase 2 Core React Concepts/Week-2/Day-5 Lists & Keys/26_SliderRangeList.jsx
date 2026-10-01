import React, { useState } from "react";

const SliderRange = () => {
  const [rangeValue, setRangeValue] = useState(50);

  const handleChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <>
      <label htmlFor="standard-range">Adjust Range Value:</label>
      
      <input
        type="range"
        id="standard-range"
        min="0"
        max="100"
        step="1"
        value={rangeValue}
        onChange={handleChange}
      />

      <p>
        Current Value: <strong>{rangeValue}</strong>
      </p>
    </>
  );
};

export default SliderRange;
