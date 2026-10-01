import React from 'react';

// Destructured individual parameters directly in the signature
const UserProfile = ({ name, age, city }) => {
  return (
    <div style={{ padding: '15px', border: '1px solid #3498db', borderRadius: '6px', margin: '10px 0' }}>
      <h3>User Profile</h3>
      <p>Name: <strong>{name}</strong></p>
      <p>Age: <strong>{age}</strong></p>
      <p>Location: <strong>{city}</strong></p>
    </div>
  );
};

export default UserProfile;
