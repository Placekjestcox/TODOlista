import React from 'react';
import '../App.css'; // Importujemy styl CSS

const EditTodo = ({ editedText, setEditedText, handleSaveEdit, handleCancelEdit }) => {
  return (
    <div className="edit-dialog">
      <div className="edit-content">
        <h2>Edit Todo</h2>
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
        <div className="edit-buttons">
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
