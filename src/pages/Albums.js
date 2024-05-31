import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const Albums = ({ open, onClose, userId }) => {
    const userAlbums = useSelector((state) => state.albums);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const filteredComments = userAlbums && userAlbums.filter(album => album.userId === userId);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Albums</DialogTitle>
      <DialogContent>
        {loading ? (
          <Typography>Loading comments...</Typography>
        ) : error ? (
          <Typography>Error: {error}</Typography>
        ) : (
            filteredComments && filteredComments.map(comment => (
            <div key={comment.id}>
              <List variant="h5">{comment.title}</List>
            </div>
          ))
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Albums