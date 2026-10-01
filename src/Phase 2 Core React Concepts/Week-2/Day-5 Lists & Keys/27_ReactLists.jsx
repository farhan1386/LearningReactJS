import React from 'react';

const StanderList = () => {
  const items = [
    { id: 1, name: 'Standard Item A', description: 'First standard description' },
    { id: 2, name: 'Standard Item B', description: 'Second standard description' },
    { id: 3, name: 'Standard Item C', description: 'Third standard description' },
  ];

  return (
    <>
      <h2>My Standard List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <strong>{item.name}</strong> - {item.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default StanderList;
