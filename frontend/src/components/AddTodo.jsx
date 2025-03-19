import React, { useState } from 'react';
import { addTodo } from '../api/api'; // Importujemy funkcję do dodawania zadania

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = async () => {
    if (newTodo.trim()) {
      const todoData = {
        title: newTodo,
        description: '',
      };

      try {
        console.log('Wysyłam zadanie:', todoData); // Sprawdzamy, czy dane są wysyłane
        const addedTodo = await addTodo(todoData); // Wysyłamy zapytanie do backendu
        setNewTodo('');
        console.log('Dodane zadanie:', addedTodo); // Sprawdzamy odpowiedź
      } catch (error) {
        console.error('Nie udało się dodać zadania', error); // Logujemy błąd
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
