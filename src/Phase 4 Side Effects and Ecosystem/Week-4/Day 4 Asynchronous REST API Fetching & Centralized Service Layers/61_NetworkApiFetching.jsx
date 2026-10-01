import React, { useState, useEffect } from 'react';
import { todoService } from './60_todoService';

const NetworkApiFetching = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    todoService.fetchTodos()
      .then((data) => setTodos(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' }}>
      <h3>Todo Registry Pipeline</h3>
      {loading ? <p>Loading registry stream...</p> : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NetworkApiFetching;
