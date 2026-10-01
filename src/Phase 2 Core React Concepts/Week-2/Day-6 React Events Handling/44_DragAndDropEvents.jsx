import React, { useState } from 'react';

const DragDropZone = () => {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsOver(false);
    alert('File or element dropped successfully!');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <div
        onDragOver={handleDragOver}
        onDragEnter={() => setIsOver(true)}
        onDragLeave={() => setIsOver(false)}
        onDrop={handleDrop}
        style={{
          width: '300px',
          height: '150px',
          border: isOver ? '2px dashed #2ecc71' : '2px dashed #ccc',
          background: isOver ? '#e8f8f5' : '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Drop Files Here
      </div>
    </div>
  );
};

export default DragDropZone;