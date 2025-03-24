import React, { useState } from 'react';
import { addTodo } from '../api/api'; 

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const handleAdd = async () => {
    if (newTodo.trim()) {
      const todoData = {
        title: newTodo,
        description: '',
      };

      try {
        console.log('Sending task:', todoData); 
        const addedTodo = await addTodo(todoData); 
        setNewTodo('');
        console.log('Added task:', addedTodo); 
      } catch (error) {
        console.error('Failed to add task', error); 
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
