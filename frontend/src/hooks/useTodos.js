import { useEffect, useState } from 'react';
import { fetchTodos, addTodo, deleteTodo } from '../api/api';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState('');
  useEffect(() => {
    const getTodos = async () => {
      try {
        const fetchedTodos = await fetchTodos();
        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Error while fetching tasks:", error);
      }
    };

    getTodos();
  }, []);

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      const todoData = {
        title: newTodo,
        description: '',
      };

      try {
        const addedTodo = await addTodo(todoData);
        setTodos([...todos, addedTodo]);
        setNewTodo('');
      } catch (error) {
        console.error('Failed to add task', error);
      }
    }
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEditTodo = (id) => {
    const todo = todos.find(todo => todo._id === id);
    setEditingTodo(todo);
    setEditedText(todo.title);
  };

  const handleSaveEdit = () => {
    setTodos(todos.map(todo =>
      todo._id === editingTodo._id ? { ...todo, title: editedText } : todo
    ));
    setEditingTodo(null);
    setEditedText('');
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
    setEditedText('');
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete task', error);
    }
  };

  return {
    todos,
    newTodo,
    setNewTodo,
    editingTodo,
    editedText,
    setEditedText,
    handleAddTodo,
    handleClearCompleted,
    handleToggleComplete,
    handleEditTodo,
    handleSaveEdit,
    handleCancelEdit,
    handleDeleteTodo, 
  };
};
