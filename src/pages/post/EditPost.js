import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from '../../redux/action/Action';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EditPost = ({ open, onClose, post }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: post.title, body: post.body });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEditPost = () => {
    dispatch(editPost(post.id, formData.title, formData.body));
    onClose();
  };

  useEffect(() => {
    setFormData({ title: post.title, body: post.body }); 
  }, [post]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Edit POST
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
            <Button variant="outlined" color='secondary' onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained"  color='secondary' onClick={handleEditPost}>
              Ok
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPost;