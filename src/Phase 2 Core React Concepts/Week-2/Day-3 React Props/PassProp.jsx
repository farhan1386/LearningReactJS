import React from 'react';

const PassProp = (props) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
      <p>Received Value: <strong>{props.message}</strong></p>
    </div>
  );
};

export default PassProp;
