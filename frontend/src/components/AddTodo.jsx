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
        console.log('Wysyłam zadanie:', todoData); 
        const addedTodo = await addTodo(todoData); 
        setNewTodo('');
        console.log('Dodane zadanie:', addedTodo); 
      } catch (error) {
        console.error('Nie udało się dodać zadania', error); 
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Dodaj nowe zadanie"
      />
      <button onClick={handleAdd}>Dodaj</button>
    </div>
  );
};

export default AddTodo;
