import React, { useState } from "react";

const EarlyReturnNull = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontFamily: "sans-serif",
      }}
    >
      <h3>Method 4: Early Return Null</h3>
      <p>This widget is active and tracking live metrics.</p>

      <button onClick={() => setIsVisible(false)}>
        Hide Component Completely
      </button>
    </div>
  );
};

export default EarlyReturnNull;
