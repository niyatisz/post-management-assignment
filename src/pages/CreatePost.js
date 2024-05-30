import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddPost, editPost } from '../redux/action/Action';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CreatePost = ({ open, onClose }) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreatePost = () => {
        dispatch(AddPost(formData.title, formData.body));
        onClose();
    };


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                ADD POST
                <IconButton onClick={onClose} sx={{ position: 'absolute', top: '8px', right: '8px' }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent>
                <form>
                    <label htmlFor='title'>Title</label>
                    <TextField fullWidth id="title" name='title' value={formData.title} onChange={handleInputChange} />
                    <label htmlFor='body'>Body</label>
                    <TextField fullWidth id="body" name='body' value={formData.body} onChange={handleInputChange} />
                    <DialogActions>
                        <Button variant="outlined" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={handleCreatePost}>
                            Ok
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreatePost;
