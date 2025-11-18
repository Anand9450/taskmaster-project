import axios from 'axios';

// This points to your running Spring Boot backend
const API_URL = 'https://taskmaster-backend-fgqk.onrender.com';

// Get all tasks
export const getTasks = () => axios.get(API_URL);

// Create a new task
export const createTask = (task) => axios.post(API_URL, task);

// Update a task (mark as completed)
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);

// Delete a task
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);