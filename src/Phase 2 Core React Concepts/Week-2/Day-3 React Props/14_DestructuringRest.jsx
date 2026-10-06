import React from 'react';

const CustomInput = ({ label, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
};

export default CustomInput;