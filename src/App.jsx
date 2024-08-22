import React, {useState, useEffect} from 'react';
import DateDisplay from './DateDisplay';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')); 
    // need to read from the local storage instead of initializing an empty array
    // else local storage will be overwritten by empty array
  });

  // load tasks from localStorage (browser storage) when upon startup
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks'); // find item using key in localStorage
    if (savedTasks){
      setTasks(JSON.parse(savedTasks)); // convert string to array
    }
  }, []); // no dependencies, only run once

  // save tasks to localStorage when tasks are added or deleted
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <> 
      <DateDisplay/>
      <TaskForm addTask = {addTask}/>
      <TaskList task = {tasks} deleteTask = {deleteTask}/>
    </>
  )
}

export default App
