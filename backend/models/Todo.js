const mongoose = require('mongoose');

// Definiowanie schematu dla Todo
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  completed: { type: Boolean, default: false },
});

// Tworzymy model Todo z tego schematu
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
