const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

// Poprawiamy ścieżki, by odpowiadały metodom w TodoController
router.get('/', TodoController.getAllTodos);  // Poprawiona ścieżka, która wysyła wszystkie zadania
router.post('/', TodoController.createTodo); // Poprawiona ścieżka do tworzenia zadania
router.delete('/:id', TodoController.deleteTodo); // Poprawiona ścieżka do usuwania zadania

module.exports = router;
