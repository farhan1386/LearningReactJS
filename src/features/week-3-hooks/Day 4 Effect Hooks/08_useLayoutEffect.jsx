import { useState, useLayoutEffect, useRef } from 'react';

const TooltipTooltip = () => {
  const buttonRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (buttonRef.current) {
      setWidth(buttonRef.current.getBoundingClientRect().width);
    }
  }, []);

  return <button ref={buttonRef}>Button width is: {width}px</button>;
};

export default TooltipTooltip;
