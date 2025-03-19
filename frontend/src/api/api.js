import axios from 'axios';
const apiUrl = 'http://localhost:5000/api/todos';  

export const addTodo = async (todoData) => {
  try {
    const response = await axios.post(apiUrl, todoData);
    return response.data;
  } catch (error) {
    console.error('Błąd podczas dodawania zadania:', error.response ? error.response.data.message : error.message);
    throw error;
  }
};

export const fetchTodos = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Błąd podczas pobierania zadań:", error.response ? error.response.data.message : error.message);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.error('Błąd podczas usuwania zadania:', error.response ? error.response.data.message : error.message);
    throw error;
  }
};
