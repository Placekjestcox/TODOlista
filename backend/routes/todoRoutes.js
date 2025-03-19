const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

router.get('/', TodoController.getAllTodos);  
router.post('/', TodoController.createTodo); 
router.delete('/:id', TodoController.deleteTodo); 
module.exports = router;
