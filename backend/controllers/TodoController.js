const Todo = require('../models/Todo'); 

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos.length) {
      return res.status(404).json({ message: 'No tasks found in the database' });
    }
    res.json(todos);
  } catch (err) {
    console.error('Error fetching tasks', err);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Task title is required' });
  }

  try {
    const newTodo = new Todo({
      title,
      description,
      completed: false,
    });

    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    console.error('Error creating task', err); 
    res.status(500).json({ message: 'Error creating task' });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Task ID is required' });
  }

  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    console.error('Error deleting task', err); 
    res.status(500).json({ message: 'Error deleting task' });
  }
};