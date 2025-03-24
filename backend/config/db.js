const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todoDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
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
    console.log('User added!');
  } catch (error) {
    console.error('Error while adding user:', error);
  }
};

const start = async () => {
  await connectDB();
  await addUser();
  mongoose.connection.close();
};

start();
