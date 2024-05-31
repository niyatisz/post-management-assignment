import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, List, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Todos = ({ open, onClose, userId }) => {
    const userTodos = useSelector((state) => state.todo);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const filteredTodos = userTodos && userTodos.filter(todo => todo.userId === userId);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Todo</DialogTitle>
            <DialogContent>
                {loading ? (
                    <Typography>Loading todos...</Typography>
                ) : error ? (
                    <Typography>Error: {error}</Typography>
                ) : (
                    filteredTodos && filteredTodos.map(todo => (
                        <div key={todo.id}>
                            <List variant="h5">{todo.title}</List>
                            <Typography variant="body2">{todo.completed ? 'Completed' : 'Not Completed'}</Typography>
                        </div>
                    ))
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Todos;