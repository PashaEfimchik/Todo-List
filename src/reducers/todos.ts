import { Todo, TodoActionTypes, ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO} from "../actions/types";

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: []
};

const todosReducer = (state = initialState, action: TodoActionTypes): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            };
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                })
            };
        case EDIT_TODO:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, content: action.payload.content };
                    }
                    return todo;
                })
            };
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
}

export default todosReducer;