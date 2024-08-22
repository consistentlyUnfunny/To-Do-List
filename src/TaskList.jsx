function TaskList({task, deleteTask}){
    return (
        <div className = 'task-container'>
            <ul>
                {task.map((task, index) => {
                    return <>
                        <li className = "task-item" key = {index}>
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