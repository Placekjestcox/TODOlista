const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todoDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Połączono z MongoDB');
  } catch (error) {
    console.error('Błąd połączenia z MongoDB:', error);
    process.exit(1); 
  }
};

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

const addUser = async () => {
  try {
    const user = new User({ name: 'Jan', age: 30 });
    await user.save();
    console.log('Dodano użytkownika!');
  } catch (error) {
    console.error('Błąd podczas dodawania użytkownika:', error);
  }
};

const start = async () => {
  await connectDB();
  await addUser();
  mongoose.connection.close();
};

start();
