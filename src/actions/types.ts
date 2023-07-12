export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: Todo;
}

export interface ToggleTodoAction {
    type: typeof TOGGLE_TODO;
    payload: number;
}

export interface EditTodoAction {
    type: typeof EDIT_TODO;
    payload: Todo;
}

export interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: number;
}


export type TodoActionTypes = AddTodoAction | ToggleTodoAction | EditTodoAction | DeleteTodoAction;