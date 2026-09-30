import React from "react";

const ReactJSXAttributes = () => {
  // 1. Defining variables to use as dynamic attribute values
  const imageUrl = "https://placeholder.com";
  const imageAlt = "Placeholder image demonstration";

  // [BOOLEAN ATTRIBUTE DATA] Explicit boolean configuration
  const isDisabled = false;
  const isRequiredField = true;

  // 2. [THE STYLE ATTRIBUTE DATA] Naming properties in camelCase
  const cardStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    maxWidth: "300px",
  };

  // [camelCase EVENT ATTRIBUTE FUNCTION]
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    // [CLASS ATTRIBUTE] 'className' is used instead of 'class'
    // [THE STYLE ATTRIBUTE] 'style' accepts a JavaScript object variable
    <div className="card-container" style={cardStyle}>
      {/* String literal attribute */}
      <h2 title="Hover title text">JSX Attributes</h2>

      {/* [EXPRESSION ATTRIBUTES] JavaScript variables embedded inside curly braces {} */}
      <img src={imageUrl} alt={imageAlt} />

      {/* Form elements use 'htmlFor' instead of 'for' to avoid JS conflicts */}
      <label htmlFor="username-input">Username:</label>

      {/* [BOOLEAN ATTRIBUTES] Applied explicitly via curly braces */}
      <input
        id="username-input"
        type="text"
        placeholder="Enter text..."
        required={isRequiredField}
      />

      {/* [BOOLEAN & camelCase EVENT ATTRIBUTES] 'disabled' flag and 'onClick' event handler */}
      <button disabled={isDisabled} onClick={handleButtonClick}>
        Click Me
      </button>
    </div>
  );
};

export default ReactJSXAttributes;
