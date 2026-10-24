import React, { forwardRef, useRef } from 'react';

const CustomInputField = forwardRef((props, ref) => {
  return <input ref={ref} type="text" style={{ padding: '8px', border: '2px solid #333' }} />;
});

CustomInputField.displayName = 'CustomInputField';

const ForwardRefInputBlueprint = () => {
  const targetInputRef = useRef(null);

  const focusInputNode = () => {
    targetInputRef.current.focus();
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Explicit Element Focus Routing</h2>
      <CustomInputField ref={targetInputRef} />
      <button onClick={focusInputNode} style={{ marginLeft: '10px' }}>Trigger Ref Focus</button>
    </div>
  );
};

export default ForwardRefInputBlueprint;