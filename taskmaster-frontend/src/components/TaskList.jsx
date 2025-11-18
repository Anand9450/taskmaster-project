/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../services/api';

function TaskList({ refreshTrigger }) {
    const [tasks, setTasks] = useState([]);

    // 1. Fetch tasks from Backend when the component loads (or when refreshTrigger changes)
    useEffect(() => {
        fetchTasks();
    }, [refreshTrigger]);

    const fetchTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    // 2. Handle Delete
    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks(); // Refresh list after delete
    };

    // 3. Handle Toggle Complete
    const handleToggle = async (task) => {
        await updateTask(task.id, { ...task, completed: !task.completed });
        fetchTasks(); // Refresh list after update
    };

    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {tasks.map((task) => (
                <li key={task.id} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    padding: '10px', 
                    borderBottom: '1px solid #eee',
                    textDecoration: task.completed ? 'line-through' : 'none'
                }}>
                    <span 
                        onClick={() => handleToggle(task)} 
                        style={{ cursor: 'pointer', flexGrow: 1 }}
                    >
                        {task.title}
                    </span>
                    <button 
                        onClick={() => handleDelete(task.id)}
                        style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;