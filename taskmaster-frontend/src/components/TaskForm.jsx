import { useState } from 'react';
import { createTask } from '../services/api';

// eslint-disable-next-line react/prop-types
function TaskForm({ onTaskAdded }) {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop page reload
        if (!title) return;

        // Send data to Backend
        await createTask({ title, completed: false });
        
        setTitle('');
        onTaskAdded(); // Refresh the list
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input 
                type="text" 
                placeholder="Add a new task..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ padding: '10px', width: '70%' }}
            />
            <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
                Add
            </button>
        </form>
    );
}

export default TaskForm;