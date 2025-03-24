const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes'); 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running! API is available at /api/todos');
});

app.use('/api/todos', todoRoutes);

mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error', err);
  });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
