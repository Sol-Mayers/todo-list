import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    CHANGE_TODO,
    SHOW_CHANGING_FIELD,
} from "./todos-const";

export const addTodo = (title) => ({
    type: ADD_TODO,
    title,
});
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id,
});
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});
export const changeTodo = (id, title) => ({
    type: CHANGE_TODO,
    title,
    id,
});
export const showChangingField = (id) => ({
    type: SHOW_CHANGING_FIELD,
    id,
});
