const mongoose = require('mongoose');

// Połączenie z MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todoDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Połączono z MongoDB');
  } catch (error) {
    console.error('Błąd połączenia z MongoDB:', error);
    process.exit(1); // Zatrzymaj aplikację w przypadku błędu
  }
};

// Definicja schematu użytkownika
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Tworzenie modelu
const User = mongoose.model('User', userSchema);

// Funkcja do dodawania użytkownika
const addUser = async () => {
  try {
    const user = new User({ name: 'Jan', age: 30 });
    await user.save();
    console.log('Dodano użytkownika!');
  } catch (error) {
    console.error('Błąd podczas dodawania użytkownika:', error);
  }
};

// Uruchomienie funkcji
const start = async () => {
  await connectDB();
  await addUser();
  mongoose.connection.close(); // Zamknięcie połączenia po operacji
};

start();
