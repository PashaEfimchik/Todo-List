import { Todo, ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from "./types";

export const addTodo = (todo: Todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
});

export const editTodo = (todo: Todo) => ({
    type: EDIT_TODO,
    payload: todo
});

export const deleteTodo = (id: number) => ({
    type: DELETE_TODO,
    payload: id
});

export type { Todo };