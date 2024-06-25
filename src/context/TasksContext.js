import React, { useContext, useReducer } from 'react';
import TodoReducer from '../reducers/ToDoReducers';
import { openForm, newTask, deleteTask, toggleTaskDone } from '../actions/TodoActions';

const AppContext = React.createContext();

const initialState = {
    tasks: [
        { id: 1, title: "Test task 1", description: 'Test task description', isDone: false },
        { id: 2, title: "Test task 2", description: 'Test task description', isDone: false },
        { id: 3, title: "Test task 3", description: 'Test task description', isDone: false }
    ],
    isOpen: false
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const handleForm = (formStatus) => {
        dispatch(openForm(formStatus));
    };

    const addTask = (taskData) => {
        dispatch(newTask(taskData));
    };

    const deleteTaskById = (id) => {
        dispatch(deleteTask(id));
    };

    const toggleTaskDoneById = (id) => {
        dispatch(toggleTaskDone(id));
    };

    return (
        <AppContext.Provider value={{ ...state, handleForm, addTask, deleteTask: deleteTaskById, toggleTaskDone: toggleTaskDoneById }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext };
