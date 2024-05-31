import React from 'react'
import { Dialog, DialogContent, DialogTitle, Divider, IconButton, List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';


const Albums = ({ open, onClose, userId }) => {
    const userAlbums = useSelector((state) => state.albums);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const albums = userAlbums && userAlbums.filter(album => album.userId === userId);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Albums
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
                    albums && albums.map(album => (
                        <div key={album.id}>
                            <List variant="h5">{album.title}</List>
                        </div>
                    ))
                )}
            </DialogContent>
        </Dialog>
    )
}

export default Albums