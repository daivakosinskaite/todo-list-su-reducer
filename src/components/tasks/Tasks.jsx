import React, { useState } from 'react';
import Task from '../task/Task';
import AddTask from '../addTask/AddTask';
import { useGlobalContext } from '../../context/TasksContext';

const Tasks = () => {
    const { tasks, isOpen, handleForm, deleteTask, toggleTaskDone } = useGlobalContext();
    const [showCompleted, setShowCompleted] = useState(false);

    const handleToggleCompleted = () => {
        setShowCompleted(!showCompleted);
    };

    const filteredTasks = showCompleted
        ? tasks.filter(task => task.isDone)
        : tasks;

    return (
        <div className="container">
            <h2 className="m-5 text-center">Užduočių sąrašas</h2>
            <div className="text-center m-5">
                <button className="btn btn-secondary" onClick={handleToggleCompleted}>
                    {showCompleted ? "Rodyti visas" : "Rodyti atliktas"}
                </button>
                {!isOpen && (
                    <button className="btn btn-primary ml-2" onClick={() => handleForm(true)}>
                        Pridėti užduotį
                    </button>
                )}
            </div>
            {isOpen ? (
                <AddTask />
            ) : (
                <ul className="list-group">
                    {filteredTasks.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            deleteTask={deleteTask}
                            toggleTaskDone={toggleTaskDone}
                            isDone={task.isDone}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Tasks;
