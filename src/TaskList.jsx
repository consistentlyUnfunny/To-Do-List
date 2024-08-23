import React, { useState } from 'react';

function TaskList({task, deleteTask}){
    const [checkedState, setCheckedState] = useState(
        new Array(task.length).fill(false)
      );
    
      const handleCheckboxChange = (index) => {
        const updatedCheckedState = checkedState.map((item, i) =>
          i === index ? !item : item
        );
        setCheckedState(updatedCheckedState);
    
        // Delay deletion by 0.5 seconds
        setTimeout(() => {
          deleteTask(index);
        }, 500);
      };
    return (
        <div className = 'task-container'>
            <ul>
                {task.map((task, index) => {
                    return <>
                        <li className = "task-item" key = {index}>
                            <label className="custom-checkbox">
                                <input type="checkbox" 
                                className="task-checkbox" 
                                onChange = {() => handleCheckboxChange(index)}/>
                                <span className="checkmark"></span>
                            </label>
                            {task}
                            <span className="material-symbols-outlined" 
                            id = "close-button"
                            onClick = {() => deleteTask(index)}>
                                close
                            </span>
                        </li>
                        
                    </>
                })}
            </ul>
        </div>
    );
}

export default TaskList;