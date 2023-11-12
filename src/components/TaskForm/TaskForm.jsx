import React from 'react'
import { useState } from 'react'

const TaskForm = () => {
    const [taskName, setTaskName] = useState('');

    const handleChange = (e) => {
        setTaskName(e.target.value);
    };
    return (
        <div>
            <form>
                <input value={taskName} onClick={handleChange} type="text" placeholder="Write a task" />
                <button>Add</button>
            </form>

        </div>
    )
}

export default TaskForm