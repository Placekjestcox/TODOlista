const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes'); // Ścieżka do pliku routes/todoRoutes.js

app.use(cors());
app.use(express.json());

// Ścieżka domyślna GET / - zwróci komunikat, że serwer działa
app.get('/', (req, res) => {
  res.send('Serwer działa! API jest dostępne pod /api/todos');
});

// Ścieżki API
app.use('/api/todos', todoRoutes);

// Połączenie z MongoDB
mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Połączono z MongoDB');
  })
  .catch((err) => {
    console.error('Błąd połączenia z MongoDB', err);
  });

// Uruchomienie serwera na porcie 5000
app.listen(5000, () => {
  console.log('Serwer działa na porcie 5000');
});
