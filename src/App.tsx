import React from 'react';
import Container from '@mui/material/Container';
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container maxWidth="md">
        <TodoList />
    </Container>
  );
}

export default App;