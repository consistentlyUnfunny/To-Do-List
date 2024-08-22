import React, {useState} from 'react';

function TaskForm({ addTask }) {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleAddTask = () => {
        if (inputValue.trim()){
            addTask(inputValue);
            setInputValue('');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') { // check if enter key is pressed
            handleAddTask();
        }
    }

    return (
        <div>
            <input 
            className = "input-form" 
            type = "text" 
            placeholder = "Enter task..."
            maxlength = "50" 
            value = {inputValue}
            onChange = {handleChange}
            onKeyDown = {handleKeyDown}/>
            {inputValue&& (
                <span className="material-symbols-outlined" onClick={handleAddTask}>add</span>
                )} {/* conditional rendering, if input value not blank, render button */}
        </div>
    );
}

export default TaskForm;