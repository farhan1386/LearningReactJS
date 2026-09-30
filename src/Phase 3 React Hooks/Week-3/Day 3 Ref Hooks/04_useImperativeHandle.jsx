import { forwardRef, useRef, useImperativeHandle } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const localInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    clearAll: () => {
      localInputRef.current.value = '';
    }
  }));

  return <input ref={localInputRef} type="text" placeholder="Type here..." />;
});

const ParentComponent = () => {
  const customInputRef = useRef(null);

  return (
    <div>
      <CustomInput ref={customInputRef} />
      <button onClick={() => customInputRef.current.clearAll()}>Wipe Clean</button>
    </div>
  );
};

export default ParentComponent;
