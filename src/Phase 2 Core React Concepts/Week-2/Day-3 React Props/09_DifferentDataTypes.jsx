import React from 'react';

const Profile = ({ username, age, isOnline }) => {
  return (
    <div>
      <h1>User: {username}</h1>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default Profile;