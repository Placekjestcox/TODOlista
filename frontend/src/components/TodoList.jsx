import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleEditTodo, handleToggleComplete, handleDeleteTodo }) => (
  <div className="Todolist">
    {todos.map((todo) => (
      <TodoItem 
        key={todo._id} 
        todo={todo} 
        handleEditTodo={handleEditTodo} 
        handleToggleComplete={handleToggleComplete} 
        handleDeleteTodo={handleDeleteTodo} 
      />
    ))}
  </div>
);

export default TodoList;
