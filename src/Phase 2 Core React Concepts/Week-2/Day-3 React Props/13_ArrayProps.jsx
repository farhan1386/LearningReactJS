import React from 'react';

const TaskItemsList = ({ tasksList }) => {
  return (
    <div>
      <h4>Pending Items Tracker</h4>
      <ul>
        {tasksList.map((task, index) => (
          // Using unique iteration identifiers for optimal rendering execution
          <li key={index} style={{ padding: '4px 0' }}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskItemsList;