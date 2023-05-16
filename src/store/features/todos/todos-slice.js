import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "@@todos",
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title) => ({
                payload: {
                    id: nanoid(),
                    title,
                    completed: false,
                    changing: false,
                },
            }),
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            return state.filter((todo) => todo.id !== id);
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            return state.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
        },
        changeTodo: (state, action) => {
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? {
                          ...todo,
                          title: action.payload.title,
                          changing: false,
                      }
                    : todo
            );
        },
        showChangingField: (state, action) => {
            const id = action.payload;
            return state.map((todo) =>
                todo.id === id ? { ...todo, changing: true } : todo
            );
        },
    },
});

export const {
    addTodo,
    changeTodo,
    toggleTodo,
    removeTodo,
    showChangingField,
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case "all": {
            return state.todos;
        }
        case "active": {
            return state.todos.filter((todo) => !todo.completed);
        }
        case "completed": {
            return state.todos.filter((todo) => todo.completed);
        }
        default: {
            return state.todos;
        }
    }
};

export const selectAllTodos = (state) => state.todos;

export const selectActiveTodos = (state) =>
    state.todos.filter((todo) => todo.completed === false);
