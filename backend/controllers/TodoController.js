const Todo = require('../models/Todo'); // Załaduj model Todo

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos.length) {
      return res.status(404).json({ message: 'Brak zadań w bazie danych' });
    }
    res.json(todos);
  } catch (err) {
    console.error('Błąd pobierania zadań', err);
    res.status(500).json({ message: 'Błąd pobierania zadań' });
  }
};

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Tytuł zadania jest wymagany' });
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
    console.error('Błąd tworzenia zadania', err); 
    res.status(500).json({ message: 'Błąd tworzenia zadania' });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Id zadania jest wymagane' });
  }

  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ message: 'Nie znaleziono zadania' });
    }
    res.status(200).json({ message: 'Zadanie usunięte' });
  } catch (err) {
    console.error('Błąd usuwania zadania', err); 
    res.status(500).json({ message: 'Błąd usuwania zadania' });
  }
};
