// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { editPost } from '../redux/action/Action';
// import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const EditPost = ({ open, onClose }) => {
//     const dispatch = useDispatch();
//     const posts = useSelector(state => state.posts);
//     console.log('posts: ', posts);
//     const [data, setData] = useState(posts);
//     console.log('data: ', data);

//     const handleEditPost = (userId) => {
//         const user = data.find(user => user.id === userId);
//         dispatch(editPost(data.title,data.body));
//         onClose();
//     };
//     const openEditModal = (userId) => {
//         // const user = data.find(user => user.id === userId);
//         // setData(user);
//       };

//       const handleInputChange = (event, key) => {
//         const { value } = event.target;
//         setData(prevUser => ({
//             ...prevUser,
//             [key]: value
//         }));
//     };

//     return (
//         <Dialog open={open} onClose={onClose}>
//             <DialogTitle>
//                 Edit POST
//                 <IconButton onClick={onClose} sx={{ position: 'absolute', top: '8px', right: '8px' }}>
//                     <CloseIcon />
//                 </IconButton>
//             </DialogTitle>
//             <Divider />
//             <DialogContent>
//                 <form>
//                     <label htmlFor='title'>Title</label>
//                     <TextField fullWidth id="title" name='title' value={data.title} onChange={handleInputChange} />
//                     <label htmlFor='body'>Body</label>
//                     <TextField fullWidth id="body" name='body' onChange={handleInputChange} />
//                     <DialogActions>
//                         <Button variant="outlined" onClick={onClose}>
//                             Cancel
//                         </Button>
//                         <Button variant="contained" onClick={handleEditPost}>
//                             Ok
//                         </Button>
//                     </DialogActions>
//                 </form>
//             </DialogContent>
//         </Dialog>
//     );
// };

// export default EditPost;
