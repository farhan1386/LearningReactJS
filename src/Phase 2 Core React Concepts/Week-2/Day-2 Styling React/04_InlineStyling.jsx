import React from 'react';

const InlineStyling = () => {
  const bannerStyle = {
    backgroundColor: '#3498db',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const isError = false;
  const statusMessageStyle = {
    color: isError ? '#e74c3c' : '#2ecc71',
    fontWeight: 'bold',
    marginTop: '15px'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        Inline Styling in JSX
      </h2>
      <div style={bannerStyle}>
        <h3>Welcome to the Styling Guide</h3>
        <p>This box is styled using a predefined style object variable.</p>
      </div>
      <p style={statusMessageStyle}>
        Status: {isError ? 'System Error' : 'All systems operational'}
      </p>
      <div style={{ marginTop: 25, opacity: 0.8 }}>
        <small>Footnote styled with automatic pixel sizing.</small>
      </div>
    </div>
  );
};

export default InlineStyling;