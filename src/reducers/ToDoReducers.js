const TodoReducer = (state, action) => {
    switch (action.type) {
        case "Add task":
            return {
                ...state,
                tasks: [...state.tasks, { ...action.payload, isDone: false }]
            };
        case "Remove task":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case "Toggle task done":
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, isDone: !task.isDone } : task
                )
            };
        case "Open form":
            return {
                ...state,
                isOpen: action.payload
            };
        default:
            return state;
    }
};

export default TodoReducer;
