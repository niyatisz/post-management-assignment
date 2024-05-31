import { Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

const Comments = ({ open, onClose, userId }) => {

    const comments = useSelector((state) => state.comments);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const filteredComments = comments && comments.filter(comment => comment.userId === userId);


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Comments
                <IconButton onClick={onClose} sx={{ position: 'absolute', top: '8px', right: '8px' }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent>
                {loading ? (
                    <Typography>Loading comments...</Typography>
                ) : error ? (
                    <Typography>Error: {error}</Typography>
                ) : (
                    filteredComments && filteredComments.map(comment => (
                        <div key={comment.id}>
                            <Typography variant="h5">{comment.name}</Typography>
                            <Typography variant="body2">{comment.body}</Typography>
                        </div>
                    ))
                )}
            </DialogContent>
        </Dialog>
    );
}

export default Comments;