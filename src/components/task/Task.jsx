import React from 'react';

const Task = ({ id, title, description, deleteTask, toggleTaskDone, isDone }) => {
    const taskStyle = isDone ? { textDecoration: 'line-through' } : {};

    return (
        <li className="list-group-item" style={taskStyle}>
            <strong>Pavadinimas:</strong> {title}
            <br />
            <strong>Aprašymas:</strong> {description}
            <br />
            <button className="btn btn-danger" onClick={() => deleteTask(id)}>Šalinti</button>
            <button className="btn btn-success" onClick={() => toggleTaskDone(id)}>
                {isDone ? "Pažymėti kaip neatliktą" : "Žymėti kaip atliktą"}
            </button>
        </li>
    );
};

export default Task;
