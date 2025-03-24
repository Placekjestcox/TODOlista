import React from 'react';
import '../App.css';

const TodoItem = ({ todo, handleEditTodo, handleToggleComplete, handleDeleteTodo }) => {
  return (
    <div key={todo._id} className="todoItem">
      <div className={`description ${todo.completed ? 'completed' : ''}`}>
        {todo.title}
      </div>
      <div className="todoButton">
        <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
      </div>
      <div className="todoButtonsecond">
        <button onClick={() => handleEditTodo(todo._id)}>Edit</button>
      </div>
      <div className="todoButton">
        <button onClick={() => handleToggleComplete(todo._id)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        
      </div>
      
      
    </div>
  );
};

export default TodoItem;
