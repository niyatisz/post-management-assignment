import React from 'react';
import { Dialog, DialogContent, DialogTitle, Divider, IconButton, List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

const Todos = ({ open, onClose, userId }) => {
    const userTodos = useSelector((state) => state.todo);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const filteredTodos = userTodos && userTodos.filter(todo => todo.userId === userId);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Todo
                <IconButton onClick={onClose} sx={{ position: 'absolute', top: '8px', right: '8px' }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent>
                {loading ? (
                    <Typography>Loading todos...</Typography>
                ) : error ? (
                    <Typography>Error: {error}</Typography>
                ) : (
                    filteredTodos && filteredTodos.map(todo => (
                        <div key={todo.id}>
                             <List variant="h5">{todo.title}</List>
                            <Typography variant="body2" color='secondary'>{todo.completed ? 'Completed' : 'Not Completed'}</Typography>
                        </div>
                    ))
                )}
            </DialogContent>
        </Dialog>
    );
}

export default Todos;