import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import { RootState } from '../reducers';
import { Todo, addTodo, editTodo, deleteTodo, toggleTodo } from '../actions/todos';
import Input from '@mui/joy/Input';
import { Button } from "@mui/joy";
import AddTaskIcon from '@mui/icons-material/AddTask'
import EditNoteIcon from '@mui/icons-material/EditNote';
import Checkbox from '@mui/joy/Checkbox';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import './style.css';
import Typography from "@mui/material/Typography";


const TodoList: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [editedTodo, setEditedTodo] = useState(false);
    const [editedTodoItem, setEditedTodoItem] = useState<Todo | null>(null);
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();

    const handleAddTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            content: text,
            completed: false
        };
        dispatch(addTodo(newTodo));
    };

    const handleEditTodo = (editedTodo: Todo) => {
        dispatch(editTodo(editedTodo));
        setInputValue(editedTodo.content);
        setEditedTodo(true);
        setEditedTodoItem(editedTodo);
    };

    const handleDeleteTodo = (id: number) => {
        dispatch(deleteTodo(id));
        setEditedTodo(false);
        setInputValue('');
    };

    const handleToggleTodo = (id: number) => {
        dispatch(toggleTodo(id));
    };

    return (
        <div>
            <Typography className="todo__title" textAlign='center' variant='h4' component='h4' mt={3} mb={5}>
                React + TypeScript + Redux + MUI = ToDo
            </Typography>
                {todos.map((todo: Todo) => (
                    <div key={todo.id} className="todo-item__container">
                        <Grid container spacing={2} justifyContent='center' alignItems='center'>
                            <Grid item xs={12} sm={6} md={8.7}>
                                <Checkbox checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} label={todo.completed ? <s>{todo.content}</s> : todo.content} color="success" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3.3}>
                                <Button className="todo-item__button-delete" onClick={() => handleDeleteTodo(todo.id)} >Delete</Button>
                                <Button className="todo-item__button-edit" onClick={() => handleEditTodo(
                                    {
                                        ...todo, content: todo.content /*prompt('Edit todo', todo.content)*/ || '' })
                                } >
                                    Edit
                                </Button>
                            </Grid>
                        </Grid>
                    </div>

                ))}

            <Container maxWidth="sm" className="todo-item__container-add">
                <Grid container spacing={1} justifyContent='center' >
                    <Input
                        className="todo-item__input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        startDecorator={editedTodo ? <EditNoteIcon /> : <AddTaskIcon />}
                        endDecorator={
                            <Button
                                onClick={() => {
                                    if (inputValue) {
                                        if (editedTodo) {
                                            dispatch(editTodo({
                                                ...editedTodoItem as Todo,
                                                content: inputValue
                                            }));
                                            setInputValue('');
                                            setEditedTodo(false);
                                            setEditedTodoItem(null);
                                        } else {
                                            handleAddTodo(inputValue);
                                            setInputValue('');
                                        }
                                    }
                                }
                                }
                                className="todo-item__button-add"
                            >
                                {editedTodo ? 'Edit' : 'Add'}
                            </Button>
                        }
                        sx={{
                            "--Input-radius": "24px",
                            "--Input-gap": "15px",
                            "--Input-placeholderOpacity": 0.5,
                            "--Input-focusedThickness": "2px",
                            "--Input-minHeight": "40px",
                            "--Input-decoratorChildHeight": "32px"
                        }}
                    />
                </Grid>
            </Container>
        </div>
    );
};

export default TodoList;