import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const CustomMediaMock = forwardRef((props, ref) => {
  const hiddenInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    triggerReset: () => {
      hiddenInputRef.current.value = '';
    }
  }));

  return <input ref={hiddenInputRef} type="text" defaultValue="Initial Secure Token" />;
});

CustomMediaMock.displayName = 'CustomMediaMock';

const ImperativeHandleControl = () => {
  const componentInstanceRef = useRef(null);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Scoped Child Imperative Handle</h2>
      <CustomMediaMock ref={componentInstanceRef} />
      <button onClick={() => componentInstanceRef.current.triggerReset()}>Clear Target Remotely</button>
    </div>
  );
};

export default ImperativeHandleControl;