import React from 'react';
import './App.css';
import { useTodos } from './hooks/useTodos';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';

function App() {
  const {
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
  } = useTodos();

  return (
    <div id="root">
      <div className="todoContainer">
        <div className="todoHeader">
          <h1>Todo List</h1>
        </div>
        <div className="todoMain">
          <div className="todoInput">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}  
              placeholder="Add new todo"
            />
            <button id="Add" onClick={handleAddTodo} disabled={!newTodo.trim()}>
              Add
            </button>
            <button id="ClearCompleted" onClick={handleClearCompleted} disabled={todos.length === 0}>
              Clear Completed
            </button>
          </div>
          <TodoList 
            todos={todos} 
            handleEditTodo={handleEditTodo} 
            handleToggleComplete={handleToggleComplete} 
            handleDeleteTodo={handleDeleteTodo} 
          />
        </div>
      </div>

      {editingTodo && (
        <EditTodo
          editedText={editedText}
          setEditedText={setEditedText}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
        />
      )}
    </div>
  );
}

export default App;
