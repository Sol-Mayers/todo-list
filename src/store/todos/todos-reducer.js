import {
    TOGGLE_TODO,
    ADD_TODO,
    REMOVE_TODO,
    CHANGE_TODO,
    SHOW_CHANGING_FIELD,
} from "./todos-const";

export const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.title,
                    completed: false,
                    changing: false,
                },
            ];
        }
        case REMOVE_TODO: {
            return state.filter((todo) => todo.id !== action.id);
        }
        case TOGGLE_TODO: {
            return state.map((todo) =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        }
        case CHANGE_TODO: {
            return state.map((todo) =>
                todo.id === action.id
                    ? { ...todo, title: action.title, changing: false }
                    : todo
            );
        }
        case SHOW_CHANGING_FIELD: {
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, changing: true } : todo
            );
        }
        default: {
            return state;
        }
    }
};
