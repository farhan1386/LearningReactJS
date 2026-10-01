import React from 'react';

const UserWithDestructuring = ({ name, email, role }) => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '10px', border: '1px solid #ddd', width: '250px' }}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <UserWithDestructuring 
        name="Farhan Ahmed" 
        email="farhan@example.com" 
        role="Lead Software Development Engineer" 
      />
    </div>
  );
};

export default App;