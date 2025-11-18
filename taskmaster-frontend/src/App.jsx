import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  // This state is just a signal. When it changes, the list re-fetches data.
  const [refresh, setRefresh] = useState(false);

  const handleTaskAdded = () => {
    setRefresh(!refresh); // Toggle true/false to trigger a reload
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>TaskMaster ✅</h1>
      
      {/* The Form to Add Tasks */}
      <TaskForm onTaskAdded={handleTaskAdded} />
      
      {/* The List of Tasks */}
      <TaskList refreshTrigger={refresh} />
    </div>
  );
}

export default App;