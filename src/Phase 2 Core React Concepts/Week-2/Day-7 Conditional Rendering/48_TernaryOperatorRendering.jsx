import React, { useState } from 'react';

const ViewToggler = () => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <button onClick={() => setIsGrid(!isGrid)}>Toggle View Mode</button>
      <div style={{ marginTop: '15px' }}>
        {isGrid ? <p>Displaying grid layout grid</p> : <p>Displaying row list layout</p>}
      </div>
    </div>
  );
};

export default ViewToggler;