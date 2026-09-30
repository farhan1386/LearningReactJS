import { useState, useEffect } from 'react';

const DocumentTitleUpdater = () => {
  const [name, setName] = useState('Guest');

  useEffect(() => {
    document.title = `Hello, ${name}`;
  }, [name]);

  return <input value={name} onChange={e => setName(e.target.value)} />;
};

export default DocumentTitleUpdater;
