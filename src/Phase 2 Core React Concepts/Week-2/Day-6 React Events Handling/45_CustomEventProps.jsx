import React from 'react';

const CustomButton = ({ onActionTrigger, label }) => {
  return (
    <button onClick={() => onActionTrigger(label)} style={{ padding: '8px 16px' }}>
      {label}
    </button>
  );
};

const CustomEventDashboard = () => {
  const handleChildAction = (buttonName) => {
    alert(`Custom action received from: ${buttonName}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Parent Interface</h2>
      <CustomButton onActionTrigger={handleChildAction} label="Submit Form Blueprint" />
    </div>
  );
};

export default CustomEventDashboard;