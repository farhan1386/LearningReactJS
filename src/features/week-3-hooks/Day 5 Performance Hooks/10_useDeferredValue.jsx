import { useState, useDeferredValue } from 'react';

const SlowList = ({ text }) => <p>Rendering calculations for: {text}</p>;

const DeferredList = () => {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </div>
  );
};

export default DeferredList;
