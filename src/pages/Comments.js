import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Comments = ({ open, onClose, userId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const filteredComments = comments && comments.filter(comment => comment.userId === userId);


  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Comments</DialogTitle>
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
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Comments;